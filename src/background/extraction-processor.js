import { RegexPatterns } from '../constants/index.js';

// WebPeeler-style shuffle function for request queue
function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * WebPeeler ExtractionProcessor - EXACT COPY of class b
 * Handles parallel URL processing across multiple tabs
 */
class ExtractionProcessor {
  constructor({ request }) {
    // WebPeeler exact validation
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

    // WebPeeler exact property initialization
    this.urls = request.urls;
    this.elements = request.elements;
    this.parallelTabs = request.parallelTabs;
    this.maxWaitTime = request.maxWaitTime || 30;
    this.delayBeforeExtract = request.delayBeforeExtract || 0;
    
    // WebPeeler exact data structures
    this.requestQueue = shuffle(this.urls); // WebPeeler shuffles URLs
    this.activeCount = 0;
    this.requestStatus = new Map();
    this.outcomes = new Map();
    this.cancelled = false;
    this.activeTabs = new Set();
  }

  /**
   * WebPeeler exact progress bar with █▒░ indicators
   */
  getProgressBar() {
    const total = this.urls.length;
    const completed = this.urls.length - this.requestQueue.length - this.activeCount;
    const active = this.activeCount;
    const remaining = this.requestQueue.length;
    
    const completedBars = Math.floor((completed / total) * 30);
    const activeBars = Math.floor((active / total) * 30);
    const remainingBars = 30 - completedBars - activeBars;
    
    const progressBar = '█'.repeat(completedBars) + '▒'.repeat(activeBars) + '░'.repeat(remainingBars);
    
    return `[PROGRESS]${progressBar} ${completed}/${total} (${active} active)`;
  }

  /**
   * WebPeeler exact initialization
   */
  initialize() {
    const self = this;
    this.urls.forEach(function(url) {
      self.requestStatus.set(url, {
        status: 'idle',
        outcome: null
      });
    });
    this.processQueue();
  }

  /**
   * WebPeeler exact queue processing with generator pattern
   */
  async processQueue() {
    const self = this;
    
    async function* processGenerator() {
      while (self.requestQueue.length > 0 && self.activeCount < self.parallelTabs && !self.cancelled) {
        const url = self.requestQueue.shift();
        self.activeCount++;
        self.requestStatus.set(url, {
          status: 'running',
          outcome: null
        });
        
        self.processRequest(url)
          .then(function(outcome) {
            self.requestStatus.set(url, {
              status: 'complete',
              outcome: outcome
            });
            self.outcomes.set(url, outcome);
          })
          .catch(function(error) {
            self.requestStatus.set(url, {
              status: 'failed',
              outcome: error.message
            });
            self.outcomes.set(url, {
              status: 'failed',
              error: error.message
            });
          })
          .finally(function() {
            self.activeCount--;
            self.processQueue(); // WebPeeler recursive call pattern
          });
        
        yield;
      }
    }
    
    const generator = processGenerator();
    generator.next();
  }

  /**
   * WebPeeler exact request processing with tab management
   */
  async processRequest(url) {
    if (this.cancelled) {
      throw new Error('Processing has been cancelled.');
    }

    const self = this;
    
    return new Promise(function(resolve, reject) {
      let tabId = null;
      let timeoutId = null;
      let intervalId = null;
      let extractionComplete = false;
      let ready = false;

      const cleanup = function() {
        if (intervalId) {
          clearInterval(intervalId);
          intervalId = null;
        }
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }
        if (tabId !== null) {
          self.activeTabs.delete(tabId);
          chrome.tabs.remove(tabId, function() {
            if (chrome.runtime.lastError) {
              // WebPeeler ignores tab close errors
            }
          });
        }
      };

      // WebPeeler exact extraction function injection
      const extractData = function(elements) {
        // WebPeeler extraction signature
        const extractEmails = function(text) {
          const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
          return text.match(emailRegex) || [];
        };
        
        // WebPeeler exact extraction logic
        if (!Array.isArray(elements)) {
          return [];
        }
        
        const results = [];
        
        try {
          elements.forEach(function(element, elementIndex) {
            // WebPeeler email extraction pattern
            if (element.type === 'emails') {
              const bodyText = document.body.innerHTML.replace(/\s+/g, ' ').trim();
              const matches = extractEmails(bodyText);
              
              const uniqueEmails = {};
              const validEmails = matches
                .map(function(email) { return email.toLowerCase(); })
                .filter(function(email) {
                  if (!email || email.length > 254) return false;
                  if (email.charAt(0) === '.' || email.charAt(email.length - 1) === '.') return false;
                  
                  if (!uniqueEmails[email]) {
                    uniqueEmails[email] = true;
                    return true;
                  }
                  return false;
                });
              
              results.push({
                id: element.elementId,
                name: element.name,
                type: element.type,
                data: validEmails.length ? validEmails : null,
                selectorType: 'regex'
              });
              return;
            }
            
            // WebPeeler selector-based extraction
            if (!element.selectors || element.selectors.length === 0) {
              results.push({
                id: element.elementId,
                name: element.name,
                type: element.type,
                data: null,
                error: 'No selectors provided'
              });
              return;
            }
            
            const sortedSelectors = element.selectors.sort(function(a, b) {
              return (b.order || 0) - (a.order || 0);
            });
            
            let extractedData = null;
            let usedSelector = null;
            
            for (let i = 0; i < sortedSelectors.length; i++) {
              const selector = sortedSelectors[i];
              
              try {
                const foundElements = document.querySelectorAll(selector.selector);
                
                if (foundElements.length > 0) {
                  const elementIndex = Math.min(selector.index || 0, foundElements.length - 1);
                  const targetElement = foundElements[elementIndex];
              
                  if (targetElement) {
                    let data = null;
                    
                    // WebPeeler exact data extraction
                    switch (element.type) {
                      case 'text':
                        data = targetElement.innerText?.trim() || null;
                        break;
                      case 'image-url':
                        data = targetElement.src || targetElement.getAttribute('data-src') || null;
                        break;
                      case 'link-url':
                        data = targetElement.href || null;
                        break;
                      default:
                        data = targetElement.innerText?.trim() || null;
                    }
                    
                    if (data) {
                      extractedData = data;
                      usedSelector = selector;
                      break;
                    }
                  }
                }
              } catch (e) {
                continue; // WebPeeler continues on selector errors
              }
            }
            
            results.push({
              id: element.elementId,
              name: element.name,
              type: element.type,
              data: extractedData,
              selectorType: usedSelector?.type || 'unknown',
              error: extractedData ? null : 'No data found with any strategy'
            });
          });
        } catch (error) {
          return results;
        }
        
        return results;
      };

      // WebPeeler exact polling mechanism
      const checkForResults = function() {
        if (extractionComplete) {
          return;
        }

        if (!ready) {
          setTimeout(function() {
            if (!extractionComplete) {
              ready = true;
            }
          }, self.delayBeforeExtract * 1000);
          return;
        }

        chrome.scripting.executeScript({
          target: { tabId: tabId },
          func: extractData,
          args: [self.elements]
        }, function(results) {
          if (extractionComplete) {
            return;
          }

          if (chrome.runtime.lastError) {
            extractionComplete = true;
            clearInterval(intervalId);
            reject(new Error(chrome.runtime.lastError.message));
            cleanup();
            return;
          }

          if (results && results[0] && results[0].result) {
            const result = results[0].result;
            
            if (result && result.length > 0) {
              // WebPeeler success criteria: not all results have errors
              const allHaveErrors = result.every(function(item) {
                return item.error != null;
              });
              
              if (!allHaveErrors) {
                extractionComplete = true;
                clearInterval(intervalId);
                resolve(result);
                cleanup();
              } else {
                extractionComplete = true;
                clearInterval(intervalId);
                resolve(result);
                cleanup();
              }
            } else {
              extractionComplete = true;
              clearInterval(intervalId);
              resolve([]);
              cleanup();
            }
          } else {
            extractionComplete = true;
            clearInterval(intervalId);
            resolve([]);
            cleanup();
          }
        });
      };

      // WebPeeler exact tab creation and management
      chrome.tabs.create({ url: url, active: false }, function(tab) {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
          return;
        }

        tabId = tab.id;
        self.activeTabs.add(tabId);

        chrome.tabs.onUpdated.addListener(function listener(updatedTabId, changeInfo) {
          if (updatedTabId === tabId && changeInfo.status === 'complete') {
            chrome.tabs.onUpdated.removeListener(listener);

            timeoutId = setTimeout(function() {
              if (!extractionComplete) {
                extractionComplete = true;
                reject(new Error('Max wait time exceeded'));
                cleanup();
              }
            }, self.maxWaitTime * 1000);

            intervalId = setInterval(checkForResults, 1000);
          }
        });
      });
    });
  }

  /**
   * WebPeeler exact cancellation
   */
  cancel() {
    this.cancelled = true;
    this.requestQueue = [];
    
    const self = this;
    this.activeTabs.forEach(function(tabId) {
      chrome.tabs.remove(tabId, function() {
        if (chrome.runtime.lastError) {
          // WebPeeler ignores errors
        }
      });
    });
    
    this.activeTabs.clear();
    
    this.requestStatus.forEach(function(status, url) {
      if (status.status === 'running' || status.status === 'idle') {
        self.requestStatus.set(url, {
          status: 'cancelled',
          outcome: 'Processing was cancelled.'
        });
      }
    });
  }

  /**
   * WebPeeler exact status reporting
   */
  getStatus() {
    const statusArray = [];
    const self = this;
    
    this.requestStatus.forEach(function(status, url) {
      statusArray.push({
        url: url,
        status: status.status,
        outcome: status.outcome
      });
    });
    
    return statusArray;
  }

  /**
   * WebPeeler exact outcomes retrieval
   */
  getOutcomes() {
    return this.outcomes;
  }
}

export default ExtractionProcessor; 