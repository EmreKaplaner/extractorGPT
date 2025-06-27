import { RegexPatterns } from '../constants/index.js';

class ExtractionProcessor {
  constructor({ request }) {
    if (!request) {
      throw new Error('Request object is required');
    }

    if (!request.urls || !Array.isArray(request.urls) || request.urls.length === 0) {
      throw new Error('Request must contain a non-empty array of URLs');
    }

    if (!request.elements || !Array.isArray(request.elements) || request.elements.length === 0) {
      throw new Error('Request must contain a non-empty array of elements to extract');
    }

    if (!request.parallelTabs || request.parallelTabs < 1) {
      throw new Error('Request must specify a positive number of parallel tabs');
    }

    this.urls = request.urls;
    this.elements = request.elements;
    this.parallelTabs = request.parallelTabs;
    this.maxWaitTime = request.maxWaitTime || 30;
    this.delayBeforeExtract = request.delayBeforeExtract || 0;
    
    this.requestQueue = [...this.urls];
    this.activeCount = 0;
    this.requestStatus = new Map();
    this.outcomes = new Map();
    this.cancelled = false;
    this.activeTabs = new Set();
  }

  // Get visual progress bar
  getProgressBar() {
    const total = this.urls.length;
    const completed = this.urls.length - this.requestQueue.length - this.activeCount;
    const active = this.activeCount;
    
    const completedBars = Math.floor((completed / total) * 30);
    const activeBars = Math.floor((active / total) * 30);
    const remainingBars = 30 - completedBars - activeBars;
    
    const progressBar = '█'.repeat(completedBars) + '▒'.repeat(activeBars) + '░'.repeat(remainingBars);
    
    return `[PROGRESS]${progressBar} ${completed}/${total} (${active} active)`;
  }

  // Initialize processing
  initialize() {
    this.urls.forEach(url => {
      this.requestStatus.set(url, {
        status: 'idle',
        outcome: null
      });
    });
    
    this.processQueue();
  }

  // Process URL queue
  async processQueue() {
    while ((this.requestQueue.length > 0 && this.activeCount < this.parallelTabs) && !this.cancelled) {
      const url = this.requestQueue.shift();
      this.activeCount++;
      this.requestStatus.set(url, {
        status: 'running',
        outcome: null
      });
      
      this.processRequest(url)
        .then(outcome => {
          this.requestStatus.set(url, {
            status: 'complete',
            outcome: outcome
          });
          this.outcomes.set(url, outcome);
        })
        .catch(error => {
          this.requestStatus.set(url, {
            status: 'failed',
            outcome: error.message
          });
          this.outcomes.set(url, {
            status: 'failed',
            error: error.message
          });
        })
        .finally(() => {
          this.activeCount--;
          this.processQueue();
        });
    }
  }

  // Process single URL
  async processRequest(url) {
    if (this.cancelled) {
      throw new Error('Processing has been cancelled.');
    }

    return new Promise((resolve, reject) => {
      let tabId = null;
      let timeoutId = null;
      let intervalId = null;
      let extractionComplete = false;
      let extractionStarted = false;

      const cleanup = () => {
        if (intervalId) {
          clearInterval(intervalId);
          intervalId = null;
        }
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }
        if (tabId !== null) {
          this.activeTabs.delete(tabId);
          chrome.tabs.remove(tabId, () => {
            if (chrome.runtime.lastError) {
              // Tab might already be closed
            }
          });
        }
      };

      // Extraction function to be injected
      const extractData = (elements) => {
        const results = [];
        
        elements.forEach(element => {
          // Handle email extraction
          if (element.type === 'emails') {
            const bodyText = document.body.innerHTML.replace(/\s+/g, ' ').trim();
            // Use the regex pattern directly since it's injected as a function
            const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
            const matches = bodyText.match(emailRegex) || [];
            
            const uniqueEmails = {};
            const validEmails = matches
              .map(email => email.toLowerCase())
              .filter(email => {
                if (!email || email.length > 254) return false;
                if (email.charAt(0) === '.' || email.charAt(email.length - 1) === '.') return false;
                
                emailRegex.lastIndex = 0;
                if (!emailRegex.test(email)) return false;
                
                if (!uniqueEmails[email]) {
                  uniqueEmails[email] = true;
                  return true;
                }
                return false;
              });
            
            if (validEmails.length) {
              results.push({
                id: element.elementId,
                name: element.name,
                type: element.type,
                data: validEmails,
                selectorType: 'regex'
              });
            } else {
              results.push({
                id: element.elementId,
                name: element.name,
                type: element.type,
                data: null,
                error: 'No emails found'
              });
            }
            return;
          }
          
          // Handle element extraction with selectors
          const sortedSelectors = element.selectors.sort((a, b) => b.order - a.order);
          let extractedData = null;
          
          for (const selector of sortedSelectors) {
            let targetElement;
            
            try {
              const elements = document.querySelectorAll(selector.selector);
              targetElement = elements[selector.index];
            } catch (e) {
              continue;
            }
            
            if (targetElement) {
              switch (element.type) {
                case 'text':
                  extractedData = targetElement.innerText?.trim();
                  break;
                case 'image-url':
                  extractedData = targetElement.src;
                  break;
                case 'link-url':
                  extractedData = targetElement.href;
                  break;
              }
              
              if (extractedData) {
                results.push({
                  id: element.elementId,
                  name: element.name,
                  type: element.type,
                  data: extractedData,
                  selectorType: selector.type
                });
                break;
              }
            }
          }
          
          if (!extractedData) {
            results.push({
              id: element.elementId,
              name: element.name,
              type: element.type,
              selector: null,
              data: null,
              error: 'No data found'
            });
          }
        });
        
        return results;
      };

      // Check and extract data periodically
      const checkAndExtract = () => {
        if (extractionComplete) {
          clearInterval(intervalId);
          return;
        }

        if (!extractionStarted) {
          // Wait for delay before starting extraction
          setTimeout(() => {
            if (!extractionComplete) {
              extractionStarted = true;
            }
          }, this.delayBeforeExtract * 1000);
          return;
        }

        // Execute extraction script
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          func: extractData,
          args: [this.elements]
        }, (results) => {
          if (extractionComplete) return;
          
          if (chrome.runtime.lastError) {
            extractionComplete = true;
            clearInterval(intervalId);
            reject(new Error(chrome.runtime.lastError.message));
            cleanup();
            return;
          }

          if (results && results[0] && results[0].result) {
            const extractedData = results[0].result;
            
            // Check if we have valid data (not all errors)
            const hasValidData = extractedData.some(item => item.data !== null);
            
            if (hasValidData) {
              extractionComplete = true;
              clearInterval(intervalId);
              resolve(extractedData);
              cleanup();
            }
          }
        });
      };

      // Create tab and start extraction
      chrome.tabs.create({ url: url, active: false }, (tab) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
          return;
        }

        tabId = tab.id;
        this.activeTabs.add(tabId);

        // Listen for tab updates
        chrome.tabs.onUpdated.addListener(function listener(updatedTabId, changeInfo) {
          if (updatedTabId === tabId && changeInfo.status === 'complete') {
            chrome.tabs.onUpdated.removeListener(listener);

            // Set timeout for max wait time
            timeoutId = setTimeout(() => {
              reject(new Error('Max wait time exceeded'));
              cleanup();
            }, this.maxWaitTime * 1000);

            // Start checking for extraction
            intervalId = setInterval(checkAndExtract, 1000);
          }
        });
      });
    });
  }

  // Cancel all processing
  cancel() {
    this.cancelled = true;
    this.requestQueue = [];
    
    // Close all active tabs
    this.activeTabs.forEach(tabId => {
      chrome.tabs.remove(tabId, () => {
        if (chrome.runtime.lastError) {
          // Tab might already be closed
        }
      });
    });
    
    this.activeTabs.clear();
    
    // Update status for pending requests
    this.requestStatus.forEach((status, url) => {
      if (status.status === 'running' || status.status === 'idle') {
        this.requestStatus.set(url, {
          status: 'cancelled',
          outcome: 'Processing was cancelled.'
        });
      }
    });
  }

  // Get status of all requests
  getStatus() {
    const statusArray = Array.from(this.requestStatus.entries()).map(([url, status]) => ({
      url,
      ...status
    }));
    
    return statusArray;
  }

  // Get extraction outcomes
  getOutcomes() {
    return this.outcomes;
  }
}

export default ExtractionProcessor; 