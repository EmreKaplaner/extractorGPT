# Selection Module

## Overview
The selection module handles element selection, highlighting, and collection detection. It's responsible for the interactive selection UI and determining which elements to extract.

## Files

### 1. `index.js`
**Purpose**: Module entry point that exports selection functionality.

**Exports**:
- `SelectionEngine` (from selection-engine.js)
- `le`, `ce`, `se` (selection constants)
- All exports from css-selector-utils.js
- All exports from group-finder.js
- Adds `.dot()` method to String prototype for CSS class handling

### 2. `selection-constants.js`
**Purpose**: Defines constants for selection modes and configurations.

**Constants**:
- `le` - Selection modes:
  - `SELECTION`: "selection"
  - `SELECTION_LIST`: "selection-list"
  - `SELECT_PAGINATION_BUTTON`: "select-pagination-button"
  - `SELECT_PAGE_DEATILS`: "select-page-details" (typo in original)

- `ce` - Group finder types:
  - `TYPE_1`: "type-1"
  - `TYPE_2`: "type-2"

- `se` - Website-specific configurations array:
  - apollo.io → TYPE_1
  - drinkersedition.com → TYPE_1
  - steampowered.com → TYPE_1

### 3. `selection-engine.js`
**Purpose**: Main selection engine that manages element selection and highlighting.

**Class**: `SelectionEngine`

**Constructor Parameters** (required object):
- `onElementClick` - Callback for element clicks
- `config` - Configuration object
- `onPause` - Callback for pause event
- `onResume` - Callback for resume event
- `onListSelected` - Callback for list selection
- `onModeChanged` - Callback for mode changes
- `onElementHovered` - Callback for element hover

**Properties**:
- `rootView` - Shadow DOM root
- `groupFinderType` - Type of group finder to use
- `cursorHighlighter` - Cursor highlighter instance
- `collectionHighlighter` - Collection highlighter instance
- `context` - Current context with mode
- Event listeners (mouseMoveListener, mouseClickListener, etc.)

**Methods**:
- `getHoveredSelection()` - Get currently hovered selection
- `findGroupElement(element)` - Find group/collection element
- `updateStateHighlights(config)` - Update highlight state
- `isIgnoredElement(element)` - Check if element should be ignored
- `isHighlightedCollectionElement(element)` - Check if element is highlighted
- `isHighlightedActiveElement(element)` - Check if element is active
- `getMode()` - Get current selection mode
- `startPaginationSelectMode()` - Start pagination selection
- `stopPaginationSelectMode()` - Stop pagination selection
- `startPageDetailsSelectMode()` - Start page details selection
- `stopPageDetailsSelectMode()` - Stop page details selection
- `startSelectionListMode()` - Start list selection mode
- `stopSelectionListMode()` - Stop list selection mode
- `resetSelectionMode()` - Reset to default mode
- `setSelectionMode()` - Set selection mode
- `highlightIfCollection(config)` - Highlight if element is collection
- `removeAllHighlights()` - Remove all highlights
- `updateSelectedParent(direction)` - Navigate parent selection
- `pause()` - Pause selection
- `resume()` - Resume selection
- `attach()` - Attach event listeners
- `detach()` - Detach event listeners and cleanup

### 4. `css-selector-utils.js`
**Purpose**: Utilities for generating and working with CSS selectors.

**Class**: `CssSelectorUtils` (all static methods)

**Methods**:
- `getGeneralizedCssSelector(config)` - Get generalized CSS selector
  - Parameters: `{ element, clsDepth = 2, nodeDepth = 5, root = null }`
- `getSelectorNthType(config)` - Get selector using nth-of-type
  - Parameters: `{ root, element }`
- `getSelectorNthChild(config)` - Get selector using nth-child
  - Parameters: `{ root, element, depth = 4 }`
- `findSelectorResultIndex(config)` - Find element index in selector results
  - Parameters: `{ rootView, element, selector }`
- `isSelectorValid(selector)` - Check if CSS selector is valid
- `verifySelector(config)` - Verify selector matches element
  - Parameters: `{ rootView, element, selector }`

### 5. `group-finder.js`
**Purpose**: Finds groups of similar elements for collection extraction.

**Class**: `GroupFinder`

**Constructor Parameters**:
- `options` - Configuration object with `minRowsFilter` (default: 4)

**Properties**:
- `options` - Configuration options
- `tableNode` - Found table node
- `rowNode` - Found row node

**Methods**:
- `findGroupParent(element)` - Find parent element containing group
  - Returns: `{ bestCandidate, candidates }`
- `isValidGroupElement(element)` - Check if element is valid for grouping
  - Valid tags: TR, SUMMARY, LI, DIV, DETAILS, ASIDE, ARTICLE, A, FIGURE
- `getSelector(element, n)` - Get selector for group
- `generateSelector(element)` - Generate CSS selector for element
- `selectGroup(selector, window)` - Select group elements using selector

## Critical Issues Found

### Issue in `selection-engine.js`:
1. Constructor requires parameters but is called without them in `main-content-react.js` (FIXED in previous conversation)
2. The engine creates its own highlighter instances internally, which conflicts with external creation

### Issue with String.prototype.dot:
Adding methods to native prototypes can cause conflicts with other scripts.

## Usage Example
```javascript
import { SelectionEngine, le } from './selection';

const engine = new SelectionEngine({
  onElementClick: (data) => console.log('Element clicked:', data),
  onListSelected: (data) => console.log('List selected:', data),
  onPause: () => console.log('Paused'),
  onResume: () => console.log('Resumed'),
  onModeChanged: (mode) => console.log('Mode changed:', mode),
  onElementHovered: (element) => console.log('Hovered:', element),
  config: {
    ignoreViewsWithClass: ["panda-extract"]
  }
});

// Attach to page
engine.attach();

// Change mode
engine.startSelectionListMode();
``` 