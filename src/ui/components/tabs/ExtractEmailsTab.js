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
  
  // Check current page for emails
  React.useEffect(() => {
    checkCurrentPageEmails();
  }, []);
  
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
    
    try {
      chrome.runtime.sendMessage({
        action: 'extract-emails',
        urls: urls,
        config: {
          parallelTabs,
          maxWaitTime,
          delayBeforeExtract
        }
      }, (response) => {
        if (response && response.emails) {
          setExtractedEmails(response.emails);
          setProcessedUrls(urls.length);
        } else if (response && response.error) {
          setError(response.error);
        }
        setIsExtracting(false);
      });
    } catch (err) {
      console.error('Multi-URL extraction error:', err);
      setError('Failed to extract emails from multiple URLs');
      setIsExtracting(false);
    }
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
  const copyToClipboard = () => {
    if (extractedEmails.length === 0) return;
    
    const text = extractedEmails.join('\n');
    navigator.clipboard.writeText(text).then(() => {
      // Show success message
      const button = event.target;
      const originalText = button.textContent;
      button.textContent = 'Copied!';
      setTimeout(() => {
        button.textContent = originalText;
      }, 2000);
    });
  };
  
  return (
    <div>
      {/* Current Page Info */}
      <div style={{
        marginBottom: '16px',
        padding: '16px',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'rgba(124, 58, 237, 0.2)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px'
            }}>
              ✉️
            </div>
            <div>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '600',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                Extract Emails
                {!isPro && (
                  <span style={{
                    fontSize: '11px',
                    padding: '2px 6px',
                    backgroundColor: '#7c3aed',
                    borderRadius: '4px'
                  }}>
                    PRO
                  </span>
                )}
              </h2>
              <p style={{
                margin: 0,
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.6)'
              }}>
                Found {currentPageEmailCount} email{currentPageEmailCount !== 1 ? 's' : ''} on this page
              </p>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '8px'
          }}>
            <button
              onClick={handleScanPage}
              disabled={isExtracting}
              style={{
                padding: '8px 16px',
                backgroundColor: '#7c3aed',
                border: 'none',
                borderRadius: '6px',
                color: 'white',
                fontSize: '14px',
                fontWeight: '500',
                cursor: isExtracting ? 'not-allowed' : 'pointer',
                opacity: isExtracting ? 0.7 : 1,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
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
                padding: '8px 16px',
                backgroundColor: urls.length > 0 ? '#10b981' : '#4a4a4a',
                border: 'none',
                borderRadius: '6px',
                color: 'white',
                fontSize: '14px',
                fontWeight: '500',
                cursor: !isExtracting && urls.length > 0 ? 'pointer' : 'not-allowed',
                opacity: isExtracting || urls.length === 0 ? 0.7 : 1,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
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
        </div>
        
        {/* Found Emails Preview */}
        {currentPageEmailCount > 0 && (
          <div style={{
            marginTop: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              <span style={{ fontWeight: '500' }}>Found Emails</span>
              <span style={{ marginLeft: '8px', color: 'rgba(255, 255, 255, 0.6)' }}>
                ({currentPageEmailCount} total)
              </span>
            </div>
            <button
              onClick={handleExtractAll}
              style={{
                padding: '6px 12px',
                backgroundColor: '#10b981',
                border: 'none',
                borderRadius: '6px',
                color: 'white',
                fontSize: '13px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              → Extract All
            </button>
          </div>
        )}
        
        {foundEmails.length > 0 && foundEmails.length <= 3 && (
          <div style={{
            marginTop: '12px',
            padding: '12px',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '8px',
            fontSize: '13px',
            fontFamily: 'monospace'
          }}>
            {foundEmails.map((email, index) => (
              <div key={index} style={{ marginBottom: index < foundEmails.length - 1 ? '4px' : 0 }}>
                • {email}
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Extract from Multiple URLs */}
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '12px',
        padding: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: '500',
          marginBottom: '16px'
        }}>
          Extract Emails
        </h3>
        <p style={{
          fontSize: '13px',
          color: 'rgba(255, 255, 255, 0.6)',
          marginBottom: '16px'
        }}>
          Extract email addresses from multiple URLs
        </p>
        
        {/* Add URLs Section */}
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '12px',
          cursor: 'pointer'
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
                fontSize: '15px',
                fontWeight: '500'
              }}>
                Add URLs
              </h3>
              <p style={{
                margin: 0,
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.6)'
              }}>
                Select URLs to extract emails from
              </p>
            </div>
            <span style={{ 
              fontSize: '20px',
              transform: showUrlSection ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s'
            }}>›</span>
          </div>
        </div>
        
        {showUrlSection && (
          <div style={{ marginBottom: '16px' }}>
            <div style={{
              padding: '16px',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                gap: '8px',
                marginBottom: '12px'
              }}>
                <input
                  ref={urlInputRef}
                  type="text"
                  placeholder="Enter URL (e.g., https://example.com)"
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '6px',
                    color: 'white',
                    fontSize: '14px'
                  }}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddUrl()}
                />
                <button
                  onClick={handleAddUrl}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#7c3aed',
                    border: 'none',
                    borderRadius: '6px',
                    color: 'white',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}
                >
                  Add
                </button>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '12px'
              }}>
                <span style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)' }}>or</span>
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
                    padding: '6px 12px',
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '6px',
                    color: 'white',
                    fontSize: '13px',
                    cursor: 'pointer'
                  }}
                >
                  📁 Upload CSV
                </button>
              </div>
              
              {urls.length > 0 && (
                <div style={{
                  maxHeight: '150px',
                  overflowY: 'auto',
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: '6px',
                  padding: '8px'
                }}>
                  {urls.map((url, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '4px 8px',
                      fontSize: '13px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      marginBottom: '4px'
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
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveUrl(index);
                        }}
                        style={{
                          padding: '2px 6px',
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: '#ef4444',
                          fontSize: '16px',
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
        
        {/* Configuration Section */}
        <div style={{
          marginBottom: '16px'
        }}>
          <h3 style={{
            fontSize: '15px',
            fontWeight: '500',
            marginBottom: '12px'
          }}>
            Configuration
          </h3>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {/* Parallel Tabs */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '4px'
              }}>
                <label style={{ fontSize: '13px' }}>
                  Parallel Tabs
                </label>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <button
                    onClick={() => setParallelTabs(Math.max(1, parallelTabs - 1))}
                    style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '4px',
                      color: 'white',
                      cursor: 'pointer'
                    }}
                  >
                    -
                  </button>
                  <span style={{ minWidth: '30px', textAlign: 'center' }}>{parallelTabs}</span>
                  <button
                    onClick={() => setParallelTabs(Math.min(5, parallelTabs + 1))}
                    style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '4px',
                      color: 'white',
                      cursor: 'pointer'
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <p style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', margin: 0 }}>
                Extract faster with multiple tabs
              </p>
            </div>
            
            {/* Max Wait Time */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '4px'
              }}>
                <label style={{ fontSize: '13px' }}>Max Wait Time</label>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <input
                    type="number"
                    value={maxWaitTime}
                    onChange={(e) => setMaxWaitTime(parseInt(e.target.value) || 0)}
                    style={{
                      width: '60px',
                      padding: '4px 8px',
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '4px',
                      color: 'white',
                      fontSize: '13px',
                      textAlign: 'center'
                    }}
                  />
                  <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>seconds</span>
                </div>
              </div>
              <p style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', margin: 0 }}>
                Time before timeout (per page)
              </p>
            </div>
            
            {/* Delay Before Extract */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '4px'
              }}>
                <label style={{ fontSize: '13px' }}>Delay Before Extract</label>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <input
                    type="number"
                    value={delayBeforeExtract}
                    onChange={(e) => setDelayBeforeExtract(parseInt(e.target.value) || 0)}
                    style={{
                      width: '60px',
                      padding: '4px 8px',
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '4px',
                      color: 'white',
                      fontSize: '13px',
                      textAlign: 'center'
                    }}
                  />
                  <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>seconds</span>
                </div>
              </div>
              <p style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', margin: 0 }}>
                Wait after page load
              </p>
            </div>
          </div>
        </div>
        
        {/* Permission Notice */}
        <div style={{
          padding: '12px',
          backgroundColor: 'rgba(255, 193, 7, 0.1)',
          borderRadius: '6px',
          border: '1px solid rgba(255, 193, 7, 0.3)',
          marginBottom: '16px',
          fontSize: '13px',
          color: '#fbbf24'
        }}>
          ExtractorGPT will ask for additional permissions to open new tabs for extraction
        </div>
        
        {/* Extract Button */}
        <button
          onClick={handleScanPages}
          disabled={isExtracting || urls.length === 0}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: urls.length > 0 ? '#7c3aed' : '#4a4a4a',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            fontSize: '15px',
            fontWeight: '500',
            cursor: urls.length > 0 && !isExtracting ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          {isExtracting ? (
            <>
              <LoadingSpinner size="small" />
              Extracting...
            </>
          ) : (
            <>
              ✉️ Extract Emails
              {!isPro && <span style={{
                fontSize: '11px',
                padding: '2px 6px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                marginLeft: '4px'
              }}>PRO</span>}
            </>
          )}
        </button>
      </div>
      
      {/* Progress */}
      {isExtracting && totalUrls > 0 && (
        <div style={{
          marginTop: '16px',
          padding: '12px',
          backgroundColor: 'rgba(124, 58, 237, 0.1)',
          borderRadius: '6px',
          border: '1px solid rgba(124, 58, 237, 0.3)'
        }}>
          <div style={{
            fontSize: '14px',
            marginBottom: '8px'
          }}>
            Processing: {processedUrls} / {totalUrls} URLs
          </div>
          <div style={{
            width: '100%',
            height: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '2px',
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
          marginTop: '16px',
          padding: '12px',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          borderRadius: '6px',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          color: '#f87171',
          fontSize: '14px'
        }}>
          {error}
        </div>
      )}
      
      {/* Results */}
      {extractedEmails.length > 0 && (
        <div style={{
          marginTop: '24px',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          borderRadius: '12px',
          padding: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px'
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '500'
            }}>
              Found {extractedEmails.length} Email{extractedEmails.length !== 1 ? 's' : ''}
            </h3>
            <div style={{
              display: 'flex',
              gap: '8px'
            }}>
              <button
                onClick={copyToClipboard}
                style={{
                  padding: '6px 12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '4px',
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                📋 Copy All
              </button>
              <button
                onClick={exportAsCSV}
                style={{
                  padding: '6px 12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '4px',
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                💾 Export CSV
              </button>
            </div>
          </div>
          
          <div style={{
            maxHeight: '300px',
            overflowY: 'auto',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '6px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {extractedEmails.map((email, index) => (
              <div
                key={index}
                style={{
                  padding: '8px 12px',
                  borderBottom: index < extractedEmails.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                  fontSize: '14px',
                  fontFamily: 'monospace',
                  wordBreak: 'break-all'
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
