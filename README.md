# EXTRACTOR-GPT Chrome Extension

## Overview
EXTRACTOR-GPT is a Chrome extension for intelligent web data extraction, designed as a rebranded and unbundled version of WebPeeler. It allows users to extract lists, tables, emails, images, and specific elements from web pages with advanced automation features.

## 🏗️ Architecture Overview

### Core Design Principles
1. **Modular ES6 Architecture**: All code is organized into ES6 modules for maintainability
2. **Shadow DOM Isolation**: UI is rendered in Shadow DOM to prevent style conflicts
3. **React-based UI**: Modern React components with Tailwind CSS styling
4. **Service Worker Background**: Chrome Extension Manifest V3 compliance
5. **Content Script Injection**: Dynamic script injection for cross-origin compatibility

### Build System
- **Bundler**: esbuild for fast ES6 → IIFE compilation
- **Entry Points**: 3 separate bundles for different use cases
- **CSS Processing**: Tailwind CSS bundled with JavaScript
- **Development**: Watch mode with sourcemaps

## 📁 Project Structure

```
EXTRACTOR-GPT/
├── manifest.json              # Chrome Extension manifest (MV3)
├── package.json              # Node.js dependencies and build scripts
├── build.js                  # Development build script
├── build-clean.js            # Production build script
├── popup.html               # Extension popup UI (unused currently)
├── popup.js                 # Extension popup logic (unused currently)
├── background.js            # Legacy background script (renamed to background-old.js)
├── bundle/                  # Generated bundle files (build output)
│   ├── main.bundle.js       # Full React UI bundle (1.2MB)
│   ├── selector.bundle.js   # Lightweight selection bundle (34KB)
│   ├── service.bundle.js    # Service worker bundle (40KB)
│   ├── layers.css          # Z-index and layout styles
│   └── styles.css          # Component styles
├── src/                     # Source code (ES6 modules)
└── docs/                    # Documentation and analysis files
```

## 📦 Bundle Architecture

### 1. Service Worker Bundle (`service.bundle.js`)
**Entry Point**: `src/service-worker.js`
**Size**: ~40KB
**Purpose**: Background processing and content script injection

**Key Components**:
- Chrome extension lifecycle management
- Content script injection logic
- Message passing coordination
- Tab management and cleanup

**Injection Flow**:
```
User clicks extension icon → Service worker detects click → 
Checks if content script loaded → Injects CSS + JS → Sends 'open' message
```

### 2. Main Content Bundle (`main.bundle.js`)
**Entry Point**: `src/main-content-react.js`
**Size**: ~1.2MB
**Purpose**: Full-featured React UI with all extraction capabilities

**Key Components**:
- Complete React application
- All extraction engines
- Shadow DOM management
- State management (Context API)
- All UI components and tabs

### 3. Selector Bundle (`selector.bundle.js`)
**Entry Point**: `src/selector-content.js`
**Size**: ~34KB
**Purpose**: Lightweight element selection for page details extraction

**Key Components**:
- Basic selection engine
- Element highlighting
- Minimal message passing

## 🗂️ Source Code Structure (`/src`)

### Core Modules

#### `/analytics` - Event Tracking
- **Purpose**: User behavior and feature usage tracking
- **Implementation**: No-op version (privacy-first)
- **Files**: `event-tracker.js`, `index.js`
- **Status**: ✅ Complete (bypassed)

#### `/auth` - Authentication & Licensing
- **Purpose**: User authentication and license management
- **Implementation**: Bypass version (always returns success)
- **Files**: `auth-manager.js`, `index.js`
- **Status**: ✅ Complete (bypassed)

#### `/background` - Service Worker Logic
- **Purpose**: Background processing, storage, permissions
- **Key Files**:
  - `message-handlers.js` - Chrome runtime message routing
  - `storage-manager.js` - Chrome storage API wrapper
  - `extraction-processor.js` - Multi-tab extraction coordination
  - `permission-manager.js` - Chrome permissions management
  - `image-downloader.js` - Bulk image download functionality
- **Status**: ✅ Complete

#### `/constants` - Shared Constants
- **Purpose**: Centralized constants and enums
- **Key Exports**: `MessageActions`, `TabTypes`, `RunStatus`, `ExportFormats`
- **Status**: ✅ Complete

#### `/data-management` - Data Processing
- **Purpose**: Results handling and export functionality
- **Key Files**:
  - `results-table.js` - Data structure for extraction results
  - `export-utils.js` - CSV, JSON, clipboard export utilities
- **Status**: ✅ Complete

#### `/engine` - Extraction Core
- **Purpose**: Core data extraction algorithms
- **Key Files**:
  - `extraction-engine.js` - Main extraction algorithms (STATIC CLASS)
  - `task-runner.js` - Task execution and automation
  - `automation-handler.js` - Advanced automation with pagination
  - `pagination-detector.js` - Smart pagination detection
- **Status**: ✅ Complete

#### `/selection` - Element Selection
- **Purpose**: Interactive element selection and highlighting
- **Key Files**:
  - `selection-engine.js` - Main selection controller
  - `css-selector-utils.js` - CSS selector generation
  - `group-finder.js` - Collection detection algorithms
- **Status**: ✅ Complete

#### `/state-management` - React State
- **Purpose**: React Context API state management
- **Key Files**:
  - `global-state-provider.js` - App-wide state
  - `extract-state-provider.js` - Extraction progress state
  - `user-state-provider.js` - User authentication state
- **Status**: ✅ Complete

#### `/ui` - User Interface
- **Purpose**: React components and UI utilities
- **Structure**:
  ```
  ui/
  ├── components/
  │   ├── panels/          # Main UI panels
  │   ├── tabs/           # Tab content components
  │   ├── common/         # Reusable components
  │   ├── modals/         # Modal dialogs
  │   ├── tables/         # Data display tables
  │   └── buttons/        # Button components
  ├── styles/             # CSS and styling
  ├── cursor-highlighter.js
  ├── collection-highlighter.js
  ├── shadow-dom-utils.js
  └── event-handlers.js
  ```
- **Status**: ✅ Complete

### Entry Point Files

#### `main-content-react.js`
- **Purpose**: Main React application entry point
- **Initialization Flow**:
  1. Guard against multiple injections
  2. Create Shadow DOM container
  3. Initialize React root
  4. Set up extraction and selection engines
  5. Attach event listeners
  6. Listen for Chrome runtime messages

#### `service-worker.js`
- **Purpose**: Service worker entry point
- **Key Functions**:
  - `injectContentScripts()` - Content script injection logic
  - `chrome.action.onClicked` - Extension icon click handler
  - Tab lifecycle management

#### `selector-content.js`
- **Purpose**: Lightweight selection-only mode
- **Use Case**: Page details extraction across multiple URLs

## 🔧 Build System

### Build Scripts

#### `build.js` (Development)
```bash
npm run build
```
- Fast development builds
- Sourcemaps enabled
- Watch mode available
- Single bundle generation

#### `build-clean.js` (Production)
```bash
npm run build:clean
```
- Production-optimized builds
- All three bundles generated
- Minification enabled
- CSS file copying

### Build Configuration
- **Bundler**: esbuild
- **Format**: IIFE (Immediately Invoked Function Expression)
- **Target**: ES2020
- **External**: None (everything bundled)
- **Platform**: Browser

## 🔌 Chrome Extension Integration

### Manifest.json (Manifest V3)
```json
{
  "manifest_version": 3,
  "name": "Extractor GPT - AI Web Scraper",
  "version": "1.0.0",
  "background": {
    "service_worker": "bundle/service.bundle.js"
  },
  "action": {
    "default_title": "Extract data from this page"
  },
  "permissions": [
    "activeTab", "storage", "scripting", "tabs", "notifications"
  ],
  "host_permissions": ["<all_urls>"]
}
```

### Permission System
- **activeTab**: Access to current tab content
- **storage**: Chrome storage API for settings/data
- **scripting**: Dynamic script injection
- **tabs**: Tab management for multi-page extraction
- **notifications**: User feedback for errors
- **host_permissions**: Access to all websites

## 🚀 Runtime Flow

### 1. Extension Activation
```
User clicks extension icon → 
Service worker receives chrome.action.onClicked → 
injectContentScripts(tab) called → 
Check if content script loaded (ping/pong) → 
If not loaded: inject CSS + main.bundle.js → 
Send 'open' message to content script
```

### 2. Content Script Initialization
```
main.bundle.js loads → 
Guard against multiple injections → 
Create Shadow DOM container → 
Initialize React application → 
Set up extraction engines → 
Listen for 'open' message → 
Show UI panel
```

### 3. Data Extraction Flow
```
User enables selection mode → 
SelectionEngine.attach() → 
User hovers over elements → 
CursorHighlighter shows preview → 
User clicks on list/table → 
ExtractionEngine.findExtractableElements() → 
ResultsTable stores data → 
React UI updates with results
```

### 4. Automation Flow
```
User clicks "Run Automation" → 
AutomationHandler.start() → 
Auto-scroll + dynamic content detection → 
PaginationDetector finds next buttons → 
Continue extraction across pages → 
Aggregate results in ResultsTable
```

## 🐛 Common Issues & Debugging

### Current Error Pattern Analysis
**Error Sequence**:
```
"Uncaught ReferenceError: ExtractionEngine is not defined"
[SERVICE-WORKER] Error sending open message after injection: Error: Could not establish connection. Receiving end does not exist.
```

**What This Means**:
1. **First Error**: Content script fails to load due to ExtractionEngine scope issue
2. **Second Error**: Service worker can't communicate because content script crashed during initialization
3. **Root Cause**: The IIFE parameter passing in `main-content-react.js` is breaking during esbuild bundling

**Immediate Fix Steps**:
1. Run `npm run build:clean` to ensure fresh build
2. Check if `bundle/main.bundle.js` exists and is ~1.2MB
3. If still failing, the IIFE wrapper needs to be removed or fixed

### Issue: "ExtractionEngine is not defined"
**Cause**: ES6 module scope issues or build problems

**Root Cause Analysis**:
The error occurs because the IIFE (Immediately Invoked Function Expression) in `main-content-react.js` receives `ExtractionEngine` as a parameter, but when the bundler converts ES6 modules to IIFE format, the scope can get confused.

**Specific Problem**:
```javascript
// In main-content-react.js line 29-44
(function(
  React,
  ReactDOM,
  ShadowDomUtils,
  TailwindCSS,
  WebPeelerPanel,
  SelectionEngine,
  ExtractionEngine,  // ← This parameter might not match the import
  automationHandler,
  TaskRunner,
  ResultsTable,
  // ... other parameters
) {
  // ... code that uses ExtractionEngine
})(
  React,
  ReactDOM,
  ShadowDomUtils,
  TailwindCSS,
  WebPeelerPanel,
  SelectionEngine,
  ExtractionEngine,  // ← This argument might be undefined
  automationHandler,
  TaskRunner,
  ResultsTable,
  // ... other arguments
);
```

**Debug Steps**:
1. **Check Build Output**: Verify `npm run build:clean` completed without errors
2. **Verify Bundle Size**: `bundle/main.bundle.js` should be ~1.2MB
3. **Check Import Path**: Ensure `import { ExtractionEngine } from './engine/index.js'` is correct
4. **Verify Export**: In `src/engine/index.js`, ensure `export { ExtractionEngine }` exists
5. **Check Static Class**: In `src/engine/extraction-engine.js`, ensure it's `export class ExtractionEngine`
6. **Console Debug**: Add `console.log('ExtractionEngine:', ExtractionEngine)` before the IIFE
7. **Remove IIFE**: Temporarily remove the IIFE wrapper to test direct usage

**Quick Fix**:
```javascript
// Replace the IIFE parameter approach with direct assignment
window.__extractorGPT.extractionEngine = ExtractionEngine;
// Instead of passing through IIFE parameters
```

### Issue: "Could not establish connection. Receiving end does not exist"
**Cause**: Content script not loaded or tab closed
**Debug Steps**:
1. Check if content script injection succeeded
2. Verify tab is still active and not navigated away
3. Check Chrome extension permissions
4. Look for content script errors in tab's console

### Issue: Selection Mode Not Working
**Cause**: Event listeners not attached or selection engine issues
**Debug Steps**:
1. Check if `window.__extractorGPT.selectionEngine` exists
2. Verify `attach()` was called successfully
3. Check for JavaScript errors in console
4. Ensure Shadow DOM is properly initialized

### Issue: React UI Not Rendering
**Cause**: Shadow DOM or React initialization problems
**Debug Steps**:
1. Check if Shadow DOM container exists
2. Verify React root creation succeeded
3. Look for React errors in console
4. Check if Tailwind CSS is loaded

## 🔍 Debugging Tools

### Global Debug Objects
```javascript
// Main extension state (available in content script)
window.__extractorGPT = {
  isInitialized: boolean,
  isActive: boolean,
  shadowRoot: ShadowRoot,
  selectionEngine: SelectionEngine,
  extractionEngine: ExtractionEngine,
  resultsTable: ResultsTable,
  // ... other components
}

// Service worker state (available in background)
self.__extractorGPT = {
  storage: StorageManager,
  activeExtractions: Map,
  requestHighlightTabId: number
}
```

### Console Commands
```javascript
// Check if content script is loaded
chrome.tabs.sendMessage(tabId, {action: 'ping'})

// Force inject content script
chrome.scripting.executeScript({
  target: {tabId: tabId},
  files: ['bundle/main.bundle.js']
})

// Check extraction results
window.__extractorGPT.resultsTable.rows
```

### Log Patterns
- `[EXTRACTOR-GPT]` - General extension logs
- `[SERVICE-WORKER]` - Service worker specific logs
- `[CONTENT]` - Content script logs
- `[SelectionEngine]` - Selection system logs
- `[WebPeelerPanel]` - UI component logs

## 📊 Performance Metrics

### Bundle Sizes
- **main.bundle.js**: 1.2MB (includes React + all features)
- **selector.bundle.js**: 34KB (minimal selection only)
- **service.bundle.js**: 40KB (background logic)

### Memory Usage
- **Typical Runtime**: 15-30MB per tab
- **With Large Results**: 50-100MB per tab
- **Background**: 5-10MB persistent

### Build Times
- **Development Build**: 200-500ms
- **Production Build**: 1-3 seconds
- **Watch Mode**: 100-200ms per change

## 🔄 Development Workflow

### Setup
```bash
cd EXTRACTOR-GPT
npm install
npm run build:clean
```

### Development
```bash
npm run build  # Single build
npm run dev    # Watch mode
```

### Testing
1. Load extension in Chrome (chrome://extensions/)
2. Enable Developer mode
3. Click "Load unpacked" → select EXTRACTOR-GPT folder
4. Test on various websites
5. Check console for errors

### Deployment
```bash
npm run build:clean  # Production build
# Package entire folder for Chrome Web Store
```

## 🎯 Key Technical Decisions

### Why ES6 Modules → IIFE?
Chrome Extensions cannot use ES6 modules directly in content scripts. IIFE format ensures compatibility while maintaining modular development.

### Why Shadow DOM?
Prevents CSS conflicts with host websites and provides style isolation for the extension UI.

### Why React in Content Script?
Provides modern UI development experience while being bundled into a single file for easy injection.

### Why Three Separate Bundles?
- **main.bundle.js**: Full featured but large
- **selector.bundle.js**: Fast loading for simple tasks
- **service.bundle.js**: Background logic separation

### Why Static ExtractionEngine?
Matches WebPeeler's original architecture and simplifies the API for extraction operations.

## 📝 Contributing

### Code Style
- ES6+ features preferred
- Async/await over Promises
- Descriptive variable names
- JSDoc comments for public APIs

### Testing
- Manual testing on various websites
- Console error checking
- Performance monitoring
- Cross-browser compatibility

### Documentation
- Update README.md for architectural changes
- Document new APIs in respective module READMEs
- Add troubleshooting steps for new issues

---

This README serves as the primary technical reference for EXTRACTOR-GPT. When debugging issues, start by checking the relevant module's status and following the debugging steps outlined above.
