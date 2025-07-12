/**
 * WebPeeler StorageManager - EXACT COPY of class i with enhancements
 * Manages Chrome extension storage operations with WebPeeler compatibility
 */
class StorageManager {
  
  /**
   * WebPeeler exact save method
   */
  static save(key, value) {
    try {
      if (chrome && chrome.storage && chrome.storage.local) {
        chrome.storage.local.set({
          [key]: value
        }, function() {
          // WebPeeler checks for lastError but doesn't handle it
          chrome.runtime.lastError;
        });
      }
    } catch (error) {
      // WebPeeler silently handles errors
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
            if (result[key] !== undefined) {
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
    const self = this;
    return new Promise(function(resolve, reject) {
      async function removeMatching() {
        try {
          if (chrome && chrome.storage && chrome.storage.local) {
            const keys = await self.getAllKeys();
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
              console.error('Error clearing storage:', chrome.runtime.lastError.message);
              reject(new Error(chrome.runtime.lastError.message));
            } else {
              resolve();
            }
          });
        } else {
          resolve();
        }
      } catch (error) {
        console.error('Storage clear error:', error);
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
              console.error('Error getting multiple keys:', chrome.runtime.lastError.message);
              reject(new Error(chrome.runtime.lastError.message));
            } else {
              resolve(result);
            }
          });
        } else {
          resolve({});
        }
      } catch (error) {
        console.error('Storage getMultiple error:', error);
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
              console.error('Error saving multiple items:', chrome.runtime.lastError.message);
              reject(new Error(chrome.runtime.lastError.message));
            } else {
              resolve();
            }
          });
        } else {
          resolve();
        }
      } catch (error) {
        console.error('Storage saveMultiple error:', error);
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
        if (areaName === 'local') {
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
              console.error('Error getting bytes in use:', chrome.runtime.lastError.message);
              reject(new Error(chrome.runtime.lastError.message));
            } else {
              resolve(bytesInUse);
            }
          });
        } else {
          // Fallback for environments without getBytesInUse
          resolve(0);
        }
      } catch (error) {
        console.error('Storage getBytesInUse error:', error);
        reject(error);
      }
    });
  }
}

export default StorageManager; 