import StorageManager from './storage-manager.js';
import { StorageKeys } from '../constants/index.js';

/**
 * WebPeeler PermissionManager - EXACT COPY of function O pattern with enhancements
 * Manages Chrome extension permissions with WebPeeler compatibility
 */
class PermissionManager {
  
  /**
   * WebPeeler exact all URLs permission handler - EXACT COPY of function O
   */
  static requestAllUrlsPermission({ onSuccess, onFailure }) {
    chrome.permissions.contains({
      permissions: [],
      origins: ['<all_urls>']
    }, function(hasPermission) {
      if (hasPermission) {
        StorageManager.save('permissionsGranted', true);
        onSuccess();
      } else {
        chrome.permissions.request({
          permissions: [],
          origins: ['<all_urls>']
        }, function(granted) {
          const error = chrome.runtime.lastError;
          
          if (error) {
            // WebPeeler exact user gesture handling
            if (error.message.includes('user gesture')) {
              chrome.runtime.openOptionsPage();
            }
            onFailure();
            return;
          }
          
          if (granted) {
            StorageManager.save('permissionsGranted', true);
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
      permissions: ['clipboardWrite']
    }, function(hasPermission) {
      if (hasPermission) {
        StorageManager.save('permissionsClipboardGranted', true);
        onSuccess();
      } else {
        chrome.permissions.request({
          permissions: ['clipboardWrite']
        }, function(granted) {
          if (chrome.runtime.lastError) {
            onFailure();
            return;
          }
          
          if (granted) {
            StorageManager.save('permissionsClipboardGranted', true);
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
      permissions: ['downloads']
    }, function(hasPermission) {
      if (hasPermission) {
        onSuccess();
      } else {
        chrome.permissions.request({
          permissions: ['downloads']
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
        origins: ['<all_urls>']
      }, function(hasPermission) {
        resolve(hasPermission);
      });
    });
  }

  static async hasClipboardPermission() {
    return new Promise(function(resolve) {
      chrome.permissions.contains({
        permissions: ['clipboardWrite']
      }, function(hasPermission) {
        resolve(hasPermission);
      });
    });
  }

  static async hasDownloadsPermission() {
    return new Promise(function(resolve) {
      chrome.permissions.contains({
        permissions: ['downloads']
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
        permissions: permissions,
        origins: origins
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
        permissions: permissions,
        origins: origins
      }, function(hasAll) {
        resolve(hasAll);
      });
    });
  }
}

export default PermissionManager; 