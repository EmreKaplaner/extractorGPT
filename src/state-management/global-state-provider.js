import React, { createContext, useState, useContext, useEffect } from 'react';
import { DEFAULT_EXTRACT_SETTINGS, StorageKeys, TabTypes } from '../constants/index.js';
import { StorageManager } from '../background/index.js';
import { ResultsTable } from '../data-management/index.js';

// Create context
const GlobalStateContext = createContext();

// Default global state
const defaultGlobalState = {
  resultsPanelExpanded: false,
  actionPanelExpanded: true,
  showUpsell: false,
  showUpsellCredits: false,
  showRegisterLicense: false,
  showRateUs: false,
  showExtractPageDetailsPrePopup: false,
  showExtractEmailsPrePopup: false,
  loadExtractPageDetailsPrePopupUrls: false,
  isProcessingListResults: false,
  isBlackFridayDeal: false,
  showDeviceManager: false,
  extractSettings: DEFAULT_EXTRACT_SETTINGS,
  resultsSelectedSource: 'list',
  resultsList: new ResultsTable(),
  resultsDetails: new ResultsTable(),
  resultsEmails: new ResultsTable(),
  tab: TabTypes.RUN,
  isClipboardCountdownEnabled: false,
  isStripeCheckout2Enabled: false
};

// Global State Provider Component
export function GlobalStateProvider({ children }) {
  const [globalState, setGlobalState] = useState(defaultGlobalState);

  // Load extract settings from storage on mount
  useEffect(() => {
    const loadSettings = async () => {
      const settings = await StorageManager.retrieve(StorageKeys.EXTRACT_SETTINGS);
      if (settings) {
        updateExtractSettings(settings);
      }
    };
    
    loadSettings();
  }, []);

  // Update extract settings
  const updateExtractSettings = (newSettings) => {
    setGlobalState(prevState => {
      const updatedState = {
        ...prevState,
        extractSettings: {
          ...prevState.extractSettings,
          ...newSettings
        }
      };
      
      // Save to storage
      StorageManager.save(StorageKeys.EXTRACT_SETTINGS, updatedState.extractSettings);
      
      return updatedState;
    });
  };

  // Set results panel expanded state
  const setResultsPanelExpanded = (expanded) => {
    setGlobalState(prevState => ({
      ...prevState,
      resultsPanelExpanded: expanded
    }));
  };

  // Update list results
  const setListResults = (updater) => {
    setGlobalState(prevState => {
      const newResults = updater(prevState.resultsList);
      return {
        ...prevState,
        resultsList: newResults
      };
    });
  };

  // Update details results
  const setDetailsResults = (updater) => {
    setGlobalState(prevState => {
      const newResults = updater(prevState.resultsDetails);
      return {
        ...prevState,
        resultsDetails: newResults
      };
    });
  };

  // Update emails results
  const setEmailsResults = (updater) => {
    setGlobalState(prevState => {
      const newResults = updater(prevState.resultsEmails);
      return {
        ...prevState,
        resultsEmails: newResults
      };
    });
  };

  // Set current tab
  const setTab = (tab) => {
    setGlobalState(prevState => ({
      ...prevState,
      tab: tab
    }));
  };

  // Toggle modal visibility
  const toggleModal = (modalName, visible) => {
    setGlobalState(prevState => ({
      ...prevState,
      [modalName]: visible
    }));
  };

  // Context value
  const value = {
    globalState,
    setGlobalState,
    updateExtractSettings,
    setResultsPanelExpanded,
    setListResults,
    setDetailsResults,
    setEmailsResults,
    setTab,
    toggleModal
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
}

// Custom hook to use global state
export function useGlobalState() {
  const context = useContext(GlobalStateContext);
  
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  
  return context;
}

// Export both named and default
export { GlobalStateContext };
export default GlobalStateContext; 