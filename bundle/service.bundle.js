(() => {
  // src/engine/constants.js
  var U = Object.freeze({
    TEXT: "text",
    IMAGE_URL: "image-url",
    LINK_URL: "link-url",
    EMAIL: "email"
  });
  var ExtractionActions = Object.freeze({
    EXTRACT: "EXTRACT",
    EXTRACT_TEXT: "EXTRACT_TEXT",
    EXTRACT_HTML: "EXTRACT_HTML",
    EXTRACT_ATTRIBUTE: "EXTRACT_ATTRIBUTE",
    EXTRACT_IMAGE_URL: "EXTRACT_IMAGE_URL",
    EXTRACT_LINK_URL: "EXTRACT_LINK_URL"
  });

  // src/constants/index.js
  var MessageActions = {
    DOWNLOAD_IMAGES: "download-images",
    DOWNLOAD_FILE: "download-file",
    REQUEST_CLIPBOARD_PERMISSIONS: "request-clipboard-permissions",
    PAGE_DETAILS_HIGHLIGHT: "page-details-highlight",
    PAGE_DETAILS_SELECTED: "page-details-selected",
    PAGE_DETAILS_EXTRACT: "page-details-extract",
    STOP_PAGE_DETAILS_EXTRACTION: "stop-page-details-extraction",
    EXTRACT_EMAILS: "extract-emails",
    EXTRACT_EMAILS_STOP: "extract-emails-stop",
    STATUS_UPDATE_EXTRACT: "status-update-extract",
    STATUS_UPDATE_EXTRACT_EMAILS: "status-update-extract-emails"
  };

  // src/background/storage-manager.js
  var StorageManager = class {
    /**
     * WebPeeler exact save method
     */
    static save(key, value) {
      try {
        if (chrome && chrome.storage && chrome.storage.local) {
          chrome.storage.local.set({
            [key]: value
          }, function() {
            chrome.runtime.lastError;
          });
        }
      } catch (error) {
      }
    }
    /**
     * WebPeeler exact getAllKeys method
     */
    static async getAllKeys() {
      return new Promise(function(resolve, reject) {
        try {
          if (chrome && chrome.storage && chrome.storage.local) {
            chrome.storage.local.get(null, function(result) {
              const keys = Object.keys(result);
              resolve(keys);
            });
          } else {
            resolve([]);
          }
        } catch (error) {
          resolve([]);
        }
      });
    }
    /**
     * WebPeeler exact retrieve method
     */
    static async retrieve(key) {
      return new Promise(function(resolve, reject) {
        try {
          if (chrome && chrome.storage && chrome.storage.local) {
            chrome.storage.local.get([key], function(result) {
              if (result[key] !== void 0) {
                resolve(result[key]);
              } else {
                resolve(null);
              }
            });
          } else {
            resolve(null);
          }
        } catch (error) {
          resolve(null);
        }
      });
    }
    /**
     * WebPeeler exact remove method
     */
    static async remove(key) {
      return new Promise(function(resolve, reject) {
        try {
          if (chrome && chrome.storage && chrome.storage.local) {
            chrome.storage.local.remove(key, function() {
              resolve();
            });
          } else {
            resolve();
          }
        } catch (error) {
          resolve();
        }
      });
    }
    /**
     * WebPeeler exact removeAny method (pattern matching removal)
     */
    static async removeAny(pattern) {
      const self2 = this;
      return new Promise(function(resolve, reject) {
        async function removeMatching() {
          try {
            if (chrome && chrome.storage && chrome.storage.local) {
              const keys = await self2.getAllKeys();
              const matchingKeys = keys.filter(function(key) {
                return key.includes(pattern);
              });
              if (matchingKeys.length === 0) {
                resolve();
                return;
              }
              chrome.storage.local.remove(matchingKeys, function() {
                resolve();
              });
            } else {
              resolve();
            }
          } catch (error) {
            resolve();
          }
        }
        removeMatching();
      });
    }
    /**
     * Enhanced clearAll method (improvement over WebPeeler)
     */
    static async clearAll() {
      return new Promise(function(resolve, reject) {
        try {
          if (chrome && chrome.storage && chrome.storage.local) {
            chrome.storage.local.clear(function() {
              if (chrome.runtime.lastError) {
                console.error("Error clearing storage:", chrome.runtime.lastError.message);
                reject(new Error(chrome.runtime.lastError.message));
              } else {
                resolve();
              }
            });
          } else {
            resolve();
          }
        } catch (error) {
          console.error("Storage clear error:", error);
          reject(error);
        }
      });
    }
    /**
     * Enhanced getMultiple method (improvement over WebPeeler)
     */
    static async getMultiple(keys) {
      return new Promise(function(resolve, reject) {
        try {
          if (chrome && chrome.storage && chrome.storage.local) {
            chrome.storage.local.get(keys, function(result) {
              if (chrome.runtime.lastError) {
                console.error("Error getting multiple keys:", chrome.runtime.lastError.message);
                reject(new Error(chrome.runtime.lastError.message));
              } else {
                resolve(result);
              }
            });
          } else {
            resolve({});
          }
        } catch (error) {
          console.error("Storage getMultiple error:", error);
          reject(error);
        }
      });
    }
    /**
     * Enhanced saveMultiple method (improvement over WebPeeler)
     */
    static async saveMultiple(items) {
      return new Promise(function(resolve, reject) {
        try {
          if (chrome && chrome.storage && chrome.storage.local) {
            chrome.storage.local.set(items, function() {
              if (chrome.runtime.lastError) {
                console.error("Error saving multiple items:", chrome.runtime.lastError.message);
                reject(new Error(chrome.runtime.lastError.message));
              } else {
                resolve();
              }
            });
          } else {
            resolve();
          }
        } catch (error) {
          console.error("Storage saveMultiple error:", error);
          reject(error);
        }
      });
    }
    /**
     * Enhanced storage listener (improvement over WebPeeler)
     */
    static addListener(callback) {
      if (chrome && chrome.storage && chrome.storage.onChanged) {
        chrome.storage.onChanged.addListener(function(changes, areaName) {
          if (areaName === "local") {
            callback(changes);
          }
        });
      }
    }
    /**
     * Enhanced storage size monitoring (improvement over WebPeeler)
     */
    static async getBytesInUse(keys = null) {
      return new Promise(function(resolve, reject) {
        try {
          if (chrome && chrome.storage && chrome.storage.local && chrome.storage.local.getBytesInUse) {
            chrome.storage.local.getBytesInUse(keys, function(bytesInUse) {
              if (chrome.runtime.lastError) {
                console.error("Error getting bytes in use:", chrome.runtime.lastError.message);
                reject(new Error(chrome.runtime.lastError.message));
              } else {
                resolve(bytesInUse);
              }
            });
          } else {
            resolve(0);
          }
        } catch (error) {
          console.error("Storage getBytesInUse error:", error);
          reject(error);
        }
      });
    }
  };
  var storage_manager_default = StorageManager;

  // src/background/permission-manager.js
  var PermissionManager = class {
    /**
     * WebPeeler exact all URLs permission handler - EXACT COPY of function O
     */
    static requestAllUrlsPermission({ onSuccess, onFailure }) {
      chrome.permissions.contains({
        permissions: [],
        origins: ["<all_urls>"]
      }, function(hasPermission) {
        if (hasPermission) {
          storage_manager_default.save("permissionsGranted", true);
          onSuccess();
        } else {
          chrome.permissions.request({
            permissions: [],
            origins: ["<all_urls>"]
          }, function(granted) {
            const error = chrome.runtime.lastError;
            if (error) {
              if (error.message.includes("user gesture")) {
                chrome.runtime.openOptionsPage();
              }
              onFailure();
              return;
            }
            if (granted) {
              storage_manager_default.save("permissionsGranted", true);
              onSuccess();
            } else {
              onFailure();
            }
          });
        }
      });
    }
    /**
     * WebPeeler-style clipboard permission handler
     */
    static requestClipboardPermission({ onSuccess, onFailure }) {
      chrome.permissions.contains({
        permissions: ["clipboardWrite"]
      }, function(hasPermission) {
        if (hasPermission) {
          storage_manager_default.save("permissionsClipboardGranted", true);
          onSuccess();
        } else {
          chrome.permissions.request({
            permissions: ["clipboardWrite"]
          }, function(granted) {
            if (chrome.runtime.lastError) {
              onFailure();
              return;
            }
            if (granted) {
              storage_manager_default.save("permissionsClipboardGranted", true);
              onSuccess();
            } else {
              onFailure();
            }
          });
        }
      });
    }
    /**
     * WebPeeler-style downloads permission handler
     */
    static requestDownloadsPermission({ onSuccess, onFailure }) {
      chrome.permissions.contains({
        permissions: ["downloads"]
      }, function(hasPermission) {
        if (hasPermission) {
          onSuccess();
        } else {
          chrome.permissions.request({
            permissions: ["downloads"]
          }, function(granted) {
            if (chrome.runtime.lastError) {
              onFailure();
              return;
            }
            if (granted) {
              onSuccess();
            } else {
              onFailure();
            }
          });
        }
      });
    }
    /**
     * Enhanced permission checking methods (improvements over WebPeeler)
     */
    static async hasAllUrlsPermission() {
      return new Promise(function(resolve) {
        chrome.permissions.contains({
          permissions: [],
          origins: ["<all_urls>"]
        }, function(hasPermission) {
          resolve(hasPermission);
        });
      });
    }
    static async hasClipboardPermission() {
      return new Promise(function(resolve) {
        chrome.permissions.contains({
          permissions: ["clipboardWrite"]
        }, function(hasPermission) {
          resolve(hasPermission);
        });
      });
    }
    static async hasDownloadsPermission() {
      return new Promise(function(resolve) {
        chrome.permissions.contains({
          permissions: ["downloads"]
        }, function(hasPermission) {
          resolve(hasPermission);
        });
      });
    }
    /**
     * Enhanced permission management methods (improvements over WebPeeler)
     */
    static async removePermission(permission) {
      return new Promise(function(resolve) {
        chrome.permissions.remove({
          permissions: [permission]
        }, function(removed) {
          resolve(removed);
        });
      });
    }
    static async getAllPermissions() {
      return new Promise(function(resolve) {
        chrome.permissions.getAll(function(permissions) {
          resolve(permissions);
        });
      });
    }
    static async requestMultiplePermissions(permissions, origins = []) {
      return new Promise(function(resolve) {
        chrome.permissions.request({
          permissions,
          origins
        }, function(granted) {
          if (chrome.runtime.lastError) {
            resolve(false);
          } else {
            resolve(granted);
          }
        });
      });
    }
    static async hasMultiplePermissions(permissions, origins = []) {
      return new Promise(function(resolve) {
        chrome.permissions.contains({
          permissions,
          origins
        }, function(hasAll) {
          resolve(hasAll);
        });
      });
    }
  };
  var permission_manager_default = PermissionManager;

  // src/background/extraction-processor.js
  function shuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  var ExtractionProcessor = class {
    constructor({ request }) {
      if (!request) {
        throw new Error("Request object is required");
      }
      if (!request.urls || !Array.isArray(request.urls) || request.urls.length === 0) {
        throw new Error("Request must contain a non-empty array of URLs");
      }
      if (!request.elements || !Array.isArray(request.elements) || request.elements.length === 0) {
        throw new Error("Request must contain a non-empty array of elements to extract");
      }
      if (!request.parallelTabs || request.parallelTabs < 1) {
        throw new Error("Request must specify a positive number of parallel tabs");
      }
      this.urls = request.urls;
      this.elements = request.elements;
      this.parallelTabs = request.parallelTabs;
      this.maxWaitTime = request.maxWaitTime || 30;
      this.delayBeforeExtract = request.delayBeforeExtract || 0;
      this.requestQueue = shuffle(this.urls);
      this.activeCount = 0;
      this.requestStatus = /* @__PURE__ */ new Map();
      this.outcomes = /* @__PURE__ */ new Map();
      this.cancelled = false;
      this.activeTabs = /* @__PURE__ */ new Set();
    }
    /**
     * WebPeeler exact progress bar with █▒░ indicators
     */
    getProgressBar() {
      const total = this.urls.length;
      const completed = this.urls.length - this.requestQueue.length - this.activeCount;
      const active = this.activeCount;
      const remaining = this.requestQueue.length;
      const completedBars = Math.floor(completed / total * 30);
      const activeBars = Math.floor(active / total * 30);
      const remainingBars = 30 - completedBars - activeBars;
      const progressBar = "\u2588".repeat(completedBars) + "\u2592".repeat(activeBars) + "\u2591".repeat(remainingBars);
      return `[PROGRESS]${progressBar} ${completed}/${total} (${active} active)`;
    }
    /**
     * WebPeeler exact initialization
     */
    initialize() {
      const self2 = this;
      this.urls.forEach(function(url) {
        self2.requestStatus.set(url, {
          status: "idle",
          outcome: null
        });
      });
      this.processQueue();
    }
    /**
     * WebPeeler exact queue processing with generator pattern
     */
    async processQueue() {
      const self2 = this;
      async function* processGenerator() {
        while (self2.requestQueue.length > 0 && self2.activeCount < self2.parallelTabs && !self2.cancelled) {
          const url = self2.requestQueue.shift();
          self2.activeCount++;
          self2.requestStatus.set(url, {
            status: "running",
            outcome: null
          });
          self2.processRequest(url).then(function(outcome) {
            self2.requestStatus.set(url, {
              status: "complete",
              outcome
            });
            self2.outcomes.set(url, outcome);
          }).catch(function(error) {
            self2.requestStatus.set(url, {
              status: "failed",
              outcome: error.message
            });
            self2.outcomes.set(url, {
              status: "failed",
              error: error.message
            });
          }).finally(function() {
            self2.activeCount--;
            self2.processQueue();
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
        throw new Error("Processing has been cancelled.");
      }
      const self2 = this;
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
            self2.activeTabs.delete(tabId);
            chrome.tabs.remove(tabId, function() {
              if (chrome.runtime.lastError) {
              }
            });
          }
        };
        const extractData = function(elements) {
          const extractEmails = function(text) {
            const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
            return text.match(emailRegex) || [];
          };
          if (!Array.isArray(elements)) {
            return [];
          }
          const results = [];
          try {
            elements.forEach(function(element, elementIndex) {
              if (element.type === "emails") {
                const bodyText = document.body.innerHTML.replace(/\s+/g, " ").trim();
                const matches = extractEmails(bodyText);
                const uniqueEmails = {};
                const validEmails = matches.map(function(email) {
                  return email.toLowerCase();
                }).filter(function(email) {
                  if (!email || email.length > 254)
                    return false;
                  if (email.charAt(0) === "." || email.charAt(email.length - 1) === ".")
                    return false;
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
                  selectorType: "regex"
                });
                return;
              }
              if (!element.selectors || element.selectors.length === 0) {
                results.push({
                  id: element.elementId,
                  name: element.name,
                  type: element.type,
                  data: null,
                  error: "No selectors provided"
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
                    const elementIndex2 = Math.min(selector.index || 0, foundElements.length - 1);
                    const targetElement = foundElements[elementIndex2];
                    if (targetElement) {
                      let data = null;
                      switch (element.type) {
                        case "text":
                          data = targetElement.innerText?.trim() || null;
                          break;
                        case "image-url":
                          data = targetElement.src || targetElement.getAttribute("data-src") || null;
                          break;
                        case "link-url":
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
                  continue;
                }
              }
              results.push({
                id: element.elementId,
                name: element.name,
                type: element.type,
                data: extractedData,
                selectorType: usedSelector?.type || "unknown",
                error: extractedData ? null : "No data found with any strategy"
              });
            });
          } catch (error) {
            return results;
          }
          return results;
        };
        const checkForResults = function() {
          if (extractionComplete) {
            return;
          }
          if (!ready) {
            setTimeout(function() {
              if (!extractionComplete) {
                ready = true;
              }
            }, self2.delayBeforeExtract * 1e3);
            return;
          }
          chrome.scripting.executeScript({
            target: { tabId },
            func: extractData,
            args: [self2.elements]
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
        chrome.tabs.create({ url, active: false }, function(tab) {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
            return;
          }
          tabId = tab.id;
          self2.activeTabs.add(tabId);
          chrome.tabs.onUpdated.addListener(function listener(updatedTabId, changeInfo) {
            if (updatedTabId === tabId && changeInfo.status === "complete") {
              chrome.tabs.onUpdated.removeListener(listener);
              timeoutId = setTimeout(function() {
                if (!extractionComplete) {
                  extractionComplete = true;
                  reject(new Error("Max wait time exceeded"));
                  cleanup();
                }
              }, self2.maxWaitTime * 1e3);
              intervalId = setInterval(checkForResults, 1e3);
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
      const self2 = this;
      this.activeTabs.forEach(function(tabId) {
        chrome.tabs.remove(tabId, function() {
          if (chrome.runtime.lastError) {
          }
        });
      });
      this.activeTabs.clear();
      this.requestStatus.forEach(function(status, url) {
        if (status.status === "running" || status.status === "idle") {
          self2.requestStatus.set(url, {
            status: "cancelled",
            outcome: "Processing was cancelled."
          });
        }
      });
    }
    /**
     * WebPeeler exact status reporting
     */
    getStatus() {
      const statusArray = [];
      const self2 = this;
      this.requestStatus.forEach(function(status, url) {
        statusArray.push({
          url,
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
  };
  var extraction_processor_default = ExtractionProcessor;

  // src/background/image-downloader.js
  var ImageDownloader = class {
    /**
     * WebPeeler exact image download implementation - function S
     */
    static async downloadImages({ images, folder = "panda-images" }) {
      if (!images || images.length === 0) {
        return;
      }
      const sanitizeFilename = function(name) {
        return name.replace(/[^a-z0-9]/gi, "_").toLowerCase();
      };
      const downloadBatch = function(imageUrls) {
        const timestamp = Date.now();
        imageUrls.forEach(function(url, index) {
          let extension = url.split(".").pop().split(/[#?]/)[0];
          if (!extension || extension.length > 5) {
            extension = "png";
          }
          const sanitizedFolder = sanitizeFilename(folder);
          const filename = `${sanitizedFolder}/${timestamp}_${index}.${extension}`;
          chrome.downloads.download({
            url,
            filename,
            saveAs: false
          }, function(downloadId) {
            if (chrome.runtime.lastError) {
            }
          });
        });
      };
      const processBatches = async function() {
        const batchSize = 10;
        for (let i = 0; i < images.length; i += batchSize) {
          const batch = images.slice(i, i + batchSize);
          downloadBatch(batch);
          await new Promise(function(resolve) {
            setTimeout(resolve, 500);
          });
        }
      };
      await processBatches();
    }
    /**
     * Enhanced single image download (not in WebPeeler, but useful)
     */
    static async downloadImage({ url, filename }) {
      return new Promise(function(resolve, reject) {
        chrome.downloads.download({
          url,
          filename,
          saveAs: false
        }, function(downloadId) {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
          } else {
            resolve(downloadId);
          }
        });
      });
    }
    /**
     * WebPeeler-compatible single file download
     */
    static async downloadFile(data) {
      return new Promise(function(resolve, reject) {
        chrome.downloads.download(data, function(downloadId) {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
          } else {
            resolve(downloadId);
          }
        });
      });
    }
    /**
     * Enhanced download monitoring (improvement over WebPeeler)
     */
    static monitorDownload(downloadId) {
      return new Promise(function(resolve, reject) {
        const checkDownload = function() {
          chrome.downloads.search({ id: downloadId }, function(downloads) {
            if (downloads.length === 0) {
              reject(new Error("Download not found"));
              return;
            }
            const download = downloads[0];
            if (download.state === "complete") {
              resolve(download);
            } else if (download.state === "interrupted") {
              reject(new Error(`Download interrupted: ${download.error}`));
            } else {
              setTimeout(checkDownload, 100);
            }
          });
        };
        checkDownload();
      });
    }
    /**
     * Enhanced download history (improvement over WebPeeler)
     */
    static async getDownloadHistory(query = {}) {
      return new Promise(function(resolve) {
        chrome.downloads.search(query, function(downloads) {
          resolve(downloads);
        });
      });
    }
    /**
     * Enhanced download history clearing (improvement over WebPeeler)
     */
    static async clearDownloadHistory() {
      const downloads = await this.getDownloadHistory();
      downloads.forEach(function(download) {
        chrome.downloads.erase({ id: download.id });
      });
    }
    /**
     * Enhanced download control methods (improvements over WebPeeler)
     */
    static async pauseDownload(downloadId) {
      return new Promise(function(resolve, reject) {
        chrome.downloads.pause(downloadId, function() {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
          } else {
            resolve();
          }
        });
      });
    }
    static async resumeDownload(downloadId) {
      return new Promise(function(resolve, reject) {
        chrome.downloads.resume(downloadId, function() {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
          } else {
            resolve();
          }
        });
      });
    }
    static async cancelDownload(downloadId) {
      return new Promise(function(resolve, reject) {
        chrome.downloads.cancel(downloadId, function() {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
          } else {
            resolve();
          }
        });
      });
    }
    static async openDownload(downloadId) {
      return new Promise(function(resolve, reject) {
        chrome.downloads.open(downloadId, function() {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
          } else {
            resolve();
          }
        });
      });
    }
    static showDownloadInFolder(downloadId) {
      chrome.downloads.show(downloadId);
    }
    static async acceptDanger(downloadId) {
      return new Promise(function(resolve, reject) {
        chrome.downloads.acceptDanger(downloadId, function() {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
          } else {
            resolve();
          }
        });
      });
    }
  };
  var image_downloader_default = ImageDownloader;

  // src/background/message-handlers.js
  var activeExtractions = /* @__PURE__ */ new Map();
  function setupMessageHandlers() {
    if (typeof chrome === "undefined" || !chrome.runtime) {
      console.error("Chrome runtime API not available");
      return;
    }
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      console.log("Background received message:", request);
      switch (request.action) {
        case "extract-data":
          handleExtractData(request, sender, sendResponse);
          break;
        case "save-results":
          handleSaveResults(request, sender, sendResponse);
          break;
        case "get-settings":
          handleGetSettings(request, sender, sendResponse);
          break;
        case "update-settings":
          handleUpdateSettings(request, sender, sendResponse);
          break;
        case "download-data":
          handleDownloadData(request, sender, sendResponse);
          break;
        case "element-selected":
          handleElementSelected(request, sender, sendResponse);
          break;
        case "content-load-error":
          console.error("Content script failed to load:", request.error);
          sendResponse({ status: "acknowledged" });
          break;
        case MessageActions.EXTRACT_EMAILS:
          handleEmailExtraction(request, sender, sendResponse);
          return true;
        case MessageActions.EXTRACT_EMAILS_STOP:
          handleEmailExtractionStop(request, sender, sendResponse);
          break;
        case "page-details-start":
          handlePageDetailsStart(request, sender, sendResponse);
          return true;
        case "page-details-highlight":
          handlePageDetailsHighlight(request, sender, sendResponse);
          return true;
        case "page-details-selected":
          handlePageDetailsSelected(request, sender, sendResponse);
          break;
        case "page-details-extract":
          handlePageDetailsExtract(request, sender, sendResponse);
          return true;
        case "stop-page-details-extraction":
          handleStopPageDetailsExtraction(request, sender, sendResponse);
          break;
        default:
          console.warn("Unknown message action:", request.action);
          sendResponse({ status: "unknown-action" });
      }
      return true;
    });
    chrome.runtime.onConnect.addListener((port) => {
      console.log("Port connected:", port.name);
      port.onDisconnect.addListener(() => {
        if (chrome.runtime.lastError) {
          console.warn("Port disconnected with error:", chrome.runtime.lastError.message);
        }
      });
    });
    if (chrome.runtime.onSuspend) {
      chrome.runtime.onSuspend.addListener(() => {
        activeExtractions.forEach((processor) => processor.cancel());
        activeExtractions.clear();
      });
    }
  }
  function handleExtractData(request, sender, sendResponse) {
    const { url, selector, options } = request.data || {};
    console.log("Extracting data from:", url, "with selector:", selector);
    setTimeout(() => {
      sendResponse({
        status: "success",
        data: {
          extractedCount: 0,
          results: []
        }
      });
    }, 100);
  }
  function handleSaveResults(request, sender, sendResponse) {
    const { results } = request.data || {};
    console.log("Saving results:", results);
    chrome.storage.local.set({
      lastResults: results,
      lastSaveTime: (/* @__PURE__ */ new Date()).toISOString()
    }, () => {
      if (chrome.runtime.lastError) {
        sendResponse({
          status: "error",
          error: chrome.runtime.lastError.message
        });
      } else {
        sendResponse({
          status: "success"
        });
      }
    });
  }
  function handleGetSettings(request, sender, sendResponse) {
    chrome.storage.sync.get(["settings"], (result) => {
      if (chrome.runtime.lastError) {
        sendResponse({
          status: "error",
          error: chrome.runtime.lastError.message
        });
      } else {
        sendResponse({
          status: "success",
          settings: result.settings || {}
        });
      }
    });
  }
  function handleUpdateSettings(request, sender, sendResponse) {
    const { settings } = request.data || {};
    chrome.storage.sync.set({ settings }, () => {
      if (chrome.runtime.lastError) {
        sendResponse({
          status: "error",
          error: chrome.runtime.lastError.message
        });
      } else {
        sendResponse({
          status: "success"
        });
      }
    });
  }
  function handleDownloadData(request, sender, sendResponse) {
    const { data, format, filename } = request.data || {};
    console.log("Downloading data in format:", format);
    let blob;
    let mimeType;
    switch (format) {
      case "csv":
        mimeType = "text/csv";
        blob = new Blob([data], { type: mimeType });
        break;
      case "json":
        mimeType = "application/json";
        blob = new Blob([JSON.stringify(data, null, 2)], { type: mimeType });
        break;
      default:
        sendResponse({
          status: "error",
          error: "Unsupported format"
        });
        return;
    }
    const url = URL.createObjectURL(blob);
    chrome.downloads.download({
      url,
      filename: filename || `extraction_${Date.now()}.${format}`,
      saveAs: true
    }, (downloadId) => {
      URL.revokeObjectURL(url);
      if (chrome.runtime.lastError) {
        sendResponse({
          status: "error",
          error: chrome.runtime.lastError.message
        });
      } else {
        sendResponse({
          status: "success",
          downloadId
        });
      }
    });
  }
  function handleElementSelected(request, sender, sendResponse) {
    const { extractables, element } = request.data || {};
    console.log("Element selected:", element, "Extractables:", extractables);
    chrome.storage.local.set({
      lastSelectedElement: {
        element,
        extractables,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        tabId: sender.tab?.id,
        url: sender.tab?.url
      }
    }, () => {
      sendResponse({
        status: "success"
      });
    });
  }
  async function handleEmailExtraction(request, sender, sendResponse) {
    console.log("[Background] Starting email extraction for URLs:", request.urls);
    const { urls, config } = request;
    const parallelTabs = config?.parallelTabs || 1;
    const maxWaitTime = (config?.maxWaitTime || 30) * 1e3;
    const delayBeforeExtract = (config?.delayBeforeExtract || 0) * 1e3;
    const allEmails = /* @__PURE__ */ new Set();
    let processedCount = 0;
    try {
      for (let i = 0; i < urls.length; i += parallelTabs) {
        const batch = urls.slice(i, i + parallelTabs);
        const promises = batch.map(async (url) => {
          try {
            const tab = await chrome.tabs.create({ url, active: false });
            await new Promise((resolve, reject) => {
              const startTime = Date.now();
              const checkTab = (tabId, changeInfo) => {
                if (tabId === tab.id && changeInfo.status === "complete") {
                  chrome.tabs.onUpdated.removeListener(checkTab);
                  resolve();
                } else if (Date.now() - startTime > maxWaitTime) {
                  chrome.tabs.onUpdated.removeListener(checkTab);
                  reject(new Error("Tab load timeout"));
                }
              };
              chrome.tabs.onUpdated.addListener(checkTab);
            });
            if (delayBeforeExtract > 0) {
              await new Promise((resolve) => setTimeout(resolve, delayBeforeExtract));
            }
            const results = await chrome.scripting.executeScript({
              target: { tabId: tab.id },
              func: () => {
                const emails = /* @__PURE__ */ new Set();
                const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
                const walker = document.createTreeWalker(
                  document.body,
                  NodeFilter.SHOW_TEXT,
                  {
                    acceptNode: (node2) => {
                      const parent = node2.parentElement;
                      if (parent && (parent.tagName === "SCRIPT" || parent.tagName === "STYLE")) {
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
                    matches.forEach((email) => emails.add(email.toLowerCase()));
                  }
                }
                document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
                  const email = link.href.replace("mailto:", "").split("?")[0];
                  if (email && emailRegex.test(email)) {
                    emails.add(email.toLowerCase());
                  }
                });
                return Array.from(emails);
              }
            });
            if (results[0]?.result) {
              results[0].result.forEach((email) => allEmails.add(email));
            }
            await chrome.tabs.remove(tab.id);
            processedCount++;
            chrome.tabs.sendMessage(sender.tab.id, {
              action: "email-extraction-progress",
              processedUrls: processedCount,
              totalUrls: urls.length
            }).catch(() => {
            });
          } catch (error) {
            console.error(`[Background] Error extracting emails from ${url}:`, error);
            processedCount++;
          }
        });
        await Promise.all(promises);
      }
      sendResponse({
        success: true,
        emails: Array.from(allEmails)
      });
    } catch (error) {
      console.error("[Background] Email extraction error:", error);
      sendResponse({
        success: false,
        error: error.message
      });
    }
  }
  function handleEmailExtractionStop(request, sender, sendResponse) {
    console.log("[Background] Email extraction stop requested");
    sendResponse({ success: true });
    return false;
  }
  async function handlePageDetailsStart(request, sender, sendResponse) {
    console.log("[Background] Page details start request:", request);
    try {
      const { urls } = request;
      if (!urls || urls.length === 0) {
        sendResponse({ success: false, error: "No URLs provided" });
        return;
      }
      await storage_manager_default.save("pageDetailsUrls", urls);
      const tab = await chrome.tabs.create({
        url: urls[0],
        active: true
      });
      await new Promise((resolve) => {
        const listener = (tabId, changeInfo) => {
          if (tabId === tab.id && changeInfo.status === "complete") {
            chrome.tabs.onUpdated.removeListener(listener);
            resolve();
          }
        };
        chrome.tabs.onUpdated.addListener(listener);
      });
      await chrome.scripting.insertCSS({
        target: { tabId: tab.id },
        files: ["bundle/styles.css", "bundle/layers.css"]
      });
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["bundle/selector.bundle.js"]
      });
      await new Promise((resolve) => setTimeout(resolve, 500));
      await chrome.tabs.sendMessage(tab.id, {
        action: "init-selector",
        mode: "page-details"
      });
      sendResponse({ success: true });
    } catch (error) {
      console.error("[Background] Page details start error:", error);
      sendResponse({ success: false, error: error.message });
    }
  }
  async function handlePageDetailsHighlight(request, sender, sendResponse) {
    console.log("[Background] Page details highlight request:", request);
    try {
      const { urls } = request.data || {};
      if (!urls || urls.length === 0) {
        throw new Error("No URLs provided");
      }
      console.log("[Background] Storing requesting tab ID:", sender.tab.id);
      await storage_manager_default.save("pageDetailsRequestingTabId", sender.tab.id);
      const url = urls[0];
      console.log("[Background] Creating new tab for URL:", url);
      const newTab = await chrome.tabs.create({
        url,
        active: true
      });
      console.log("[Background] Created new tab:", newTab.id);
      const tabLoadPromise = new Promise((resolve, reject) => {
        let timeoutId;
        const listener = (tabId, changeInfo) => {
          if (tabId === newTab.id && changeInfo.status === "complete") {
            console.log("[Background] Tab loaded, injecting selector");
            chrome.tabs.onUpdated.removeListener(listener);
            clearTimeout(timeoutId);
            resolve();
          }
        };
        chrome.tabs.onUpdated.addListener(listener);
        timeoutId = setTimeout(() => {
          chrome.tabs.onUpdated.removeListener(listener);
          reject(new Error("Tab load timeout"));
        }, 3e4);
      });
      await tabLoadPromise;
      await chrome.scripting.executeScript({
        target: { tabId: newTab.id },
        files: ["bundle/selector.bundle.js"]
      });
      console.log("[Background] Selector script injected successfully");
      sendResponse({ success: true });
    } catch (error) {
      console.error("[Background] Page details highlight error:", error);
      sendResponse({ success: false, error: error.message });
    }
  }
  async function handlePageDetailsSelected(request, sender, sendResponse) {
    console.log("[Background] Page details element selected:", request);
    console.log("[Background] Request data:", request.data);
    console.log("[Background] Selectors received:", request.data?.selectors);
    try {
      const selectors = request.data?.selectors || [];
      console.log("[Background] Storing selectors:", selectors);
      await storage_manager_default.save("pageDetailsElements", selectors);
      const requestingTabId = await storage_manager_default.retrieve("pageDetailsRequestingTabId");
      console.log("[Background] Retrieved requesting tab ID:", requestingTabId);
      if (requestingTabId) {
        console.log("[Background] Sending selectors back to requesting tab:", requestingTabId);
        console.log("[Background] Sending data:", request.data);
        chrome.tabs.sendMessage(requestingTabId, {
          action: "page-details-selected-complete",
          data: request.data
        }, (response) => {
          if (chrome.runtime.lastError) {
            console.error("[Background] Failed to send elements to requesting tab:", chrome.runtime.lastError);
          } else {
            console.log("[Background] Successfully sent elements to requesting tab");
          }
        });
      } else {
        console.error("[Background] No requesting tab ID found");
      }
      console.log("[Background] Closing selector tab:", sender.tab.id);
      chrome.tabs.remove(sender.tab.id, () => {
        if (chrome.runtime.lastError) {
          console.error("[Background] Failed to close selector tab:", chrome.runtime.lastError);
        } else {
          console.log("[Background] Successfully closed selector tab");
        }
      });
      sendResponse({ success: true });
    } catch (error) {
      console.error("[Background] Page details selection error:", error);
      sendResponse({ success: false, error: error.message });
    }
  }
  async function handlePageDetailsExtract(request, sender, sendResponse) {
    console.log("[Background] Page details extract request:", request);
    console.log("[Background] Request data:", request.data);
    try {
      const { urls, elements, parallelTabs, maxWaitTime, delayBeforeExtract } = request.data || {};
      console.log("[Background] URLs to extract from:", urls);
      console.log("[Background] Elements/selectors for extraction:", elements);
      console.log("[Background] Config - parallelTabs:", parallelTabs, "maxWaitTime:", maxWaitTime, "delayBeforeExtract:", delayBeforeExtract);
      const config = { parallelTabs, maxWaitTime, delayBeforeExtract };
      if (!elements || elements.length === 0) {
        console.error("[Background] No elements provided for extraction");
        sendResponse({ success: false, error: "No elements selected for extraction" });
        return;
      }
      console.log("[Background] Creating extraction processor with:");
      console.log("[Background] - URLs:", urls);
      console.log("[Background] - Elements:", elements);
      console.log("[Background] - Config:", config);
      const processor = new extraction_processor_default({
        request: {
          urls,
          elements,
          parallelTabs: config?.parallelTabs || 1,
          maxWaitTime: config?.maxWaitTime || 30,
          delayBeforeExtract: config?.delayBeforeExtract || 0
        }
      });
      activeExtractions.set("page-details", processor);
      processor.initialize();
      let responseSent = false;
      processor.onComplete = (results) => {
        console.log("[Background] Extraction completed");
        console.log("[Background] Raw extraction results:", results);
        console.log("[Background] Results length:", results?.length);
        console.log("[Background] Results detail:", JSON.stringify(results, null, 2));
        if (!responseSent) {
          responseSent = true;
          const formattedResults = results?.map((urlResult, index) => {
            console.log("[Background] Processing result for URL:", urls[index]);
            console.log("[Background] URL result data:", urlResult);
            if (!urlResult || !urlResult.data || urlResult.data.length === 0) {
              console.warn("[Background] No data extracted for URL:", urls[index]);
              return {
                url: urls[index],
                data: {},
                error: "No data extracted"
              };
            }
            const resultData = { url: urls[index] };
            urlResult.data.forEach((item) => {
              if (item.data !== null && item.data !== void 0) {
                resultData[item.name || `field_${item.id}`] = item.data;
              }
            });
            console.log("[Background] Formatted result data:", resultData);
            return resultData;
          }) || [];
          console.log("[Background] Final formatted results:", formattedResults);
          console.log("[Background] Sending success response with results");
          sendResponse({
            success: true,
            results: formattedResults
          });
        }
        activeExtractions.delete("page-details");
      };
      const statusInterval = setInterval(() => {
        if (responseSent) {
          clearInterval(statusInterval);
          return;
        }
        const status = processor.getStatus();
        chrome.tabs.sendMessage(sender.tab.id, {
          action: "status-update-extract",
          data: status
        }).catch(() => {
        });
        const allComplete = status.every(
          (item) => ["complete", "failed", "cancelled"].includes(item.status)
        );
        if (allComplete) {
          clearInterval(statusInterval);
          responseSent = true;
          const outcomes = processor.getOutcomes();
          console.log("[Background] Extraction outcomes:", outcomes);
          const results = [];
          for (const [url, outcome] of outcomes) {
            console.log("[Background] Processing outcome for URL:", url, "Outcome:", outcome);
            const row = { url };
            if (outcome && Array.isArray(outcome)) {
              outcome.forEach((item) => {
                if (item?.name && item?.data) {
                  row[item.name] = item.data;
                }
              });
            }
            results.push(row);
          }
          console.log("[Background] Final extraction results:", results);
          activeExtractions.delete("page-details");
          try {
            sendResponse({ success: true, results });
          } catch (error) {
            console.error("[Background] Error sending response:", error);
          }
        }
      }, 1e3);
      setTimeout(() => {
        if (!responseSent) {
          clearInterval(statusInterval);
          responseSent = true;
          activeExtractions.delete("page-details");
          sendResponse({ success: false, error: "Extraction timeout" });
        }
      }, (config?.maxWaitTime || 30) * 1e3 * urls.length);
    } catch (error) {
      console.error("[Background] Page details extraction error:", error);
      activeExtractions.delete("page-details");
      sendResponse({ success: false, error: error.message });
    }
  }
  function handleStopPageDetailsExtraction(request, sender, sendResponse) {
    const processor = activeExtractions.get("page-details");
    if (processor) {
      processor.cancel();
      activeExtractions.delete("page-details");
    }
    sendResponse({ success: true });
  }
  var message_handlers_default = setupMessageHandlers;

  // src/analytics/event-tracker.js
  var EventTracker = class {
    constructor() {
      console.log("[EXTRACTOR-GPT] Analytics disabled - using no-op implementation");
    }
    // All methods are no-ops that just log in development
    trackPageView(page, properties = {}) {
      console.debug("[Analytics] Page view:", page, properties);
    }
    trackUserAction(action, properties = {}) {
      console.debug("[Analytics] User action:", action, properties);
    }
    trackError(error, context = "") {
      console.debug("[Analytics] Error:", error, context);
    }
    trackExtraction(type, properties = {}) {
      console.debug("[Analytics] Extraction:", type, properties);
    }
    track(eventType, properties = {}) {
      console.debug("[Analytics] Track:", eventType, properties);
    }
    async sendAnalytics(event) {
    }
    async flushQueue() {
    }
    async getSessionId() {
      return "local-session-" + Date.now();
    }
    async getUserId() {
      return "local-user";
    }
    getBrowserInfo() {
      return {
        name: "Chrome",
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform
      };
    }
    generateId() {
      return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
    trackExtractionStarted({ urls, elements, type }) {
      console.debug("[Analytics] Extraction started:", { urls, elements, type });
    }
    trackExtractionCompleted({ urls, elements, type, duration, rowCount }) {
      console.debug("[Analytics] Extraction completed:", { urls, elements, type, duration, rowCount });
    }
    trackExport({ format, rowCount }) {
      console.debug("[Analytics] Export:", { format, rowCount });
    }
    trackFeatureUsage(feature) {
      console.debug("[Analytics] Feature usage:", feature);
    }
    async setUserId(userId) {
      console.debug("[Analytics] Set user ID:", userId);
    }
    async clearUserId() {
      console.debug("[Analytics] Clear user ID");
    }
    trackTiming({ category, variable, time, label }) {
      console.debug("[Analytics] Timing:", { category, variable, time, label });
    }
  };
  var eventTracker = new EventTracker();
  var eventTrackerWrapper = {
    trackPageView: (pageName) => eventTracker.trackPageView(pageName),
    trackExtractionStarted: (data) => eventTracker.trackExtractionStarted(data),
    trackExtractionCompleted: (data) => eventTracker.trackExtractionCompleted(data),
    trackExport: (data) => eventTracker.trackExport(data),
    trackError: (data) => eventTracker.trackError(data),
    trackFeatureUsage: (feature) => eventTracker.trackFeatureUsage(feature),
    trackUserAction: (action, data) => eventTracker.trackUserAction(action, data),
    setUserId: async (userId) => await eventTracker.setUserId(userId),
    clearUserId: async () => await eventTracker.clearUserId(),
    trackTiming: (data) => eventTracker.trackTiming(data)
  };
  var event_tracker_default = eventTrackerWrapper;

  // src/service-worker.js
  var tabInjectionStatus = /* @__PURE__ */ new Map();
  var injectContentScripts = async (tab) => {
    const tabId = tab.id;
    if (tabInjectionStatus.get(tabId) === "injecting") {
      console.log("[SERVICE-WORKER] Already injecting scripts for tab", tabId);
      return;
    }
    try {
      tabInjectionStatus.set(tabId, "checking");
      const response = await chrome.tabs.sendMessage(tabId, { action: "ping" }).catch(() => null);
      if (response && response.status === "pong") {
        console.log("[SERVICE-WORKER] Content script already loaded for tab", tabId, ", sending open message...");
        tabInjectionStatus.set(tabId, "loaded");
        try {
          const openResponse = await chrome.tabs.sendMessage(tabId, { action: "open" });
          console.log("[SERVICE-WORKER] Open message sent successfully, response:", openResponse);
        } catch (error) {
          console.error("[SERVICE-WORKER] Error sending open message:", error);
        }
        return;
      }
    } catch (error) {
      console.log("[SERVICE-WORKER] Content script not loaded, will inject...");
    }
    console.log("[SERVICE-WORKER] Injecting scripts for tab", tabId);
    tabInjectionStatus.set(tabId, "injecting");
    try {
      await chrome.scripting.insertCSS({
        target: { tabId },
        files: ["bundle/layers.css", "bundle/styles.css"]
      });
      console.log("[SERVICE-WORKER] CSS injected successfully");
      await chrome.scripting.executeScript({
        target: { tabId },
        files: ["bundle/main.bundle.js"]
      });
      console.log("[SERVICE-WORKER] JavaScript injected successfully");
      await new Promise((resolve) => setTimeout(resolve, 200));
      try {
        const openResponse = await chrome.tabs.sendMessage(tabId, { action: "open" });
        console.log("[SERVICE-WORKER] Open message sent successfully after injection, response:", openResponse);
        tabInjectionStatus.set(tabId, "loaded");
      } catch (error) {
        console.error("[SERVICE-WORKER] Error sending open message after injection:", error);
        tabInjectionStatus.set(tabId, "error");
      }
    } catch (error) {
      console.error("[SERVICE-WORKER] Error injecting scripts:", error);
      tabInjectionStatus.set(tabId, "error");
      chrome.notifications.create({
        type: "basic",
        iconUrl: "assets/icon256.png",
        title: "ExtractorGPT Error",
        message: "Failed to inject scripts. Please refresh the page and try again."
      });
    }
  };
  (function() {
    "use strict";
    console.log("[EXTRACTOR-GPT] Service worker initializing...");
    self.__extractorGPT = {
      storage: new storage_manager_default(),
      activeExtractions: /* @__PURE__ */ new Map(),
      requestHighlightTabId: null
    };
    message_handlers_default();
    chrome.action.onClicked.addListener((tab) => {
      console.log("[SERVICE-WORKER] Extension icon clicked for tab:", tab.id);
      injectContentScripts(tab);
    });
    chrome.tabs.onRemoved.addListener((tabId) => {
      tabInjectionStatus.delete(tabId);
    });
    chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
      if (changeInfo.status === "loading") {
        tabInjectionStatus.delete(tabId);
      }
    });
    chrome.runtime.onInstalled.addListener((details) => {
      if (details.reason === "install") {
        event_tracker_default.trackUserAction("extension_installed", {
          version: chrome.runtime.getManifest().version
        });
      } else if (details.reason === "update") {
        event_tracker_default.trackUserAction("extension_updated", {
          previousVersion: details.previousVersion,
          version: chrome.runtime.getManifest().version
        });
      }
    });
    chrome.runtime.onStartup.addListener(() => {
      console.log("[EXTRACTOR-GPT] Extension startup - cleaning up");
      self.__extractorGPT.activeExtractions.clear();
    });
    console.log("[EXTRACTOR-GPT] Service worker initialized");
  })();
})();
//# sourceMappingURL=service.bundle.js.map
