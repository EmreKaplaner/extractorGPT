import React, { useState, useEffect } from 'react';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { ExportUtils } from '../../../data-management/export-utils';
import ResultsTable from '../tables/ResultsTable';
import { AIService } from '../../../services/ai-service.js';

export function ExtractListTab({ isPro, showResults, extractedData, onPaginationChange, highlightEnabled }) {
  console.log('[ExtractListTab] Component rendered with:', {
    isPro,
    showResults,
    extractedData,
    highlightEnabled,
    extractedDataLength: extractedData ? extractedData.length : 0
  });
  
  const [paginationElement, setPaginationElement] = useState(null);
  const [isPaginationSelecting, setIsPaginationSelecting] = useState(false);
  const [isExtracting, setIsExtracting] = useState(false);
  const [showAutomationPrompt, setShowAutomationPrompt] = useState(true);
  const [resultsTableData, setResultsTableData] = useState(extractedData || []);
  const [isLabelingData, setIsLabelingData] = useState(false);
  
  // Update results when extractedData changes
  useEffect(() => {
    if (extractedData && extractedData.length > 0) {
      setResultsTableData(extractedData);
      setShowAutomationPrompt(true);
    }
  }, [extractedData]);
  
  const handleAddPagination = () => {
    console.log('[ExtractListTab] Add Pagination clicked');
    setIsPaginationSelecting(true);
    
    // Start pagination selection mode
    if (window.__extractorGPT && window.__extractorGPT.selectionEngine) {
      window.__extractorGPT.selectionEngine.startPaginationSelectMode();
      
      // Override the element click handler for pagination selection
      const originalHandler = window.__extractorGPT.selectionEngine.onElementClick;
      window.__extractorGPT.selectionEngine.onElementClick = (data) => {
        console.log('[ExtractListTab] Pagination element selected:', data);
        
        const element = data.data.element;
        setPaginationElement(element);
        setIsPaginationSelecting(false);
        
        // Stop pagination selection mode
        window.__extractorGPT.selectionEngine.stopPaginationSelectMode();
        
        // Restore original handler
        window.__extractorGPT.selectionEngine.onElementClick = originalHandler;
        
        // Store the pagination element in automation handler
        if (window.__extractorGPT.automationHandler) {
          window.__extractorGPT.automationHandler.paginationElement = element;
        }
      };
    }
  };
  
  const handleRemovePagination = () => {
    setPaginationElement(null);
    if (window.__extractorGPT.automationHandler) {
      window.__extractorGPT.automationHandler.paginationElement = null;
    }
  };
  
  const handleRunAutomation = async () => {
    console.log('[ExtractListTab] Run Automation clicked');
    console.log('[ExtractListTab] window.__extractorGPT:', window.__extractorGPT);
    console.log('[ExtractListTab] automationHandler:', window.__extractorGPT?.automationHandler);
    
    if (window.__extractorGPT && window.__extractorGPT.automationHandler) {
      setIsExtracting(true);
      try {
        console.log('[ExtractListTab] Starting automation...');
        await window.__extractorGPT.automationHandler.start({
          selectionEngine: window.__extractorGPT.selectionEngine,
          extractionEngine: window.__extractorGPT.extractionEngine,
          resultsTable: window.__extractorGPT.resultsTable,
          settings: {
            autoScroll: true,
            dynamic: true,
            pagination: paginationElement ? 'element' : null,
            smartPaginationDetection: !paginationElement // Use smart detection if no element selected
          },
          callbacks: {
            onProgress: (data) => {
              console.log('[ExtractListTab] Automation progress:', data);
            },
            onComplete: (data) => {
              console.log('[ExtractListTab] Automation complete:', data);
              setIsExtracting(false);
            },
            onError: (error) => {
              console.error('[ExtractListTab] Automation error:', error);
              setIsExtracting(false);
            }
          }
        });
      } catch (error) {
        console.error('Automation error:', error);
        setIsExtracting(false);
      }
    } else {
      console.error('[ExtractListTab] Automation handler not available');
    }
  };

  const handleLabelData = async () => {
    console.log('[ExtractListTab] Labeling data with AI');
    setIsLabelingData(true);
    
    try {
      // Get current headers and data
      const resultsTable = window.__extractorGPT?.resultsTable;
      if (!resultsTable || !resultsTable.headers || resultsTable.headers.length === 0) {
        console.warn('[ExtractListTab] No data to label');
        return;
      }
      
      const headers = resultsTable.headers;
      const rows = resultsTable.rows;
      const site = window.location.href;
      
      // Generate intelligent headers
      const renamedHeaders = await AIService.generateHeaders({ site, headers, rows });
      console.log('[ExtractListTab] Generated headers:', renamedHeaders);
      
      // Update the results table headers
      const newHeaders = headers.map(header => renamedHeaders[header] || header);
      resultsTable.headers = newHeaders;
      
      // Update the rows with new headers
      const newRows = rows.map(row => {
        const newRow = {};
        headers.forEach((oldHeader, index) => {
          const newHeader = newHeaders[index];
          newRow[newHeader] = row[oldHeader];
        });
        return newRow;
      });
      resultsTable.rows = newRows;
      
      // Update the UI
      setResultsTableData([...newRows]);
      
      // Dispatch event to update other components
      window.dispatchEvent(new CustomEvent('extractorGPT:dataUpdated', {
        detail: {
          results: newRows,
          headers: newHeaders
        }
      }));
      
      console.log('[ExtractListTab] Data labeling completed');
    } catch (error) {
      console.error('[ExtractListTab] Error labeling data:', error);
    } finally {
      setIsLabelingData(false);
    }
  };

  const handleExport = (format) => {
    if (!window.__extractorGPT || !window.__extractorGPT.resultsTable) return;
    
    const resultsTable = window.__extractorGPT.resultsTable;
    const data = {
      headers: resultsTable.headers,
      rows: resultsTable.rows
    };
    
    switch (format) {
      case 'csv':
        ExportUtils.toCSV({ ...data, filename: 'extracted_data.csv' });
        break;
      case 'json':
        ExportUtils.exportToJSON({ ...data, filename: 'extracted_data.json' });
        break;
      case 'clipboard':
        ExportUtils.exportToClipboard(data);
        break;
    }
  };
  
  // If we have results, show the results table and automation prompt
  if (showResults && resultsTableData.length > 0) {
    // Get the actual results table data
    const resultsTableData = window.__extractorGPT && window.__extractorGPT.resultsTable ? {
      headers: window.__extractorGPT.resultsTable.headers,
      rows: window.__extractorGPT.resultsTable.rows
    } : {
      headers: [],
      rows: resultsTableData
    };
    
    return (
      <div>
        {/* Results Table */}
        <div style={{
          marginBottom: '24px',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          overflow: 'hidden'
        }}>
          {/* Table Header with Export Actions */}
          <div style={{
            padding: '12px 16px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <span style={{
                fontSize: '14px',
                fontWeight: '500',
                color: 'white'
              }}>
                📊 Extracted Data
              </span>
              <span style={{
                padding: '2px 8px',
                backgroundColor: 'rgba(124, 58, 237, 0.2)',
                borderRadius: '4px',
                fontSize: '12px',
                color: '#a78bfa'
              }}>
                {resultsTableData.rows.length} rows
              </span>
            </div>
            
            {/* Export Actions */}
            <div style={{
              display: 'flex',
              gap: '8px'
            }}>
              <button
                onClick={() => handleExport('csv')}
                style={{
                  padding: '6px 12px',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '6px',
                  color: 'white',
                  fontSize: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                📥 CSV
              </button>
              <button
                onClick={() => handleExport('json')}
                style={{
                  padding: '6px 12px',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '6px',
                  color: 'white',
                  fontSize: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                { } JSON
              </button>
              <button
                onClick={() => handleExport('clipboard')}
                style={{
                  padding: '6px 12px',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '6px',
                  color: 'white',
                  fontSize: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                📋 Copy
              </button>
              <button
                onClick={handleLabelData}
                disabled={isLabelingData}
                style={{
                  padding: '6px 12px',
                  backgroundColor: isLabelingData ? 'rgba(124, 58, 237, 0.5)' : 'rgba(124, 58, 237, 0.2)',
                  border: '1px solid rgba(124, 58, 237, 0.4)',
                  borderRadius: '6px',
                  color: 'white',
                  fontSize: '12px',
                  cursor: isLabelingData ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
                onMouseEnter={(e) => !isLabelingData && (e.currentTarget.style.backgroundColor = 'rgba(124, 58, 237, 0.3)')}
                onMouseLeave={(e) => !isLabelingData && (e.currentTarget.style.backgroundColor = 'rgba(124, 58, 237, 0.2)')}
                title="Automatically label data based on the content of the columns"
              >
                <span style={{ fontSize: '14px' }}>✨</span>
                {isLabelingData ? 'Labeling...' : 'Label Data'}
              </button>
            </div>
          </div>
          
          {/* Results Table */}
          <div style={{
            maxHeight: '300px',
            overflowY: 'auto',
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
          }}>
            <ResultsTable 
              data={resultsTableData}
              source="List Extraction"
            />
          </div>
        </div>
        
        {/* Automation Prompt */}
        {showAutomationPrompt && (
          <div style={{
            marginBottom: '24px',
            padding: '16px',
            backgroundColor: 'rgba(124, 58, 237, 0.1)',
            borderRadius: '8px',
            border: '1px solid rgba(124, 58, 237, 0.3)'
          }}>
            <h3 style={{
              margin: '0 0 12px 0',
              fontSize: '16px',
              fontWeight: '600',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              🤖 Run Automation?
            </h3>
            
            <p style={{
              margin: '0 0 16px 0',
              fontSize: '14px',
              color: '#9ca3af',
              lineHeight: '1.5'
            }}>
              Continue extracting data by scrolling through the page or following pagination.
            </p>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <span style={{
                fontSize: '14px',
                fontWeight: '500',
                color: 'white'
              }}>
                ✅ READY
              </span>
              <span style={{
                padding: '4px 8px',
                backgroundColor: 'rgba(124, 58, 237, 0.2)',
                borderRadius: '4px',
                fontSize: '12px',
                color: '#a78bfa'
              }}>
                🔢 {resultsTableData.rows.length} items
              </span>
            </div>
            
            {/* Run Automation Button */}
            <button
              onClick={handleRunAutomation}
              disabled={isExtracting}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: isExtracting ? 'rgba(124, 58, 237, 0.5)' : '#7c3aed',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontSize: '14px',
                fontWeight: '600',
                cursor: isExtracting ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.2s',
                marginBottom: '16px'
              }}
              onMouseEnter={(e) => !isExtracting && (e.currentTarget.style.backgroundColor = '#6d28d9')}
              onMouseLeave={(e) => !isExtracting && (e.currentTarget.style.backgroundColor = '#7c3aed')}
            >
              {isExtracting ? (
                <>
                  <LoadingSpinner size="small" />
                  <span>Extracting...</span>
                </>
              ) : (
                <>
                  <span>▶️</span>
                  <span>Run Automation</span>
                </>
              )}
            </button>
            
            {/* Add Pagination */}
            <div style={{
              marginBottom: '16px'
            }}>
              {!paginationElement && !isPaginationSelecting ? (
                <button
                  onClick={handleAddPagination}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '6px',
                    color: 'white',
                    fontSize: '13px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                >
                  ➕ Add Pagination
                </button>
              ) : isPaginationSelecting ? (
                <div style={{
                  padding: '12px',
                  backgroundColor: 'rgba(124, 58, 237, 0.2)',
                  borderRadius: '6px',
                  border: '1px solid rgba(124, 58, 237, 0.4)',
                  animation: 'pulse 2s infinite'
                }}>
                  <div style={{
                    fontSize: '13px',
                    color: 'white',
                    fontWeight: '500',
                    marginBottom: '4px'
                  }}>
                    🎯 Click on the pagination button
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#a78bfa'
                  }}>
                    Select the "Next" button or page number to follow
                  </div>
                </div>
              ) : (
                <div style={{
                  padding: '12px',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '8px'
                  }}>
                    <span style={{ fontSize: '13px', color: '#9ca3af' }}>
                      Pagination element:
                    </span>
                    <button
                      onClick={handleRemovePagination}
                      style={{
                        marginLeft: 'auto',
                        padding: '2px 6px',
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#ef4444',
                        fontSize: '12px',
                        cursor: 'pointer'
                      }}
                    >
                      Remove
                    </button>
                  </div>
                  <div style={{
                    padding: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '4px',
                    fontSize: '13px',
                    color: 'white'
                  }}>
                    {paginationElement.tagName.toLowerCase()}
                    {paginationElement.className && ` .${paginationElement.className.split(' ')[0]}`}
                    {paginationElement.textContent && ` "${paginationElement.textContent.substring(0, 20)}..."`}
                  </div>
                </div>
              )}
            </div>
            
            {/* Automation Options */}
            <div style={{
              display: 'flex',
              gap: '16px',
              marginBottom: '16px'
            }}>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                color: 'white',
                cursor: 'pointer'
              }}>
                <span style={{
                  width: '16px',
                  height: '16px',
                  backgroundColor: '#10b981',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px'
                }}>
                  ✓
                </span>
                auto-scroll
              </label>
              
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                color: 'white',
                cursor: 'pointer'
              }}>
                <span style={{
                  width: '16px',
                  height: '16px',
                  backgroundColor: '#10b981',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px'
                }}>
                  ✓
                </span>
                dynamic
              </label>
            </div>
            
            <button
              onClick={() => setShowAutomationPrompt(false)}
              style={{
                padding: '8px 16px',
                backgroundColor: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '6px',
                color: 'white',
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              Skip Automation
            </button>
          </div>
        )}
      </div>
    );
  }
  
  // Default view when no results - show instructions only
  return (
    <div>
      <p style={{ 
        margin: '0 0 24px 0', 
        fontSize: '14px', 
        color: '#9ca3af',
        lineHeight: '1.5'
      }}>
        Extract any list or table with one click!
      </p>
      
      {/* Selection Status */}
      {highlightEnabled && (
        <div style={{
          marginBottom: '24px',
          padding: '12px',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#10b981',
          textAlign: 'center',
          fontWeight: '500'
        }}>
          ✓ Selection Mode Active - Hover and click on any list
        </div>
      )}
      
      {/* Step 1 */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: 'rgba(124, 58, 237, 0.2)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <span style={{ fontSize: '20px' }}>👆</span>
          </div>
          <div>
            <h3 style={{ 
              margin: '0 0 4px 0', 
              fontSize: '16px', 
              fontWeight: '600',
              color: 'white'
            }}>
              Step 1: Enable Selection
            </h3>
            <p style={{ 
              margin: 0, 
              fontSize: '14px', 
              color: '#9ca3af',
              lineHeight: '1.5'
            }}>
              Click "Enable List Selection" in the toolbar above
            </p>
          </div>
        </div>
      </div>
      
      {/* Step 2 */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: 'rgba(124, 58, 237, 0.2)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <span style={{ fontSize: '20px' }}>🎯</span>
          </div>
          <div>
            <h3 style={{ 
              margin: '0 0 4px 0', 
              fontSize: '16px', 
              fontWeight: '600',
              color: 'white'
            }}>
              Step 2: Select List
            </h3>
            <p style={{ 
              margin: 0, 
              fontSize: '14px', 
              color: '#9ca3af',
              lineHeight: '1.5'
            }}>
              Hover over any list or table and click to extract data
            </p>
          </div>
        </div>
      </div>
      
      {/* Watch Tutorial Link */}
      <div style={{
        marginBottom: '24px',
        padding: '16px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        cursor: 'pointer',
        transition: 'background-color 0.2s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
      >
        <div style={{
          width: '48px',
          height: '32px',
          backgroundColor: 'rgba(124, 58, 237, 0.3)',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <span style={{ fontSize: '16px' }}>📹</span>
        </div>
        <div>
          <div style={{ fontSize: '14px', fontWeight: '500' }}>
            Watch: Extract Lists 🔗
          </div>
          <div style={{ fontSize: '12px', color: '#6b7280' }}>
            Learn how to extract lists using ExtractorGPT.
          </div>
        </div>
      </div>
      
      {/* Add pulse animation */}
      <style>
        {`
          @keyframes pulse {
            0% {
              opacity: 1;
            }
            50% {
              opacity: 0.8;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

export default ExtractListTab; 