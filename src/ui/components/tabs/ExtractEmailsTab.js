import React, { useState, useRef } from 'react';
import { ExtractionEngine } from '../../../engine/extraction-engine.js';
import { LoadingSpinner } from '../common/LoadingSpinner';

export function ExtractEmailsTab({ isPro }) {
  const [urls, setUrls] = useState([]);
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractedEmails, setExtractedEmails] = useState([]);
  const [processedUrls, setProcessedUrls] = useState(0);
  const [totalUrls, setTotalUrls] = useState(0);
  const [error, setError] = useState('');
  const [showUrlSection, setShowUrlSection] = useState(false);
  const [foundEmails, setFoundEmails] = useState([]);
  const [currentPageEmailCount, setCurrentPageEmailCount] = useState(0);
  
  // Configuration state
  const [parallelTabs, setParallelTabs] = useState(1);
  const [maxWaitTime, setMaxWaitTime] = useState(35);
  const [delayBeforeExtract, setDelayBeforeExtract] = useState(0);
  
  // Refs
  const fileInputRef = useRef(null);
  const urlInputRef = useRef(null);
  
  // Listen for progress updates
  React.useEffect(() => {
    const handleMessage = (message) => {
      if (message.action === 'email-extraction-progress') {
        setProcessedUrls(message.processedUrls);
      }
    };
    
    chrome.runtime.onMessage.addListener(handleMessage);
    
    return () => {
      chrome.runtime.onMessage.removeListener(handleMessage);
    };
  }, []);
  
  // Check current page for emails
  React.useEffect(() => {
    checkCurrentPageEmails();
  }, []);
  
  // Helper function to check if extension context is valid
  const isExtensionContextValid = () => {
    try {
      return chrome.runtime && chrome.runtime.id;
    } catch (e) {
      return false;
    }
  };
  
  // Helper function to send message with error handling
  const sendMessageSafely = (message, callback) => {
    if (!isExtensionContextValid()) {
      console.error('Extension context invalidated');
      setError('Extension was updated. Please refresh the page and try again.');
      setIsExtracting(false);
      if (callback) callback({ success: false, error: 'Extension context invalidated' });
      return;
    }
    
    try {
      chrome.runtime.sendMessage(message, (response) => {
        if (chrome.runtime.lastError) {
          console.error('Chrome runtime error:', chrome.runtime.lastError);
          setError('Failed to communicate with extension. Please refresh the page.');
          setIsExtracting(false);
          if (callback) callback({ success: false, error: chrome.runtime.lastError.message });
        } else {
          if (callback) callback(response);
        }
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Extension error. Please refresh the page and try again.');
      setIsExtracting(false);
      if (callback) callback({ success: false, error: error.message });
    }
  };
  
  const checkCurrentPageEmails = () => {
    const emails = new Set();
    
    // Get all text content from the page
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          const parent = node.parentElement;
          if (parent && (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE')) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );
    
    let node;
    while (node = walker.nextNode()) {
      const text = node.textContent;
      if (text) {
        const foundEmails = ExtractionEngine.extractEmailsFromText(text);
        foundEmails.forEach(email => emails.add(email.toLowerCase()));
      }
    }
    
    // Check mailto links
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
      const email = link.href.replace('mailto:', '').split('?')[0];
      if (email) {
        emails.add(email.toLowerCase());
      }
    });
    
    setCurrentPageEmailCount(emails.size);
    setFoundEmails(Array.from(emails));
  };
  
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
  
  // Add URL from input
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
  
  // Scan current page
  const handleScanPage = async () => {
    setIsExtracting(true);
    setError('');
    
    try {
      checkCurrentPageEmails();
      setExtractedEmails(foundEmails);
      
      if (foundEmails.length === 0) {
        setError('No emails found on this page');
      }
    } catch (err) {
      console.error('Email extraction error:', err);
      setError('Failed to extract emails');
    } finally {
      setIsExtracting(false);
    }
  };
  
  // Scan multiple pages
  const handleScanPages = async () => {
    if (urls.length === 0) {
      setError('Please add URLs to scan');
      return;
    }
    
    setIsExtracting(true);
    setError('');
    setExtractedEmails([]);
    setTotalUrls(urls.length);
    setProcessedUrls(0);
    
    sendMessageSafely({
        action: 'extract-emails',
        urls: urls,
        config: {
          parallelTabs,
          maxWaitTime,
          delayBeforeExtract
        }
      }, (response) => {
      if (response && response.success && response.emails) {
          setExtractedEmails(response.emails);
          setProcessedUrls(urls.length);
        if (response.emails.length === 0) {
          setError('No emails found on the specified pages');
        }
        } else if (response && response.error) {
          setError(response.error);
      } else {
        setError('Failed to extract emails');
        }
        setIsExtracting(false);
      });
  };
  
  // Extract all found emails
  const handleExtractAll = () => {
    setExtractedEmails(foundEmails);
  };
  
  // Export emails as CSV
  const exportAsCSV = () => {
    if (extractedEmails.length === 0) return;
    
    const csv = 'Email\n' + extractedEmails.join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'extracted-emails.csv';
    a.click();
    URL.revokeObjectURL(url);
  };
  
  // Copy emails to clipboard
  const copyToClipboard = (e) => {
    if (extractedEmails.length === 0) return;
    
    const text = extractedEmails.join('\n');
    navigator.clipboard.writeText(text).then(() => {
      // Show success message
      const button = e.currentTarget;
      const originalText = button.textContent;
      button.textContent = 'Copied!';
      setTimeout(() => {
        button.textContent = originalText;
      }, 2000);
    });
  };
  
  return (
    <div style={{ fontSize: '12px' }}>
      {/* Header Section */}
      <div style={{ marginBottom: '14px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          marginBottom: '4px'
        }}>
          <span style={{ fontSize: '14px' }}>✉️</span>
          <h2 style={{
            fontSize: '13px',
            fontWeight: '600',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            Extract Emails
            {!isPro && (
              <span style={{
                fontSize: '9px',
                padding: '1px 4px',
                backgroundColor: '#fbbf24',
                color: '#000',
                borderRadius: '2px',
                fontWeight: '600'
              }}>
                PRO
              </span>
            )}
          </h2>
        </div>
        
        <p style={{
          margin: 0,
          fontSize: '11px',
          color: 'rgba(255, 255, 255, 0.5)'
        }}>
          Found {currentPageEmailCount} email{currentPageEmailCount !== 1 ? 's' : ''} on this page
        </p>
      </div>
      
      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        gap: '6px',
        marginBottom: '10px'
      }}>
        <button
          onClick={handleScanPage}
          disabled={isExtracting}
          style={{
            flex: 1,
            padding: '7px 12px',
            backgroundColor: '#7c3aed',
            border: 'none',
            borderRadius: '4px',
            color: 'white',
            fontSize: '12px',
            fontWeight: '500',
            cursor: isExtracting ? 'not-allowed' : 'pointer',
            opacity: isExtracting ? 0.7 : 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px'
          }}
        >
          {isExtracting ? (
            <>
              <LoadingSpinner size="small" />
              Scanning...
            </>
          ) : (
            <>
              🔍 Scan Page
            </>
          )}
        </button>
        
        <button
          onClick={handleScanPages}
          disabled={isExtracting || urls.length === 0}
          style={{
            flex: 1,
            padding: '7px 12px',
            backgroundColor: urls.length > 0 ? '#10b981' : '#6b7280',
            border: 'none',
            borderRadius: '4px',
            color: 'white',
            fontSize: '12px',
            fontWeight: '500',
            cursor: !isExtracting && urls.length > 0 ? 'pointer' : 'not-allowed',
            opacity: isExtracting ? 0.7 : 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px'
          }}
        >
          {isExtracting ? (
            <>
              <LoadingSpinner size="small" />
              Scanning...
            </>
          ) : (
            <>
              📄 Scan Pages
            </>
          )}
        </button>
      </div>
      
      {/* Found Emails Section */}
      {currentPageEmailCount > 0 && (
        <div style={{ marginBottom: '14px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '6px'
          }}>
            <div style={{
              fontSize: '11px',
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: '400'
            }}>
              Found Emails <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>({currentPageEmailCount} total)</span>
            </div>
            <button
              onClick={handleExtractAll}
              style={{
                padding: '3px 8px',
                backgroundColor: '#10b981',
                border: 'none',
                borderRadius: '3px',
                color: 'white',
                fontSize: '10px',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '3px'
              }}
            >
              → Extract All
            </button>
          </div>
          
          {foundEmails.length > 0 && (
            <div>
              {foundEmails.slice(0, 3).map((email, index) => (
                <div key={index} style={{ 
                  fontSize: '11px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  marginBottom: '2px'
                }}>
                  • {email}
                </div>
              ))}
              {foundEmails.length > 3 && (
                <div style={{ 
                  fontSize: '11px',
                  color: 'rgba(255, 255, 255, 0.4)',
                  marginTop: '2px'
                }}>
                  ... and {foundEmails.length - 3} more
                </div>
              )}
            </div>
          )}
        </div>
      )}
      
      {/* Extract from Multiple URLs Section */}
      <div>
        <h3 style={{
          fontSize: '12px',
          fontWeight: '500',
          marginBottom: '8px'
        }}>
          Extract from Multiple URLs
        </h3>
        
        <div style={{ marginBottom: '10px' }}>
          <div style={{
            display: 'flex',
            gap: '5px',
            marginBottom: '6px'
          }}>
            <input
              ref={urlInputRef}
              type="text"
              placeholder="Enter URL (e.g., https://example.com)"
              style={{
                flex: 1,
                padding: '5px 8px',
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
                padding: '5px 10px',
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
            gap: '5px',
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
                padding: '3px 8px',
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
              overflowY: 'auto'
            }}>
              {urls.map((url, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '2px 0',
                  fontSize: '10px',
                  color: 'rgba(255, 255, 255, 0.6)'
                }}>
                  <span style={{ 
                    flex: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {url}
                  </span>
                  <button
                    onClick={() => handleRemoveUrl(index)}
                    style={{
                      padding: '0 4px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#ef4444',
                      fontSize: '12px',
                      cursor: 'pointer',
                      marginLeft: '6px'
                    }}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Configuration Section */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '10px',
          marginBottom: '10px'
        }}>
          <h4 style={{
            fontSize: '11px',
            fontWeight: '500',
            marginBottom: '8px',
            color: 'rgba(255, 255, 255, 0.8)'
          }}>
            Configuration
          </h4>
          
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
        
        {/* Permission Notice */}
        <div style={{
          padding: '6px 8px',
          backgroundColor: 'rgba(251, 191, 36, 0.03)',
          borderRadius: '3px',
          border: '1px solid rgba(251, 191, 36, 0.1)',
          marginBottom: '10px',
          fontSize: '10px',
          color: 'rgba(251, 191, 36, 0.7)',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <span style={{ fontSize: '11px' }}>⚠️</span>
          PandaExtract will ask for additional permissions to open new tabs for extraction
        </div>
        
        {/* Extract Button */}
        <button
          onClick={handleScanPages}
          disabled={isExtracting || urls.length === 0}
          style={{
            width: '100%',
            padding: '8px',
            backgroundColor: urls.length > 0 ? '#7c3aed' : '#4a4a4a',
            border: 'none',
            borderRadius: '4px',
            color: 'white',
            fontSize: '12px',
            fontWeight: '500',
            cursor: urls.length > 0 && !isExtracting ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px'
          }}
        >
          {isExtracting ? (
            <>
              <LoadingSpinner size="small" />
              Extracting...
            </>
          ) : (
            <>
              ☐ Extract Emails
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
      </div>
      
      {/* Progress */}
      {isExtracting && totalUrls > 0 && (
        <div style={{
          marginTop: '10px',
          padding: '8px',
          backgroundColor: 'rgba(124, 58, 237, 0.03)',
          borderRadius: '3px',
          border: '1px solid rgba(124, 58, 237, 0.15)'
        }}>
          <div style={{
            fontSize: '11px',
            marginBottom: '5px',
            color: 'rgba(255, 255, 255, 0.7)'
          }}>
            Processing: {processedUrls} / {totalUrls} URLs
          </div>
          <div style={{
            width: '100%',
            height: '2px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '1px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${(processedUrls / totalUrls) * 100}%`,
              height: '100%',
              backgroundColor: '#7c3aed',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>
      )}
      
      {/* Error Message */}
      {error && (
        <div style={{
          marginTop: '10px',
          padding: '8px',
          backgroundColor: 'rgba(239, 68, 68, 0.03)',
          borderRadius: '3px',
          border: '1px solid rgba(239, 68, 68, 0.15)',
          color: '#f87171',
          fontSize: '11px'
        }}>
          {error}
        </div>
      )}
      
      {/* Results */}
      {extractedEmails.length > 0 && (
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
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              Found {extractedEmails.length} Email{extractedEmails.length !== 1 ? 's' : ''}
            </h3>
            <div style={{
              display: 'flex',
              gap: '5px'
            }}>
              <button
                onClick={copyToClipboard}
                style={{
                  padding: '4px 8px',
                  backgroundColor: 'transparent',
                  color: 'rgba(255, 255, 255, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '2px',
                  fontSize: '10px',
                  cursor: 'pointer'
                }}
              >
                📋 Copy All
              </button>
              <button
                onClick={exportAsCSV}
                style={{
                  padding: '4px 8px',
                  backgroundColor: 'transparent',
                  color: 'rgba(255, 255, 255, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '2px',
                  fontSize: '10px',
                  cursor: 'pointer'
                }}
              >
                💾 Export CSV
              </button>
            </div>
          </div>
          
          <div style={{
            maxHeight: '200px',
            overflowY: 'auto',
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
            borderRadius: '3px',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}>
            {extractedEmails.map((email, index) => (
              <div
                key={index}
                style={{
                  padding: '5px 8px',
                  borderBottom: index < extractedEmails.length - 1 ? '1px solid rgba(255, 255, 255, 0.03)' : 'none',
                  fontSize: '11px',
                  fontFamily: 'monospace',
                  wordBreak: 'break-all',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}
              >
                {email}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ExtractEmailsTab;
