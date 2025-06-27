# Auth Module

## Overview
The auth module handles authentication and licensing for the extension. Currently implemented as a bypass version that always returns success for all operations.

## Files

### 1. `index.js`
**Purpose**: Module entry point that exports the auth manager.

**Exports**:
- `authManager` (named export) - The singleton auth manager instance

### 2. `auth-manager.js`
**Purpose**: Simplified auth manager that bypasses all authentication and license checks.

**Class**: `AuthManager`
- Constructor: 
  - Logs that auth is disabled
  - Initializes a mock user object with premium access

**Properties**:
- `user` - Mock user object containing:
  - `id`: 'local-user'
  - `email`: 'user@local'
  - `name`: 'Local User'
  - `isPremium`: true
  - `isLicensed`: true

**Methods**:
- `isLoggedIn()` - Always returns `true`
- `getCurrentUser()` - Returns the mock user object
- `login(email, password)` - Mock login that always succeeds
  - Returns: `{ success: true, user: mockUser, token: 'mock-token' }`
- `register(email, password, name)` - Mock registration that always succeeds
  - Returns: `{ success: true, user: mockUser, token: 'mock-token' }`
- `logout()` - Mock logout that always succeeds
  - Returns: `{ success: true }`
- `checkLicense()` - Always returns valid license
  - Returns: `{ isValid: true, isPremium: true, expiresAt: Date, features: ['all'] }`
- `validateLicense(licenseKey)` - Mock validation that always succeeds
  - Returns: `{ isValid: true, licenseKey, expiresAt: Date, maxDevices: 999, features: ['all'] }`
- `activateLicense(licenseKey)` - Mock activation that always succeeds
  - Returns: `{ success: true, message: 'License activated successfully', license: {...} }`
- `deactivateLicense()` - Mock deactivation
  - Returns: `{ success: true }`
- `getDevices()` - Returns empty array
- `addDevice(deviceInfo)` - Mock device addition
  - Returns: `{ success: true, deviceId: 'mock-device-id' }`
- `removeDevice(deviceId)` - Mock device removal
  - Returns: `{ success: true }`
- `isPremium()` - Always returns `true`
- `hasFeature(feature)` - Always returns `true` for any feature
- `refreshToken()` - Mock token refresh
  - Returns: `{ success: true, token: 'mock-token' }`
- `apiRequest(endpoint, options)` - Mock API request
  - Returns: `{ success: true, data: {} }`

**Exported Instance**: `authManager`
- Singleton instance of AuthManager
- Ready to use throughout the application

## Usage Example
```javascript
import { authManager } from './auth';

// Check if user is logged in
const isLoggedIn = await authManager.isLoggedIn(); // Always true

// Get current user
const user = await authManager.getCurrentUser();
console.log(user.isPremium); // Always true

// Check if user has feature
const hasFeature = await authManager.hasFeature('advanced-extraction'); // Always true
```

## Notes
- All methods return success/true values
- No actual authentication is performed
- No network requests are made
- License is always valid and premium
- Safe to use for development/testing
- Bypasses all authentication requirements 