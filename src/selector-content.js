// Selector content script for page details element selection
// This gets bundled into selector.bundle.js

import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { SelectionEngine } from './selection/selection-engine.js';
import { ExtractionEngine } from './engine/extraction-engine.js';
import { ShadowDomUtils } from './ui/shadow-dom-utils.js';
import CssSelectorUtils from './selection/css-selector-utils.js';
import MessageUtils from './utils/message-utils.js';

// CRITICAL: Add .dot() method to String prototype for class name handling
// This is required for CursorHighlighter to work properly in selector context
if (!String.prototype.dot) {
  String.prototype.dot = function() {
    return '.' + this;
  };
}

// CRITICAL: Inject CSS for cursor overlay highlighting
// This ensures the blue rectangle highlighting works in the selector page
if (!document.querySelector('style[data-extractor-gpt-selector]')) {
  const extractionStyle = document.createElement('style');
  extractionStyle.setAttribute('data-extractor-gpt-selector', 'true');
  extractionStyle.textContent = `
    /* Cursor Overlay - Blue highlighting rectangle */
    .panda-extract-cursor-move-overlay {
      position: absolute;
      pointer-events: none;
      outline: 2px solid rgba(0, 0, 255, 0.727);
      border-radius: 4px;
      background-color: rgba(12, 136, 244, 0.4);
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
      z-index: 2147483647;
      transition: all 0.4s ease-in-out;
    }
    
    /* Collection and item highlighting */
    .panda-highlight-collection-element {
      outline: 2px solid #2196F3 !important;
      background: rgba(33, 150, 243, 0.1) !important;
      cursor: pointer !important;
    }
    
    .panda-extract-highlighted-item {
      outline: 2px solid #FF9800 !important;
      background: rgba(255, 152, 0, 0.1) !important;
      cursor: pointer !important;
    }
    
    .panda-highlight-child-element-active {
      background-color: rgba(255, 255, 0, 0.5) !important;
      border: 2px dotted rgba(255, 0, 0, 0.8) !important;
      box-shadow: 0 0 10px rgba(255, 255, 0, 0.5) !important;
    }
    
    /* Z-index layers */
    .panda-z-2 { z-index: 2147483646; }
  `;
  document.head.appendChild(extractionStyle);
}
// Simple icon components
const CircleIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const PauseIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>
);

const PlayIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

// Helper function to generate element name
function getElementName(element) {
  if (element.id) return `#${element.id}`;
  if (element.className && typeof element.className === 'string') {
    const classes = element.className.split(' ').filter(c => c && !c.startsWith('panda-'));
    if (classes.length > 0) return `.${classes[0]}`;
  }
  return element.tagName.toLowerCase();
}

// Generate unique ID
const generateUniqueId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Main selector UI component
const PageDetailsSelector = () => {
  const [selectedElements, setSelectedElements] = useState([]);
  const [extractables, setExtractables] = useState([]);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showPreview, setShowPreview] = useState(false);
  const [previewData, setPreviewData] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  
  const selectionEngineRef = useRef(null);
  
  // Handle element selection
  const handleElementClick = useCallback((data) => {
    console.log('[PageDetailsSelector] handleElementClick called with:', data);
    
    // Extract element from the data structure passed by SelectionEngine
    const element = data.data?.hoveredSelection || data.data?.element;
    
    if (!element) {
      console.warn('[PageDetailsSelector] No element found in click data:', data);
      return;
    }
    
    console.log('[PageDetailsSelector] Element selected:', element);
    
      setSelectedElements(prev => {
        // Remove parent/child duplicates
        const isParentOf = (parent, child) => {
          let current = child.parentElement;
          while (current) {
            if (current === parent) return true;
            current = current.parentElement;
          }
          return false;
        };
        
      // Filter out elements that are parents or children of the new element
        const filtered = prev
          .filter(el => !isParentOf(el, element))
          .filter(el => !isParentOf(element, el));
        
      // Add the new element
      const newSelection = [...filtered, element];
      console.log('[PageDetailsSelector] Updated selection:', newSelection);
      
      return newSelection;
      });
  }, []);
  
  // Handle element hover
  const handleElementHovered = useCallback((data) => {
    console.log('[PageDetailsSelector] handleElementHovered called');
    const { element, event } = data;
    if (element) {
      setHoveredElement(element);
      if (event) {
        setMousePosition({ x: event.clientX + 10, y: event.clientY + 10 });
      }
      
      // Extract preview data
      ExtractionEngine.findSimpleExtractableElementsAsync({ element })
        .then(results => {
          console.log('[PageDetailsSelector] Extractables found:', results);
          setExtractables(results || []);
        })
        .catch(err => {
          console.error('[PageDetailsSelector] Error finding extractables:', err);
          setExtractables([]);
        });
    }
  }, []);
  
  // Generate selectors for selected elements
  const generateSelectors = async () => {
    console.log('[PageDetailsSelector] generateSelectors called');
    console.log('[PageDetailsSelector] selectedElements:', selectedElements);
    
    if (!selectedElements || selectedElements.length === 0) {
      console.warn('[PageDetailsSelector] No elements selected for selector generation');
      return [];
    }
    
    const elements = selectedElements.filter(Boolean);
    console.log('[PageDetailsSelector] Filtered elements:', elements);
    
    if (elements.length === 0) {
      console.warn('[PageDetailsSelector] No valid elements after filtering');
      return [];
    }
    
    const result = [];
    
    for (const element of elements) {
      try {
        console.log('[PageDetailsSelector] Processing element:', element);
        
        // Get extractable data for this element
        const extractables = await ExtractionEngine.findSimpleExtractableElementsAsync({ element });
        console.log('[PageDetailsSelector] Extractables for element:', extractables);
    
        if (!extractables || extractables.length === 0) {
          console.warn('[PageDetailsSelector] No extractables found for element:', element);
          continue;
        }
        
        // Generate selectors for each extractable
        for (const extractable of extractables) {
          const targetElement = extractable.element;
          if (!targetElement || !targetElement.parentElement) {
            console.warn('[PageDetailsSelector] Invalid target element:', targetElement);
            continue;
          }
          
          console.log('[PageDetailsSelector] Generating selectors for:', targetElement);
      
      const selectors = [];
      
          // Try different selector generation methods
      try {
            // General selector
            const generalSelector = CssSelectorUtils.getGeneralizedCssSelector({ element: targetElement });
        if (generalSelector) {
          const index = CssSelectorUtils.verifySelector({
            rootView: document,
                element: targetElement,
            selector: generalSelector
          });
          if (index !== null) {
            selectors.push({
              type: 'general',
              selector: generalSelector,
              index,
              order: 3
            });
          }
        }
          } catch (e) {
            console.warn('[PageDetailsSelector] Error generating general selector:', e);
          }
      
      try {
            // Nth-type selector
            const nthTypeSelector = CssSelectorUtils.getSelectorNthType({ element: targetElement });
        if (nthTypeSelector) {
          const index = CssSelectorUtils.verifySelector({
            rootView: document,
                element: targetElement,
            selector: nthTypeSelector
          });
          if (index !== null) {
            selectors.push({
              type: 'nthType',
              selector: nthTypeSelector,
              index,
              order: 2
            });
          }
        }
          } catch (e) {
            console.warn('[PageDetailsSelector] Error generating nth-type selector:', e);
          }
      
      try {
            // Nth-child selector
            const nthChildSelector = CssSelectorUtils.getSelectorNthChild({ element: targetElement });
        if (nthChildSelector) {
          const index = CssSelectorUtils.verifySelector({
            rootView: document,
                element: targetElement,
            selector: nthChildSelector
          });
          if (index !== null) {
            selectors.push({
              type: 'nthChild',
              selector: nthChildSelector,
              index,
              order: 1
            });
          }
        }
          } catch (e) {
            console.warn('[PageDetailsSelector] Error generating nth-child selector:', e);
          }
      
          // If we have selectors, add them to the result
          if (selectors.length > 0) {
            result.push({
        elementId: generateUniqueId(),
              name: getElementName(targetElement),
              type: extractable.type,
        selectors
            });
          }
        }
      } catch (err) {
        console.error('[PageDetailsSelector] Error processing element:', element, err);
      }
    }
    
    console.log('[PageDetailsSelector] Final generated selectors:', result);
    return result;
  };
  
  // Preview selected elements
  const handlePreview = async () => {
    console.log('[PageDetailsSelector] handlePreview called');
    
    if (selectedElements.length === 0) {
      console.warn('[PageDetailsSelector] No elements selected for preview');
      return;
    }
    
    try {
    const data = await Promise.all(
      selectedElements.map(async element => {
        const extractables = await ExtractionEngine.findSimpleExtractableElementsAsync({ element });
        return { element, extractables };
      })
    );
      
      console.log('[PageDetailsSelector] Preview data:', data);
    setPreviewData(data);
    setShowPreview(true);
    } catch (err) {
      console.error('[PageDetailsSelector] Error generating preview:', err);
    }
  };
  
  // Complete selection
  const handleComplete = async () => {
    console.log('[PageDetailsSelector] handleComplete called');
    console.log('[PageDetailsSelector] selectedElements length:', selectedElements.length);
    
    if (selectedElements.length === 0) {
      console.warn('[PageDetailsSelector] No elements selected');
      alert('Please select at least one element before completing the selection.');
      return;
    }
    
    try {
    const selectors = await generateSelectors();
    console.log('[PageDetailsSelector] Generated selectors:', selectors);
    
    if (selectors.length === 0) {
      console.warn('[PageDetailsSelector] No selectors generated');
        alert('Could not generate selectors for the selected elements. Please try selecting different elements.');
      return;
    }
    
    // Send to background
    console.log('[PageDetailsSelector] Sending selectors to background');
      
      const response = await MessageUtils.sendMessageToBackground({
        action: 'page-details-selected',
        data: { selectors }
      });
      
      console.log('[PageDetailsSelector] Background response:', response);
      
      if (response && response.success) {
        console.log('[PageDetailsSelector] Selection completed successfully');
        // Close the selector window
        window.close();
      } else {
        console.error('[PageDetailsSelector] Background rejected selection:', response);
        alert('Failed to complete selection. Please try again.');
      }
    } catch (err) {
      console.error('[PageDetailsSelector] Failed to send selectors:', err);
      alert('Error completing selection. Please try again.');
    }
  };
  
  // Initialize selection engine
  useEffect(() => {
    console.log('[PageDetailsSelector] Initializing selection engine');
    
    // Add cursor style to body for page-details selection mode
    document.body.classList.add('panda-page-details-selection-mode');
    
    selectionEngineRef.current = new SelectionEngine({
      config: {},
      onElementClick: handleElementClick,
      onListSelected: () => {},
      onPause: () => {},
      onResume: () => {},
      onModeChanged: () => {},
      onElementHovered: handleElementHovered
    });
    
    selectionEngineRef.current.attach();
    selectionEngineRef.current.startPageDetailsSelectMode();
    
    return () => {
      console.log('[PageDetailsSelector] Cleaning up selection engine');
      // Remove cursor style from body
      document.body.classList.remove('panda-page-details-selection-mode');
      
      if (selectionEngineRef.current) {
      selectionEngineRef.current.detach();
      }
    };
  }, [handleElementClick, handleElementHovered]);
  
  // Highlight selected elements
  useEffect(() => {
    // Remove old highlights
    document.querySelectorAll('.panda-highlight-child-element-active').forEach(el => {
      el.classList.remove('panda-highlight-child-element-active');
    });
    
    // Add new highlights
    selectedElements.forEach(el => {
      if (el) el.classList.add('panda-highlight-child-element-active');
    });
  }, [selectedElements]);
  
  return (
    <>
      {/* Main UI Panel */}
      <div className="fixed top-4 right-4 z-[999999999]">
        <div className="bg-zinc-900/95 backdrop-blur-lg shadow-2xl rounded-xl p-3 text-white w-[260px] border border-white/10 ring-1 ring-white/5 animate-fade-in">
          {/* Header */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="relative flex items-center justify-center w-7 h-7 bg-orange-500/10 rounded-full">
              <CircleIcon className="text-orange-400 h-2 w-2 z-10" />
              <div className="absolute inset-0 rounded-full animate-ping-slow">
                <CircleIcon className="text-orange-400/30 h-2 w-2" />
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium text-white/90">Element Selector</span>
              <span className="text-xs text-white/60">
                {selectedElements.length} {selectedElements.length === 1 ? 'element' : 'elements'} selected
              </span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2 mb-3">
            <button
              onClick={handlePreview}
              className="flex-1 px-3 py-2 bg-gradient-to-b from-zinc-700/80 to-zinc-800/80 hover:from-zinc-600/80 hover:to-zinc-700/80 text-xs font-medium rounded-lg transition-all duration-200 border border-white/5"
            >
              Preview
            </button>
            <button
              onClick={() => {
                if (isPaused) {
                  selectionEngineRef.current.resume();
                } else {
                  selectionEngineRef.current.pause();
                }
                setIsPaused(!isPaused);
              }}
              className={`flex-1 px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 border flex items-center justify-center gap-1.5 ${
                isPaused 
                  ? 'bg-gradient-to-b from-emerald-500/90 to-emerald-600/90 hover:from-emerald-400/90 hover:to-emerald-500/90 border-emerald-400/30'
                  : 'bg-gradient-to-b from-amber-500/90 to-amber-600/90 hover:from-amber-400/90 hover:to-amber-500/90 border-amber-400/30'
              }`}
            >
              {isPaused ? <PlayIcon className="h-3 w-3" /> : <PauseIcon className="h-3 w-3" />}
              {isPaused ? 'Resume' : 'Pause'}
            </button>
          </div>
          
          {/* Keyboard Shortcuts */}
          <div className="space-y-1.5 mb-3 bg-zinc-800/50 rounded-lg p-2 border border-white/5">
            <div className="flex items-center justify-between text-xs p-1 rounded-md hover:bg-zinc-700/30">
              <div className="flex gap-1">
                <kbd className="px-2 py-0.5 bg-black/40 rounded text-sm font-medium border border-white/10">↑</kbd>
                <kbd className="px-2 py-0.5 bg-black/40 rounded text-sm font-medium border border-white/10">↓</kbd>
              </div>
              <span className="text-sm text-white/70">Adjust selection</span>
            </div>
            <div className="flex items-center justify-between text-xs p-1 rounded-md hover:bg-zinc-700/30">
              <kbd className="px-2 py-0.5 bg-black/40 rounded text-sm font-medium border border-white/10">Click</kbd>
              <span className="text-sm text-white/70">Select element</span>
            </div>
          </div>
          
          {/* Complete Button */}
          <button
            onClick={handleComplete}
            className="w-full px-3 py-2.5 bg-gradient-to-b from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-xs font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/20 border border-indigo-400/30"
          >
            Complete Selection
          </button>
        </div>
      </div>
      
      {/* Hover Tooltip */}
      {hoveredElement && (
        <div 
          className="fixed bg-zinc-900/95 backdrop-blur-md text-white px-2 py-1.5 rounded-lg shadow-xl text-xs pointer-events-none panda-z-9 transition-all duration-200 ease-in-out border border-white/5"
          style={{
            top: `${mousePosition.y}px`,
            left: `${mousePosition.x}px`,
            opacity: hoveredElement ? 1 : 0,
            transform: `scale(${hoveredElement ? 1 : 0.95})`
          }}
        >
          {extractables.map((item, index) => (
            <p key={index} className="flex items-center gap-2 whitespace-nowrap">
              <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-400 rounded-md text-[10px] font-medium">
                {item.type}
              </span>
              <span className="text-zinc-300">
                {item.data?.slice(0, 50)}{item.data?.length > 50 ? '...' : ''}
              </span>
            </p>
          ))}
        </div>
      )}
      
      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999999999] p-4">
          <div className="bg-zinc-900/95 rounded-xl p-4 max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col shadow-2xl border border-white/5">
            <div className="flex justify-between items-center pb-3 border-b border-zinc-800/50">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium text-white">Preview Data</h3>
                <span className="px-1.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400 text-xs">
                  {previewData.length}
                </span>
              </div>
              <button
                onClick={() => setShowPreview(false)}
                className="h-6 w-6 flex items-center justify-center rounded-md hover:bg-zinc-800 text-zinc-400"
              >
                ×
              </button>
            </div>
            
            <div className="overflow-y-auto flex-1 pr-2">
              <div className="space-y-2 py-3">
                {previewData.map((item, index) => (
                  <div key={index} className="bg-zinc-800/30 rounded-lg overflow-hidden">
                    <div className="p-2 space-y-1.5">
                      {item.extractables.map((extractable, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs p-1.5 rounded-md hover:bg-zinc-800/50">
                          <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 font-medium">
                            {extractable.type}
                          </span>
                          <span className="text-zinc-300 break-all">
                            {extractable.data}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-3 border-t border-zinc-800/50">
              <button
                onClick={() => setShowPreview(false)}
                className="w-full px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-md transition-colors text-xs font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Styles */}
      <style>{`
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

// Initialize the selector UI
(() => {
  // Add string prototype extensions
  String.prototype.dot = function() {
    return `.${this}`;
  };
  
  // Add array conversion for collections
  HTMLCollection.prototype.toArray = function() {
    return Array.from(this);
  };
  
  NodeList.prototype.toArray = function() {
    return Array.from(this);
  };
  
  // Create shadow DOM
  const shadowRoot = ShadowDomUtils.getShadowRoot();
  const appContainer = document.createElement('div');
  appContainer.id = 'app-container';
  shadowRoot.appendChild(appContainer);
  
  // Render React app
  const root = ReactDOM.createRoot(appContainer);
  root.render(<PageDetailsSelector />);
})(); 