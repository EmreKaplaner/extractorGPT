class StorageManager {
  // Save data to chrome.storage.local
  static save(key, value) {
    try {
      if (chrome && chrome.storage && chrome.storage.local) {
        chrome.storage.local.set({ [key]: value }, () => {
          if (chrome.runtime.lastError) {
            console.error('Storage save error:', chrome.runtime.lastError);
          }
        });
      }
    } catch (error) {
      console.error('Error saving to storage:', error);
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
        console.error('Error getting all keys:', error);
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
        console.error('Error retrieving from storage:', error);
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
        console.error('Error removing from storage:', error);
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
          const keysToRemove = allKeys.filter(key => key.includes(pattern));
          
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
        console.error('Error removing keys by pattern:', error);
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
            console.error('Storage clear error:', chrome.runtime.lastError);
          }
        });
      }
    } catch (error) {
      console.error('Error clearing storage:', error);
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
        console.error('Error getting multiple keys:', error);
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
            console.error('Storage save multiple error:', chrome.runtime.lastError);
          }
        });
      }
    } catch (error) {
      console.error('Error saving multiple items:', error);
    }
  }

  // Listen for storage changes
  static addListener(callback) {
    if (chrome && chrome.storage && chrome.storage.onChanged) {
      chrome.storage.onChanged.addListener((changes, areaName) => {
        if (areaName === 'local') {
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
        console.error('Error getting storage size:', error);
        resolve(0);
      }
    });
  }
}

export default StorageManager; 