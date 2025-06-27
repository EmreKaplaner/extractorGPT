import React, { createContext, useState, useContext, useEffect } from 'react';
import { StorageManager } from '../background/index.js';

// Create context
const UserStateContext = createContext();

// Default user state
const defaultUserState = {
  isAuthenticated: false,
  user: null,
  license: null,
  tier: 'FREE', // FREE or PRO
  credits: 0,
  devices: [],
  maxDevices: 1,
  features: {
    maxUrls: 10,
    maxElements: 5,
    parallelTabs: 1,
    exportFormats: ['CSV', 'CLIPBOARD'],
    aiFeatures: false,
    prioritySupport: false
  }
};

// User State Provider Component
export function UserStateProvider({ children }) {
  const [userState, setUserState] = useState(defaultUserState);

  // Load user state from storage on mount
  useEffect(() => {
    const loadUserState = async () => {
      const storedUser = await StorageManager.retrieve('user');
      const storedLicense = await StorageManager.retrieve('license');
      
      if (storedUser) {
        setUserState(prevState => ({
          ...prevState,
          isAuthenticated: true,
          user: storedUser,
          license: storedLicense,
          tier: storedLicense?.tier || 'FREE',
          credits: storedLicense?.credits || 0,
          devices: storedLicense?.devices || [],
          maxDevices: storedLicense?.maxDevices || 1,
          features: getFeaturesByTier(storedLicense?.tier || 'FREE')
        }));
      }
    };
    
    loadUserState();
  }, []);

  // Get features based on tier
  const getFeaturesByTier = (tier) => {
    if (tier === 'PRO') {
      return {
        maxUrls: 1000,
        maxElements: 100,
        parallelTabs: 10,
        exportFormats: ['CSV', 'EXCEL', 'JSON', 'CLIPBOARD', 'GOOGLE_SHEETS'],
        aiFeatures: true,
        prioritySupport: true
      };
    }
    
    // FREE tier
    return {
      maxUrls: 10,
      maxElements: 5,
      parallelTabs: 1,
      exportFormats: ['CSV', 'CLIPBOARD'],
      aiFeatures: false,
      prioritySupport: false
    };
  };

  // Login user
  const login = async (userData) => {
    const { user, license } = userData;
    
    // Save to storage
    await StorageManager.save('user', user);
    await StorageManager.save('license', license);
    
    // Update state
    setUserState({
      isAuthenticated: true,
      user,
      license,
      tier: license?.tier || 'FREE',
      credits: license?.credits || 0,
      devices: license?.devices || [],
      maxDevices: license?.maxDevices || 1,
      features: getFeaturesByTier(license?.tier || 'FREE')
    });
  };

  // Logout user
  const logout = async () => {
    // Clear storage
    await StorageManager.remove('user');
    await StorageManager.remove('license');
    
    // Reset state
    setUserState(defaultUserState);
  };

  // Update license
  const updateLicense = async (newLicense) => {
    // Save to storage
    await StorageManager.save('license', newLicense);
    
    // Update state
    setUserState(prevState => ({
      ...prevState,
      license: newLicense,
      tier: newLicense?.tier || 'FREE',
      credits: newLicense?.credits || 0,
      devices: newLicense?.devices || [],
      maxDevices: newLicense?.maxDevices || 1,
      features: getFeaturesByTier(newLicense?.tier || 'FREE')
    }));
  };

  // Add device
  const addDevice = async (deviceInfo) => {
    const updatedDevices = [...userState.devices, deviceInfo];
    const updatedLicense = {
      ...userState.license,
      devices: updatedDevices
    };
    
    await updateLicense(updatedLicense);
  };

  // Remove device
  const removeDevice = async (deviceId) => {
    const updatedDevices = userState.devices.filter(device => device.id !== deviceId);
    const updatedLicense = {
      ...userState.license,
      devices: updatedDevices
    };
    
    await updateLicense(updatedLicense);
  };

  // Check if feature is available
  const hasFeature = (feature) => {
    return userState.features[feature] || false;
  };

  // Check if user can perform action
  const canPerformAction = (action, count = 1) => {
    switch (action) {
      case 'extract':
        return count <= userState.features.maxUrls;
      case 'addElement':
        return count <= userState.features.maxElements;
      case 'export':
        return true; // Always allow export if format is available
      default:
        return false;
    }
  };

  // Use credits
  const useCredits = async (amount) => {
    if (userState.credits < amount) {
      throw new Error('Insufficient credits');
    }
    
    const updatedLicense = {
      ...userState.license,
      credits: userState.credits - amount
    };
    
    await updateLicense(updatedLicense);
  };

  // Context value
  const value = {
    userState,
    setUserState,
    login,
    logout,
    updateLicense,
    addDevice,
    removeDevice,
    hasFeature,
    canPerformAction,
    useCredits,
    isAuthenticated: userState.isAuthenticated,
    isPro: userState.tier === 'PRO',
    isFree: userState.tier === 'FREE'
  };

  return (
    <UserStateContext.Provider value={value}>
      {children}
    </UserStateContext.Provider>
  );
}

// Custom hook to use user state
export function useUserState() {
  const context = useContext(UserStateContext);
  
  if (!context) {
    throw new Error('useUserState must be used within a UserStateProvider');
  }
  
  return context;
}

export default UserStateContext; 