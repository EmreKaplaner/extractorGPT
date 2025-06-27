# Constants

## Overview
This directory contains all constant values, enumerations, and configuration objects used throughout the EXTRACTOR-GPT extension. It serves as a centralized location for maintaining consistency across the application.

## File

### `index.js`
Main constants file that exports all application constants and re-exports engine constants.

## Constant Categories

### Data Types
Defines the types of data that can be extracted.

```javascript
DataTypes = {
  TEXT: 'text',                // Plain text content
  LINK_URL: 'link-url',       // Hyperlink URLs
  IMAGE_URL: 'image-url',     // Image source URLs
  EMAIL: 'email'              // Email addresses
}
```

### Action Types
Basic action categories for extraction.

```javascript
ActionTypes = {
  EXTRACT: 'extract',         // Data extraction action
  PAGINATION: 'pagination'    // Pagination navigation
}
```

### View Types
Different view modes for displaying data.

```javascript
ViewTypes = {
  LIST: 'LIST',              // List/collection view
  TABLE: 'TABLE',            // Table view
  ELEMENT: 'ELEMENT'         // Single element view
}
```

### Extended Action Types
Detailed extraction and navigation actions.

```javascript
ExtendedActionTypes = {
  EXTRACT_TEXT: 'extract-text',
  EXTRACT_HTML: 'extract-html',
  EXTRACT_ATTRIBUTE: 'extract-attribute',
  EXTRACT_IMAGE_URL: 'extract-image-url',
  EXTRACT_LINK_URL: 'extract-link-url',
  PAGINATION_BUTTON: 'pagination-button',
  PAGINATION_INFINITE_SCROLL: 'pagination-infinite-scroll',
  LOOP_LIST: 'loop-list'
}
```

### Run Status
Extraction process states.

```javascript
RunStatus = {
  IDLE: 'idle',              // Not running
  RUNNING: 'running',        // Extraction in progress
  STOPPING: 'stopping',      // Stop requested
  ERROR: 'error',            // Error occurred
  COMPLETED: 'completed'     // Successfully completed
}
```

### Export Formats
Available data export formats.

```javascript
ExportFormats = {
  CLIPBOARD: 'clipboard',    // Copy to clipboard
  CSV: 'csv',               // Comma-separated values
  EXCEL: 'excel',           // Microsoft Excel
  JSON: 'json',             // JavaScript Object Notation
  GOOGLE_SHEETS: 'google-sheets' // Google Sheets
}
```

### Tab Types
Main UI tab identifiers.

```javascript
TabTypes = {
  RUN: 'run',                        // List extraction tab
  PAGE_DETAILS: 'page-details',      // Page details tab
  EXTRACT_EMAILS: 'extract-emails',  // Email extraction tab
  DOWNLOAD_IMAGES: 'download-images', // Image download tab
  HELP: 'help',                      // Help/support tab
  SETTINGS: 'settings'               // Settings tab
}
```

### Scroll Types
Page scrolling methods.

```javascript
ScrollTypes = {
  SCROLL_INTO_VIEW: 'scroll-into-view',  // Native scrollIntoView
  SMOOTH_SCROLL_TO: 'smooth-scroll-to'   // Smooth scroll animation
}
```

### Message Actions
Chrome extension message types for communication between scripts.

```javascript
MessageActions = {
  DOWNLOAD_IMAGES: 'download-images',
  DOWNLOAD_FILE: 'download-file',
  REQUEST_CLIPBOARD_PERMISSIONS: 'request-clipboard-permissions',
  PAGE_DETAILS_HIGHLIGHT: 'page-details-highlight',
  PAGE_DETAILS_SELECTED: 'page-details-selected',
  PAGE_DETAILS_EXTRACT: 'page-details-extract',
  STOP_PAGE_DETAILS_EXTRACTION: 'stop-page-details-extraction',
  EXTRACT_EMAILS: 'extract-emails',
  EXTRACT_EMAILS_STOP: 'extract-emails-stop',
  STATUS_UPDATE_EXTRACT: 'status-update-extract',
  STATUS_UPDATE_EXTRACT_EMAILS: 'status-update-extract-emails'
}
```

### Storage Keys
Chrome storage keys for persisting data.

```javascript
StorageKeys = {
  PERMISSIONS_GRANTED: 'permissionsGranted',
  PERMISSIONS_CLIPBOARD_GRANTED: 'permissionsClipboardGranted',
  REQUEST_HIGHLIGHT_TAB_ID: 'requestHighlightTabId',
  EXTRACT_SETTINGS: 'extractSettings'
}
```

### Regex Patterns
Common regular expressions for data extraction.

```javascript
RegexPatterns = {
  EMAIL: /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
  PHONE: /(\+?\d{1,4}[\s-]?)?(\(?\d{1,4}\)?[\s-]?)?[\d\s-]{3,15}\d/g
}
```

### Default Extract Settings
Default configuration for extraction operations.

```javascript
DEFAULT_EXTRACT_SETTINGS = {
  extractImages: true,                    // Include images in extraction
  extractAriaLabel: false,               // Include ARIA labels
  removeEmptyGroupsThreshold: 0.2,       // 20% empty threshold
  removeSimilarGroupsThreshold: 0.9      // 90% similarity threshold
}
```

## Engine Constants
This file also re-exports all constants from the engine module:
```javascript
export * from '../engine/constants.js';
```

## Usage Examples

### Checking Run Status
```javascript
import { RunStatus } from './constants';

if (extractState.status === RunStatus.RUNNING) {
  showProgressBar();
} else if (extractState.status === RunStatus.ERROR) {
  showErrorMessage();
}
```

### Message Handling
```javascript
import { MessageActions } from './constants';

chrome.runtime.sendMessage({
  action: MessageActions.PAGE_DETAILS_EXTRACT,
  data: { urls: selectedUrls }
});
```

### Export Format Selection
```javascript
import { ExportFormats } from './constants';

const exportOptions = [
  { value: ExportFormats.CSV, label: 'CSV File' },
  { value: ExportFormats.EXCEL, label: 'Excel File' },
  { value: ExportFormats.JSON, label: 'JSON File' }
];
```

### Tab Navigation
```javascript
import { TabTypes } from './constants';

function handleTabChange(tabId) {
  switch(tabId) {
    case TabTypes.RUN:
      showListExtraction();
      break;
    case TabTypes.PAGE_DETAILS:
      showPageDetails();
      break;
    // ... other cases
  }
}
```

## Best Practices

1. **Naming Convention**
   - Use UPPER_SNAKE_CASE for constant names
   - Use descriptive, self-documenting names
   - Group related constants in objects

2. **Type Safety**
   - Use Object.freeze() to prevent modifications
   - Consider TypeScript enums for better type safety
   - Document expected values and usage

3. **Organization**
   - Group constants by functionality
   - Keep related constants together
   - Add comments for complex values

4. **Maintenance**
   - Update constants when adding features
   - Remove unused constants
   - Keep documentation in sync

## Adding New Constants

When adding new constants:
1. Choose the appropriate category
2. Follow existing naming patterns
3. Add documentation comments
4. Update this README
5. Consider impacts on existing code

Example:
```javascript
// New extraction type for video URLs
DataTypes.VIDEO_URL = 'video-url';

// New message action for video extraction
MessageActions.EXTRACT_VIDEOS = 'extract-videos';
```

## Integration Notes
- Constants are imported throughout the application
- Changes may require updates in multiple files
- Some constants map to CSS classes or storage keys
- Engine constants are merged via re-export 