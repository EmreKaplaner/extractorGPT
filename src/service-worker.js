// Service Worker Bundle Entry Point
// This is what gets bundled into service.bundle.js

import setupMessageHandlers from './background/message-handlers.js';
import StorageManager from './background/storage-manager.js';
import ExtractionProcessor from './background/extraction-processor.js';
import PermissionManager from './background/permission-manager.js';
import ImageDownloader from './background/image-downloader.js';
import eventTracker from './analytics/event-tracker.js';

// Keep track of injection status per tab
const tabInjectionStatus = new Map();

const injectContentScripts = async (tab) => {
  const tabId = tab.id;
  
  // Check if we're already injecting for this tab
  if (tabInjectionStatus.get(tabId) === 'injecting') {
    console.log("[SERVICE-WORKER] Already injecting scripts for tab", tabId);
    return;
  }
  
  // First check if content script is already loaded
  try {
    tabInjectionStatus.set(tabId, 'checking');
    
    const response = await chrome.tabs.sendMessage(tabId, { action: "ping" }).catch(() => null);
    
    if (response && response.status === 'pong') {
      // Content script already loaded, just send open message
      console.log("[SERVICE-WORKER] Content script already loaded for tab", tabId, ", sending open message...");
      tabInjectionStatus.set(tabId, 'loaded');
      
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
  
  // Content script not loaded, inject it
  console.log("[SERVICE-WORKER] Injecting scripts for tab", tabId);
  tabInjectionStatus.set(tabId, 'injecting');
  
  try {
    // Inject CSS first
    await chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ["bundle/layers.css", "bundle/styles.css"],
    });
    console.log("[SERVICE-WORKER] CSS injected successfully");
    
    // Then inject JavaScript
    await chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["bundle/main.bundle.js"],
    });
    console.log("[SERVICE-WORKER] JavaScript injected successfully");
    
    // Wait a bit for script to initialize
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // Now send the open message
    try {
      const openResponse = await chrome.tabs.sendMessage(tabId, { action: "open" });
      console.log("[SERVICE-WORKER] Open message sent successfully after injection, response:", openResponse);
      tabInjectionStatus.set(tabId, 'loaded');
    } catch (error) {
      console.error("[SERVICE-WORKER] Error sending open message after injection:", error);
      tabInjectionStatus.set(tabId, 'error');
    }
    
  } catch (error) {
    console.error("[SERVICE-WORKER] Error injecting scripts:", error);
    tabInjectionStatus.set(tabId, 'error');
    
    // Show error to user
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'assets/icon256.png',
      title: 'ExtractorGPT Error',
      message: 'Failed to inject scripts. Please refresh the page and try again.'
    });
  }
};

// Initialize service worker
(function() {
  'use strict';
  
  console.log('[EXTRACTOR-GPT] Service worker initializing...');
  
  // Global instances
  self.__extractorGPT = {
    storage: new StorageManager(),
    activeExtractions: new Map(),
    requestHighlightTabId: null
  };
  
  // Set up all message handlers
  setupMessageHandlers();
  
  // Handle extension icon clicks
  chrome.action.onClicked.addListener((tab) => {
    console.log("[SERVICE-WORKER] Extension icon clicked for tab:", tab.id);
    injectContentScripts(tab);
  });
  
  // Clean up injection status when tab is closed
  chrome.tabs.onRemoved.addListener((tabId) => {
    tabInjectionStatus.delete(tabId);
  });

  // Clean up injection status when tab navigates
  chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.status === 'loading') {
      tabInjectionStatus.delete(tabId);
    }
  });
  
  // Track extension installation
  chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
      eventTracker.trackUserAction('extension_installed', {
        version: chrome.runtime.getManifest().version
      });
    } else if (details.reason === 'update') {
      eventTracker.trackUserAction('extension_updated', {
        previousVersion: details.previousVersion,
        version: chrome.runtime.getManifest().version
      });
    }
  });
  
  // Clean up on startup
  chrome.runtime.onStartup.addListener(() => {
    console.log('[EXTRACTOR-GPT] Extension startup - cleaning up');
    self.__extractorGPT.activeExtractions.clear();
  });
  
  console.log('[EXTRACTOR-GPT] Service worker initialized');
  
})();

// Export for use in background.js if needed
export { StorageManager, ExtractionProcessor, PermissionManager, ImageDownloader }; 