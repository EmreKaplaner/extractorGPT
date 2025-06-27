import React, { useState, useEffect } from 'react';
import ExtractListTab from '../tabs/ExtractListTab.js';
import ExtractDetailsTab from '../tabs/ExtractDetailsTab.js';
import ExtractEmailsTab from '../tabs/ExtractEmailsTab.js';
import ExtractImagesTab from '../tabs/ExtractImagesTab.js';
import HelpTab from '../tabs/HelpTab.js';
import Toolbar from '../Toolbar.js';

/**
 * ExtractorGPTPanel - Main UI panel exactly like WebPeeler
 * Now with separate toolbar component above the main panel
 */
const ExtractorGPTPanel = ({ isOpen, onClose, extractedData, showResults }) => {
  const [activeTab, setActiveTab] = useState('list');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isPro, setIsPro] = useState(true);
  const [highlightEnabled, setHighlightEnabled] = useState(false);

  if (!isOpen) return null;

  const tabs = [
    { id: 'list', label: 'Extract List', icon: '📋' },
    { id: 'details', label: 'Extract Details', icon: '📄' },
    { id: 'emails', label: 'Extract Emails', icon: '📧' },
    { id: 'images', label: 'Download Images', icon: '🖼️' },
    { id: 'help', label: 'Help', icon: '❓' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'list':
        return <ExtractListTab 
          extractedData={extractedData} 
          showResults={showResults} 
          isPro={isPro}
          highlightEnabled={highlightEnabled}
        />;
      case 'details':
        return <ExtractDetailsTab isPro={isPro} />;
      case 'emails':
        return <ExtractEmailsTab isPro={isPro} />;
      case 'images':
        return <ExtractImagesTab isPro={isPro} />;
      case 'help':
        return <HelpTab isPro={isPro} onProToggle={setIsPro} />;
      default:
        return null;
    }
  };

  const handleHighlightClick = () => {
    if (window.__extractorGPT && window.__extractorGPT.selectionEngine) {
      if (!highlightEnabled) {
        // Enable selection mode
        window.__extractorGPT.selectionEngine.attach();
        window.__extractorGPT.selectionEngine.startSelectionListMode();
        setHighlightEnabled(true);
      } else {
        // Disable selection mode
        window.__extractorGPT.selectionEngine.stopSelectionListMode();
        window.__extractorGPT.selectionEngine.detach();
        setHighlightEnabled(false);
      }
    }
  };

  const handleStatusBubbleClick = () => {
    const newCollapsed = !isCollapsed;
    setIsCollapsed(newCollapsed);
  };

  return (
    <>
      {/* Backdrop overlay - only show when panel is expanded */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm panda-z-9"
          onClick={onClose}
        />
      )}
      
      {/* Main container - matches WebPeeler's structure */}
      <div className={`panda-extract panda-z-10 flex flex-col items-end fixed top-4 right-4 transition-all duration-300 ease-in-out font-sans text-left ${
        !isCollapsed ? 'gap-4' : 'gap-0'
      }`}>
        
        {/* Toolbar - Always visible */}
        <Toolbar
          tab={activeTab}
          setTab={setActiveTab}
          highlightEnabled={highlightEnabled}
          onHighlightClicked={handleHighlightClick}
          onCloseClicked={onClose}
          isContainerCollapsed={isCollapsed}
          onStatusBubbleClick={handleStatusBubbleClick}
        />
        
        {/* Main panel content - Collapsible */}
        <div className={`transition-all duration-300 ease-in-out transform origin-top-right ${
          isCollapsed ? 'h-0 scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
        }`}
        style={{ marginTop: isCollapsed ? '0' : '1rem' }}>
          <div className="bg-zinc-900/95 backdrop-blur-lg shadow-2xl rounded-xl text-white border border-white/10 ring-1 ring-white/5 animate-fade-in">
            {/* Tab Navigation */}
            <div className="flex border-b border-white/10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
                    activeTab === tab.id
                      ? 'text-purple-400 border-purple-400 bg-purple-500/10'
                      : 'text-zinc-400 border-transparent hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>{tab.icon}</span>
                    <span className="hidden sm:inline">{tab.label}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-4" style={{ width: '500px', maxHeight: '600px', overflowY: 'auto' }}>
              {renderTabContent()}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/10 bg-zinc-800/50">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>Need help? <a href="#" className="text-purple-400 hover:text-purple-300">Join Discord</a></span>
                <span>v1.0.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtractorGPTPanel; 