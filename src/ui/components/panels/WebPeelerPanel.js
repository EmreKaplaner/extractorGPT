import React, { useState, useEffect, useRef } from 'react';
import ExtractListTab from '../tabs/ExtractListTab.js';
import ExtractDetailsTab from '../tabs/ExtractDetailsTab.js';
import ExtractEmailsTab from '../tabs/ExtractEmailsTab.js';
import ExtractImagesTab from '../tabs/ExtractImagesTab.js';
import HelpTab from '../tabs/HelpTab.js';
import SettingsTab from '../tabs/SettingsTab.js';
import { TabTypes } from '../../../constants';

// Tab constants
const TABS = {
  RUN: 'RUN',
  PAGE_DETAILS: 'PAGE_DETAILS', 
  EXTRACT_EMAILS: 'EXTRACT_EMAILS',
  DOWNLOAD_IMAGES: 'DOWNLOAD_IMAGES',
  SETTINGS: 'SETTINGS',
  HELP: 'HELP'
};

// Import the selection engine
const getSelectionEngine = () => {
  // Check the correct location where selection engine is stored
  if (window.__extractorGPT && window.__extractorGPT.selectionEngine) {
    return window.__extractorGPT.selectionEngine;
  }
  // Fallback to old location
  if (window.extensionContext && window.extensionContext.selectionEngine) {
    return window.extensionContext.selectionEngine;
  }
  return null;
};

// Icon components
const MousePointer2Icon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" 
    />
  </svg>
);

const FileTextIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
    />
  </svg>
);

const MailIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
    />
  </svg>
);

const ImageIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
    />
  </svg>
);

const SettingsIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const XIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

/**
 * WebPeelerPanel - Updated to match WebPeeler's minimal design
 */
const WebPeelerPanel = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState(TabTypes.RUN);
  const [highlightEnabled, setHighlightEnabled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isPro, setIsPro] = useState(true);
  const [extractedData, setExtractedData] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Listen for data updates
    const handleDataUpdate = (event) => {
      console.log('[WebPeelerPanel] Data update event received:', event);
      console.log('[WebPeelerPanel] Event detail:', event.detail);
      
      if (event.detail && event.detail.results) {
        console.log('[WebPeelerPanel] Setting extracted data:', event.detail.results);
        setExtractedData(event.detail.results);
        setShowResults(true);
        // Ensure panel is expanded when data arrives
        setIsCollapsed(false);
      } else {
        console.warn('[WebPeelerPanel] Data update event missing results:', event.detail);
      }
    };

    window.addEventListener('extractorGPT:dataUpdated', handleDataUpdate);
    
    // Listen for selection disabled event
    const handleSelectionDisabled = () => {
      console.log('[WebPeelerPanel] Selection disabled event received');
      setHighlightEnabled(false);
    };
    
    window.addEventListener('extractorGPT:selectionDisabled', handleSelectionDisabled);
    
    return () => {
      window.removeEventListener('extractorGPT:dataUpdated', handleDataUpdate);
      window.removeEventListener('extractorGPT:selectionDisabled', handleSelectionDisabled);
    };
  }, []);

  const onHighlightClicked = () => {
    if (!highlightEnabled) {
      enableHighlightMode();
    } else {
      disableHighlightMode();
    }
  };

  const tabs = [
    { id: TabTypes.RUN, icon: MousePointer2Icon, title: 'Extract List' },
    { id: TabTypes.PAGE_DETAILS, icon: FileTextIcon, title: 'Extract Details' },
    { id: TabTypes.EXTRACT_EMAILS, icon: MailIcon, title: 'Extract Emails' },
    { id: TabTypes.DOWNLOAD_IMAGES, icon: ImageIcon, title: 'Download Images' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case TabTypes.RUN:
        return <ExtractListTab 
          extractedData={extractedData} 
          showResults={showResults} 
          isPro={isPro}
          highlightEnabled={highlightEnabled}
        />;
      case TabTypes.PAGE_DETAILS:
        return <ExtractDetailsTab isPro={isPro} />;
      case TabTypes.EXTRACT_EMAILS:
        return <ExtractEmailsTab isPro={isPro} />;
      case TabTypes.DOWNLOAD_IMAGES:
        return <ExtractImagesTab isPro={isPro} />;
      case TabTypes.SETTINGS:
        return <SettingsTab />;
      case TabTypes.HELP:
        return <HelpTab isPro={isPro} onProToggle={setIsPro} />;
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  // Determine if content panel should be shown
  const shouldShowContent = !isCollapsed || highlightEnabled || showResults;

  // Enable highlight mode
  const enableHighlightMode = () => {
    console.log('[WebPeelerPanel] Enabling selection mode');
    try {
      if (window.__extractorGPT && window.__extractorGPT.selectionEngine) {
        const selectionEngine = window.__extractorGPT.selectionEngine;
        
        // Check if already attached
        if (!selectionEngine.isActive) {
          selectionEngine.attach();
          selectionEngine.isActive = true;
        }
        
        // Start selection list mode
        selectionEngine.startSelectionListMode();
        setHighlightEnabled(true);
        
        console.log('[WebPeelerPanel] Selection mode enabled successfully');
        console.log('[WebPeelerPanel] Current mode:', selectionEngine.getMode());
      } else {
        console.error('[WebPeelerPanel] Selection engine not available');
      }
    } catch (error) {
      console.error('[WebPeelerPanel] Error enabling selection mode:', error);
    }
  };
  
  // Disable highlight mode
  const disableHighlightMode = () => {
    console.log('[WebPeelerPanel] Disabling selection mode');
    try {
      if (window.__extractorGPT && window.__extractorGPT.selectionEngine) {
        const selectionEngine = window.__extractorGPT.selectionEngine;
        selectionEngine.stopSelectionListMode();
        selectionEngine.detach();
        selectionEngine.isActive = false;
        setHighlightEnabled(false);
        
        console.log('[WebPeelerPanel] Selection mode disabled successfully');
      }
    } catch (error) {
      console.error('[WebPeelerPanel] Error disabling selection mode:', error);
    }
  };

  return (
    <>
      {/* Main container */}
      <div style={{
        position: 'fixed',
        top: '16px',
        right: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: shouldShowContent ? '12px' : '0',
        transition: 'all 0.3s ease',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        zIndex: 2147483640
      }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Integrated Toolbar - always visible */}
          <div 
            style={{
              width: 'min(25vw, 320px)',
              minWidth: '260px',
              padding: '8px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.98) 0%, rgba(17, 24, 39, 0.95) 100%)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
              position: 'relative'
            }}
          >
            {/* Selection Active Indicator */}
            {highlightEnabled && (
              <div style={{
                position: 'absolute',
                top: '-14px',
                left: '50%',
                transform: 'translateX(-50%)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '3px 10px',
                  backgroundColor: 'rgba(17, 24, 39, 0.95)',
                  borderRadius: '12px',
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                  fontSize: '10px',
                  color: 'rgba(196, 181, 253, 0.9)',
                  fontWeight: '500',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#8b5cf6',
                    animation: 'pulse 2s infinite'
                  }} />
                  Selection Active
                </div>
              </div>
            )}
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              {/* Enable/Disable Selection Button */}
              <button
                onClick={onHighlightClicked}
                style={{
                  padding: '8px',
                  borderRadius: '8px',
                  border: '2px solid',
                  borderColor: highlightEnabled ? 'rgba(251, 146, 60, 0.4)' : 'rgba(124, 58, 237, 0.4)',
                  backgroundColor: highlightEnabled ? 'rgba(251, 146, 60, 0.15)' : 'rgba(124, 58, 237, 0.15)',
                  color: highlightEnabled ? '#fb923c' : '#a78bfa',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.backgroundColor = highlightEnabled ? 'rgba(251, 146, 60, 0.25)' : 'rgba(124, 58, 237, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.backgroundColor = highlightEnabled ? 'rgba(251, 146, 60, 0.15)' : 'rgba(124, 58, 237, 0.15)';
                }}
                title={highlightEnabled ? 'Disable list selection' : 'Enable list selection'}
              >
                <MousePointer2Icon className="h-5 w-5" />
              </button>
              
              {/* Tab Buttons */}
              <div style={{
                display: 'flex',
                gap: '4px',
                flex: 1
              }}>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setIsCollapsed(false);
                      setActiveTab(tab.id);
                    }}
                    style={{
                      padding: '8px',
                      borderRadius: '8px',
                      backgroundColor: activeTab === tab.id ? 'rgba(124, 58, 237, 0.15)' : 'transparent',
                      border: 'none',
                      color: activeTab === tab.id ? 'rgba(196, 181, 253, 0.9)' : 'rgba(156, 163, 175, 0.9)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => {
                      if (activeTab !== tab.id) {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeTab !== tab.id) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                    title={tab.title}
                  >
                    <tab.icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
              
              {/* Divider */}
              <div style={{
                width: '1px',
                height: '24px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                margin: '0 4px'
              }} />
              
              {/* Settings and Close */}
              <div style={{
                display: 'flex',
                gap: '2px'
              }}>
                <button
                  title="Settings"
                  onClick={() => setActiveTab(TabTypes.SETTINGS)}
                  style={{
                    padding: '8px',
                    borderRadius: '8px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'rgba(156, 163, 175, 0.9)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <SettingsIcon className="h-4 w-4" />
                </button>
                <button
                  title="Close"
                  onClick={onClose}
                  style={{
                    padding: '8px',
                    borderRadius: '8px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'rgba(156, 163, 175, 0.9)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <XIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Content Panel - show when selection is active or data exists */}
          {shouldShowContent && (
            <div 
              style={{
                marginTop: '12px',
                width: 'min(25vw, 320px)',
                minWidth: '260px',
                maxHeight: '70vh',
                overflowY: 'auto',
                padding: '14px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.98) 0%, rgba(31, 41, 55, 0.95) 100%)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                color: 'rgba(255, 255, 255, 0.9)'
              }}
              className="panda-scrollbar"
            >
              {renderTabContent()}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WebPeelerPanel; 