# Button Components

## Overview
This directory contains button components used throughout the EXTRACTOR-GPT extension UI.

## Components

### `ExtractButton.js`
Main extraction trigger button that handles starting/stopping extraction processes.

**Props:**
- `onClick` (function, optional) - Custom click handler
- `disabled` (boolean, optional) - Disable button state

**Features:**
- Integrates with `ExtractStateContext` to track extraction status
- Changes appearance and text based on extraction state (idle/running/stopping)
- Shows appropriate icon based on state (▶ for start, ⏸ for stop)
- Automatically handles start/stop extraction through context

**States:**
- **Idle**: Shows "Start Extraction" with play icon
- **Running**: Shows "Stop Extraction" with pause icon
- **Stopping**: Shows "Stopping..." and is disabled

**Usage Example:**
```jsx
import { ExtractButton } from './buttons/ExtractButton';

// Basic usage (uses context handlers)
<ExtractButton />

// With custom handler
<ExtractButton 
  onClick={handleCustomExtraction}
  disabled={!hasValidSelection}
/>
```

## Styling
The button uses CSS classes:
- `panda-extract-choice-button` - Base button styling
- `extract-button` - Specific extract button styles
- `running` - Applied when extraction is active
- `stopping` - Applied during stop process
- `disabled` - Applied when button is disabled

## Context Dependencies
- Requires `GlobalStateContext` provider
- Requires `ExtractStateContext` provider 