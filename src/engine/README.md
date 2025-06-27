# Engine Module

## Overview
The engine module contains the core extraction algorithms and task execution logic. It's responsible for finding and extracting data from web pages.

## Files

### 1. `index.js`
**Purpose**: Module entry point that exports all engine functionality.

**Exports**:
- `ExtractionEngine` (from extraction-engine.js)
- `U`, `ExtractionActions`, `regexAcceptableNodes` (from constants.js)
- `TaskRunner` (default from task-runner.js)
- Convenience exports:
  - `findExtractableElements` - Static method from ExtractionEngine
  - `extractText` - Static method from ExtractionEngine
  - `extractImageUrl` - Static method from ExtractionEngine
  - `extractLinkUrl` - Static method from ExtractionEngine

### 2. `constants.js`
**Purpose**: Defines constants used throughout the extraction engine.

**Constants**:
- `U` - Data types for extraction:
  - `TEXT`: "text"
  - `IMAGE_URL`: "image-url"
  - `LINK_URL`: "link-url"
  - `EMAIL`: "email"

- `ExtractionActions` - Extraction action types:
  - `EXTRACT`: "EXTRACT"
  - `EXTRACT_TEXT`: "EXTRACT_TEXT"
  - `EXTRACT_HTML`: "EXTRACT_HTML"
  - `EXTRACT_ATTRIBUTE`: "EXTRACT_ATTRIBUTE"
  - `EXTRACT_IMAGE_URL`: "EXTRACT_IMAGE_URL"
  - `EXTRACT_LINK_URL`: "EXTRACT_LINK_URL"

- `regexAcceptableNodes` - Regex pattern for acceptable HTML nodes
  - Matches valid HTML element names for text extraction

### 3. `extraction-engine.js`
**Purpose**: Main extraction engine with algorithms for finding and extracting data.

**Class**: `ExtractionEngine` (all static methods)

**Static Property**:
- `regexAcceptableNodes` - Regex for acceptable nodes

**Methods**:
- `findNearestLinkUrl(element, maxDepth = 5)` - Find nearest link URL by traversing up DOM
- `findNearestImageUrl(element, maxDepth = 5)` - Find nearest image URL by traversing up DOM
- `findExtractableElements(config)` - Find extractable elements with full depth analysis
  - Parameters: `{ elements, depth = 1, settings }`
  - Returns: `{ children, extractableElements }`
- `findExtractableElementsAsync(config)` - Async version of findExtractableElements
- `clearExtractableHighlights(rootElement)` - Clear extraction highlights
- `cleanupExtractableElements(elements)` - Remove duplicates and invalid elements
- `findSimpleExtractableElements(config)` - Find simple extractable elements
  - Parameters: `{ element }`
  - Returns: Array of extractable data
- `findSimpleExtractableElementsAsync(config)` - Async version
- `extractText(element)` - Extract text content from element
- `extractHtml(element)` - Extract HTML content from element
- `extractAttribute(element, attribute)` - Extract specific attribute
- `extractImageUrl(element)` - Extract image URL with fallbacks
- `extractLinkUrl(element)` - Extract link URL with fallbacks
- `extractEmailsFromText(text)` - Extract emails using regex
- `extractPhoneNumbersFromText(text)` - Extract phone numbers using regex

### 4. `task-runner.js`
**Purpose**: Manages extraction task execution with progress tracking.

**Class**: `TaskRunner`

**Constructor**: Initializes empty task runner

**Properties**:
- `currentTask` - Current running task
- `isRunning` - Running state flag
- `callbacks` - Event callbacks
- `extractSettings` - Extraction settings
- `contentWindow` - Target window for extraction

**Methods**:
- `run(config, options, extractSettings, callbacks)` - Run extraction task
  - `config`: `{ contentWindow, task }`
  - `options`: `{ shouldLoadUrl = true }`
  - `extractSettings`: Extraction configuration
  - `callbacks`: Event handlers
- `executeTask(shouldLoadUrl)` - Execute task steps (private, async)
- `executeStep(step)` - Execute single step (private, async)
- `performExtraction(selector, elements)` - Perform extraction (private)
- `performClick(selector)` - Perform click action (private)
- `performScroll()` - Perform scroll action (private)
- `performWait(duration)` - Wait for duration (private)
- `waitForPageLoad()` - Wait for page load (private)
- `cancel()` - Cancel current task
- `getStatus()` - Get current execution status

**Exported Instance**: `taskRunner` - Singleton instance

## Critical Issues Found

### Issue in `extraction-engine.js`:
1. The `extractAllData` method is referenced in other modules but not implemented in ExtractionEngine
2. Methods use different loop styles (while vs for) compared to original WebPeeler

### Issue in `task-runner.js`:
The TaskRunner is exported as both a class and instance, which might cause confusion.

## Usage Example
```javascript
import { ExtractionEngine, U } from './engine';

// Find extractable elements
const result = ExtractionEngine.findExtractableElements({
  elements: [document.body],
  depth: 2,
  settings: {
    extractImages: true,
    extractAriaLabel: false
  }
});

// Extract specific data
const text = ExtractionEngine.extractText(element);
const imageUrl = ExtractionEngine.extractImageUrl(element);
const emails = ExtractionEngine.extractEmailsFromText(text);
``` 