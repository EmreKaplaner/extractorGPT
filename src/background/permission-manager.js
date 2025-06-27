import StorageManager from './storage-manager.js';
import { StorageKeys } from '../constants/index.js';

class PermissionManager {
  // Check and request all URLs permission
  static requestAllUrlsPermission({ onSuccess, onFailure }) {
    chrome.permissions.contains({
      permissions: [],
      origins: ['<all_urls>']
    }, (hasPermission) => {
      if (hasPermission) {
        StorageManager.save(StorageKeys.PERMISSIONS_GRANTED, true);
        onSuccess();
      } else {
        chrome.permissions.request({
          permissions: [],
          origins: ['<all_urls>']
        }, (granted) => {
          const error = chrome.runtime.lastError;
          
          if (error) {
            // Handle user gesture requirement
            if (error.message.includes('user gesture')) {
              chrome.runtime.openOptionsPage();
            }
            onFailure();
            return;
          }
          
          if (granted) {
            StorageManager.save(StorageKeys.PERMISSIONS_GRANTED, true);
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
      permissions: ['clipboardWrite']
    }, (hasPermission) => {
      if (hasPermission) {
        StorageManager.save(StorageKeys.PERMISSIONS_CLIPBOARD_GRANTED, true);
        onSuccess();
      } else {
        chrome.permissions.request({
          permissions: ['clipboardWrite']
        }, (granted) => {
          if (chrome.runtime.lastError) {
            onFailure();
            return;
          }
          
          if (granted) {
            StorageManager.save(StorageKeys.PERMISSIONS_CLIPBOARD_GRANTED, true);
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
      permissions: ['downloads']
    }, (hasPermission) => {
      if (hasPermission) {
        onSuccess();
      } else {
        chrome.permissions.request({
          permissions: ['downloads']
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
        origins: ['<all_urls>']
      }, (hasPermission) => {
        resolve(hasPermission);
      });
    });
  }

  // Check if has clipboard permission
  static async hasClipboardPermission() {
    return new Promise((resolve) => {
      chrome.permissions.contains({
        permissions: ['clipboardWrite']
      }, (hasPermission) => {
        resolve(hasPermission);
      });
    });
  }

  // Check if has downloads permission
  static async hasDownloadsPermission() {
    return new Promise((resolve) => {
      chrome.permissions.contains({
        permissions: ['downloads']
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
        permissions: permissions,
        origins: origins
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
        permissions: permissions,
        origins: origins
      }, (hasAll) => {
        resolve(hasAll);
      });
    });
  }
}

export default PermissionManager; 