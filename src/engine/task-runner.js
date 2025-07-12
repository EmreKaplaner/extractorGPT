/**
 * WebPeeler TaskRunner - EXACT COPY from WebPeeler's service_beautified.js
 * This is the parallel URL processing system that creates Chrome tabs for each URL
 */

// Shuffle function for request queue (from WebPeeler)
function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
  }

  /**
 * WebPeeler Parallel URL Processing TaskRunner - EXACT COPY
 */
class WebPeelerTaskRunner {
  constructor(config) {
    const request = config.request;
    
    // Validation exactly as in WebPeeler
    if (!request) throw new Error("Request object is required");
    if (!request.urls || !Array.isArray(request.urls) || request.urls.length === 0) {
      throw new Error("Request must contain a non-empty array of URLs");
    }
    if (!request.elements || !Array.isArray(request.elements) || request.elements.length === 0) {
      throw new Error("Request must contain a non-empty array of elements to extract");
    }
    if (!request.parallelTabs || request.parallelTabs < 1) {
      throw new Error("Request must specify a positive number of parallel tabs");
    }

    // Initialize properties exactly as in WebPeeler
    this.urls = request.urls;
    this.elements = request.elements;
    this.parallelTabs = request.parallelTabs;
    this.maxWaitTime = request.maxWaitTime || 30;
    this.delayBeforeExtract = request.delayBeforeExtract || 0;
    this.requestQueue = shuffle(this.urls); // WebPeeler shuffles URLs
    this.activeCount = 0;
    this.requestStatus = new Map();
    this.outcomes = new Map();
    this.cancelled = false;
    this.activeTabs = new Set();
  }

  /**
   * Get progress bar - EXACT COPY from WebPeeler
   */
  getProgressBar() {
    const total = this.urls.length;
    const completed = this.urls.length - this.requestQueue.length - this.activeCount;
    const active = this.activeCount;
    const completedBlocks = Math.floor(completed / total * 30);
    const activeBlocks = Math.floor(active / total * 30);
    const remainingBlocks = 30 - completedBlocks - activeBlocks;
    const progressBar = "█".repeat(completedBlocks) + "▒".repeat(activeBlocks) + "░".repeat(remainingBlocks);
    return `[PROGRESS]${progressBar} ${completed}/${total} (${active} active)`;
  }

  /**
   * Initialize processing - EXACT COPY from WebPeeler
   */
  initialize() {
    this.urls.forEach(url => {
      this.requestStatus.set(url, {
        status: "idle",
        outcome: null
        });
    });
    this.processQueue();
  }

  /**
   * Process queue - EXACT COPY from WebPeeler (simplified from generator)
   */
  async processQueue() {
    while (this.requestQueue.length > 0 && this.activeCount < this.parallelTabs && !this.cancelled) {
      const url = this.requestQueue.shift();
      this.activeCount++;
      this.requestStatus.set(url, {
        status: "running",
        outcome: null
      });

      this.processRequest(url).then(result => {
        this.requestStatus.set(url, {
          status: "complete",
          outcome: result
        });
        this.outcomes.set(url, result);
      }).catch(error => {
        this.requestStatus.set(url, {
          status: "failed",
          outcome: error.message
        });
        this.outcomes.set(url, {
          status: "failed",
          error: error.message
        });
      }).finally(() => {
        this.activeCount--;
        this.processQueue();
      });
    }
  }

  /**
   * Process single request - EXACT COPY from WebPeeler
   */
  async processRequest(url) {
    if (this.cancelled) {
      throw new Error("Processing has been cancelled.");
    }

    return new Promise((resolve, reject) => {
      let tabId = null;
      let timeout = null;
      let interval = null;
      let completed = false;
      let delayComplete = false;

      const cleanup = () => {
        if (interval) {
          clearInterval(interval);
          interval = null;
        }
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        if (tabId !== null) {
          this.activeTabs.delete(tabId);
          chrome.tabs.remove(tabId, () => {
            if (chrome.runtime.lastError) {
              // Ignore errors when removing tabs
            }
          });
      }
      };

      // WebPeeler's exact extraction function
      const extractionFunction = (elements) => {
        const results = [];
        elements.forEach(element => {
          if (element.type === "emails") {
            // WebPeeler's exact email extraction
            const htmlContent = document.body.innerHTML.replace(/\s+/g, " ").trim();
            const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
            const matches = htmlContent.match(emailRegex) || [];
            const seen = {};
            const cleanEmails = matches.map(email => email.toLowerCase()).filter(email => {
              return !!email && 
                     !(email.length > 254) && 
                     email.charAt(0) !== "." && 
                     email.charAt(email.length - 1) !== "." && 
                     (emailRegex.lastIndex = 0, emailRegex.test(email)) && 
                     !seen[email] && 
                     (seen[email] = true);
            });

            if (cleanEmails.length) {
              results.push({
                id: element.elementId,
                name: element.name,
                type: element.type,
                data: cleanEmails,
                selectorType: "regex"
              });
            } else {
              results.push({
                id: element.elementId,
                name: element.name,
                type: element.type,
                data: null,
                error: "No emails found"
              });
            }
            return;
  }

          // Regular element extraction with WebPeeler's exact logic
          const selectors = element.selectors.sort((a, b) => b.order - a.order);
          let extractedData = null;

          for (let i = 0; i < selectors.length; i++) {
            const selector = selectors[i];
            let targetElement;
            
            try {
              targetElement = document.querySelectorAll(selector.selector)[selector.index];
            } catch (e) {
              continue;
            }

            if (targetElement) {
              switch (element.type) {
                case "text":
                  extractedData = targetElement.innerText?.trim();
                  break;
                case "image-url":
                  extractedData = targetElement.src;
                  break;
                case "link-url":
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
              error: "No data found"
            });
          }
        });

        return results;
      };

      // WebPeeler's exact execution logic
      const executeExtraction = () => {
        if (completed) {
          clearInterval(interval);
          return;
        }

        if (delayComplete) {
          chrome.scripting.executeScript({
            target: { tabId: tabId },
            func: extractionFunction,
            args: [this.elements]
          }, (results) => {
            if (!completed) {
              if (chrome.runtime.lastError) {
                completed = true;
                clearInterval(interval);
                reject(new Error(chrome.runtime.lastError.message));
                cleanup();
        return;
      }

              if (results && results[0] && results[0].result && 
                  Object.keys(results[0].result).length && 
                  !Object.values(results[0].result).every(item => item.error != null)) {
                const result = results[0].result;
                if (result) {
                  completed = true;
                  clearInterval(interval);
                  resolve(result);
                  cleanup();
                }
              }
            }
          });
        } else {
          setTimeout(() => {
            if (!completed) {
              delayComplete = true;
            }
          }, this.delayBeforeExtract * 1000);
        }
      };

      // Create tab and start processing - exactly as in WebPeeler
      chrome.tabs.create({
        url: url,
        active: false
      }, (tab) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
          return;
        }

        tabId = tab.id;
        this.activeTabs.add(tabId);

        chrome.tabs.onUpdated.addListener(function onTabUpdated(updatedTabId, changeInfo) {
          if (updatedTabId === tabId && changeInfo.status === "complete") {
            chrome.tabs.onUpdated.removeListener(onTabUpdated);
            
            timeout = setTimeout(() => {
              reject(new Error("Max wait time exceeded"));
              cleanup();
            }, this.maxWaitTime * 1000);

            interval = setInterval(executeExtraction, 1000);
          }
        });
      });
    });
  }

  /**
   * Cancel processing - EXACT COPY from WebPeeler
   */
  cancel() {
    this.cancelled = true;
    this.requestQueue = [];
    
    this.activeTabs.forEach(tabId => {
      chrome.tabs.remove(tabId, () => {
        if (chrome.runtime.lastError) {
          // Ignore errors
        }
      });
    });
    this.activeTabs.clear();

    this.requestStatus.forEach((status, url) => {
      if (status.status === "running" || status.status === "idle") {
        this.requestStatus.set(url, {
          status: "cancelled",
          outcome: "Processing was cancelled."
      });
    }
    });
  }

  /**
   * Get status - EXACT COPY from WebPeeler
   */
  getStatus() {
    return Array.from(this.requestStatus.entries()).map(([url, status]) => {
    return {
        url,
        ...status
      };
    });
  }

  /**
   * Get outcomes - EXACT COPY from WebPeeler
   */
  getOutcomes() {
    return this.outcomes;
  }
}

// Export the WebPeeler TaskRunner
export { WebPeelerTaskRunner as TaskRunner };
export default WebPeelerTaskRunner; 