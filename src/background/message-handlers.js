import { MessageActions, StorageKeys } from '../constants/index.js';
import StorageManager from './storage-manager.js';
import PermissionManager from './permission-manager.js';
import ExtractionProcessor from './extraction-processor.js';
import ImageDownloader from './image-downloader.js';

// Active extraction instances
const activeExtractions = new Map();

// Storage manager class (uses static methods)
// const storageManager = new StorageManager(); // Not needed - use static methods

// Start extraction process
function startExtraction({ tabId, request, instanceId = 'default', statusAction = MessageActions.STATUS_UPDATE_EXTRACT }) {
  // Cancel existing extraction if any
  if (activeExtractions.has(instanceId)) {
    activeExtractions.get(instanceId).cancel();
    activeExtractions.delete(instanceId);
  }

  // Create new extraction processor
  const processor = new ExtractionProcessor({ request });
  processor.initialize();
  activeExtractions.set(instanceId, processor);

  // Send status updates periodically
  const statusInterval = setInterval(() => {
    const status = processor.getStatus();
    const allComplete = status.every(item => 
      ['complete', 'failed', 'cancelled'].includes(item.status)
    );

    // Send status update to content script
    chrome.tabs.sendMessage(tabId, {
      action: statusAction,
      data: status
    }).catch(error => {
      // Tab might be closed
      if (error.message.includes('Could not establish connection')) {
        clearInterval(statusInterval);
        if (activeExtractions.has(instanceId)) {
          activeExtractions.get(instanceId).cancel();
          activeExtractions.delete(instanceId);
        }
      }
    });

    // Clean up when complete
    if (allComplete) {
      clearInterval(statusInterval);
      activeExtractions.delete(instanceId);
    }
  }, 1000);
}

// Setup message handlers
export function setupMessageHandlers() {
  // Check if chrome runtime is available
  if (typeof chrome === 'undefined' || !chrome.runtime) {
    console.error('Chrome runtime API not available');
    return;
  }
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Background received message:', request);
    
    // Handle different message types
    switch (request.action) {
      case 'extract-data':
        handleExtractData(request, sender, sendResponse);
        break;
        
      case 'save-results':
        handleSaveResults(request, sender, sendResponse);
        break;
        
      case 'get-settings':
        handleGetSettings(request, sender, sendResponse);
        break;
        
      case 'update-settings':
        handleUpdateSettings(request, sender, sendResponse);
        break;
        
      case 'download-data':
        handleDownloadData(request, sender, sendResponse);
        break;
        
      case 'element-selected':
        handleElementSelected(request, sender, sendResponse);
        break;
        
      case 'content-load-error':
        console.error('Content script failed to load:', request.error);
        sendResponse({ status: 'acknowledged' });
        break;
        
      case MessageActions.EXTRACT_EMAILS:
        handleEmailExtraction(request, sender, sendResponse);
        return true; // Keep message channel open for async response
        
      case MessageActions.EXTRACT_EMAILS_STOP:
        handleEmailExtractionStop(request, sender, sendResponse);
        break;
        
      case 'page-details-start':
        handlePageDetailsStart(request, sender, sendResponse);
        return true; // Async response
        
      case 'page-details-highlight':
        handlePageDetailsHighlight(request, sender, sendResponse);
        return true; // Async response
        
      case 'page-details-selected':
        handlePageDetailsSelected(request, sender, sendResponse);
        break;
        
      case 'page-details-extract':
        handlePageDetailsExtract(request, sender, sendResponse);
        return true; // Async response
        
      case 'stop-page-details-extraction':
        handleStopPageDetailsExtraction(request, sender, sendResponse);
        break;
        
      default:
        console.warn('Unknown message action:', request.action);
        sendResponse({ status: 'unknown-action' });
    }
    
    // Return true to indicate async response
    return true;
  });
  
  // Handle connection errors
  chrome.runtime.onConnect.addListener((port) => {
    console.log('Port connected:', port.name);
    
    port.onDisconnect.addListener(() => {
      if (chrome.runtime.lastError) {
        console.warn('Port disconnected with error:', chrome.runtime.lastError.message);
      }
    });
  });
  
  // Clean up on extension unload
  if (chrome.runtime.onSuspend) {
    chrome.runtime.onSuspend.addListener(() => {
      // Cancel all active extractions
      activeExtractions.forEach(processor => processor.cancel());
      activeExtractions.clear();
    });
  }
}

// Handle extract data request
function handleExtractData(request, sender, sendResponse) {
  const { url, selector, options } = request.data || {};
  
  console.log('Extracting data from:', url, 'with selector:', selector);
  
  // TODO: Implement actual extraction logic
  // For now, send mock response
  setTimeout(() => {
    sendResponse({
      status: 'success',
      data: {
        extractedCount: 0,
        results: []
      }
    });
  }, 100);
}

// Handle save results request
function handleSaveResults(request, sender, sendResponse) {
  const { results } = request.data || {};
  
  console.log('Saving results:', results);
  
  // Save to chrome.storage
  chrome.storage.local.set({
    lastResults: results,
    lastSaveTime: new Date().toISOString()
  }, () => {
    if (chrome.runtime.lastError) {
      sendResponse({
        status: 'error',
        error: chrome.runtime.lastError.message
      });
    } else {
      sendResponse({
        status: 'success'
      });
    }
  });
}

// Handle get settings request
function handleGetSettings(request, sender, sendResponse) {
  chrome.storage.sync.get(['settings'], (result) => {
    if (chrome.runtime.lastError) {
      sendResponse({
        status: 'error',
        error: chrome.runtime.lastError.message
      });
    } else {
      sendResponse({
        status: 'success',
        settings: result.settings || {}
      });
    }
  });
}

// Handle update settings request
function handleUpdateSettings(request, sender, sendResponse) {
  const { settings } = request.data || {};
  
  chrome.storage.sync.set({ settings }, () => {
    if (chrome.runtime.lastError) {
      sendResponse({
        status: 'error',
        error: chrome.runtime.lastError.message
      });
    } else {
      sendResponse({
        status: 'success'
      });
    }
  });
}

// Handle download data request
function handleDownloadData(request, sender, sendResponse) {
  const { data, format, filename } = request.data || {};
  
  console.log('Downloading data in format:', format);
  
  // Create download based on format
  let blob;
  let mimeType;
  
  switch (format) {
    case 'csv':
      mimeType = 'text/csv';
      blob = new Blob([data], { type: mimeType });
      break;
      
    case 'json':
      mimeType = 'application/json';
      blob = new Blob([JSON.stringify(data, null, 2)], { type: mimeType });
      break;
      
    default:
      sendResponse({
        status: 'error',
        error: 'Unsupported format'
      });
      return;
  }
  
  // Create download URL
  const url = URL.createObjectURL(blob);
  
  // Trigger download
  chrome.downloads.download({
    url: url,
    filename: filename || `extraction_${Date.now()}.${format}`,
    saveAs: true
  }, (downloadId) => {
    // Clean up
    URL.revokeObjectURL(url);
    
    if (chrome.runtime.lastError) {
      sendResponse({
        status: 'error',
        error: chrome.runtime.lastError.message
      });
    } else {
      sendResponse({
        status: 'success',
        downloadId: downloadId
      });
    }
  });
}

// Handle element selected
function handleElementSelected(request, sender, sendResponse) {
  const { extractables, element } = request.data || {};
  
  console.log('Element selected:', element, 'Extractables:', extractables);
  
  // Store selected element data
  chrome.storage.local.set({
    lastSelectedElement: {
      element,
      extractables,
      timestamp: new Date().toISOString(),
      tabId: sender.tab?.id,
      url: sender.tab?.url
    }
  }, () => {
    sendResponse({
      status: 'success'
    });
  });
}

// Handle email extraction
async function handleEmailExtraction(request, sender, sendResponse) {
  console.log('[Background] Starting email extraction for URLs:', request.urls);
  
  const { urls, config } = request;
  const parallelTabs = config?.parallelTabs || 1;
  const maxWaitTime = (config?.maxWaitTime || 30) * 1000;
  const delayBeforeExtract = (config?.delayBeforeExtract || 0) * 1000;
  
  const allEmails = new Set();
  let processedCount = 0;
  
  try {
    // Process URLs in batches based on parallelTabs
    for (let i = 0; i < urls.length; i += parallelTabs) {
      const batch = urls.slice(i, i + parallelTabs);
      const promises = batch.map(async (url) => {
        try {
          // Create new tab
          const tab = await chrome.tabs.create({ url, active: false });
          
          // Wait for tab to load
          await new Promise((resolve, reject) => {
            const startTime = Date.now();
            const checkTab = (tabId, changeInfo) => {
              if (tabId === tab.id && changeInfo.status === 'complete') {
                chrome.tabs.onUpdated.removeListener(checkTab);
                resolve();
              } else if (Date.now() - startTime > maxWaitTime) {
                chrome.tabs.onUpdated.removeListener(checkTab);
                reject(new Error('Tab load timeout'));
              }
            };
            chrome.tabs.onUpdated.addListener(checkTab);
          });
          
          // Wait before extracting
          if (delayBeforeExtract > 0) {
            await new Promise(resolve => setTimeout(resolve, delayBeforeExtract));
          }
          
          // Extract emails from the tab
          const results = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
              const emails = new Set();
        const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
              
              // Get all text from the page
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
                  const matches = text.match(emailRegex) || [];
                  matches.forEach(email => emails.add(email.toLowerCase()));
                }
              }
              
              // Check mailto links
              document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
                const email = link.href.replace('mailto:', '').split('?')[0];
                if (email && emailRegex.test(email)) {
                  emails.add(email.toLowerCase());
                }
              });
              
              return Array.from(emails);
            }
          });
          
          // Add found emails to the set
          if (results[0]?.result) {
            results[0].result.forEach(email => allEmails.add(email));
          }
          
          // Close the tab
          await chrome.tabs.remove(tab.id);
          
          // Update progress
          processedCount++;
          
          // Send progress update
          chrome.tabs.sendMessage(sender.tab.id, {
            action: 'email-extraction-progress',
            processedUrls: processedCount,
            totalUrls: urls.length
          }).catch(() => {
            // Ignore errors, tab might be closed
          });
          
        } catch (error) {
          console.error(`[Background] Error extracting emails from ${url}:`, error);
          processedCount++;
        }
      });
      
      // Wait for batch to complete
      await Promise.all(promises);
    }
    
    sendResponse({
      success: true,
      emails: Array.from(allEmails)
    });
    
  } catch (error) {
    console.error('[Background] Email extraction error:', error);
    sendResponse({
      success: false,
      error: error.message
    });
  }
}

// Handle stop email extraction
function handleEmailExtractionStop(request, sender, sendResponse) {
  // In the current implementation, we don't have a way to stop mid-extraction
  // since we're using chrome.tabs API directly
  // For now, just send success response
  console.log('[Background] Email extraction stop requested');
  sendResponse({ success: true });
  return false;
}

// Handle page details start - open URL and inject selector
async function handlePageDetailsStart(request, sender, sendResponse) {
  console.log('[Background] Page details start request:', request);
  
  try {
    const { urls } = request;
    if (!urls || urls.length === 0) {
      sendResponse({ success: false, error: 'No URLs provided' });
      return;
    }
    
    // Store URLs for later extraction
    await StorageManager.save('pageDetailsUrls', urls);
    
    // Open the first URL in a new tab
    const tab = await chrome.tabs.create({ 
      url: urls[0],
      active: true 
    });
    
    // Wait for tab to load
    await new Promise((resolve) => {
      const listener = (tabId, changeInfo) => {
        if (tabId === tab.id && changeInfo.status === 'complete') {
          chrome.tabs.onUpdated.removeListener(listener);
          resolve();
        }
      };
      chrome.tabs.onUpdated.addListener(listener);
    });
    
    // Inject selector scripts
    await chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ["bundle/styles.css", "bundle/layers.css"],
    });
    
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["bundle/selector.bundle.js"],
    });
    
    // Wait a bit for script to initialize
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Initialize selector in page details mode
    await chrome.tabs.sendMessage(tab.id, {
      action: 'init-selector',
      mode: 'page-details'
    });
    
    sendResponse({ success: true });
    
  } catch (error) {
    console.error('[Background] Page details start error:', error);
    sendResponse({ success: false, error: error.message });
  }
}

// Handle page details highlighting
async function handlePageDetailsHighlight(request, sender, sendResponse) {
  console.log('[Background] Page details highlight request:', request);
  
  try {
    const { urls } = request.data || {};
    if (!urls || urls.length === 0) {
      sendResponse({ success: false, error: 'No URLs provided' });
      return;
    }
    
    // Store ALL URLs for later extraction (not just the selected one)
    // Get the full URL list from storage if needed
    const fullUrls = await StorageManager.retrieve('pageDetailsUrls') || urls;
    await StorageManager.save('pageDetailsUrls', fullUrls);
    await StorageManager.save('pageDetailsRequestingTabId', sender.tab.id);
    
    // Store the state that we're in page details mode
    await StorageManager.save('pageDetailsMode', true);
    
    // Open the selected URL (first URL in the array) in a new tab
    const newTab = await chrome.tabs.create({ 
      url: urls[0],
      active: true 
    });
    
    // Set a timeout for the entire operation
    const timeout = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Timeout waiting for page to load')), 30000)
    );
    
    try {
      // Wait for tab to load with timeout
      await Promise.race([
        new Promise((resolve) => {
          const listener = (tabId, changeInfo) => {
            if (tabId === newTab.id && changeInfo.status === 'complete') {
              chrome.tabs.onUpdated.removeListener(listener);
              resolve();
            }
          };
          chrome.tabs.onUpdated.addListener(listener);
        }),
        timeout
      ]);
    } catch (timeoutError) {
      console.error('[Background] Timeout waiting for page to load');
      await chrome.tabs.remove(newTab.id).catch(() => {});
      sendResponse({ success: false, error: 'Page load timeout' });
      return;
    }
    
    // Small delay to ensure page is fully rendered
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if tab still exists before injecting
    try {
      await chrome.tabs.get(newTab.id);
    } catch (error) {
      console.error('[Background] Tab was closed');
      sendResponse({ success: false, error: 'Tab was closed' });
      return;
    }
    
    // Inject CSS files
    try {
      await chrome.scripting.insertCSS({
        target: { tabId: newTab.id },
        files: ["bundle/layers.css", "bundle/styles.css"],
      });
    } catch (cssError) {
      console.error('[Background] CSS injection error:', cssError);
      // Continue anyway as CSS might not be critical
    }
    
    // Inject selector script
    try {
      await chrome.scripting.executeScript({
        target: { tabId: newTab.id },
        files: ["bundle/selector.bundle.js"],
      });
      
      console.log('[Background] Selector script injected successfully');
    } catch (scriptError) {
      console.error('[Background] Script injection error:', scriptError);
      await chrome.tabs.remove(newTab.id).catch(() => {});
      sendResponse({ success: false, error: 'Failed to inject selector script' });
      return;
    }
    
    // No need to send initialization message as the script auto-initializes
    // Just wait a bit for it to be ready
    await new Promise(resolve => setTimeout(resolve, 500));
    
        sendResponse({ success: true });
    
  } catch (error) {
    console.error('[Background] Page details highlight error:', error);
    sendResponse({ success: false, error: error.message });
  }
}

// Handle page details element selection
async function handlePageDetailsSelected(request, sender, sendResponse) {
  console.log('[Background] Page details element selected:', request);
  
  try {
    // Store selected elements
    await StorageManager.save('pageDetailsElements', request.data?.selectors || []);
  
    // Get the original requesting tab ID
    const requestingTabId = await StorageManager.retrieve('pageDetailsRequestingTabId');
    
    if (requestingTabId) {
      // Send selected elements back to the original tab
      chrome.tabs.sendMessage(requestingTabId, {
        action: 'page-details-selected-complete',
        data: request.data
      }, (response) => {
        if (chrome.runtime.lastError) {
          console.error('[Background] Failed to send elements to requesting tab:', chrome.runtime.lastError);
        }
      });
    }
    
    // Close the selector tab
    chrome.tabs.remove(sender.tab.id, () => {
      if (chrome.runtime.lastError) {
        console.error('[Background] Failed to close selector tab:', chrome.runtime.lastError);
      }
  });
  
  sendResponse({ success: true });
    
  } catch (error) {
    console.error('[Background] Page details selection error:', error);
    sendResponse({ success: false, error: error.message });
  }
}

// Handle page details extraction
async function handlePageDetailsExtract(request, sender, sendResponse) {
  console.log('[Background] Page details extract request:', request);
  
  try {
    const { urls, elements, config } = request;
    
    // Create extraction processor with proper configuration
    const processor = new ExtractionProcessor({
      request: {
        urls: urls,
        elements: elements,
        parallelTabs: config?.parallelTabs || 1,
        maxWaitTime: config?.maxWaitTime || 30,
        delayBeforeExtract: config?.delayBeforeExtract || 0
      }
    });
    
    // Store processor
    activeExtractions.set('page-details', processor);
    
    // Initialize and wait for completion
    processor.initialize();
    
    // Send status updates to the requesting tab
    const statusInterval = setInterval(() => {
      const status = processor.getStatus();
      
      // Send status update to the tab
      chrome.tabs.sendMessage(sender.tab.id, {
        action: 'status-update-extract',
        data: status
      }).catch(() => {
        // Tab might be closed
      });
      
      const allComplete = status.every(item => 
        ['complete', 'failed', 'cancelled'].includes(item.status)
      );
      
      if (allComplete) {
        clearInterval(statusInterval);
        
        // Get outcomes and format results
        const outcomes = processor.getOutcomes();
        console.log('[Background] Extraction outcomes:', outcomes);
    const results = [];
        
    for (const [url, outcome] of outcomes) {
          console.log('[Background] Processing outcome for URL:', url, 'Outcome:', outcome);
          if (outcome && Array.isArray(outcome)) {
        const row = { url };
            outcome.forEach(item => {
              if (item?.name && item?.data) {
                row[item.name] = item.data;
              }
        });
            if (Object.keys(row).length > 1) {
        results.push(row);
      }
    }
        }
        
        console.log('[Background] Final extraction results:', results);
        activeExtractions.delete('page-details');
    sendResponse({ success: true, results });
      }
    }, 1000);
    
    // Cleanup after timeout
    setTimeout(() => {
      clearInterval(statusInterval);
      if (activeExtractions.has('page-details')) {
        activeExtractions.delete('page-details');
        sendResponse({ success: false, error: 'Extraction timeout' });
      }
    }, (config?.maxWaitTime || 30) * 1000 * urls.length);
    
  } catch (error) {
    console.error('[Background] Page details extraction error:', error);
    sendResponse({ success: false, error: error.message });
  } finally {
    activeExtractions.delete('page-details');
  }
}

// Handle stop page details extraction
function handleStopPageDetailsExtraction(request, sender, sendResponse) {
  const processor = activeExtractions.get('page-details');
  if (processor) {
    processor.cancel();
    activeExtractions.delete('page-details');
  }
  sendResponse({ success: true });
}

export default setupMessageHandlers;
export { startExtraction, activeExtractions }; 