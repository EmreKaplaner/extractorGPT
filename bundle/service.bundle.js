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
  var StorageKeys = {
    PERMISSIONS_GRANTED: "permissionsGranted",
    PERMISSIONS_CLIPBOARD_GRANTED: "permissionsClipboardGranted",
    REQUEST_HIGHLIGHT_TAB_ID: "requestHighlightTabId",
    EXTRACT_SETTINGS: "extractSettings"
  };

  // src/background/storage-manager.js
  var StorageManager = class {
    // Save data to chrome.storage.local
    static save(key, value) {
      try {
        if (chrome && chrome.storage && chrome.storage.local) {
          chrome.storage.local.set({ [key]: value }, () => {
            if (chrome.runtime.lastError) {
              console.error("Storage save error:", chrome.runtime.lastError);
            }
          });
        }
      } catch (error) {
        console.error("Error saving to storage:", error);
      }
    }
    // Get all storage keys
    static async getAllKeys() {
      return new Promise((resolve) => {
        try {
          if (chrome && chrome.storage && chrome.storage.local) {
            chrome.storage.local.get(null, (items) => {
              const keys = Object.keys(items);
              resolve(keys);
            });
          } else {
            resolve([]);
          }
        } catch (error) {
          console.error("Error getting all keys:", error);
          resolve([]);
        }
      });
    }
    // Retrieve data by key
    static async retrieve(key) {
      return new Promise((resolve) => {
        try {
          if (chrome && chrome.storage && chrome.storage.local) {
            chrome.storage.local.get([key], (result) => {
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
          console.error("Error retrieving from storage:", error);
          resolve(null);
        }
      });
    }
    // Remove data by key
    static async remove(key) {
      return new Promise((resolve) => {
        try {
          if (chrome && chrome.storage && chrome.storage.local) {
            chrome.storage.local.remove(key, () => {
              resolve();
            });
          } else {
            resolve();
          }
        } catch (error) {
          console.error("Error removing from storage:", error);
          resolve();
        }
      });
    }
    // Remove any keys matching pattern
    static async removeAny(pattern) {
      return new Promise(async (resolve) => {
        try {
          if (chrome && chrome.storage && chrome.storage.local) {
            const allKeys = await this.getAllKeys();
            const keysToRemove = allKeys.filter((key) => key.includes(pattern));
            if (keysToRemove.length === 0) {
              resolve();
              return;
            }
            chrome.storage.local.remove(keysToRemove, () => {
              resolve();
            });
          } else {
            resolve();
          }
        } catch (error) {
          console.error("Error removing keys by pattern:", error);
          resolve();
        }
      });
    }
    // Clear all storage data
    static clearAll() {
      try {
        if (chrome && chrome.storage && chrome.storage.local) {
          chrome.storage.local.clear(() => {
            if (chrome.runtime.lastError) {
              console.error("Storage clear error:", chrome.runtime.lastError);
            }
          });
        }
      } catch (error) {
        console.error("Error clearing storage:", error);
      }
    }
    // Batch operations
    static async getMultiple(keys) {
      return new Promise((resolve) => {
        try {
          if (chrome && chrome.storage && chrome.storage.local) {
            chrome.storage.local.get(keys, (result) => {
              resolve(result);
            });
          } else {
            resolve({});
          }
        } catch (error) {
          console.error("Error getting multiple keys:", error);
          resolve({});
        }
      });
    }
    // Save multiple key-value pairs
    static saveMultiple(items) {
      try {
        if (chrome && chrome.storage && chrome.storage.local) {
          chrome.storage.local.set(items, () => {
            if (chrome.runtime.lastError) {
              console.error("Storage save multiple error:", chrome.runtime.lastError);
            }
          });
        }
      } catch (error) {
        console.error("Error saving multiple items:", error);
      }
    }
    // Listen for storage changes
    static addListener(callback) {
      if (chrome && chrome.storage && chrome.storage.onChanged) {
        chrome.storage.onChanged.addListener((changes, areaName) => {
          if (areaName === "local") {
            callback(changes);
          }
        });
      }
    }
    // Get storage size info
    static async getBytesInUse(keys = null) {
      return new Promise((resolve) => {
        try {
          if (chrome && chrome.storage && chrome.storage.local && chrome.storage.local.getBytesInUse) {
            chrome.storage.local.getBytesInUse(keys, (bytesInUse) => {
              resolve(bytesInUse);
            });
          } else {
            resolve(0);
          }
        } catch (error) {
          console.error("Error getting storage size:", error);
          resolve(0);
        }
      });
    }
  };
  var storage_manager_default = StorageManager;

  // src/background/permission-manager.js
  var PermissionManager = class {
    // Check and request all URLs permission
    static requestAllUrlsPermission({ onSuccess, onFailure }) {
      chrome.permissions.contains({
        permissions: [],
        origins: ["<all_urls>"]
      }, (hasPermission) => {
        if (hasPermission) {
          storage_manager_default.save(StorageKeys.PERMISSIONS_GRANTED, true);
          onSuccess();
        } else {
          chrome.permissions.request({
            permissions: [],
            origins: ["<all_urls>"]
          }, (granted) => {
            const error = chrome.runtime.lastError;
            if (error) {
              if (error.message.includes("user gesture")) {
                chrome.runtime.openOptionsPage();
              }
              onFailure();
              return;
            }
            if (granted) {
              storage_manager_default.save(StorageKeys.PERMISSIONS_GRANTED, true);
              onSuccess();
            } else {
              onFailure();
            }
          });
        }
      });
    }
    // Check and request clipboard write permission
    static requestClipboardPermission({ onSuccess, onFailure }) {
      chrome.permissions.contains({
        permissions: ["clipboardWrite"]
      }, (hasPermission) => {
        if (hasPermission) {
          storage_manager_default.save(StorageKeys.PERMISSIONS_CLIPBOARD_GRANTED, true);
          onSuccess();
        } else {
          chrome.permissions.request({
            permissions: ["clipboardWrite"]
          }, (granted) => {
            if (chrome.runtime.lastError) {
              onFailure();
              return;
            }
            if (granted) {
              storage_manager_default.save(StorageKeys.PERMISSIONS_CLIPBOARD_GRANTED, true);
              onSuccess();
            } else {
              onFailure();
            }
          });
        }
      });
    }
    // Check and request downloads permission
    static requestDownloadsPermission({ onSuccess, onFailure }) {
      chrome.permissions.contains({
        permissions: ["downloads"]
      }, (hasPermission) => {
        if (hasPermission) {
          onSuccess();
        } else {
          chrome.permissions.request({
            permissions: ["downloads"]
          }, (granted) => {
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
    // Check if has all URLs permission
    static async hasAllUrlsPermission() {
      return new Promise((resolve) => {
        chrome.permissions.contains({
          permissions: [],
          origins: ["<all_urls>"]
        }, (hasPermission) => {
          resolve(hasPermission);
        });
      });
    }
    // Check if has clipboard permission
    static async hasClipboardPermission() {
      return new Promise((resolve) => {
        chrome.permissions.contains({
          permissions: ["clipboardWrite"]
        }, (hasPermission) => {
          resolve(hasPermission);
        });
      });
    }
    // Check if has downloads permission
    static async hasDownloadsPermission() {
      return new Promise((resolve) => {
        chrome.permissions.contains({
          permissions: ["downloads"]
        }, (hasPermission) => {
          resolve(hasPermission);
        });
      });
    }
    // Remove permission
    static async removePermission(permission) {
      return new Promise((resolve) => {
        chrome.permissions.remove({
          permissions: [permission]
        }, (removed) => {
          resolve(removed);
        });
      });
    }
    // Get all granted permissions
    static async getAllPermissions() {
      return new Promise((resolve) => {
        chrome.permissions.getAll((permissions) => {
          resolve(permissions);
        });
      });
    }
    // Request multiple permissions at once
    static async requestMultiplePermissions(permissions, origins = []) {
      return new Promise((resolve) => {
        chrome.permissions.request({
          permissions,
          origins
        }, (granted) => {
          if (chrome.runtime.lastError) {
            resolve(false);
          } else {
            resolve(granted);
          }
        });
      });
    }
    // Check multiple permissions at once
    static async hasMultiplePermissions(permissions, origins = []) {
      return new Promise((resolve) => {
        chrome.permissions.contains({
          permissions,
          origins
        }, (hasAll) => {
          resolve(hasAll);
        });
      });
    }
  };
  var permission_manager_default = PermissionManager;

  // src/background/extraction-processor.js
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
      this.requestQueue = [...this.urls];
      this.activeCount = 0;
      this.requestStatus = /* @__PURE__ */ new Map();
      this.outcomes = /* @__PURE__ */ new Map();
      this.cancelled = false;
      this.activeTabs = /* @__PURE__ */ new Set();
    }
    // Get visual progress bar
    getProgressBar() {
      const total = this.urls.length;
      const completed = this.urls.length - this.requestQueue.length - this.activeCount;
      const active = this.activeCount;
      const completedBars = Math.floor(completed / total * 30);
      const activeBars = Math.floor(active / total * 30);
      const remainingBars = 30 - completedBars - activeBars;
      const progressBar = "\u2588".repeat(completedBars) + "\u2592".repeat(activeBars) + "\u2591".repeat(remainingBars);
      return `[PROGRESS]${progressBar} ${completed}/${total} (${active} active)`;
    }
    // Initialize processing
    initialize() {
      this.urls.forEach((url) => {
        this.requestStatus.set(url, {
          status: "idle",
          outcome: null
        });
      });
      this.processQueue();
    }
    // Process URL queue
    async processQueue() {
      while (this.requestQueue.length > 0 && this.activeCount < this.parallelTabs && !this.cancelled) {
        const url = this.requestQueue.shift();
        this.activeCount++;
        this.requestStatus.set(url, {
          status: "running",
          outcome: null
        });
        this.processRequest(url).then((outcome) => {
          this.requestStatus.set(url, {
            status: "complete",
            outcome
          });
          this.outcomes.set(url, outcome);
        }).catch((error) => {
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
    // Process single URL
    async processRequest(url) {
      if (this.cancelled) {
        throw new Error("Processing has been cancelled.");
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
              }
            });
          }
        };
        const extractData = (elements) => {
          const results = [];
          elements.forEach((element) => {
            if (element.type === "emails") {
              const bodyText = document.body.innerHTML.replace(/\s+/g, " ").trim();
              const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
              const matches = bodyText.match(emailRegex) || [];
              const uniqueEmails = {};
              const validEmails = matches.map((email) => email.toLowerCase()).filter((email) => {
                if (!email || email.length > 254)
                  return false;
                if (email.charAt(0) === "." || email.charAt(email.length - 1) === ".")
                  return false;
                emailRegex.lastIndex = 0;
                if (!emailRegex.test(email))
                  return false;
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
            const sortedSelectors = element.selectors.sort((a, b) => b.order - a.order);
            let extractedData = null;
            for (const selector of sortedSelectors) {
              let targetElement;
              try {
                const elements2 = document.querySelectorAll(selector.selector);
                targetElement = elements2[selector.index];
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
        const checkAndExtract = () => {
          if (extractionComplete) {
            clearInterval(intervalId);
            return;
          }
          if (!extractionStarted) {
            setTimeout(() => {
              if (!extractionComplete) {
                extractionStarted = true;
              }
            }, this.delayBeforeExtract * 1e3);
            return;
          }
          chrome.scripting.executeScript({
            target: { tabId },
            func: extractData,
            args: [this.elements]
          }, (results) => {
            if (extractionComplete)
              return;
            if (chrome.runtime.lastError) {
              extractionComplete = true;
              clearInterval(intervalId);
              reject(new Error(chrome.runtime.lastError.message));
              cleanup();
              return;
            }
            if (results && results[0] && results[0].result) {
              const extractedData = results[0].result;
              const hasValidData = extractedData.some((item) => item.data !== null);
              if (hasValidData) {
                extractionComplete = true;
                clearInterval(intervalId);
                resolve(extractedData);
                cleanup();
              }
            }
          });
        };
        chrome.tabs.create({ url, active: false }, (tab) => {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
            return;
          }
          tabId = tab.id;
          this.activeTabs.add(tabId);
          chrome.tabs.onUpdated.addListener(function listener(updatedTabId, changeInfo) {
            if (updatedTabId === tabId && changeInfo.status === "complete") {
              chrome.tabs.onUpdated.removeListener(listener);
              timeoutId = setTimeout(() => {
                reject(new Error("Max wait time exceeded"));
                cleanup();
              }, this.maxWaitTime * 1e3);
              intervalId = setInterval(checkAndExtract, 1e3);
            }
          });
        });
      });
    }
    // Cancel all processing
    cancel() {
      this.cancelled = true;
      this.requestQueue = [];
      this.activeTabs.forEach((tabId) => {
        chrome.tabs.remove(tabId, () => {
          if (chrome.runtime.lastError) {
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
  };
  var extraction_processor_default = ExtractionProcessor;

  // src/background/image-downloader.js
  var ImageDownloader = class {
    // Download multiple images
    static async downloadImages({ images, folder = "panda-images" }) {
      if (!images || images.length === 0) {
        return;
      }
      const sanitizeFilename = (name) => {
        return name.replace(/[^a-z0-9]/gi, "_").toLowerCase();
      };
      const downloadBatch = (imageUrls) => {
        const timestamp = Date.now();
        imageUrls.forEach((url, index) => {
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
          }, (downloadId) => {
            if (chrome.runtime.lastError) {
              console.error(`Error downloading ${url}:`, chrome.runtime.lastError);
            }
          });
        });
      };
      const batchSize = 10;
      const processBatches = async () => {
        for (let i = 0; i < images.length; i += batchSize) {
          const batch = images.slice(i, i + batchSize);
          downloadBatch(batch);
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      };
      await processBatches();
    }
    // Download single image
    static async downloadImage({ url, filename }) {
      return new Promise((resolve, reject) => {
        chrome.downloads.download({
          url,
          filename,
          saveAs: false
        }, (downloadId) => {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
          } else {
            resolve(downloadId);
          }
        });
      });
    }
    // Monitor download progress
    static monitorDownload(downloadId) {
      return new Promise((resolve, reject) => {
        const checkDownload = () => {
          chrome.downloads.search({ id: downloadId }, (downloads) => {
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
    // Get download history
    static async getDownloadHistory(query = {}) {
      return new Promise((resolve) => {
        chrome.downloads.search(query, (downloads) => {
          resolve(downloads);
        });
      });
    }
    // Clear download history
    static async clearDownloadHistory() {
      const downloads = await this.getDownloadHistory();
      downloads.forEach((download) => {
        chrome.downloads.erase({ id: download.id });
      });
    }
    // Pause download
    static async pauseDownload(downloadId) {
      return new Promise((resolve, reject) => {
        chrome.downloads.pause(downloadId, () => {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
          } else {
            resolve();
          }
        });
      });
    }
    // Resume download
    static async resumeDownload(downloadId) {
      return new Promise((resolve, reject) => {
        chrome.downloads.resume(downloadId, () => {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
          } else {
            resolve();
          }
        });
      });
    }
    // Cancel download
    static async cancelDownload(downloadId) {
      return new Promise((resolve, reject) => {
        chrome.downloads.cancel(downloadId, () => {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
          } else {
            resolve();
          }
        });
      });
    }
    // Open downloaded file
    static async openDownload(downloadId) {
      return new Promise((resolve, reject) => {
        chrome.downloads.open(downloadId, () => {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
          } else {
            resolve();
          }
        });
      });
    }
    // Show download in folder
    static showDownloadInFolder(downloadId) {
      chrome.downloads.show(downloadId);
    }
    // Accept danger and download
    static async acceptDanger(downloadId) {
      return new Promise((resolve, reject) => {
        chrome.downloads.acceptDanger(downloadId, () => {
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
        sendResponse({ success: false, error: "No URLs provided" });
        return;
      }
      const fullUrls = await storage_manager_default.retrieve("pageDetailsUrls") || urls;
      await storage_manager_default.save("pageDetailsUrls", fullUrls);
      await storage_manager_default.save("pageDetailsRequestingTabId", sender.tab.id);
      await storage_manager_default.save("pageDetailsMode", true);
      const newTab = await chrome.tabs.create({
        url: urls[0],
        active: true
      });
      const timeout = new Promise(
        (_, reject) => setTimeout(() => reject(new Error("Timeout waiting for page to load")), 3e4)
      );
      try {
        await Promise.race([
          new Promise((resolve) => {
            const listener = (tabId, changeInfo) => {
              if (tabId === newTab.id && changeInfo.status === "complete") {
                chrome.tabs.onUpdated.removeListener(listener);
                resolve();
              }
            };
            chrome.tabs.onUpdated.addListener(listener);
          }),
          timeout
        ]);
      } catch (timeoutError) {
        console.error("[Background] Timeout waiting for page to load");
        await chrome.tabs.remove(newTab.id).catch(() => {
        });
        sendResponse({ success: false, error: "Page load timeout" });
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      try {
        await chrome.tabs.get(newTab.id);
      } catch (error) {
        console.error("[Background] Tab was closed");
        sendResponse({ success: false, error: "Tab was closed" });
        return;
      }
      try {
        await chrome.scripting.insertCSS({
          target: { tabId: newTab.id },
          files: ["bundle/layers.css", "bundle/styles.css"]
        });
      } catch (cssError) {
        console.error("[Background] CSS injection error:", cssError);
      }
      try {
        await chrome.scripting.executeScript({
          target: { tabId: newTab.id },
          files: ["bundle/selector.bundle.js"]
        });
        console.log("[Background] Selector script injected successfully");
      } catch (scriptError) {
        console.error("[Background] Script injection error:", scriptError);
        await chrome.tabs.remove(newTab.id).catch(() => {
        });
        sendResponse({ success: false, error: "Failed to inject selector script" });
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
      sendResponse({ success: true });
    } catch (error) {
      console.error("[Background] Page details highlight error:", error);
      sendResponse({ success: false, error: error.message });
    }
  }
  async function handlePageDetailsSelected(request, sender, sendResponse) {
    console.log("[Background] Page details element selected:", request);
    try {
      await storage_manager_default.save("pageDetailsElements", request.data?.selectors || []);
      const requestingTabId = await storage_manager_default.retrieve("pageDetailsRequestingTabId");
      if (requestingTabId) {
        chrome.tabs.sendMessage(requestingTabId, {
          action: "page-details-selected-complete",
          data: request.data
        }, (response) => {
          if (chrome.runtime.lastError) {
            console.error("[Background] Failed to send elements to requesting tab:", chrome.runtime.lastError);
          }
        });
      }
      chrome.tabs.remove(sender.tab.id, () => {
        if (chrome.runtime.lastError) {
          console.error("[Background] Failed to close selector tab:", chrome.runtime.lastError);
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
    try {
      const { urls, elements, config } = request;
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
