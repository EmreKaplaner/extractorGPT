# State Management

## Overview
This directory contains React Context providers and hooks for managing application state in the EXTRACTOR-GPT extension. It implements a centralized state management system using React's Context API.

## Architecture
The state management is divided into three main contexts:
1. **Global State** - General application state
2. **Extract State** - Extraction process state
3. **User State** - User authentication and licensing

## Files

### `index.js`
Main export file that re-exports all providers and contexts.

**Exports:**
- `GlobalStateProvider`, `useGlobalState`, `GlobalStateContext`
- `ExtractStateProvider`, `useExtractState`, `ExtractStateContext`
- `UserStateProvider`, `useUserState`, `UserStateContext`

### `global-state-provider.js`
Manages general application state and UI preferences.

**State Properties:**
- `resultsPanelExpanded` - Results panel visibility
- `actionPanelExpanded` - Action panel visibility
- `showUpsell` - Upsell modal visibility
- `showRegisterLicense` - License registration modal
- `showRateUs` - Rating prompt modal
- `extractSettings` - Extraction configuration
- `resultsSelectedSource` - Current results view ('list', 'details', 'emails')
- `resultsList` - List extraction results (ResultsTable instance)
- `resultsDetails` - Page details results (ResultsTable instance)
- `resultsEmails` - Email extraction results (ResultsTable instance)
- `tab` - Current active tab
- `isClipboardCountdownEnabled` - Clipboard feature flag
- `isStripeCheckout2Enabled` - Payment feature flag

**Methods:**
- `updateExtractSettings(newSettings)` - Update extraction settings
- `setResultsPanelExpanded(expanded)` - Toggle results panel
- `setListResults(updater)` - Update list results
- `setDetailsResults(updater)` - Update details results
- `setEmailsResults(updater)` - Update email results
- `setTab(tab)` - Change active tab
- `toggleModal(modalName, visible)` - Toggle modal visibility

**Features:**
- Persists extraction settings to storage
- Loads settings on mount
- Provides centralized state updates

### `extract-state-provider.js`
Manages extraction process state and progress tracking.

**State Properties:**
```javascript
{
  status: RunStatus.IDLE,      // idle|running|stopping|error|completed
  isProcessing: false,         // Processing flag
  progress: 0,                 // Progress percentage
  currentUrl: null,           // Currently processing URL
  totalUrls: 0,               // Total URLs to process
  completedUrls: 0,           // Completed URL count
  errors: [],                 // Array of errors
  results: []                 // Extraction results
}
```

**Methods:**
- `startExtraction()` - Begin extraction process
- `stopExtraction()` - Stop extraction process
- `startEmailExtraction()` - Begin email extraction
- `stopEmailExtraction()` - Stop email extraction
- `resetExtractState()` - Reset to default state
- `resetEmailExtractState()` - Reset email state

**Message Handling:**
Listens for Chrome runtime messages:
- `STATUS_UPDATE_EXTRACT` - Updates extraction progress
- `STATUS_UPDATE_EXTRACT_EMAILS` - Updates email extraction progress

### `user-state-provider.js`
Manages user authentication, licensing, and feature access.

**State Properties:**
- `isAuthenticated` - Authentication status
- `user` - User profile data
- `license` - License information
- `tier` - User tier ('FREE' or 'PRO')
- `credits` - Available credits
- `devices` - Registered devices array
- `maxDevices` - Maximum allowed devices
- `features` - Feature access object

**Feature Object (tier-based):**
```javascript
{
  maxUrls: number,           // Max URLs per extraction
  maxElements: number,       // Max elements per page
  parallelTabs: number,      // Concurrent extractions
  exportFormats: array,      // Available export formats
  aiFeatures: boolean,       // AI features enabled
  prioritySupport: boolean   // Priority support access
}
```

**Methods:**
- `login(userData)` - Authenticate user
- `logout()` - Clear authentication
- `updateLicense(newLicense)` - Update license data
- `addDevice(deviceInfo)` - Register new device
- `removeDevice(deviceId)` - Remove device
- `hasFeature(feature)` - Check feature availability
- `canPerformAction(action, count)` - Check action limits
- `useCredits(amount)` - Consume credits

**Helper Properties:**
- `isAuthenticated` - Quick auth check
- `isPro` - Quick PRO tier check
- `isFree` - Quick FREE tier check

## Usage Examples

### Basic Setup
```jsx
import { 
  GlobalStateProvider, 
  ExtractStateProvider, 
  UserStateProvider 
} from './state-management';

function App() {
  return (
    <GlobalStateProvider>
      <UserStateProvider>
        <ExtractStateProvider>
          <YourApp />
        </ExtractStateProvider>
      </UserStateProvider>
    </GlobalStateProvider>
  );
}
```

### Using Global State
```jsx
import { useGlobalState } from './state-management';

function MyComponent() {
  const { globalState, updateExtractSettings, setTab } = useGlobalState();
  
  const handleSettingChange = (newSettings) => {
    updateExtractSettings(newSettings);
  };
  
  return (
    <div>
      <button onClick={() => setTab('settings')}>
        Open Settings
      </button>
    </div>
  );
}
```

### Using Extract State
```jsx
import { useExtractState } from './state-management';

function ExtractionStatus() {
  const { extractState, startExtraction, stopExtraction } = useExtractState();
  
  return (
    <div>
      <p>Status: {extractState.status}</p>
      <p>Progress: {extractState.progress}%</p>
      {extractState.status === 'idle' ? (
        <button onClick={startExtraction}>Start</button>
      ) : (
        <button onClick={stopExtraction}>Stop</button>
      )}
    </div>
  );
}
```

### Using User State
```jsx
import { useUserState } from './state-management';

function FeatureGate() {
  const { isPro, hasFeature, canPerformAction } = useUserState();
  
  if (!isPro) {
    return <UpgradePrompt />;
  }
  
  if (!canPerformAction('extract', 100)) {
    return <LimitReached />;
  }
  
  return <ProFeature />;
}
```

## State Flow

### Extraction Process
1. User initiates extraction → `startExtraction()`
2. Background script sends progress updates
3. `ExtractStateProvider` receives messages
4. State updates trigger UI re-renders
5. Results stored in `GlobalState` results tables

### User Authentication
1. User logs in → `login(userData)`
2. License data stored in Chrome storage
3. Features calculated based on tier
4. Components check access via hooks

## Best Practices

1. **Context Nesting**
   - Place providers at appropriate levels
   - Avoid unnecessary re-renders
   - Use multiple contexts for separation

2. **State Updates**
   - Use functional updates for derived state
   - Batch related updates
   - Avoid direct state mutations

3. **Performance**
   - Memoize expensive computations
   - Use React.memo for consumer components
   - Split contexts by update frequency

4. **Error Handling**
   - Always check context availability
   - Provide meaningful error messages
   - Handle edge cases gracefully

## Storage Integration
- User data persisted to Chrome storage
- Extract settings saved automatically
- State hydrated on extension load 