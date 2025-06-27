// Main content script with React UI
// This gets bundled into main.bundle.js

// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import UI utilities
import ShadowDomUtils from './ui/shadow-dom-utils.js';
import TailwindCSS from './ui/styles/tailwind-css.js';

// Import main panel component
import WebPeelerPanel from './ui/components/panels/WebPeelerPanel.js';

// Import engines
import SelectionEngine from './selection/selection-engine.js';
import { ExtractionEngine } from './engine/extraction-engine.js';
import automationHandler from './engine/automation-handler.js';
import TaskRunner from './engine/task-runner.js';

// Import data management
import ResultsTable from './data-management/results-table.js';

// Import state providers
import { GlobalStateProvider } from './state-management/global-state-provider.js';
import { ExtractStateProvider } from './state-management/extract-state-provider.js';
import { UserStateProvider } from './state-management/user-state-provider.js';

// Import constants
import { TabTypes } from './constants/index.js';

// Main initialization - no IIFE wrapper, let esbuild handle it
'use strict';

console.log('[EXTRACTOR-GPT] Content script starting to load...');
console.log('[EXTRACTOR-GPT] Current URL:', window.location.href);
console.log('[EXTRACTOR-GPT] Document ready state:', document.readyState);

// Guard against multiple executions
if (window.__extractorGPT && window.__extractorGPT.scriptLoaded) {
  console.log('[EXTRACTOR-GPT] Script already loaded, skipping...');
  // Still need to set up message listener for subsequent loads
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('[CONTENT] Received message (from guard):', message);
    
    if (message.action === 'ping') {
      sendResponse({ status: 'pong' });
      return false;
    }
    
    if (message.action === 'open') {
      // Just show the UI if already initialized
      if (window.__extractorGPT && window.__extractorGPT.isInitialized) {
        window.dispatchEvent(new CustomEvent('extractorGPT:show'));
        sendResponse({ status: 'shown' });
      } else {
        sendResponse({ status: 'not_initialized' });
      }
      return false;
    }
    
    return true;
  });
} else {
  // Mark script as loaded
  if (!window.__extractorGPT) {
    window.__extractorGPT = {};
  }
  window.__extractorGPT.scriptLoaded = true;

  // Main App Component with State Providers
  function ExtractorApp(props) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [extractedData, setExtractedData] = React.useState([]);
    const [showResults, setShowResults] = React.useState(false);
    
    React.useEffect(() => {
      // Listen for show/hide events
      const handleShow = () => {
        console.log('[EXTRACTOR-GPT] Show event received');
        setIsOpen(true);
      };
      
      const handleHide = () => {
        console.log('[EXTRACTOR-GPT] Hide event received');
        setIsOpen(false);
      };
      
      // Listen for data updates
      const handleDataUpdate = (event) => {
        console.log('[EXTRACTOR-GPT] Data update received:', event.detail);
        if (event.detail && event.detail.results) {
          setExtractedData(event.detail.results);
          setShowResults(true);
        }
      };
      
      window.addEventListener('extractorGPT:show', handleShow);
      window.addEventListener('extractorGPT:hide', handleHide);
      window.addEventListener('extractorGPT:dataUpdated', handleDataUpdate);
      
      return () => {
        window.removeEventListener('extractorGPT:show', handleShow);
        window.removeEventListener('extractorGPT:hide', handleHide);
        window.removeEventListener('extractorGPT:dataUpdated', handleDataUpdate);
      };
    }, []);
    
    const handleClose = () => {
      console.log('[EXTRACTOR-GPT] Close button clicked');
      setIsOpen(false);
      
      // Deactivate selection engine if active
      if (props.selectionEngine && props.selectionEngine.isActive) {
        props.selectionEngine.detach();
        props.selectionEngine.removeAllHighlights();
        props.selectionEngine.isActive = false;
        console.log('[EXTRACTOR-GPT] Selection engine deactivated');
      }
      
      // Notify that UI is hidden
      window.dispatchEvent(new CustomEvent('extractorGPT:hide'));
    };
    
    return (
      <GlobalStateProvider>
        <ExtractStateProvider>
          <UserStateProvider>
            <WebPeelerPanel 
              isOpen={isOpen} 
              onClose={handleClose}
              extractedData={extractedData}
              showResults={showResults}
            />
          </UserStateProvider>
        </ExtractStateProvider>
      </GlobalStateProvider>
    );
  }

  function attachSelectionEngine(selectionEngine) {
    if (!window.extensionContext) {
      window.extensionContext = {};
    }
    
    // Make selection engine available to React components
    window.extensionContext.selectionEngine = selectionEngine;
  }

  // Initialize the extension
  try {
    console.log('[EXTRACTOR-GPT] Initializing with React UI...');
    
    // Add error handler for uncaught errors
    window.addEventListener('error', (e) => {
      if (e.error?.message?.includes('Extension context invalidated')) {
        console.warn('[EXTRACTOR-GPT] Extension context invalidated - this is expected during development');
        e.preventDefault();
      } else {
        console.error('[EXTRACTOR-GPT] Uncaught error:', e.error);
        console.error('[EXTRACTOR-GPT] Error stack:', e.error?.stack);
      }
    });
    
    window.addEventListener('unhandledrejection', (e) => {
      if (e.reason?.message?.includes('Extension context invalidated') || 
          e.reason?.toString()?.includes('Extension context invalidated')) {
        console.warn('[EXTRACTOR-GPT] Unhandled promise rejection: Extension context invalidated');
        e.preventDefault();
      } else {
        console.error('[EXTRACTOR-GPT] Unhandled promise rejection:', e.reason);
      }
    });
    
    // Global state
    window.__extractorGPT = {
      ...window.__extractorGPT,
      isInitialized: false,
      isActive: false,
      shadowRoot: null,
      reactRoot: null,
      selectionEngine: null,
      extractionEngine: null,
      cursorHighlighter: null,
      collectionHighlighter: null,
      resultsTable: null,
      taskRunner: null,
      automationHandler: null
    };
    
    function handleElementSelection(data) {
      const { element, viewType } = data.data;
      
      // Extract data from element
      const extractedData = window.__extractorGPT.extractionEngine.extractAllData(element);
      
      // Structure data properly for ResultsTable
      // insertExtractablesFromList expects an array of groups, where each group is an array of items
      const extractables = [[{
        element: element,
        type: extractedData.text ? 'text' : extractedData.linkUrl ? 'link-url' : extractedData.imageUrl ? 'image-url' : 'text',
        data: extractedData.text || extractedData.linkUrl || extractedData.imageUrl || ''
      }]];
      
      // Add to results table
      window.__extractorGPT.resultsTable.insertExtractablesFromList({
        parent: element.parentElement,
        extractables: extractables
      });
      
      // Update React state
      window.dispatchEvent(new CustomEvent('extractorGPT:dataUpdated', {
        detail: {
          results: window.__extractorGPT.resultsTable.rows,
          headers: window.__extractorGPT.resultsTable.headers
        }
      }));
    }
    
    function handleListSelection(data) {
      console.log('[EXTRACTOR-GPT] handleListSelection called with data:', data);
      const { element, parent } = data;
      
      // Store the collection parent for automation
      window.__extractorGPT.lastSelectedCollectionParent = parent;
      console.log('[EXTRACTOR-GPT] Stored collection parent for automation');
      
      // Get all children from the parent (the collection)
      const children = Array.from(parent.children);
      console.log('[EXTRACTOR-GPT] Found', children.length, 'children in parent');
      
      // Find extractable elements from all children
      const result = window.__extractorGPT.extractionEngine.findExtractableElements({
        elements: children, // Pass all children, not just the clicked element
        depth: 1,
        settings: {
          extractImages: true,
          extractAriaLabel: false
        }
      });
      
      console.log('[EXTRACTOR-GPT] findExtractableElements result:', result);
      
      // Extract the extractableElements from the result
      const extractables = result.extractableElements || [];
      
      console.log('[EXTRACTOR-GPT] Extractables:', extractables);
      
      // Add to results table
      window.__extractorGPT.resultsTable.insertExtractablesFromList({
        parent: parent,
        extractables: extractables
      });
      
      console.log('[EXTRACTOR-GPT] Results table rows:', window.__extractorGPT.resultsTable.rows);
      console.log('[EXTRACTOR-GPT] Results table headers:', window.__extractorGPT.resultsTable.headers);
      
      // Format the data for display - convert rows to the format expected by ResultsPanel
      const formattedData = window.__extractorGPT.resultsTable.rows.map((row, index) => {
        // Create a display object with all the row data
        const displayRow = {
          index: index + 1,
          ...row
        };
        
        // Add imageUrl if it's an image type
        if (row.type === 'image-url' && row.data) {
          displayRow.imageUrl = row.data;
        }
        
        return displayRow;
      });
      
      console.log('[EXTRACTOR-GPT] Formatted data for display:', formattedData);
      
      // Update React state with formatted data
      window.dispatchEvent(new CustomEvent('extractorGPT:dataUpdated', {
        detail: {
          results: formattedData,
          headers: window.__extractorGPT.resultsTable.headers
        }
      }));
      
      console.log('[EXTRACTOR-GPT] Data update event dispatched');
      
      // Disable selection mode and remove highlights after successful extraction
      if (window.__extractorGPT.selectionEngine) {
        console.log('[EXTRACTOR-GPT] Disabling selection mode after list extraction');
        window.__extractorGPT.selectionEngine.stopSelectionListMode();
        window.__extractorGPT.selectionEngine.removeAllHighlights();
        window.__extractorGPT.selectionEngine.detach();
        window.__extractorGPT.selectionEngine.isActive = false;
      }
      
      // Dispatch event to update UI state
      window.dispatchEvent(new CustomEvent('extractorGPT:selectionDisabled'));
    }
    
    function initialize() {
      try {
        if (window.__extractorGPT.isInitialized) {
          console.log('[EXTRACTOR-GPT] Already initialized');
          return;
        }
        
        // Check if shadow DOM already exists
        const existingShadow = document.getElementById('shadow-container-panda-extract');
        if (existingShadow) {
          console.log('[EXTRACTOR-GPT] Shadow DOM already exists, skipping initialization');
          return;
        }
        
        console.log('[EXTRACTOR-GPT] Step 0: Injecting extraction CSS into main page...');
        // Check if extraction CSS already exists
        const existingStyle = document.querySelector('style[data-extractor-gpt]');
        if (!existingStyle) {
          // Inject extraction CSS into the main page for highlighters
          const extractionStyle = document.createElement('style');
          extractionStyle.setAttribute('data-extractor-gpt', 'true');
          extractionStyle.textContent = `
            /* Highlighter overlays */
            .panda-extract-cursor-move-overlay {
              position: absolute;
              pointer-events: none;
              border: 2px solid #4CAF50;
              background: rgba(76, 175, 80, 0.1);
              z-index: 900000002;
              transition: all 0.2s ease;
            }
            
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
            
            /* Z-index layers */
            .panda-z-2 { z-index: 900000002; }
          `;
          document.head.appendChild(extractionStyle);
        }
        
        console.log('[EXTRACTOR-GPT] Step 1: Creating shadow DOM...');
        // Create shadow DOM container but DON'T attach to body yet
        const shadowContainer = ShadowDomUtils.build({
          id: 'shadow-container-panda-extract',
          styles: TailwindCSS
        });
        console.log('[EXTRACTOR-GPT] Shadow DOM created:', shadowContainer);
        console.log('[EXTRACTOR-GPT] Shadow root:', shadowContainer.shadowRoot);
        
        // CRITICAL: Store the shadow root BEFORE attaching to body
        window.__extractorGPT.shadowRoot = shadowContainer.shadowRoot;
        
        // NOW attach to body
        document.body.appendChild(shadowContainer);
        console.log('[EXTRACTOR-GPT] Shadow container attached to body');
        
        console.log('[EXTRACTOR-GPT] Step 2: Creating React mount point...');
        // Create React mount point
        const appContainer = document.createElement('div');
        appContainer.id = 'app-container';
        window.__extractorGPT.shadowRoot.appendChild(appContainer);
        console.log('[EXTRACTOR-GPT] App container created and added to shadow root');
        
        console.log('[EXTRACTOR-GPT] Step 3: Initializing React...');
        // Initialize React
        window.__extractorGPT.reactRoot = ReactDOM.createRoot(appContainer);
        console.log('[EXTRACTOR-GPT] React root created:', window.__extractorGPT.reactRoot);
        
        // Render the app
        window.__extractorGPT.reactRoot.render(React.createElement(ExtractorApp));
        console.log('[EXTRACTOR-GPT] React app rendered');
        
        console.log('[EXTRACTOR-GPT] Step 4: Setting up extraction engine...');
        // Initialize engines
        // ExtractionEngine has static methods, don't instantiate it
        window.__extractorGPT.extractionEngine = ExtractionEngine;
        
        console.log('[EXTRACTOR-GPT] Step 5: Initializing selection engine...');
        // Initialize selection engine with proper configuration
        window.__extractorGPT.selectionEngine = new SelectionEngine({
          onElementClick: (data) => {
            console.log('[EXTRACTOR-GPT] Element clicked:', data);
            handleElementSelection(data);
          },
          onListSelected: (data) => {
            console.log('[EXTRACTOR-GPT] List selected:', data);
            handleListSelection(data);
          },
          onPause: () => {
            console.log('[EXTRACTOR-GPT] Selection paused');
          },
          onResume: () => {
            console.log('[EXTRACTOR-GPT] Selection resumed');
          },
          onModeChanged: (mode) => {
            console.log('[EXTRACTOR-GPT] Selection mode changed:', mode);
            window.dispatchEvent(new CustomEvent('extractorGPT:modeChanged', { detail: mode }));
          },
          onElementHovered: (element) => {
            // Optional: handle element hover
          },
          config: {
            ignoreViewsWithClass: ["panda-extract"]
          }
        });
        
        console.log('[EXTRACTOR-GPT] Step 6: Setting up data management...');
        // Don't create separate highlighters - SelectionEngine creates its own internally
        window.__extractorGPT.cursorHighlighter = window.__extractorGPT.selectionEngine.cursorHighlighter;
        window.__extractorGPT.collectionHighlighter = window.__extractorGPT.selectionEngine.collectionHighlighter;
        window.__extractorGPT.resultsTable = new ResultsTable();
        // TaskRunner is already an instance, not a class
        window.__extractorGPT.taskRunner = TaskRunner;
        // Initialize automation handler
        window.__extractorGPT.automationHandler = automationHandler;
        
        window.__extractorGPT.isInitialized = true;
        console.log('[EXTRACTOR-GPT] Initialization complete');
      } catch (error) {
        console.error('[EXTRACTOR-GPT] Error in initialize():', error);
        console.error('[EXTRACTOR-GPT] Stack trace:', error.stack);
        throw error;
      }
    }
    
    function activate() {
      console.log('🚀 ExtractorGPT: Activating...');
      
      if (window.__extractorGPT.isInitialized) {
        console.log('⚠️ ExtractorGPT: Already activated, showing UI...');
        window.dispatchEvent(new CustomEvent('extractorGPT:show'));
        return;
      }
      
      try {
        // Inject extraction CSS into main page for highlighters
        const existingStyle = document.querySelector('style[data-extractor-gpt]');
        if (!existingStyle) {
          const extractionStyle = document.createElement('style');
          extractionStyle.setAttribute('data-extractor-gpt', 'true');
          extractionStyle.textContent = `
            /* Highlighter overlays */
            .panda-extract-cursor-move-overlay {
              position: absolute;
              pointer-events: none;
              border: 2px solid #4CAF50;
              background: rgba(76, 175, 80, 0.1);
              z-index: 900000002;
              transition: all 0.2s ease;
            }
            
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
            
            /* Z-index layers */
            .panda-z-2 { z-index: 900000002; }
          `;
          document.head.appendChild(extractionStyle);
        }
        
        // Initialize shadow DOM first
        const shadowContainer = ShadowDomUtils.build({
          id: 'shadow-container-panda-extract',
          styles: TailwindCSS
        });
        
        if (!shadowContainer) {
          console.error('❌ ExtractorGPT: Failed to create shadow container');
          return;
        }
        
        // Attach to body BEFORE creating React app
        document.body.appendChild(shadowContainer);
        
        // Create React root in shadow DOM
        const shadowRoot = shadowContainer.shadowRoot;
        const appContainer = document.createElement('div');
        appContainer.id = 'extractor-app-root';
        shadowRoot.appendChild(appContainer);
        
        // Initialize extraction engine (static class)
        window.__extractorGPT.extractionEngine = ExtractionEngine;
        
        // Initialize results table
        window.__extractorGPT.resultsTable = new ResultsTable();
        
        // Initialize selection engine but don't attach yet
        window.__extractorGPT.selectionEngine = new SelectionEngine({
          shadowRoot: shadowRoot,
          onElementClick: handleElementSelection,
          onListSelected: handleListSelection,
          onPause: () => {
            console.log('[EXTRACTOR-GPT] Selection paused');
          },
          onResume: () => {
            console.log('[EXTRACTOR-GPT] Selection resumed');
          },
          onModeChanged: (mode) => {
            console.log('[EXTRACTOR-GPT] Selection mode changed:', mode);
            window.dispatchEvent(new CustomEvent('extractorGPT:modeChanged', { detail: mode }));
          },
          onElementHovered: (element) => {
            // Optional: handle element hover
          },
          config: {
            ignoreViewsWithClass: ["panda-extract"]
          }
        });
        
        // Initialize automation handler
        window.__extractorGPT.automationHandler = automationHandler;
        
        // Make selection engine available globally
        attachSelectionEngine(window.__extractorGPT.selectionEngine);
        
        // Create React app
        const root = ReactDOM.createRoot(appContainer);
        root.render(
          React.createElement(ExtractorApp, {
            selectionEngine: window.__extractorGPT.selectionEngine
          })
        );
        
        window.__extractorGPT.isInitialized = true;
        window.__extractorGPT.isActive = true;
        console.log('✅ ExtractorGPT: Activation complete!');
        
        // Show the UI
        window.dispatchEvent(new CustomEvent('extractorGPT:show'));
        
      } catch (error) {
        console.error('❌ ExtractorGPT: Activation failed:', error);
        console.error('Stack trace:', error.stack);
      }
    }
    
    function deactivate() {
      window.__extractorGPT.isActive = false;
      window.__extractorGPT.selectionEngine.detach();
      window.__extractorGPT.selectionEngine.removeAllHighlights();
      
      // Hide UI by dispatching event to React
      window.dispatchEvent(new CustomEvent('extractorGPT:hide'));
      
      console.log('[EXTRACTOR-GPT] Deactivated');
    }
    
    // Listen for messages from background/popup
    console.log('[EXTRACTOR-GPT] Setting up message listener...');
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      console.log('[CONTENT] Received message:', message);
      
      if (message.action === 'ping') {
        sendResponse({ status: 'pong' });
        return false;
      }
      
      // Handle page details highlight mode
      if (message.action === 'page-details-highlight') {
        console.log('[CONTENT] Starting page details selection mode');
        
        // Initialize if needed
        if (!window.__extractorGPT.isInitialized) {
          initialize();
        }
        
        // Activate selection engine if not active
        if (!window.__extractorGPT.isActive) {
          window.__extractorGPT.isActive = true;
          window.__extractorGPT.selectionEngine.attach();
        }
        
        // Start page details selection mode
        window.__extractorGPT.selectionEngine.startPageDetailsSelectMode();
        
        // Set up element click handler for page details
        window.__extractorGPT.selectionEngine.onElementClick = (data) => {
          console.log('[CONTENT] Page details element selected:', data);
          
          // Send selected element back to background
          chrome.runtime.sendMessage({
            action: 'page-details-selected',
            element: {
              selector: data.selector,
              text: data.text,
              type: data.type,
              tagName: data.element?.tagName,
              attributes: data.attributes
            }
          });
        };
        
        sendResponse({ success: true });
        return false;
      }
      
      // Handle page details selection complete
      if (message.action === 'page-details-selected-complete') {
        console.log('[CONTENT] Page details selection completed');
        
        // Stop selection mode
        if (window.__extractorGPT.selectionEngine) {
          window.__extractorGPT.selectionEngine.stopPageDetailsSelectMode();
        }
        
        sendResponse({ success: true });
        return false;
      }
      
      // Existing message handlers...
      if (message.action === 'open') {
        activate();
        sendResponse({ status: 'activated' });
      } else if (message.action === 'close') {
        deactivate();
        sendResponse({ status: 'deactivated' });
      } else if (message.action === 'extract-page') {
        // Handle full page extraction
        const elements = window.__extractorGPT.extractionEngine.findSimpleExtractableElements();
        const extractables = elements.map(el => ({
          element: el,
          data: window.__extractorGPT.extractionEngine.extractAllData(el)
        }));
        
        window.__extractorGPT.resultsTable.insertExtractablesFromList(extractables);
        
        // Update React state
        window.dispatchEvent(new CustomEvent('extractorGPT:dataUpdated', {
          detail: {
            results: window.__extractorGPT.resultsTable.rows,
            headers: window.__extractorGPT.resultsTable.headers
          }
        }));
        
        sendResponse({ status: 'extracted', count: extractables.length });
      }
      
      return true;
    });
    
    console.log('[EXTRACTOR-GPT] Content script loaded and message listener ready');
    
  } catch (error) {
    console.error('[EXTRACTOR-GPT] Error initializing with React UI:', error);
    console.error('[EXTRACTOR-GPT] Error stack:', error.stack);
    
    // Set up a basic message listener even if initialization fails
    console.log('[EXTRACTOR-GPT] Setting up fallback message listener...');
    try {
      chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        console.log('[EXTRACTOR-GPT] Fallback listener received message:', request);
        if (request.action === 'ping') {
          sendResponse({ status: 'pong' });
        } else if (request.action === 'open') {
          sendResponse({ status: 'error', error: 'Initialization failed' });
        }
        return true;
      });
      console.log('[EXTRACTOR-GPT] Fallback message listener set up');
    } catch (fallbackError) {
      console.error('[EXTRACTOR-GPT] Even fallback listener failed:', fallbackError);
    }
  }
} 