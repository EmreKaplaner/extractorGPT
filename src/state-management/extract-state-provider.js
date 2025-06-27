import React, { createContext, useState, useContext, useEffect } from 'react';
import { RunStatus, MessageActions } from '../constants/index.js';

// Create context
const ExtractStateContext = createContext();

// Default extract state
const defaultExtractState = {
  status: RunStatus.IDLE,
  isProcessing: false,
  progress: 0,
  currentUrl: null,
  totalUrls: 0,
  completedUrls: 0,
  errors: [],
  results: []
};

// Default email extract state
const defaultEmailExtractState = {
  status: RunStatus.IDLE,
  isProcessing: false,
  progress: 0,
  currentUrl: null,
  totalUrls: 0,
  completedUrls: 0,
  errors: [],
  results: []
};

// Extract State Provider Component
export function ExtractStateProvider({ children }) {
  const [extractState, setExtractState] = useState(defaultExtractState);
  const [extractEmailState, setExtractEmailState] = useState(defaultEmailExtractState);

  // Listen for status updates from background script
  useEffect(() => {
    const handleMessage = (message, sender, sendResponse) => {
      if (message.action === MessageActions.STATUS_UPDATE_EXTRACT) {
        updateExtractStateFromStatus(message.data);
      } else if (message.action === MessageActions.STATUS_UPDATE_EXTRACT_EMAILS) {
        updateEmailExtractStateFromStatus(message.data);
      }
    };

    chrome.runtime.onMessage.addListener(handleMessage);

    return () => {
      chrome.runtime.onMessage.removeListener(handleMessage);
    };
  }, []);

  // Update extract state from status data
  const updateExtractStateFromStatus = (statusData) => {
    if (!statusData || !Array.isArray(statusData)) return;

    const totalUrls = statusData.length;
    const completedUrls = statusData.filter(item => 
      item.status === 'complete' || item.status === 'failed'
    ).length;
    const runningUrls = statusData.filter(item => item.status === 'running');
    const failedUrls = statusData.filter(item => item.status === 'failed');

    const progress = totalUrls > 0 ? (completedUrls / totalUrls) * 100 : 0;
    const currentUrl = runningUrls.length > 0 ? runningUrls[0].url : null;

    const errors = failedUrls.map(item => ({
      url: item.url,
      error: item.outcome
    }));

    const results = statusData
      .filter(item => item.status === 'complete' && item.outcome)
      .map(item => ({
        url: item.url,
        data: item.outcome
      }));

    let status = RunStatus.IDLE;
    if (runningUrls.length > 0) {
      status = RunStatus.RUNNING;
    } else if (completedUrls === totalUrls && totalUrls > 0) {
      status = failedUrls.length > 0 ? RunStatus.ERROR : RunStatus.COMPLETED;
    }

    setExtractState({
      status,
      isProcessing: status === RunStatus.RUNNING,
      progress,
      currentUrl,
      totalUrls,
      completedUrls,
      errors,
      results
    });
  };

  // Update email extract state from status data
  const updateEmailExtractStateFromStatus = (statusData) => {
    if (!statusData || !Array.isArray(statusData)) return;

    const totalUrls = statusData.length;
    const completedUrls = statusData.filter(item => 
      item.status === 'complete' || item.status === 'failed'
    ).length;
    const runningUrls = statusData.filter(item => item.status === 'running');
    const failedUrls = statusData.filter(item => item.status === 'failed');

    const progress = totalUrls > 0 ? (completedUrls / totalUrls) * 100 : 0;
    const currentUrl = runningUrls.length > 0 ? runningUrls[0].url : null;

    const errors = failedUrls.map(item => ({
      url: item.url,
      error: item.outcome
    }));

    const results = statusData
      .filter(item => item.status === 'complete' && item.outcome)
      .map(item => ({
        url: item.url,
        data: item.outcome
      }));

    let status = RunStatus.IDLE;
    if (runningUrls.length > 0) {
      status = RunStatus.RUNNING;
    } else if (completedUrls === totalUrls && totalUrls > 0) {
      status = failedUrls.length > 0 ? RunStatus.ERROR : RunStatus.COMPLETED;
    }

    setExtractEmailState({
      status,
      isProcessing: status === RunStatus.RUNNING,
      progress,
      currentUrl,
      totalUrls,
      completedUrls,
      errors,
      results
    });
  };

  // Reset extract state
  const resetExtractState = () => {
    setExtractState(defaultExtractState);
  };

  // Reset email extract state
  const resetEmailExtractState = () => {
    setExtractEmailState(defaultEmailExtractState);
  };

  // Start extraction
  const startExtraction = () => {
    setExtractState(prevState => ({
      ...prevState,
      status: RunStatus.RUNNING,
      isProcessing: true,
      errors: [],
      results: []
    }));
  };

  // Start email extraction
  const startEmailExtraction = () => {
    setExtractEmailState(prevState => ({
      ...prevState,
      status: RunStatus.RUNNING,
      isProcessing: true,
      errors: [],
      results: []
    }));
  };

  // Stop extraction
  const stopExtraction = () => {
    setExtractState(prevState => ({
      ...prevState,
      status: RunStatus.STOPPING,
      isProcessing: false
    }));
  };

  // Stop email extraction
  const stopEmailExtraction = () => {
    setExtractEmailState(prevState => ({
      ...prevState,
      status: RunStatus.STOPPING,
      isProcessing: false
    }));
  };

  // Context value
  const value = {
    extractState,
    setExtractState,
    extractEmailState,
    setExtractEmailState,
    resetExtractState,
    resetEmailExtractState,
    startExtraction,
    startEmailExtraction,
    stopExtraction,
    stopEmailExtraction
  };

  return (
    <ExtractStateContext.Provider value={value}>
      {children}
    </ExtractStateContext.Provider>
  );
}

// Custom hook to use extract state
export function useExtractState() {
  const context = useContext(ExtractStateContext);
  
  if (!context) {
    throw new Error('useExtractState must be used within an ExtractStateProvider');
  }
  
  return context;
}

// Export both named and default
export { ExtractStateContext };
export default ExtractStateContext; 