# Modal Components

## Overview
This directory contains modal dialog components for various features in the EXTRACTOR-GPT extension.

## Components

### `DeviceManager.js`
Modal for managing registered devices on a license.

**Props:**
- `isOpen` (boolean) - Control modal visibility
- `onClose` (function) - Close handler

**Features:**
- Lists all devices registered to the current license
- Shows device details (name, OS, browser, last active)
- Identifies current device with badge
- Allows removal of non-current devices
- Shows device count vs. max allowed devices
- Error handling for failed removals

**Context Dependencies:**
- `UserStateContext` - For device list and removeDevice function
- Integrates with `authManager` for API calls

**Usage:**
```jsx
<DeviceManager 
  isOpen={showDeviceManager}
  onClose={() => setShowDeviceManager(false)}
/>
```

### `ExportPopup.js`
Modal for exporting extracted data in various formats.

**Props:**
- `data` (object) - Data to export with `headers` and `rows`
- `onClose` (function) - Close handler

**Export Formats:**
1. **CSV** - Comma-separated values
2. **Excel** - Microsoft Excel format (.xlsx)
3. **JSON** - JavaScript Object Notation
4. **Clipboard** - Copy to clipboard
5. **Google Sheets** - Export to Google Sheets (PRO only)

**Features:**
- Visual format selection with icons
- Format descriptions
- PRO badge for premium features
- Export progress indication
- Error handling with user feedback
- Auto-close on successful export

**Context Dependencies:**
- `GlobalStateContext` - For checking user tier (PRO features)

**Usage:**
```jsx
<ExportPopup 
  data={{
    headers: ['Name', 'Email', 'Phone'],
    rows: extractedData
  }}
  onClose={() => setShowExport(false)}
/>
```

### `SettingsPopup.js`
Modal for configuring extraction settings.

**Props:**
- `isOpen` (boolean) - Control modal visibility
- `onClose` (function) - Close handler

**Settings Categories:**

1. **Extraction Options**
   - Extract Images - Include image URLs in results
   - Extract ARIA Labels - Include accessibility labels

2. **Data Filtering**
   - Remove Empty Groups Threshold (0-100%) - Remove groups with empty cells
   - Remove Similar Groups Threshold (0-100%) - Remove duplicate groups

**Features:**
- Live preview of threshold values
- Reset to defaults functionality
- Save settings to global state
- Descriptive help text for each option

**Context Dependencies:**
- `GlobalStateContext` - For reading/updating extract settings

**Usage:**
```jsx
<SettingsPopup 
  isOpen={showSettings}
  onClose={() => setShowSettings(false)}
/>
```

## Common Features
All modals share these characteristics:
- Built on top of the base `Modal` component
- Consistent styling and animations
- Keyboard navigation support (Escape to close)
- Responsive design
- Proper focus management

## Styling
Modals use these CSS classes:
- `modal-backdrop` - Dark backdrop overlay
- `modal-container` - Main modal container
- `modal-header` - Header with title and close button
- `modal-body` - Content area
- `modal-actions` - Footer with action buttons

## Best Practices
1. Always handle loading states during async operations
2. Provide clear error messages to users
3. Validate user input before processing
4. Use appropriate button variants (primary/secondary)
5. Close modal automatically after successful actions
6. Maintain focus trap within modal for accessibility 