# Common Components

## Overview
This directory contains reusable UI components that are shared across the EXTRACTOR-GPT extension.

## Components

### `EmptyView.js`
Displays an empty state when there's no data to show.

**Props:**
- `title` (string) - Main message (default: "No data available")
- `subtitle` (string) - Secondary message (optional)
- `icon` (string) - Emoji or icon to display (default: "📭")
- `action` (ReactNode) - Optional action button/element

**Usage:**
```jsx
<EmptyView 
  title="No emails found"
  subtitle="Click 'Scan Page' to search for email addresses"
  icon="✉️"
  action={<button>Scan Page</button>}
/>
```

### `IconButton.js`
Versatile button component with icon support.

**Props:**
- `icon` (string|ReactNode) - Icon to display
- `text` (string) - Optional text label
- `onClick` (function) - Click handler
- `variant` (string) - Style variant: 'default', 'primary', 'secondary', 'ghost', 'danger'
- `size` (string) - Size variant: 'small', 'medium', 'large'
- `disabled` (boolean) - Disabled state
- `className` (string) - Additional CSS classes
- `title` (string) - Tooltip text

**Usage:**
```jsx
<IconButton 
  icon="🎯"
  text="Extract"
  variant="primary"
  size="medium"
  onClick={handleExtract}
/>
```

### `LoadingSpinner.js`
Animated loading indicator.

**Props:**
- `size` (string) - Size: 'small', 'medium', 'large'
- `color` (string) - Color scheme: 'primary', 'secondary', 'white'
- `className` (string) - Additional CSS classes
- `text` (string) - Optional loading text

**Usage:**
```jsx
<LoadingSpinner 
  size="large"
  color="primary"
  text="Extracting data..."
/>
```

### `Modal.js`
Base modal dialog component with backdrop.

**Props:**
- `isOpen` (boolean) - Control visibility
- `onClose` (function) - Close handler
- `title` (string) - Modal title
- `children` (ReactNode) - Modal content
- `className` (string) - Additional CSS classes
- `closeOnBackdrop` (boolean) - Close when clicking backdrop (default: true)
- `showCloseButton` (boolean) - Show close button (default: true)

**Features:**
- Escape key handling
- Body scroll lock when open
- Backdrop click handling
- Smooth animations

**Usage:**
```jsx
<Modal
  isOpen={showSettings}
  onClose={() => setShowSettings(false)}
  title="Settings"
>
  <SettingsContent />
</Modal>
```

### `ProgressBar.js`
Visual progress indicator.

**Props:**
- `progress` (number) - Progress percentage (0-100)
- `showPercentage` (boolean) - Show percentage text (default: true)
- `className` (string) - Additional CSS classes
- `size` (string) - Size: 'small', 'medium', 'large'
- `color` (string) - Color: 'primary', 'secondary', 'success', 'warning', 'error'
- `animated` (boolean) - Enable animation

**Usage:**
```jsx
<ProgressBar 
  progress={75}
  color="success"
  size="medium"
  animated
/>
```

### `StatusBubble.js`
Status indicator showing extraction state and user tier.

**Props:**
- `onClick` (function) - Click handler
- `position` (string) - Position: 'bottom-right', etc.

**Features:**
- Shows extraction status (idle/running/error/completed)
- Displays user tier (FREE/PRO)
- Shows progress percentage when extracting
- Context-aware (uses ExtractStateContext and UserStateContext)

**Usage:**
```jsx
<StatusBubble 
  onClick={togglePanel}
  position="bottom-right"
/>
```

### `TabBar.js`
Navigation tab component for switching between views.

**Props:**
- `activeTab` (string) - Currently active tab ID
- `onTabChange` (function) - Tab change handler
- `resultsCounts` (object) - Object with counts for each tab

**Features:**
- Shows icons and labels for each tab
- Displays result counts when available
- Highlights active tab

**Tab Types:**
- List Extraction
- Page Details
- Extract Emails
- Download Images
- Help
- Settings

**Usage:**
```jsx
<TabBar 
  activeTab={currentTab}
  onTabChange={setCurrentTab}
  resultsCounts={{
    list: 42,
    details: 10,
    emails: 5
  }}
/>
```

### `Tooltip.js`
Hover tooltip component.

**Props:**
- `children` (ReactNode) - Element that triggers tooltip
- `content` (string|ReactNode) - Tooltip content
- `position` (string) - Position: 'top', 'bottom', 'left', 'right'
- `delay` (number) - Show delay in ms (default: 500)
- `className` (string) - Additional CSS classes

**Usage:**
```jsx
<Tooltip content="Click to extract data" position="top">
  <button>Extract</button>
</Tooltip>
```

## Styling
All components use consistent CSS classes:
- Base classes follow pattern: `component-name`
- Variant classes: `component-name-variant`
- Size classes: `component-name-size`
- State classes: `active`, `disabled`, `loading`

## Best Practices
1. Always provide meaningful `title` attributes for accessibility
2. Use appropriate color variants for different states
3. Prefer controlled components (pass `isOpen`, `value`, etc.)
4. Handle loading and error states appropriately
5. Use consistent sizing across the UI 