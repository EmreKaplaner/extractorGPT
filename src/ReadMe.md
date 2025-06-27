# EXTRACTOR-GPT Source Code Structure

## Overview
This directory contains all the source code for EXTRACTOR-GPT, a Chrome extension for web data extraction. The code is organized into modular ES6 modules that get bundled into three production files.

## Root Files

### 1. `main-content-react.js`
**Purpose**: Main entry point for the full UI with React integration.
- Initializes the extension with React UI
- Creates shadow DOM container
- Sets up extraction and selection engines
- Handles Chrome runtime messages (`ping`, `open`, `close`, `extract-page`, `page-details-*`)
- Manages global state in `window.__extractorGPT`
- **Bundle Output**: `bundle/main.bundle.js` (1.2MB)

### 2. `selector-content.js`
**Purpose**: Lightweight entry point for selection-only mode.
- Minimal UI for element selection
- Used for page details extraction
- No React dependencies
- Handles selection events and sends them to background
- **Bundle Output**: `bundle/selector.bundle.js` (34.1KB)

### 3. `service-worker.js`
**Purpose**: Service worker entry point for background functionality.
- Imports and initializes background services
- Sets up message handlers
- Tracks extension lifecycle events
- **Bundle Output**: `bundle/service.bundle.js` (39.7KB)

### 4. `main-content.js`
**Purpose**: Alternative non-React content script (not currently used).
- Simpler implementation without React
- Contains basic extraction functionality
- Useful for testing or lightweight deployments

### 5. `test-content.js`
**Purpose**: Minimal test content script for debugging.
- Simple message handler for testing injection
- Shows basic UI elements to confirm functionality
- Used for troubleshooting content script issues

## Modules/Folders

### 📁 [analytics](./analytics/)
Event tracking and analytics functionality.
- **Files**: `index.js`, `event-tracker.js`
- **Current State**: No-op implementation (doesn't send data)
- **Key Exports**: `eventTracker` singleton

### 📁 [auth](./auth/)
Authentication and licensing management.
- **Files**: `index.js`, `auth-manager.js`
- **Current State**: Bypass implementation (always returns success)
- **Key Exports**: `authManager` singleton

### 📁 [background](./background/)
Service worker and background script functionality.
- **Files**: `index.js`, `message-handlers.js`, `storage-manager.js`, `extraction-processor.js`, `permission-manager.js`, `image-downloader.js`
- **Key Features**: 
  - Complete message handling for all extraction types
  - Storage management with Chrome storage API
  - Permission handling for downloads and clipboard
  - **ExtractionProcessor**: Parallel tab management for multi-URL extraction
  - **ImageDownloader**: Batch image download functionality
- **Key Exports**: `StorageManager`, `ExtractionProcessor`, `PermissionManager`, `ImageDownloader`, `setupMessageHandlers`

### 📁 [constants](./constants/)
Shared constants and enumerations.
- **Files**: `index.js`
- **Key Exports**: All constant definitions, message actions, tab types, etc.

### 📁 [data-management](./data-management/)
Data processing and export functionality.
- **Files**: `index.js`, `results-table.js`, `export-utils.js`
- **Key Features**: Results table management, CSV/JSON/clipboard export
- **Key Exports**: `ResultsTable`, `ExportUtils`

### 📁 [engine](./engine/)
Core extraction algorithms and task execution.
- **Files**: `index.js`, `constants.js`, `extraction-engine.js`, `task-runner.js`, `automation-handler.js`, `pagination-detector.js`
- **Key Features**: 
  - Element extraction with multiple strategies
  - **AutomationHandler**: Full automation with scrolling and pagination
  - **PaginationDetector**: Smart pagination button detection
  - Task automation and execution
- **Key Exports**: `ExtractionEngine`, `TaskRunner`, `AutomationHandler`, `PaginationDetector`

### 📁 [selection](./selection/)
Element selection and highlighting functionality.
- **Files**: `index.js`, `selection-constants.js`, `selection-engine.js`, `css-selector-utils.js`, `group-finder.js`
- **Key Features**: 
  - Interactive selection with visual feedback
  - Collection detection and grouping
  - CSS selector generation
  - Page details selection mode
- **Key Exports**: `SelectionEngine`, `CssSelectorUtils`, `GroupFinder`

### 📁 [state-management](./state-management/)
React state management using Context API.
- **Files**: `index.js`, `global-state-provider.js`, `extract-state-provider.js`, `user-state-provider.js`
- **Key Features**: Global app state, extraction state, user authentication state
- **Key Exports**: React Context providers

### 📁 [ui](./ui/)
UI components and utilities.
- **Subfolders**:
  - `components/` - React components
    - `panels/` - Main UI panels (ExtractorGPTPanel)
    - `tabs/` - All 5 tab components
    - `buttons/` - Button components
    - `modals/` - Modal dialogs
    - `tables/` - Data tables
    - `common/` - Shared components
  - `styles/` - CSS files (`layers.css`, `styles.css`)
- **Key Features**: 
  - Complete multi-tab interface
  - Shadow DOM utilities
  - Event handlers
  - Highlighter components

## Build Process

The source code is bundled using esbuild into three production bundles:

1. **main.bundle.js** (1.2MB) - Full UI with React and all features
2. **selector.bundle.js** (34KB) - Lightweight selection mode
3. **service.bundle.js** (40KB) - Background services

Build commands:
```bash
npm run build        # Build all three bundles
npm run dev         # Development mode with watch
```

## Architecture Notes

- Uses ES6 modules throughout
- Bundled to IIFE format for Chrome Extension compatibility
- Shadow DOM isolation for UI components
- React 18 for UI state management
- No external analytics or auth endpoints (bypassed)

## Current Implementation Status

### ✅ Fully Implemented Features

1. **Complete Multi-Tab UI**
   - Extract List tab with results display
   - Extract Details tab with element selection
   - Extract Emails tab with scanning
   - Download Images tab with gallery
   - Help tab with settings

2. **Smart Automation**
   - Auto-scroll functionality
   - Dynamic content waiting
   - **Smart Pagination Detection** - Automatically finds "Next" buttons
   - Parallel extraction support

3. **Page Details Extraction**
   - Visual element selection mode
   - Cross-page extraction
   - Background tab processing
   - Full message passing implementation

4. **Email Extraction**
   - Single page scanning
   - Multi-URL extraction
   - Export to CSV/clipboard

5. **Image Extraction**
   - Find all images on page
   - Gallery view with previews
   - Bulk download support

6. **Data Export**
   - CSV export
   - JSON export
   - Clipboard copy
   - (Excel requires xlsx.js library)

### 🚧 What's Still Missing

1. **External Libraries** (~600KB)
   - SheetJS/xlsx.js for Excel export
   - Google Sheets API for direct export
   - Stripe SDK for payments (not critical)

2. **UI Polish**
   - Loading animations
   - Toast notifications
   - Dark mode completion
   - Virtual scrolling for large datasets

3. **Advanced Features**
   - Template saving/loading
   - Scheduled extractions
   - API webhook integration

## Recent Major Updates

1. **PaginationDetector** - Smart pagination detection with multiple strategies
2. **Page Details Integration** - Full content script connection with message handlers
3. **ExtractionProcessor** - Already implemented parallel tab management
4. **Complete UI Implementation** - All 5 tabs now fully functional
5. **Export Functionality** - CSV, JSON, and clipboard export working

## Bundle Size Breakdown

Current bundle sizes:
- `main.bundle.js`: 1.2MB (includes React and all features)
- `selector.bundle.js`: 34KB (lightweight selection mode)
- `service.bundle.js`: 40KB (background services)

The main bundle is now comparable to WebPeeler's size because we've implemented:
- ✅ All core extraction functionality
- ✅ Complete React UI with all tabs
- ✅ Smart pagination detection
- ✅ Parallel processing
- ✅ Full message handling

## Usage Notes

The extension is now fully functional for:
- Extracting lists of similar elements
- Running automation with pagination
- Extracting specific elements from multiple pages
- Scanning for emails and images
- Exporting data in multiple formats

For more detailed information about each module, see the individual README files in each folder.

# ExtractorGPT Source Code Architecture

## Overview
ExtractorGPT is a Chrome extension for web data extraction, built with a modular architecture using React for the UI and vanilla JavaScript for the extraction engine.

## Directory Structure
```
src/
├── main-content-react.js    # Main content script entry point
├── background/              # Background service worker
├── engine/                  # Core extraction logic
├── selection/              # Selection and highlighting system
├── ui/                     # User interface components
├── data-management/        # Data handling and export
├── state-management/       # React state providers
├── constants/              # Shared constants
└── auth/                   # Authentication (if needed)
```

## Common Errors and Solutions

### 1. "ExtractionEngine is not defined"
**Cause**: Scope issue where imported modules are not accessible within nested functions.

**Solution**: The imports are at the module level but being used inside an IIFE. The current architecture has imports outside the IIFE and usage inside, which can cause scope issues.

**Fix**: Ensure all imported modules are accessible in the scope where they're used. The current structure is:
```javascript
// Imports at module level
import { ExtractionEngine } from './engine/index.js';

// Usage inside IIFE
(function() {
  // ... nested functions trying to use ExtractionEngine
  window.__extractorGPT.extractionEngine = ExtractionEngine; // This might fail
})();
```

### 2. "Could not establish connection. Receiving end does not exist."
**Cause**: Background script trying to send messages to a tab where the content script hasn't been injected yet.

**Solution**: The background script should check if the content script is loaded before sending messages:
```javascript
// In background.js
chrome.tabs.sendMessage(tabId, {action: 'ping'}, response => {
  if (chrome.runtime.lastError) {
    // Content script not loaded, inject it first
    injectScripts(tab);
  } else {
    // Content script loaded, send the actual message
    chrome.tabs.sendMessage(tabId, {action: 'open'});
  }
});
```

## Architecture Design

### Content Script (main-content-react.js)
1. **Initialization Flow**:
   - Check if already loaded (prevent duplicates)
   - Create shadow DOM for UI isolation
   - Initialize React app inside shadow DOM
   - Set up extraction and selection engines
   - Listen for messages from background script

2. **Key Components**:
   - `ExtractorApp`: Main React component
   - `SelectionEngine`: Handles element selection and highlighting
   - `ExtractionEngine`: Extracts data from selected elements
   - `ResultsTable`: Manages extracted data

### Selection System
- **SelectionEngine**: Main controller for selection modes
- **CursorHighlighter**: Shows hover effects
- **CollectionHighlighter**: Highlights groups of elements
- **Event Handlers**: Manages mouse and keyboard events

### Data Flow
1. User enables selection mode
2. User hovers over elements (visual feedback)
3. User clicks to select
4. ExtractionEngine extracts data
5. ResultsTable stores data
6. React UI updates to show results
7. User can export data

### Message Passing
- **Background → Content**: Commands like 'open', 'close', 'extract'
- **Content → Background**: Status updates, extraction results
- **Content → React**: Custom events for UI updates

## Best Practices

### 1. Module Imports
- Use ES6 modules consistently
- Export/import correctly (named vs default)
- Ensure proper file extensions (.js)

### 2. Error Handling
- Always check if objects exist before using them
- Use try-catch blocks for critical operations
- Provide meaningful error messages

### 3. Performance
- Lazy load heavy components
- Use shadow DOM for style isolation
- Minimize DOM manipulations

### 4. Security
- Validate all data from web pages
- Use content security policies
- Sanitize HTML before display

## Development Guidelines

### Adding New Features
1. Create module in appropriate directory
2. Export from index.js
3. Import in main-content-react.js
4. Initialize in proper sequence
5. Add error handling

### Testing
1. Load extension in Chrome
2. Test on various websites
3. Check console for errors
4. Verify data extraction
5. Test export functionality

### Debugging
1. Use Chrome DevTools
2. Check background script logs
3. Monitor content script console
4. Use React DevTools for UI
5. Add strategic console.logs

## Known Issues

### 1. Multiple Script Injections
The background script may inject scripts multiple times. Solution implemented: Guard clause in content script.

### 2. Shadow DOM Event Bubbling
Events don't bubble out of shadow DOM. Solution: Use custom events on window object.

### 3. React State Updates
State updates in shadow DOM may not trigger re-renders. Solution: Use proper React patterns and ensure event listeners are set up correctly.

## Future Improvements
1. Implement proper TypeScript for type safety
2. Add unit tests for extraction logic
3. Optimize bundle size
4. Add more export formats
5. Implement cloud sync for settings
