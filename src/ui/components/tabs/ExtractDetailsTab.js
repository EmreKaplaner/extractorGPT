import React, { useState, useRef, useEffect } from 'react';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { SelectElementsModal } from '../modals/SelectElementsModal';
import { ExtractionProgress } from '../common/ExtractionProgress';

export function ExtractDetailsTab({ isPro }) {
  const [urls, setUrls] = useState([]);
  const [selectedElements, setSelectedElements] = useState([]);
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractionResults, setExtractionResults] = useState([]);
  const [error, setError] = useState('');
  const [isSelectingElements, setIsSelectingElements] = useState(false);
  const [showUrlSection, setShowUrlSection] = useState(false);
  const [showSelectElementsModal, setShowSelectElementsModal] = useState(false);
  const [showConfigSection, setShowConfigSection] = useState(false);
  const [extractionStatus, setExtractionStatus] = useState('idle');
  const [processedUrls, setProcessedUrls] = useState(0);
  
  // Configuration state
  const [parallelTabs, setParallelTabs] = useState(1);
  const [maxWaitTime, setMaxWaitTime] = useState(30);
  const [delayBeforeExtract, setDelayBeforeExtract] = useState(0);
  
  // Refs
  const fileInputRef = useRef(null);
  const urlInputRef = useRef(null);
  
  // Listen for messages and monitor extension context
  useEffect(() => {
    const handleMessage = (request) => {
      console.log('[ExtractDetailsTab] Received message:', request);
      
      if (request.action === 'page-details-selected-complete' && request.data) {
        console.log('[ExtractDetailsTab] Page details selected complete received');
        console.log('[ExtractDetailsTab] Request data:', request.data);
        console.log('[ExtractDetailsTab] Selectors:', request.data.selectors);
        
        setSelectedElements(request.data.selectors || []);
        setIsSelectingElements(false);
        setError('');
        
        console.log('[ExtractDetailsTab] Set selected elements to:', request.data.selectors || []);
      } else if (request.action === 'status-update-extract' && request.data) {
        console.log('[ExtractDetailsTab] Status update received:', request.data);
        
        // Update extraction progress
        const statusData = request.data;
        const completed = statusData.filter(item => item.status === 'complete').length;
        const failed = statusData.filter(item => item.status === 'failed').length;
        const total = statusData.length;
        
        setProcessedUrls(completed + failed);
        
        if (completed + failed === total) {
          setExtractionStatus('completed');
          setIsExtracting(false);
        } else {
          setExtractionStatus('running');
        }
      } else {
        console.log('[ExtractDetailsTab] Unknown message action:', request.action);
      }
    };
    
    // Set up message listener only if extension context is valid
    if (isExtensionContextValid()) {
    chrome.runtime.onMessage.addListener(handleMessage);
    }
    
    // Periodic check for extension context validity
    const contextCheckInterval = setInterval(() => {
      if (!isExtensionContextValid()) {
        console.warn('[ExtractDetailsTab] Extension context invalidated during operation');
        showExtensionUpdateNotification();
        clearInterval(contextCheckInterval);
      }
    }, 2000); // Check every 2 seconds
    
    return () => {
      if (chrome.runtime && chrome.runtime.onMessage) {
      chrome.runtime.onMessage.removeListener(handleMessage);
      }
      clearInterval(contextCheckInterval);
    };
  }, []);
  
  // Debug modal state changes
  useEffect(() => {
    console.log('[ExtractDetailsTab] showSelectElementsModal changed:', showSelectElementsModal);
  }, [showSelectElementsModal]);
  
  // Debug selectedElements state changes
  useEffect(() => {
    console.log('[ExtractDetailsTab] selectedElements changed:', selectedElements);
    console.log('[ExtractDetailsTab] selectedElements length:', selectedElements.length);
    console.log('[ExtractDetailsTab] selectedElements content:', selectedElements);
  }, [selectedElements]);
  
  // Handle CSV upload
  const handleCSVUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const lines = text.split('\n');
      const newUrls = [];
      
      lines.forEach(line => {
        const trimmed = line.trim();
        if (trimmed && (trimmed.startsWith('http://') || trimmed.startsWith('https://'))) {
          newUrls.push(trimmed);
        }
      });
      
      setUrls(prev => [...prev, ...newUrls]);
    };
    reader.readAsText(file);
    
    // Reset file input
    event.target.value = '';
  };
  
  // Add URLs from input
  const handleAddUrl = () => {
    const input = urlInputRef.current;
    if (!input || !input.value.trim()) return;
    
    const url = input.value.trim();
    if (url.startsWith('http://') || url.startsWith('https://')) {
      setUrls(prev => [...prev, url]);
      input.value = '';
    } else {
      setError('Please enter a valid URL starting with http:// or https://');
    }
  };
  
  // Remove URL
  const handleRemoveUrl = (index) => {
    setUrls(prev => prev.filter((_, i) => i !== index));
  };
  
  // Helper function to check if extension context is valid
  const isExtensionContextValid = () => {
    try {
      return chrome.runtime && chrome.runtime.id && !chrome.runtime.lastError;
    } catch (e) {
      return false;
    }
  };
  
  // Helper function to show extension update notification
  const showExtensionUpdateNotification = () => {
    setError('Extension was updated. Please refresh this page to continue using the extension.');
    setIsSelectingElements(false);
    setIsExtracting(false);
    
    // Stop page details selection mode when extension context is invalidated
    try {
      if (window.__extractorGPT && window.__extractorGPT.selectionEngine) {
        window.__extractorGPT.selectionEngine.stopPageDetailsSelectMode();
        console.log('[ExtractDetailsTab] Stopped page details selection mode after extension context invalidation');
      }
    } catch (error) {
      // Ignore errors during cleanup
      console.warn('[ExtractDetailsTab] Error stopping selection mode during context invalidation:', error);
    }
  };
  
  // Send message safely with context validation
  const sendMessageSafely = (message, callback) => {
    if (!isExtensionContextValid()) {
      console.error('[ExtractDetailsTab] Extension context not valid');
      showExtensionUpdateNotification();
      return;
    }

    try {
      chrome.runtime.sendMessage(message, (response) => {
        if (chrome.runtime.lastError) {
          console.error('[ExtractDetailsTab] Chrome runtime error:', chrome.runtime.lastError);
          
          // Handle context invalidation
          if (chrome.runtime.lastError.message?.includes('Extension context invalidated') || 
              chrome.runtime.lastError.message?.includes('message port closed')) {
            console.error('[ExtractDetailsTab] Extension context invalidated during operation');
            showExtensionUpdateNotification();
            setIsExtracting(false);
            setExtractionStatus('idle');
            return;
          }
          
          // Handle other runtime errors
          if (callback) {
            callback({ success: false, error: chrome.runtime.lastError.message });
          }
        } else {
          if (callback) {
            callback(response);
          }
        }
      });
    } catch (error) {
      console.error('[ExtractDetailsTab] Error sending message:', error);
      if (callback) {
        callback({ success: false, error: error.message });
      }
    }
  };
  
  // Add elements - show Select Elements modal
  const handleAddElements = async () => {
    console.log('[ExtractDetailsTab] handleAddElements called');
    console.log('[ExtractDetailsTab] URLs:', urls);
    console.log('[ExtractDetailsTab] URLs length:', urls.length);
    
    if (urls.length === 0) {
      console.log('[ExtractDetailsTab] No URLs, setting error');
      setError('Please add at least one URL first');
      return;
    }
    
    try {
      // Check extension context before storage operations
      if (!isExtensionContextValid()) {
        console.error('[ExtractDetailsTab] Extension context not valid');
        showExtensionUpdateNotification();
        return;
      }
      
      // Store the full URL list for later extraction
      console.log('[ExtractDetailsTab] Storing URLs in chrome storage');
      if (chrome && chrome.storage && chrome.storage.local) {
        await chrome.storage.local.set({ pageDetailsUrls: urls });
      } else {
        console.warn('[ExtractDetailsTab] Chrome storage not available, proceeding without storage');
      }
      
      console.log('[ExtractDetailsTab] Setting showSelectElementsModal to true');
      setShowSelectElementsModal(true);
      setError('');
      
      console.log('[ExtractDetailsTab] Modal should now be visible');
    } catch (error) {
      console.error('[ExtractDetailsTab] Error in handleAddElements:', error);
      
      // Check if it's an extension context error
      if (error.message && error.message.includes('Extension context invalidated')) {
        showExtensionUpdateNotification();
        return;
      }
      
      // Don't let storage errors prevent the modal from showing
      console.log('[ExtractDetailsTab] Error with storage, but showing modal anyway');
      setShowSelectElementsModal(true);
      setError('');
    }
  };
  
  // Handle URL selection and page opening
  const handleGoToPage = (selectedUrl) => {
    setShowSelectElementsModal(false);
    setIsSelectingElements(true);
    setError('');
    
    // Send message to background script with the selected URL
    sendMessageSafely({
      action: 'page-details-highlight',
      data: {
        urls: [selectedUrl] // Send as array to match background script expectation
      }
    }, (response) => {
      if (!response?.success) {
        console.error('Failed to start page details flow:', response?.error);
        setError('Failed to start element selection. Please try again.');
        setIsSelectingElements(false);
      }
    });
  };
  
  // Start extraction
  const handleStartExtraction = async () => {
    if (urls.length === 0) {
      setError('Please add URLs to extract from');
      return;
    }
    
    if (selectedElements.length === 0) {
      setError('Please select elements to extract');
      return;
    }

    setIsExtracting(true);
    setExtractionStatus('running');
    setProcessedUrls(0);
    setError('');
    setExtractionResults([]);

    try {
      sendMessageSafely({
        action: 'page-details-extract',
        data: {
          urls: urls,
          elements: selectedElements,
          parallelTabs: parallelTabs,
          maxWaitTime: maxWaitTime,
          delayBeforeExtract: delayBeforeExtract
        }
      }, (response) => {
        console.log('[ExtractDetailsTab] Extraction response:', response);
        
        // Reset extraction state first
        setIsExtracting(false);
        setExtractionStatus('idle');
        
        // Stop page details selection mode now that extraction is complete
        if (window.__extractorGPT && window.__extractorGPT.selectionEngine) {
          window.__extractorGPT.selectionEngine.stopPageDetailsSelectMode();
          console.log('[ExtractDetailsTab] Stopped page details selection mode after extraction');
        }
        
        if (response && response.success) {
          console.log('[ExtractDetailsTab] Setting extraction results:', response.results);
          const results = response.results || [];
          setExtractionResults(results);
          
          // Force a re-render by ensuring state update
          setTimeout(() => {
            console.log('[ExtractDetailsTab] Current extraction results state:', results);
          }, 100);
          
          if (results.length === 0) {
            setError('No data was extracted. Please check that the selected elements contain data on the target pages.');
          } else {
            // Check if all results have errors
            const allHaveErrors = results.every(result => result.error);
            if (allHaveErrors) {
              setError('All extractions failed. Please verify that the selected elements exist on the target pages.');
            }
          }
        } else if (response && response.error) {
          console.error('[ExtractDetailsTab] Extraction error:', response.error);
          
          // Handle specific error types
          if (response.error.includes('Max wait time exceeded')) {
            setError('Extraction timed out. The pages may be loading slowly or the selected elements may not exist. Try increasing the Max Wait Time in Configuration.');
          } else if (response.error.includes('Extension context invalidated')) {
            showExtensionUpdateNotification();
            return;
          } else if (response.error.includes('No elements selected')) {
            setError('Please select elements to extract from the pages.');
          } else {
            setError(`Extraction failed: ${response.error}`);
          }
        } else {
          setError('Extraction failed with unknown error. Please try again.');
        }
      });
    } catch (err) {
      console.error('[ExtractDetailsTab] Extraction error:', err);
      setError('Failed to extract page details. Please try again.');
      setIsExtracting(false);
      setExtractionStatus('idle');
      
      // Stop page details selection mode on error
      if (window.__extractorGPT && window.__extractorGPT.selectionEngine) {
        window.__extractorGPT.selectionEngine.stopPageDetailsSelectMode();
        console.log('[ExtractDetailsTab] Stopped page details selection mode after error');
      }
    }
  };
  
  // Stop extraction
  const handleStopExtraction = () => {
    sendMessageSafely({
      action: 'stop-page-details-extraction'
    }, () => {
      setIsExtracting(false);
      setExtractionStatus('stopped');
      
      // Stop page details selection mode when user cancels extraction
      if (window.__extractorGPT && window.__extractorGPT.selectionEngine) {
        window.__extractorGPT.selectionEngine.stopPageDetailsSelectMode();
        console.log('[ExtractDetailsTab] Stopped page details selection mode after user cancellation');
      }
    });
  };
  
  // Export to CSV
  const exportToCSV = (data) => {
    // Helper to escape CSV values
    const escapeCSV = (value) => {
      if (value === null || value === undefined) return '';
      const str = String(value);
      // Escape if contains comma, quotes, or newline
      if (str.includes(',') || str.includes('"') || str.includes('\n')) {
        return `"${str.replace(/"/g, '""')}"`;
      }
      return str;
    };
    
    const headers = Object.keys(data[0]);
    const csv = [
      headers.map(escapeCSV).join(','),
      ...data.map(row => headers.map(header => escapeCSV(row[header])).join(','))
    ].join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `extraction_results_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };
  
  // Export to JSON
  const exportToJSON = (data) => {
    const json = JSON.stringify(data, null, 2);
    
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `extraction_results_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };
  
  // Copy to clipboard
  const copyToClipboard = async (data, event) => {
    try {
      const text = JSON.stringify(data, null, 2);
      await navigator.clipboard.writeText(text);
      
      // Show success feedback if button is available
      if (event && event.currentTarget) {
      const button = event.currentTarget;
      const originalContent = button.innerHTML;
      button.innerHTML = '<span>✓</span> Copied!';
      button.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
      button.style.borderColor = 'rgba(16, 185, 129, 0.2)';
      
      setTimeout(() => {
        button.innerHTML = originalContent;
        button.style.backgroundColor = 'transparent';
        button.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      }, 2000);
      } else {
        // Fallback: just log success if no button available
        console.log('Data copied to clipboard successfully');
      }
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
      // You could add a toast notification here instead
    }
  };
  
  console.log('[ExtractDetailsTab] Rendering results section. extractionResults:', extractionResults, 'length:', extractionResults.length);
  
  return (
    <div style={{ fontSize: '11px' }}>
    <div>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '12px'
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            backgroundColor: 'rgba(124, 58, 237, 0.1)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px'
          }}>
            📄
          </div>
          <div>
            <h2 style={{
              fontSize: '13px',
              fontWeight: '500',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              Extract Page Details
            </h2>
            <p style={{
              margin: 0,
              fontSize: '11px',
              color: 'rgba(255, 255, 255, 0.5)'
            }}>
              Extract data from similar pages into a table
            </p>
          </div>
        </div>
        
        {/* Add URLs Section */}
        <div style={{
          borderRadius: '4px',
          padding: '10px',
          marginBottom: '8px',
          cursor: 'pointer',
          backgroundColor: showUrlSection ? 'rgba(124, 58, 237, 0.05)' : 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'all 0.2s'
        }}
        onClick={() => setShowUrlSection(!showUrlSection)}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <h3 style={{
                margin: 0,
                fontSize: '12px',
                fontWeight: '500',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                Add URLs
              </h3>
              <p style={{
                margin: 0,
                fontSize: '10px',
                color: 'rgba(255, 255, 255, 0.5)'
              }}>
                Select URLs to extract from
              </p>
            </div>
            <span style={{ 
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.5)',
              transform: showUrlSection ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s'
            }}>›</span>
          </div>
        </div>
        
        {showUrlSection && (
          <div style={{ marginBottom: '12px' }}>
            <div style={{
              padding: '10px',
              backgroundColor: 'rgba(0, 0, 0, 0.02)',
              borderRadius: '4px',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div style={{
                display: 'flex',
                gap: '6px',
                marginBottom: '8px'
              }}>
                <input
                  ref={urlInputRef}
                  type="text"
                  placeholder="Enter URL (e.g., https://example.com)"
                  style={{
                    flex: 1,
                    padding: '6px 8px',
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '3px',
                    color: 'white',
                    fontSize: '11px',
                    outline: 'none'
                  }}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddUrl()}
                />
                <button
                  onClick={handleAddUrl}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: '#7c3aed',
                    border: 'none',
                    borderRadius: '3px',
                    color: 'white',
                    fontSize: '11px',
                    cursor: 'pointer'
                  }}
                >
                  Add
                </button>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '8px'
              }}>
                <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.4)' }}>or</span>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".csv"
                  onChange={handleCSVUpload}
                  style={{ display: 'none' }}
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '3px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '10px',
                    cursor: 'pointer'
                  }}
                >
                  📁 Upload CSV
                </button>
              </div>
              
              {urls.length > 0 && (
                <div style={{
                  maxHeight: '100px',
                  overflowY: 'auto',
                  backgroundColor: 'rgba(0, 0, 0, 0.03)',
                  borderRadius: '3px',
                  padding: '6px'
                }}>
                  {urls.map((url, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '3px 6px',
                      fontSize: '10px',
                      borderRadius: '2px',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      marginBottom: '2px'
                    }}>
                      <span style={{ 
                        flex: 1,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        color: 'rgba(255, 255, 255, 0.7)'
                      }}>
                        {url}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveUrl(index);
                        }}
                        style={{
                          padding: '0 4px',
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: '#ef4444',
                          fontSize: '12px',
                          cursor: 'pointer'
                        }}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Add Elements Section */}
        <div style={{
          borderRadius: '4px',
          padding: '10px',
          marginBottom: '8px',
          backgroundColor: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <h3 style={{
                margin: 0,
                fontSize: '12px',
                fontWeight: '500',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                Add Elements
              </h3>
              <p style={{
                margin: 0,
                fontSize: '10px',
                color: 'rgba(255, 255, 255, 0.5)'
              }}>
                Select elements to extract
              </p>
            </div>
            {selectedElements.length > 0 && (
              <span style={{
                padding: '2px 6px',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '2px',
                fontSize: '10px',
                color: '#10b981'
              }}>
                {selectedElements.length} selected
              </span>
            )}
          </div>
          
          {/* Show selection status or button */}
          {isSelectingElements ? (
            <div style={{
              marginTop: '8px',
              padding: '8px',
              backgroundColor: 'rgba(124, 58, 237, 0.05)',
              borderRadius: '3px',
              border: '1px solid rgba(124, 58, 237, 0.15)',
              textAlign: 'center'
            }}>
              <LoadingSpinner size="small" />
              <p style={{
                margin: '4px 0 0 0',
                fontSize: '10px',
                color: 'rgba(255, 255, 255, 0.7)'
              }}>
                Opening page for element selection...
              </p>
        </div>
          ) : (
            <button
              onClick={(e) => {
                console.log('[ExtractDetailsTab] Button clicked', e);
                console.log('[ExtractDetailsTab] urls.length:', urls.length);
                console.log('[ExtractDetailsTab] Button disabled:', urls.length === 0);
                handleAddElements();
              }}
              disabled={urls.length === 0}
              style={{
                marginTop: '8px',
                width: '100%',
                padding: '10px 16px',
                background: urls.length > 0 
                  ? 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' 
                  : 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '6px',
                color: urls.length > 0 ? 'white' : 'rgba(255, 255, 255, 0.4)',
                fontSize: '12px',
                fontWeight: '600',
                cursor: urls.length > 0 ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                boxShadow: urls.length > 0 ? '0 4px 12px rgba(124, 58, 237, 0.3)' : 'none',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                if (urls.length > 0) {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(124, 58, 237, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (urls.length > 0) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(124, 58, 237, 0.3)';
                }
              }}
            >
              <span>🎯</span>
              <span>Select Elements to Extract</span>
            </button>
          )}
          
          {/* Display selected elements */}
        {selectedElements.length > 0 && (
          <div style={{
              marginTop: '8px',
              padding: '8px',
              backgroundColor: 'rgba(0, 0, 0, 0.03)',
              borderRadius: '3px',
              fontSize: '10px',
              color: 'rgba(255, 255, 255, 0.6)'
            }}>
              <div style={{ marginBottom: '4px', fontWeight: '500' }}>Selected elements:</div>
              {selectedElements.map((elem, index) => (
                <div key={index} style={{ marginLeft: '8px' }}>
                  • {elem.name || `Element ${index + 1}`}
                </div>
              ))}
          </div>
        )}
        </div>
        
        {/* Configuration Section */}
        <div style={{
          borderRadius: '4px',
          padding: '10px',
          marginBottom: '8px',
          cursor: 'pointer',
          backgroundColor: showConfigSection ? 'rgba(124, 58, 237, 0.05)' : 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'all 0.2s'
        }}
        onClick={() => setShowConfigSection(!showConfigSection)}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <div>
          <h3 style={{
                margin: 0,
                fontSize: '12px',
            fontWeight: '500',
                color: 'rgba(255, 255, 255, 0.9)'
          }}>
            Configuration
          </h3>
              <p style={{
                margin: 0,
                fontSize: '10px',
                color: 'rgba(255, 255, 255, 0.5)'
              }}>
                Extraction settings
              </p>
            </div>
            <span style={{ 
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.5)',
              transform: showConfigSection ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s'
            }}>›</span>
          </div>
        </div>
        
        {showConfigSection && (
          <div style={{
            padding: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.02)',
            borderRadius: '4px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '8px'
          }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
              gap: '8px'
          }}>
            {/* Parallel Tabs */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <label style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.6)' }}>
                  Parallel Tabs
                </label>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <button
                    onClick={() => setParallelTabs(Math.max(1, parallelTabs - 1))}
                    style={{
                      width: '18px',
                      height: '18px',
                      backgroundColor: 'transparent',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '2px',
                      color: 'rgba(255, 255, 255, 0.6)',
                      cursor: 'pointer',
                      fontSize: '10px',
                      lineHeight: '1'
                    }}
                  >
                    -
                  </button>
                  <span style={{ 
                    minWidth: '20px', 
                    textAlign: 'center', 
                    fontSize: '10px', 
                    color: 'rgba(255, 255, 255, 0.7)' 
                  }}>
                    {parallelTabs}
                  </span>
                  <button
                    onClick={() => setParallelTabs(Math.min(5, parallelTabs + 1))}
                    style={{
                      width: '18px',
                      height: '18px',
                      backgroundColor: 'transparent',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '2px',
                      color: 'rgba(255, 255, 255, 0.6)',
                      cursor: 'pointer',
                      fontSize: '10px',
                      lineHeight: '1'
                    }}
                  >
                    +
                  </button>
                </div>
            </div>
            
            {/* Max Wait Time */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <label style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.6)' }}>
                  Max Wait Time
                </label>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <input
                    type="number"
                    value={maxWaitTime}
                    onChange={(e) => setMaxWaitTime(parseInt(e.target.value) || 0)}
                    style={{
                      width: '45px',
                      padding: '2px 4px',
                      backgroundColor: 'transparent',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '2px',
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '10px',
                      textAlign: 'center',
                      outline: 'none'
                    }}
                  />
                  <span style={{ fontSize: '9px', color: 'rgba(255, 255, 255, 0.4)' }}>seconds</span>
                </div>
            </div>
            
            {/* Delay Before Extract */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <label style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.6)' }}>
                  Delay Before Extract
                </label>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <input
                    type="number"
                    value={delayBeforeExtract}
                    onChange={(e) => setDelayBeforeExtract(parseInt(e.target.value) || 0)}
                    style={{
                      width: '45px',
                      padding: '2px 4px',
                      backgroundColor: 'transparent',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '2px',
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '10px',
                      textAlign: 'center',
                      outline: 'none'
                    }}
                  />
                  <span style={{ fontSize: '9px', color: 'rgba(255, 255, 255, 0.4)' }}>seconds</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Extract Button */}
        <button
          onClick={handleStartExtraction}
          disabled={isExtracting || urls.length === 0 || selectedElements.length === 0}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: isExtracting 
              ? 'rgba(124, 58, 237, 0.5)' 
              : (urls.length > 0 && selectedElements.length > 0 ? '#7c3aed' : 'rgba(255, 255, 255, 0.1)'),
            border: 'none',
            borderRadius: '4px',
            color: (urls.length > 0 && selectedElements.length > 0) || isExtracting ? 'white' : 'rgba(255, 255, 255, 0.4)',
            fontSize: '12px',
            fontWeight: '500',
            cursor: (urls.length > 0 && selectedElements.length > 0 && !isExtracting) ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            marginBottom: '12px'
          }}
        >
          {isExtracting ? (
            <>
              <LoadingSpinner size="small" />
              <span>Extracting...</span>
            </>
          ) : (
            <>
              <span>🚀</span>
              <span>Extract Page Details</span>
              {!isPro && <span style={{
                fontSize: '9px',
                padding: '0px 4px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '2px',
                marginLeft: '2px'
              }}>PRO</span>}
            </>
          )}
        </button>
        
        {/* Error Message */}
        {error && (
          <div style={{
            marginBottom: '12px',
            padding: '8px',
            backgroundColor: error.includes('Extension was updated') 
              ? 'rgba(59, 130, 246, 0.05)' 
              : 'rgba(239, 68, 68, 0.05)',
            borderRadius: '3px',
            border: error.includes('Extension was updated') 
              ? '1px solid rgba(59, 130, 246, 0.15)' 
              : '1px solid rgba(239, 68, 68, 0.15)',
            color: error.includes('Extension was updated') ? '#60a5fa' : '#f87171',
            fontSize: '10px'
          }}>
            {error.includes('Extension was updated') && (
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px',
                marginBottom: '4px'
              }}>
                <span style={{ fontSize: '12px' }}>🔄</span>
                <strong>Extension Updated</strong>
              </div>
            )}
            {error}
            {error.includes('Extension was updated') && (
              <div style={{ 
                marginTop: '6px',
                padding: '4px 8px',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderRadius: '2px',
                fontSize: '9px',
                textAlign: 'center'
              }}>
                Press F5 or Ctrl+R to refresh this page
              </div>
            )}
      </div>
        )}
        
        {/* Extraction Progress */}
        {isExtracting && (
          <ExtractionProgress 
            currentUrl={processedUrls}
            totalUrls={urls.length}
            status={extractionStatus}
            onStop={handleStopExtraction}
          />
        )}
      
        {/* Results Section */}
      {extractionResults.length > 0 && (
        <div style={{
            marginTop: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '12px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px'
        }}>
          <h3 style={{
                fontSize: '12px',
            fontWeight: '500',
                margin: 0,
                color: 'rgba(255, 255, 255, 0.9)'
          }}>
                Extracted Results ({extractionResults.length})
          </h3>
              <div style={{
                display: 'flex',
                gap: '4px'
              }}>
                <button
                  onClick={() => exportToCSV(extractionResults)}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '2px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '10px',
                    cursor: 'pointer'
                  }}
                >
                  📥 CSV
                </button>
                <button
                  onClick={() => exportToJSON(extractionResults)}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '2px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '10px',
                    cursor: 'pointer'
                  }}
                >
                  { } JSON
                </button>
                <button
                  onClick={(e) => copyToClipboard(extractionResults, e)}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '2px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '10px',
                    cursor: 'pointer'
                  }}
                >
                  📋 Copy
                </button>
              </div>
            </div>
            
            {/* Results Table */}
          <div style={{
              maxHeight: '300px',
              overflowY: 'auto',
              backgroundColor: 'rgba(0, 0, 0, 0.03)',
              borderRadius: '3px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '10px'
          }}>
              {extractionResults.length > 0 && (
            <table style={{
              width: '100%',
                  borderCollapse: 'collapse'
            }}>
              <thead>
                    <tr style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.05)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                    }}>
                      {Object.keys(extractionResults[0]).map((key, index) => (
                        <th key={index} style={{
                          padding: '6px',
                      textAlign: 'left',
                      fontWeight: '500',
                          color: 'rgba(255, 255, 255, 0.8)',
                          borderRight: index < Object.keys(extractionResults[0]).length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
                    }}>
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                    {extractionResults.map((row, rowIndex) => (
                      <tr key={rowIndex} style={{
                        borderBottom: rowIndex < extractionResults.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
                      }}>
                        {Object.values(row).map((value, colIndex) => (
                          <td key={colIndex} style={{
                            padding: '6px',
                            color: 'rgba(255, 255, 255, 0.6)',
                            borderRight: colIndex < Object.values(row).length - 1 ? '1px solid rgba(255, 255, 255, 0.03)' : 'none'
                      }}>
                            {value || '-'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
              )}
          </div>
        </div>
      )}
        
        {/* Select Elements Modal */}
        {showSelectElementsModal && (
          <>
            {console.log('[ExtractDetailsTab] Rendering SelectElementsModal')}
            <SelectElementsModal
              isOpen={showSelectElementsModal}
              urls={urls}
              onGoToPage={handleGoToPage}
              onClose={() => {
                console.log('[ExtractDetailsTab] Modal onClose called');
                setShowSelectElementsModal(false);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default ExtractDetailsTab; 