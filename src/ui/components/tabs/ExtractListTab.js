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
      <div style={{ fontSize: '11px' }}>
        {/* Results Table */}
        <div style={{
          marginBottom: '16px',
          borderRadius: '4px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          overflow: 'hidden'
        }}>
          {/* Table Header with Export Actions */}
          <div style={{
            padding: '8px 10px',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{
                fontSize: '12px',
                fontWeight: '500',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                📊 Extracted Data
              </span>
              <span style={{
                padding: '2px 6px',
                backgroundColor: 'rgba(124, 58, 237, 0.1)',
                borderRadius: '3px',
                fontSize: '10px',
                color: '#a78bfa'
              }}>
                {resultsTableData.rows.length} rows
              </span>
            </div>
            
            {/* Export Actions */}
            <div style={{
              display: 'flex',
              gap: '4px'
            }}>
              <button
                onClick={() => handleExport('csv')}
                style={{
                  padding: '4px 8px',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '3px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                📥 CSV
              </button>
              <button
                onClick={() => handleExport('json')}
                style={{
                  padding: '4px 8px',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '3px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                { } JSON
              </button>
              <button
                onClick={() => handleExport('clipboard')}
                style={{
                  padding: '4px 8px',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '3px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                📋 Copy
              </button>
              <button
                onClick={handleLabelData}
                disabled={isLabelingData}
                style={{
                  padding: '4px 8px',
                  backgroundColor: isLabelingData ? 'rgba(124, 58, 237, 0.2)' : 'rgba(124, 58, 237, 0.08)',
                  border: '1px solid rgba(124, 58, 237, 0.2)',
                  borderRadius: '3px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '10px',
                  cursor: isLabelingData ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3px'
                }}
                onMouseEnter={(e) => !isLabelingData && (e.currentTarget.style.backgroundColor = 'rgba(124, 58, 237, 0.15)')}
                onMouseLeave={(e) => !isLabelingData && (e.currentTarget.style.backgroundColor = 'rgba(124, 58, 237, 0.08)')}
                title="Automatically label data based on the content of the columns"
              >
                <span style={{ fontSize: '11px' }}>✨</span>
                {isLabelingData ? 'Labeling...' : 'Label Data'}
              </button>
            </div>
          </div>
          
          {/* Results Table */}
          <div style={{
            maxHeight: '250px',
            overflowY: 'auto',
            backgroundColor: 'rgba(0, 0, 0, 0.02)'
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
            marginBottom: '16px',
            padding: '12px',
            backgroundColor: 'rgba(124, 58, 237, 0.03)',
            borderRadius: '4px',
            border: '1px solid rgba(124, 58, 237, 0.15)'
          }}>
            <h3 style={{
              margin: '0 0 8px 0',
              fontSize: '13px',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 0.9)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              🤖 Run Automation?
            </h3>
            
            <p style={{
              margin: '0 0 12px 0',
              fontSize: '11px',
              color: 'rgba(255, 255, 255, 0.6)',
              lineHeight: '1.4'
            }}>
              Continue extracting data by scrolling through the page or following pagination.
            </p>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '12px'
            }}>
              <span style={{
                fontSize: '11px',
                fontWeight: '500',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                ✅ READY
              </span>
              <span style={{
                padding: '2px 6px',
                backgroundColor: 'rgba(124, 58, 237, 0.1)',
                borderRadius: '3px',
                fontSize: '10px',
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
                padding: '8px',
                backgroundColor: isExtracting ? 'rgba(124, 58, 237, 0.5)' : '#7c3aed',
                border: 'none',
                borderRadius: '4px',
                color: 'white',
                fontSize: '12px',
                fontWeight: '500',
                cursor: isExtracting ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                transition: 'all 0.2s',
                marginBottom: '12px'
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
              marginBottom: '0'
            }}>
              {!paginationElement && !isPaginationSelecting ? (
                <button
                  onClick={handleAddPagination}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '3px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '11px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  ➕ Add Pagination
                </button>
              ) : isPaginationSelecting ? (
                <div style={{
                  padding: '8px',
                  backgroundColor: 'rgba(124, 58, 237, 0.08)',
                  borderRadius: '3px',
                  border: '1px solid rgba(124, 58, 237, 0.2)',
                  animation: 'pulse 2s infinite'
                }}>
                  <div style={{
                    fontSize: '11px',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: '500',
                    marginBottom: '2px'
                  }}>
                    🎯 Click on the pagination button
                  </div>
                  <div style={{
                    fontSize: '10px',
                    color: '#a78bfa'
                  }}>
                    Select the "Next" button or page number to follow
                  </div>
                </div>
              ) : (
                <div style={{
                  padding: '8px',
                  backgroundColor: 'rgba(16, 185, 129, 0.05)',
                  borderRadius: '3px',
                  border: '1px solid rgba(16, 185, 129, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{
                      fontSize: '11px',
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: '500',
                      marginBottom: '2px'
                    }}>
                      ✅ Pagination Selected
                    </div>
                    <div style={{
                      fontSize: '10px',
                      color: 'rgba(255, 255, 255, 0.6)'
                    }}>
                      {paginationElement.tagName.toLowerCase()} - {paginationElement.textContent || 'Button'}
                    </div>
                  </div>
                  <button
                    onClick={handleRemovePagination}
                    style={{
                      padding: '3px 6px',
                      backgroundColor: 'transparent',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '2px',
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontSize: '10px',
                      cursor: 'pointer'
                    }}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
            
            {/* Cancel Button */}
            <button
              onClick={() => setShowAutomationPrompt(false)}
              style={{
                padding: '4px',
                backgroundColor: 'transparent',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.4)',
                fontSize: '10px',
                cursor: 'pointer',
                textAlign: 'center',
                width: '100%',
                marginTop: '8px'
              }}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    );
  }
  
  // Default view when no selection is active
  return (
    <div style={{ fontSize: '11px' }}>
      {/* Main message */}
      {!highlightEnabled ? (
        <div style={{
          textAlign: 'center',
          padding: '20px 0'
        }}>
          <div style={{
            fontSize: '36px',
            marginBottom: '12px'
          }}>
            👆
          </div>
          <h3 style={{
            fontSize: '14px',
            fontWeight: '500',
            marginBottom: '6px',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            Select Elements to Extract
          </h3>
          <p style={{
            fontSize: '11px',
            color: 'rgba(255, 255, 255, 0.6)',
            margin: 0
          }}>
            Click on "Enable list selection" button above to start
          </p>
        </div>
      ) : (
        <div style={{
          padding: '16px',
          backgroundColor: 'rgba(124, 58, 237, 0.03)',
          borderRadius: '8px',
          border: '1px solid rgba(124, 58, 237, 0.15)'
        }}>
          {/* Extract List Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px'
          }}>
            <span style={{ 
              fontSize: '16px',
              padding: '6px',
              backgroundColor: 'rgba(124, 58, 237, 0.1)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>🗂️</span>
            <div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                margin: 0,
                color: 'rgba(255, 255, 255, 0.95)'
              }}>
                Extract List
              </h3>
              <p style={{
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.6)',
                margin: '2px 0 0 0'
              }}>
                Extract any list or table with one click!
              </p>
            </div>
          </div>
          
          {/* Step 1 */}
          <div style={{
            marginBottom: '16px',
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-start'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              backgroundColor: 'rgba(124, 58, 237, 0.15)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              flexShrink: 0
            }}>
              👆
            </div>
            <div>
              <h4 style={{
                fontSize: '14px',
                fontWeight: '600',
                margin: '0 0 4px 0',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                Step 1: Hover
              </h4>
              <p style={{
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.6)',
                margin: 0,
                lineHeight: '1.4'
              }}>
                Move your cursor over any list or table to highlight extractable elements
              </p>
            </div>
          </div>
          
          {/* Step 2 */}
          <div style={{
            marginBottom: '20px',
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-start'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              backgroundColor: 'rgba(124, 58, 237, 0.15)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              flexShrink: 0
            }}>
              🎯
            </div>
            <div>
              <h4 style={{
                fontSize: '14px',
                fontWeight: '600',
                margin: '0 0 4px 0',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                Step 2: Click
              </h4>
              <p style={{
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.6)',
                margin: 0,
                lineHeight: '1.4'
              }}>
                Click on the highlighted area to start extracting data
              </p>
            </div>
          </div>
          
          {/* Watch Tutorial Link */}
          <div style={{
            marginBottom: '20px',
            padding: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
          }}
          onClick={() => window.open('https://youtu.be/your-video-id', '_blank')}
          >
            <div style={{
              width: '40px',
              height: '28px',
              backgroundColor: 'rgba(124, 58, 237, 0.2)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px'
            }}>
              📹
            </div>
            <div>
              <div style={{ 
                fontSize: '12px', 
                fontWeight: '500',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                Watch: Extract Lists 🔗
              </div>
              <div style={{ 
                fontSize: '11px', 
                color: 'rgba(255, 255, 255, 0.6)' 
              }}>
                Learn how to extract lists using PandaExtract.
              </div>
            </div>
          </div>
          
          {/* START LIST EXTRACTION Button */}
          <button
            onClick={() => {
              // This triggers the actual extraction
              if (window.__extractorGPT && window.__extractorGPT.selectionEngine) {
                window.__extractorGPT.selectionEngine.confirmSelection();
              }
            }}
            style={{
              marginTop: '16px',
              width: '100%',
              padding: '12px 20px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 16px rgba(124, 58, 237, 0.4)',
              transition: 'all 0.2s',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(124, 58, 237, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(124, 58, 237, 0.4)';
            }}
          >
            <span style={{ fontSize: '16px' }}>🚀</span>
            <span>START LIST EXTRACTION</span>
          </button>
        </div>
      )}
      
      {/* Pro Features */}
      {!isPro && (
        <div style={{
          marginTop: '16px',
          padding: '12px',
          backgroundColor: 'rgba(251, 191, 36, 0.03)',
          borderRadius: '4px',
          border: '1px solid rgba(251, 191, 36, 0.15)'
        }}>
          <h4 style={{
            fontSize: '12px',
            fontWeight: '500',
            marginBottom: '8px',
            color: 'rgba(255, 255, 255, 0.9)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            🚀 Pro Features
          </h4>
          <ul style={{
            margin: 0,
            paddingLeft: '20px',
            fontSize: '10px',
            color: 'rgba(255, 255, 255, 0.6)',
            lineHeight: '1.5'
          }}>
            <li>Extract unlimited items</li>
            <li>Run automation with pagination</li>
            <li>Export to CSV, JSON, Excel</li>
            <li>Smart data labeling with AI</li>
          </ul>
        </div>
      )}
      
      {/* Help Section */}
      <div style={{
        marginTop: '16px',
        padding: '8px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <p style={{
          fontSize: '10px',
          color: 'rgba(255, 255, 255, 0.4)',
          margin: 0,
          textAlign: 'center'
        }}>
          Need help? Press <kbd style={{
            padding: '1px 4px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '2px',
            fontSize: '9px'
          }}>?</kbd> for keyboard shortcuts
        </p>
      </div>
    </div>
  );
}

export default ExtractListTab; 