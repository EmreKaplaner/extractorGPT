// Simplified Auth Manager - Always returns success
// This version bypasses all license and authentication checks

class AuthManager {
  constructor() {
    console.log('[EXTRACTOR-GPT] Auth disabled - using bypass implementation');
    this.user = {
      id: 'local-user',
      email: 'user@local',
      name: 'Local User',
      isPremium: true,
      isLicensed: true
    };
  }

  // Always return logged in
  async isLoggedIn() {
    return true;
  }

  // Always return the mock user
  async getCurrentUser() {
    return this.user;
  }

  // Mock login - always succeeds
  async login(email, password) {
    console.debug('[Auth] Mock login:', email);
    return {
      success: true,
      user: this.user,
      token: 'mock-token'
    };
  }

  // Mock register - always succeeds
  async register(email, password, name) {
    console.debug('[Auth] Mock register:', email);
    return {
      success: true,
      user: this.user,
      token: 'mock-token'
    };
  }

  // Mock logout
  async logout() {
    console.debug('[Auth] Mock logout');
    return { success: true };
  }

  // Always return valid license
  async checkLicense() {
    return {
      isValid: true,
      isPremium: true,
      expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year from now
      features: ['all']
    };
  }

  // Mock validate license - always valid
  async validateLicense(licenseKey) {
    console.debug('[Auth] Mock validate license:', licenseKey);
    return {
      isValid: true,
      licenseKey: licenseKey,
      expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      maxDevices: 999,
      features: ['all']
    };
  }

  // Mock activate license - always succeeds
  async activateLicense(licenseKey) {
    console.debug('[Auth] Mock activate license:', licenseKey);
    return {
      success: true,
      message: 'License activated successfully',
      license: {
        key: licenseKey,
        expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
        isPremium: true
      }
    };
  }

  // Mock deactivate license
  async deactivateLicense() {
    console.debug('[Auth] Mock deactivate license');
    return { success: true };
  }

  // Always return empty devices list
  async getDevices() {
    return [];
  }

  // Mock add device
  async addDevice(deviceInfo) {
    console.debug('[Auth] Mock add device:', deviceInfo);
    return { success: true, deviceId: 'mock-device-id' };
  }

  // Mock remove device
  async removeDevice(deviceId) {
    console.debug('[Auth] Mock remove device:', deviceId);
    return { success: true };
  }

  // Always return premium status
  async isPremium() {
    return true;
  }

  // Always return true for feature access
  async hasFeature(feature) {
    return true;
  }

  // Mock refresh token
  async refreshToken() {
    return { success: true, token: 'mock-token' };
  }

  // Mock API request - always succeeds
  async apiRequest(endpoint, options = {}) {
    console.debug('[Auth] Mock API request:', endpoint, options);
    return { success: true, data: {} };
  }
}

// Create singleton instance
const authManager = new AuthManager();

export default authManager; 