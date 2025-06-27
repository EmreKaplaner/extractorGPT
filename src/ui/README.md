# UI Module

## Overview
The UI module contains all user interface components and utilities for the EXTRACTOR-GPT Chrome extension. It includes both React components and vanilla JavaScript utilities for DOM manipulation, highlighting, and shadow DOM management.

## Directory Structure
```
ui/
├── components/          # React components
│   ├── buttons/        # Button components
│   ├── common/         # Common/shared components
│   ├── modals/         # Modal dialog components
│   ├── panels/         # Main panel components
│   ├── tables/         # Table-related components
│   └── tabs/           # Tab content components
├── styles/             # CSS stylesheets
│   ├── layers.css      # Z-index layer management
│   └── styles.css      # Main styles
├── base-highlighter.js # Base class for highlighters
├── collection-highlighter.js # Highlights groups of elements
├── cursor-highlighter.js # Highlights single elements on hover
├── event-handlers.js   # DOM event handling
├── shadow-dom-utils.js # Shadow DOM utilities
├── ui-constants.js     # UI-related constants
└── index.js           # Module exports
```

## Core Files

### `base-highlighter.js`
Base class for all highlighter implementations.

**Class: `BaseHighlighter`**
- `addOverlayClass(element)` - Adds overlay CSS class to element
- `addItemClass(element)` - Adds item CSS class to element
- `removeOverlayClass(element)` - Removes overlay CSS class
- `removeItemClass(element)` - Removes item CSS class

### `cursor-highlighter.js`
Highlights individual elements as the cursor moves over them.

**Class: `CursorHighlighter`**
- **Constructor**: `new CursorHighlighter({ rootView })`
  - `rootView`: Root element for highlighting (default: document.body)
- `highlight({ element })` - Highlights the specified element
- `removeHighlight()` - Removes current highlight
- `getOrCreateOverlay()` - Gets or creates the overlay element

### `collection-highlighter.js`
Highlights collections/groups of similar elements.

**Class: `CollectionHighlighter`**
- **Constructor**: `new CollectionHighlighter({ overlayClassName, highlightedItemClassName, rootView })`
- `highlight({ elements })` - Highlights multiple elements as a collection
- `highlightDirectly({ elements })` - Direct highlighting without overlay
- `highlightElementsOfChildren({ elements })` - Highlights child elements
- `isHighlighted(element)` - Checks if element is highlighted
- `removeHighlights(options)` - Removes highlights with options
- `removeHighlightsInsideChildren()` - Removes child highlights

### `event-handlers.js`
Handles DOM events for the selection engine.

**Class: `EventHandlers`** (static methods)
- `ve(selectionEngine, { event, element })` - Element hover handler
- `ue(selectionEngine, event)` - Mouse move handler
- `de(selectionEngine, event)` - Mouse click handler
- `fe(selectionEngine, event)` - Key press handler
- `pe(selectionEngine, element)` - Build selection hierarchy
- `ge(selectionEngine, direction)` - Update hierarchy selection

### `shadow-dom-utils.js`
Utilities for creating and managing shadow DOM containers.

**Class: `ShadowDomUtils`** (static methods)
- `build()` - Creates shadow DOM container with styles
- `remove()` - Removes shadow DOM container
- `getShadowRoot()` - Gets or creates shadow root
- `isContainerInBody()` - Checks if container exists in body

**Constants:**
- `ID_SHADOW`: "shadow-container-panda-extract"

### `ui-constants.js`
Constants for UI classes, view types, and configurations.

**Exports:**
- `ViewTypes` - View type constants (LIST, TABLE, ELEMENT)
- `ExtractionActions` - Extraction action types
- `ExtractionUIClasses` - CSS class names for extraction UI
- `HighlightingClasses` - CSS class names for highlighting
- `LayerClasses` - Z-index layer class names
- `TableClasses` - Table-related CSS classes
- `ShadowDomConstants` - Shadow DOM constants
- `ConfigDefaults` - Default configuration values

### `index.js`
Main export file that re-exports all UI utilities and components.

## Components Subdirectory
See the README files in each component subdirectory for detailed documentation:
- [buttons/README.md](./components/buttons/README.md)
- [common/README.md](./components/common/README.md)
- [modals/README.md](./components/modals/README.md)
- [panels/README.md](./components/panels/README.md)
- [tables/README.md](./components/tables/README.md)
- [tabs/README.md](./components/tabs/README.md)

## Styles
- **layers.css**: Manages z-index layering with CSS custom properties
- **styles.css**: Main stylesheet with modern UI design

## Usage Example
```javascript
import { 
  CursorHighlighter, 
  CollectionHighlighter,
  ShadowDomUtils 
} from './ui';

// Create shadow DOM
const shadowContainer = ShadowDomUtils.build();
document.body.appendChild(shadowContainer);

// Initialize highlighters
const cursorHighlighter = new CursorHighlighter({
  rootView: shadowContainer.shadowRoot
});

// Highlight an element
cursorHighlighter.highlight({ element: targetElement });
``` 