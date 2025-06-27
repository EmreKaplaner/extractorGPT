// Message utility for Chrome extension communication

export const MessageUtils = {
  // Send message to background script
  sendMessageToBackground: async (message) => {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage(message, (response) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(response);
        }
      });
    });
  },
  
  // Send message to specific tab
  sendMessageToTab: async (tabId, message) => {
    return new Promise((resolve, reject) => {
      chrome.tabs.sendMessage(tabId, message, (response) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(response);
        }
      });
    });
  },
  
  // Send message to all tabs
  sendMessageToAllTabs: async (message) => {
    const tabs = await chrome.tabs.query({});
    const promises = tabs.map(tab => 
      MessageUtils.sendMessageToTab(tab.id, message).catch(() => null)
    );
    return Promise.all(promises);
  }
};

export default MessageUtils; 