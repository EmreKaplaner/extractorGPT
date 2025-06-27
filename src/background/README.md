# Background Module

## Overview
The background module contains all service worker and background script functionality for the Chrome extension. It handles message passing, storage, permissions, image downloads, and extraction processing.

## Files

### 1. `index.js`
**Purpose**: Module entry point that exports all background functionality.

**Exports**:
- `StorageManager` (default export from storage-manager.js)
- `ExtractionProcessor` (default export from extraction-processor.js)
- `PermissionManager` (default export from permission-manager.js)
- `ImageDownloader` (default export from image-downloader.js)
- `setupMessageHandlers` (default and named export from message-handlers.js)
- `startExtraction` (named export from message-handlers.js)
- `activeExtractions` (named export from message-handlers.js)

### 2. `storage-manager.js`
**Purpose**: Manages Chrome extension storage operations.

**Class**: `StorageManager` (static methods only)

**Methods**:
- `save(key, value)` - Save data to chrome.storage.local
- `getAllKeys()` - Get all storage keys (returns Promise<string[]>)
- `retrieve(key)` - Get data by key (returns Promise<any>)
- `remove(key)` - Remove data by key (returns Promise<void>)
- `removeAny(pattern)` - Remove keys matching pattern (returns Promise<void>)
- `clearAll()` - Clear all storage data
- `getMultiple(keys)` - Get multiple values (returns Promise<object>)
- `saveMultiple(items)` - Save multiple key-value pairs
- `addListener(callback)` - Listen for storage changes
- `getBytesInUse(keys = null)` - Get storage size (returns Promise<number>)

**Error Handling**: All methods include try-catch blocks and log errors to console.

### 3. `extraction-processor.js`
**Purpose**: Processes extraction requests across multiple tabs.

**Class**: `ExtractionProcessor`

**Constructor Parameters**:
- `request` (required) - Object containing:
  - `urls` - Array of URLs to process
  - `elements` - Array of elements to extract
  - `parallelTabs` - Number of parallel tabs
  - `maxWaitTime` - Maximum wait time (default: 30s)
  - `delayBeforeExtract` - Delay before extraction (default: 0)

**Properties**:
- `requestQueue` - Queue of URLs to process
- `activeCount` - Number of active tabs
- `requestStatus` - Map of URL to status
- `outcomes` - Map of URL to outcomes
- `cancelled` - Cancellation flag
- `activeTabs` - Set of active tab IDs

**Methods**:
- `getProgressBar()` - Returns visual progress bar string
- `initialize()` - Initialize processing
- `processQueue()` - Process URL queue (async)
- `processRequest(url)` - Process single URL (async, returns Promise)
- `cancel()` - Cancel all processing
- `getStatus()` - Get status of all requests
- `getOutcomes()` - Get extraction outcomes

**Internal Functions**:
- `extractData(elements)` - Injected function that extracts data from page
  - Handles email extraction with regex
  - Processes element selectors by priority
  - Returns extraction results

### 4. `permission-manager.js`
**Purpose**: Manages Chrome extension permissions.

**Class**: `PermissionManager` (static methods only)

**Methods**:
- `requestAllUrlsPermission({ onSuccess, onFailure })` - Request <all_urls> permission
- `requestClipboardPermission({ onSuccess, onFailure })` - Request clipboard write
- `requestDownloadsPermission({ onSuccess, onFailure })` - Request downloads
- `hasAllUrlsPermission()` - Check if has all URLs permission (returns Promise<boolean>)
- `hasClipboardPermission()` - Check clipboard permission (returns Promise<boolean>)
- `hasDownloadsPermission()` - Check downloads permission (returns Promise<boolean>)
- `removePermission(permission)` - Remove permission (returns Promise<boolean>)
- `getAllPermissions()` - Get all granted permissions (returns Promise<object>)
- `requestMultiplePermissions(permissions, origins)` - Request multiple permissions
- `hasMultiplePermissions(permissions, origins)` - Check multiple permissions

### 5. `image-downloader.js`
**Purpose**: Handles image downloading functionality.

**Class**: `ImageDownloader` (static methods only)

**Methods**:
- `downloadImages({ images, folder })` - Download multiple images
  - Sanitizes filenames
  - Batches downloads (10 at a time)
  - Default folder: 'panda-images'
- `downloadImage({ url, filename })` - Download single image (returns Promise<downloadId>)
- `monitorDownload(downloadId)` - Monitor download progress (returns Promise<download>)
- `getDownloadHistory(query)` - Get download history (returns Promise<downloads[]>)
- `clearDownloadHistory()` - Clear download history
- `pauseDownload(downloadId)` - Pause download (returns Promise<void>)
- `resumeDownload(downloadId)` - Resume download (returns Promise<void>)
- `cancelDownload(downloadId)` - Cancel download (returns Promise<void>)
- `openDownload(downloadId)` - Open downloaded file (returns Promise<void>)
- `showDownloadInFolder(downloadId)` - Show download in folder
- `acceptDanger(downloadId)` - Accept dangerous download (returns Promise<void>)

### 6. `message-handlers.js`
**Purpose**: Sets up Chrome runtime message handlers.

**Functions**:
- `setupMessageHandlers()` - Main function that sets up all message listeners
- `startExtraction({ tabId, request, instanceId, statusAction })` - Start extraction process
- `handlePageDetailsHighlight(data, fromTabId)` - Handle page details highlight

**Exported Variables**:
- `activeExtractions` - Map of active extraction instances

**Message Actions Handled**:
- `extract-data` - Extract data from page
- `save-results` - Save extraction results
- `get-settings` - Get extension settings
- `update-settings` - Update extension settings
- `download-data` - Download data in various formats
- `element-selected` - Handle element selection
- `content-load-error` - Handle content script load errors

**Handler Functions**:
- `handleExtractData(request, sender, sendResponse)`
- `handleSaveResults(request, sender, sendResponse)`
- `handleGetSettings(request, sender, sendResponse)`
- `handleUpdateSettings(request, sender, sendResponse)`
- `handleDownloadData(request, sender, sendResponse)`
- `handleElementSelected(request, sender, sendResponse)`

## Critical Issues Found

### Issue in `message-handlers.js`:
The `setupMessageHandlers` function checks for Chrome runtime but doesn't handle the actual messages that the content script is sending (`ping`, `open`, etc.). These messages are handled in `background.js` instead.

### Issue in `extraction-processor.js`:
The email regex pattern is hardcoded in the injected function, which might cause issues if the RegexPatterns import is not available in the injected context.

## Usage Example
```javascript
// In service worker
import setupMessageHandlers from './background/message-handlers.js';
setupMessageHandlers();

// Start extraction
import { startExtraction } from './background';
startExtraction({
  tabId: 123,
  request: {
    urls: ['https://example.com'],
    elements: [...],
    parallelTabs: 3
  },
  instanceId: 'extraction-1'
});
``` 