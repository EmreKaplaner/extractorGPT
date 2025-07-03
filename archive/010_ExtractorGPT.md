# ExtractorGPT Complete Source Code Inventory

## Overview
This document provides a comprehensive summary of all scripts, functions, and classes in the EXTRACTOR-GPT src folder. The codebase is organized into modular components that implement WebPeeler functionality with a clean architecture.

## Entry Points (Root Scripts)

### 1. main-content-react.js (25KB, 670 lines)
**Purpose**: Main content script that initializes the extension UI
**Key Functions**:
- `initializeApp()` - Sets up shadow DOM and React app
- `injectApp()` - Injects UI into page
- `activate()` - Activates all extension features
- `handleListSelection(data)` - Processes list selection events
- `handlePageDetailsElement(data)` - Handles page details selection
- `attachSelectionEngine()` - Makes selection engine globally available
- `attachResultsTable()` - Makes results table globally available
- `attachExtractionEngine()` - Makes extraction engine globally available
- `attachAutomationHandler()` - Makes automation handler globally available

**Global Objects Created**:
- `window.__extractorGPT` - Main extension namespace
- `window.ExtractorGPTApp` - React app instance

### 2. selector-content.js (16KB, 447 lines)
**Purpose**: Lightweight selection mode script
**Key Functions**:
- `initializeSelector()` - Initialize selection mode
- `createToolbar()` - Create selection toolbar
- `attachSelectionHandlers()` - Attach event handlers
- `handleElementSelection()` - Process element selection

### 3. service-worker.js (5KB, 151 lines)
**Purpose**: Chrome extension service worker
**Key Functions**:
- Imports and initializes background modules
- Sets up message handlers
- Manages extension lifecycle

## Core Modules

### Engine Module (`/src/engine/`)

#### extraction-engine.js (12KB, 476 lines)
**Class**: `ExtractionEngine` (static methods)
**Methods**:
- `findExtractableElements(config)` - Find extractable elements with depth analysis
- `findExtractableElementsAsync(config)` - Async version
- `clearExtractableHighlights(rootElement)` - Clear highlights
- `cleanupExtractableElements(elements)` - Remove duplicates
- `findSimpleExtractableElements(config)` - Simple extraction
- `extractText(element)` - Extract text content
- `extractHtml(element)` - Extract HTML content
- `extractAttribute(element, attribute)` - Extract attributes
- `extractImageUrl(element)` - Extract image URLs
- `extractLinkUrl(element)` - Extract link URLs
- `extractEmailsFromText(text)` - Extract emails with regex
- `extractPhoneNumbersFromText(text)` - Extract phone numbers
- `findNearestLinkUrl(element, maxDepth)` - Find nearest link
- `findNearestImageUrl(element, maxDepth)` - Find nearest image
- `extractAllData(element)` - Combined extraction method

#### automation-handler.js (19KB, 612 lines)
**Class**: `AutomationHandler`
**Methods**:
- `start(config)` - Start automation
- `stop()` - Stop automation
- `extractFromCurrentView(parent, engine, table)` - Extract visible data
- `handleAutoScroll(parent, engine, table)` - Handle scrolling
- `handlePagination(parent, engine, table)` - Handle pagination
- `findScrollableContainer(element)` - Find scroll container
- `findFreshCollectionParent(original)` - Re-query parent
- `waitForNewElements(parent, count)` - Wait for dynamic content
- `detectInfiniteScroll()` - Detect infinite scroll
- `getElementId(element)` - Generate unique ID
- `findSimilarElement(original)` - Find element after page change

#### pagination-detector.js (9KB, 341 lines)
**Class**: `PaginationDetector`
**Methods**:
- `findPaginationWithSmartSearch(config)` - Smart pagination search
- `findPaginationButton(config)` - Find pagination button
- `isValidPaginationButton(element)` - Validate button
- `isElementVisible(element)` - Check visibility
- `detectPaginationType()` - Detect pagination type
- `findPaginationButtonSync()` - Sync button search
- `scrollToBottom(window)` - Scroll to page bottom

#### task-runner.js (7KB, 303 lines)
**Class**: `TaskRunner`
**Methods**:
- `run(config, options, settings, callbacks)` - Run extraction task
- `executeTask(shouldLoadUrl)` - Execute task steps
- `executeStep(step)` - Execute single step
- `performExtraction(selector, elements)` - Extract data
- `performClick(selector)` - Click element
- `performScroll()` - Scroll page
- `performWait(duration)` - Wait for duration
- `waitForPageLoad()` - Wait for page load
- `cancel()` - Cancel task
- `getStatus()` - Get execution status

#### constants.js (587B, 20 lines)
**Constants**:
- `U` - Data types (TEXT, IMAGE_URL, LINK_URL, EMAIL)
- `ExtractionActions` - Action types
- `regexAcceptableNodes` - Regex for text nodes

### Selection Module (`/src/selection/`)

#### selection-engine.js (11KB, 452 lines)
**Class**: `SelectionEngine`
**Constructor**: `SelectionEngine({ callbacks, config })`
**Methods**:
- `getHoveredSelection()` - Get current hover
- `findGroupElement(element)` - Find collection
- `updateStateHighlights(config)` - Update highlights
- `isIgnoredElement(element)` - Check if ignored
- `getMode()` - Get selection mode
- `startPaginationSelectMode()` - Pagination mode
- `startPageDetailsSelectMode()` - Page details mode
- `startSelectionListMode()` - List selection mode
- `stopSelectionListMode()` - Stop list mode
- `resetSelectionMode()` - Reset to default
- `highlightIfCollection(config)` - Highlight collections
- `removeAllHighlights()` - Clear all highlights
- `updateSelectedParent(direction)` - Navigate selection
- `pause()` / `resume()` - Pause/resume selection
- `attach()` / `detach()` - Attach/detach listeners

#### css-selector-utils.js (3.6KB, 172 lines)
**Class**: `CssSelectorUtils` (static methods)
**Methods**:
- `getGeneralizedCssSelector(config)` - Generate CSS selector
- `getSelectorNthType(config)` - nth-of-type selector
- `getSelectorNthChild(config)` - nth-child selector
- `findSelectorResultIndex(config)` - Find element index
- `isSelectorValid(selector)` - Validate selector
- `verifySelector(config)` - Verify selector matches

#### group-finder.js (2.3KB, 113 lines)
**Class**: `GroupFinder`
**Methods**:
- `findGroupParent(element)` - Find parent group
- `isValidGroupElement(element)` - Validate element
- `getSelector(element, n)` - Get group selector
- `generateSelector(element)` - Generate selector
- `selectGroup(selector, window)` - Select elements

#### selection-constants.js (650B, 29 lines)
**Constants**:
- `le` - Selection modes
- `ce` - Group finder types
- `se` - Website configurations

### UI Module (`/src/ui/`)

#### Base UI Classes

##### base-highlighter.js (702B, 36 lines)
**Class**: `BaseHighlighter`
**Methods**:
- `constructor(config)` - Initialize highlighter
- `addOverlayClass(className)` - Add overlay class
- `addItemClass(className)` - Add item class

##### cursor-highlighter.js (1.7KB, 63 lines)
**Class**: `CursorHighlighter extends BaseHighlighter`
**Methods**:
- `highlight(element)` - Highlight element
- `removeHighlight()` - Remove highlight
- `getOrCreateOverlay()` - Get/create overlay

##### collection-highlighter.js (3.4KB, 131 lines)
**Class**: `CollectionHighlighter extends BaseHighlighter`
**Methods**:
- `highlight(config)` - Highlight collection
- `highlightDirectly(elements)` - Direct highlight
- `highlightElementsOfChildren(parent)` - Highlight children
- `isHighlighted(element)` - Check if highlighted
- `removeHighlightsInsideChildren(parent)` - Remove child highlights
- `removeHighlights()` - Remove all highlights

##### shadow-dom-utils.js (1.8KB, 88 lines)
**Class**: `ShadowDomUtils` (static methods)
**Methods**:
- `getShadowRoot()` - Get shadow DOM root
- `build()` - Build shadow DOM
- `remove()` - Remove shadow DOM
- `isContainerInBody()` - Check if exists

##### event-handlers.js (4KB, 175 lines)
**Class**: `EventHandlers` (static methods)
**Methods**:
- `ue(engine, event)` - Mouse move handler
- `de(engine, event)` - Click handler
- `fe(engine, event)` - Keyboard handler
- `handleElementHover(engine, event)` - Hover handler
- `buildSelectionHierarchy(engine, element)` - Build hierarchy
- `updateHierarchySelection(engine, direction)` - Update selection

#### UI Components (`/src/ui/components/`)

##### Panel Components (`/panels/`)

###### WebPeelerPanel.js (15KB, 374 lines)
**Component**: `WebPeelerPanel`
**Props**: `{ isOpen, onClose }`
**Features**:
- Exact copy of WebPeeler's Mo component
- Integrated toolbar with tabs
- Selection mode management
- Data update event handling

###### ExtractorGPTPanel.js (5.2KB, 143 lines)
**Component**: `ExtractorGPTPanel`
**Props**: `{ isOpen, onClose, extractedData, showResults }`
**Features**:
- Main UI panel with toolbar
- Tab navigation
- Collapsible design

###### MainPanel.js (5.3KB, 167 lines)
**Component**: `MainPanel`
**Props**: `{ isOpen, onClose }`
**Features**:
- WebPeeler-style UI
- 5-tab interface
- Dark theme

###### ResultsPanel.js (7.6KB, 178 lines)
**Component**: `ResultsPanel`
**Props**: `{ data, onClose, onRunAutomation }`
**Features**:
- Results display
- Export functionality
- Automation controls

##### Tab Components (`/tabs/`)

###### ExtractListTab.js (27KB, 785 lines)
**Component**: `ExtractListTab`
**Props**: `{ isPro, extractedData, showResults, highlightEnabled }`
**State**:
- `showSettings` - Settings visibility
- `paginationElement` - Selected pagination
- `isSelectingPagination` - Selection mode
**Features**:
- List extraction controls
- Automation settings
- Results display
- Export functionality

###### ExtractDetailsTab.js (32KB, 982 lines)
**Component**: `ExtractDetailsTab`
**Props**: `{ isPro }`
**State**:
- `pageUrls` - URLs to process
- `isExtracting` - Extraction status
- `showUrlInput` - Input visibility
- `newUrl` - URL input
- `extractedData` - Results
**Features**:
- Multi-URL management
- Element selection mode
- Parallel extraction
- CSV export

###### ExtractEmailsTab.js (30KB, 958 lines)
**Component**: `ExtractEmailsTab`
**Props**: `{ isPro }`
**State**:
- `urls` - URLs to scan
- `isExtracting` - Extraction status
- `extractedEmails` - Found emails
- `parallelTabs` - Parallel tabs config
**Features**:
- Current page scanning
- Multi-page extraction
- Configuration options
- Export functionality

###### ExtractImagesTab.js (14KB, 457 lines)
**Component**: `ExtractImagesTab`
**Props**: `{ isPro }`
**State**:
- `foundImages` - Discovered images
- `selectedImages` - Selected for download
- `isScanning` - Scan status
**Features**:
- Image discovery
- Gallery view
- Bulk download
- Size filtering

###### HelpTab.js (7.8KB, 268 lines)
**Component**: `HelpTab`
**Props**: `{ isPro, onProToggle }`
**Features**:
- Account status
- Settings links
- Help resources
- Version info

###### SettingsTab.js (681B, 33 lines)
**Component**: `SettingsTab`
**Features**: Basic settings placeholder

##### Table Components (`/tables/`)

###### ResultsTable.js (5.4KB, 198 lines)
**Component**: `ResultsTable`
**Props**: `{ data, headers, onExport }`
**Features**:
- Dark theme table
- Row selection
- Export buttons
- Responsive design

###### DataTable.js (1.2KB, 52 lines)
**Component**: `DataTable`
**Props**: `{ data, headers }`
**Features**: Generic data display

###### TableHeader.js (1KB, 47 lines)
**Component**: `TableHeader`
**Props**: `{ headers, onSort }`
**Features**: Sortable headers

###### TableRow.js (1.9KB, 84 lines)
**Component**: `TableRow`
**Props**: `{ data, selected, onSelect }`
**Features**: Selectable rows

##### Other UI Components

###### Toolbar.js (2.5KB, 75 lines)
**Component**: `Toolbar`
**Props**: `{ tab, setTab, highlightEnabled, onHighlightClicked, onCloseClicked, isContainerCollapsed, onStatusBubbleClick }`
**Features**: Tab navigation toolbar

### Data Management Module (`/src/data-management/`)

#### results-table.js (9.9KB, 369 lines)
**Class**: `ResultsTable`
**Properties**:
- `rows` - Data rows
- `headers` - Column headers
**Methods**:
- `insertExtractablesFromList(config)` - Insert list data
- `insertExtractablesFromTask(data)` - Insert task data
- `insertFromPageDetailsStatus(status)` - Insert page details
- `insertEmailsFromStatus(status)` - Insert emails
- `filterAndClean(data)` - Clean data
- `removeDuplicateRows()` - Remove duplicates
- `invalidateHeaders()` - Update headers
- `newInstance()` - Create new instance
- `generateFriendlyId(id, name)` - Generate IDs

#### export-utils.js (7.3KB, 242 lines)
**Class**: `ExportUtils` (static methods)
**Methods**:
- `exportToCSV(data)` - Export as CSV
- `exportToJSON(data)` - Export as JSON
- `exportToClipboard(data)` - Copy to clipboard
- `toCSV(data)` - Convert to CSV format
- `toPlainText(data)` - Convert to plain text
- `downloadFile(content, filename, type)` - Download file

### Background Module (`/src/background/`)

#### message-handlers.js (21KB, 711 lines)
**Functions**:
- `setupMessageHandlers()` - Setup Chrome message handlers
- `startExtraction(config)` - Start extraction process
- `handlePageDetailsHighlight(data, tabId)` - Handle highlighting
- Message handlers for various actions

**Exported Variables**:
- `activeExtractions` - Map of active extractions

#### extraction-processor.js (10KB, 354 lines)
**Class**: `ExtractionProcessor`
**Constructor**: `ExtractionProcessor({ request })`
**Methods**:
- `getProgressBar()` - Visual progress
- `initialize()` - Start processing
- `processQueue()` - Process URL queue
- `processRequest(url)` - Process single URL
- `cancel()` - Cancel processing
- `getStatus()` - Get status
- `getOutcomes()` - Get results

#### storage-manager.js (4.7KB, 180 lines)
**Class**: `StorageManager` (static methods)
**Methods**:
- `save(key, value)` - Save to storage
- `getAllKeys()` - Get all keys
- `retrieve(key)` - Get value
- `remove(key)` - Remove value
- `removeAny(pattern)` - Remove by pattern
- `clearAll()` - Clear storage
- `getMultiple(keys)` - Get multiple
- `saveMultiple(items)` - Save multiple
- `addListener(callback)` - Listen for changes
- `getBytesInUse(keys)` - Get storage size

#### permission-manager.js (4.5KB, 178 lines)
**Class**: `PermissionManager` (static methods)
**Methods**:
- `requestAllUrlsPermission(config)` - Request all URLs
- `requestClipboardPermission(config)` - Request clipboard
- `requestDownloadsPermission(config)` - Request downloads
- `hasAllUrlsPermission()` - Check permission
- `hasClipboardPermission()` - Check permission
- `hasDownloadsPermission()` - Check permission
- `removePermission(permission)` - Remove permission
- `getAllPermissions()` - Get all permissions
- `requestMultiplePermissions(permissions, origins)` - Request multiple
- `hasMultiplePermissions(permissions, origins)` - Check multiple

#### image-downloader.js (5KB, 191 lines)
**Class**: `ImageDownloader` (static methods)
**Methods**:
- `downloadImages(config)` - Download multiple
- `downloadImage(config)` - Download single
- `monitorDownload(id)` - Monitor progress
- `getDownloadHistory(query)` - Get history
- `clearDownloadHistory()` - Clear history
- `pauseDownload(id)` - Pause download
- `resumeDownload(id)` - Resume download
- `cancelDownload(id)` - Cancel download
- `openDownload(id)` - Open file
- `showDownloadInFolder(id)` - Show in folder
- `acceptDanger(id)` - Accept dangerous

### State Management Module (`/src/state-management/`)

#### global-state-provider.js (3.8KB, 157 lines)
**Component**: `GlobalStateProvider`
**Context**: `GlobalStateContext`
**State Properties**:
- `resultsPanelExpanded`
- `actionPanelExpanded`
- `showUpsell`
- `showRegisterLicense`
- `showRateUs`
- `showDeviceManager`
- `extractSettings`
- `resultsSelectedSource`
- `resultsList`
- `resultsDetails`
- `resultsEmails`
- `tab`
- `isProcessingListResults`

#### extract-state-provider.js (5.9KB, 227 lines)
**Component**: `ExtractStateProvider`
**Context**: `ExtractStateContext`
**State Properties**:
- `currentTask`
- `extractionStatus`
- `extractedData`
- `paginationConfig`
- `scrollConfig`

#### user-state-provider.js (5.3KB, 216 lines)
**Component**: `UserStateProvider`
**Context**: `UserStateContext`
**State Properties**:
- `isAuthenticated`
- `userInfo`
- `isPro`
- `devices`

### Constants Module (`/src/constants/`)

#### index.js (2.6KB, 106 lines)
**Constants**:
- `TabTypes` - Tab identifiers
- `RunStatus` - Execution states
- `ExportFormats` - Export types
- `StorageKeys` - Storage key names
- `RegexPatterns` - Email/phone regex
- `ViewTypes` - View modes
- `ScrollTypes` - Scroll types
- Re-exports from engine/constants

### Analytics Module (`/src/analytics/`)

#### event-tracker.js (3KB, 105 lines)
**Class**: `EventTracker` (static methods)
**Methods**:
- `sendEvent(eventName, properties)` - Send event
- `trackExtraction(details)` - Track extraction
- `trackExport(format)` - Track export
- `trackError(error)` - Track error
- `trackUserAction(action, details)` - Track action

### Auth Module (`/src/auth/`)

#### auth-manager.js (3.1KB, 136 lines)
**Class**: `AuthManager` (static methods)
**Methods**:
- `init()` - Initialize auth
- `login(credentials)` - User login
- `logout()` - User logout
- `getUser()` - Get current user
- `updateLicense(key)` - Update license
- `checkLicenseStatus()` - Check license
- `registerDevice(info)` - Register device
- `removeDevice(id)` - Remove device

### Services Module (`/src/services/`)

#### ai-service.js (5.1KB, 168 lines)
**Class**: `AIService` (static methods)
**Methods**:
- `renameHeaders(headers, data)` - AI header renaming
- `analyzeContent(element)` - Content analysis
- `suggestSelectors(examples)` - Suggest selectors
- `improveExtraction(data)` - Improve results

### Utils Module (`/src/utils/`)

#### message-utils.js (1.1KB, 40 lines)
**Functions**:
- `sendMessage(action, data, callback)` - Send Chrome message
- `sendMessageAsync(action, data)` - Async message
- `broadcastMessage(action, data)` - Broadcast to tabs

## Architecture Summary

### Module Dependencies
```
Entry Points (main-content-react.js, selector-content.js, service-worker.js)
    ├── Engine Module (extraction, automation, pagination)
    ├── Selection Module (selection modes, highlighting)
    ├── UI Module (React components, shadow DOM)
    ├── Data Management (results storage, export)
    ├── Background Module (Chrome APIs, messaging)
    ├── State Management (React contexts)
    ├── Constants (shared constants)
    ├── Analytics (event tracking)
    ├── Auth (user management)
    ├── Services (AI features)
    └── Utils (helpers)
```

### Bundle Structure
- **main.bundle.js**: Contains UI, extraction, selection modules
- **selector.bundle.js**: Lightweight selection-only mode
- **service.bundle.js**: Background services and message handling

### Key Design Patterns
1. **Static Classes**: Most utility classes use static methods
2. **React Contexts**: State management via Context API
3. **Shadow DOM**: UI isolation from host page
4. **Message Passing**: Chrome extension messaging
5. **Modular Architecture**: Clear separation of concerns

## Total Statistics
- **Total Files**: 78+ files
- **Total Lines**: ~12,000+ lines of code
- **Main Bundle Size**: 1.2MB
- **Modules**: 11 major modules
- **React Components**: 20+ components
- **Classes**: 25+ classes
- **Key Functions**: 200+ functions

This represents a complete implementation of WebPeeler functionality with modern, maintainable architecture. 
 
 