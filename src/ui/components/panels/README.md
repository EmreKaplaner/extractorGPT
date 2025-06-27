# Panel Components

## Overview
This directory contains the main panel components that form the primary UI of the EXTRACTOR-GPT extension.

## Components

### `MainPanel.js`
The main WebPeeler-style UI panel that contains all tabs and functionality.

**Props:**
- `isOpen` (boolean) - Control panel visibility
- `onClose` (function) - Close handler

**Features:**
- Modern dark theme UI with purple accents (#7c3aed)
- Tab-based navigation system
- Account status management (FREE/PRO)
- Fixed positioning (top-right corner)
- Responsive design with max height constraint

**Tabs:**
1. **Extract List** (📋) - List/table extraction
2. **Extract Page Details** (📄) - Multi-page extraction
3. **Extract Emails** (✉️) - Email scanning (PRO)
4. **Extract Images** (🖼️) - Image extraction (PRO)
5. **Help** (❓) - Settings and support

**State Management:**
- `activeTab` - Currently selected tab
- `isPro` - User tier status

**Usage:**
```jsx
<MainPanel 
  isOpen={showPanel}
  onClose={() => setShowPanel(false)}
/>
```

### `ResultsPanel.js`
Panel for displaying extraction results in various formats.

**Props:**
- `isOpen` (boolean) - Control panel visibility
- `onClose` (function) - Close handler

**Features:**
- Displays extraction results from different sources
- Tab navigation for different result types
- Export functionality
- Progress tracking during extraction
- Empty state handling

**Result Sources:**
- `list` - List extraction results
- `details` - Page details extraction results
- `emails` - Email extraction results

**Components Used:**
- `TabBar` - For result type navigation
- `ResultsTable` - For displaying tabular data
- `ExportPopup` - For export functionality

**Context Dependencies:**
- `GlobalStateContext` - For results data and tab state
- `ExtractStateContext` - For extraction progress

**Usage:**
```jsx
<ResultsPanel 
  isOpen={showResults}
  onClose={() => setShowResults(false)}
/>
```

## Panel Architecture

### Layout Structure
```
MainPanel
├── Header
│   ├── Logo & Title
│   └── Close Button
├── Tab Navigation
│   └── Tab Buttons (with PRO badges)
└── Content Area
    └── Active Tab Component
```

### State Flow
1. User opens panel → `isOpen` prop controls visibility
2. User clicks tab → `activeTab` state updates
3. Tab content renders based on `activeTab`
4. User actions in tabs trigger context updates
5. Results appear in `ResultsPanel` when available

## Styling

### MainPanel Styles
- Fixed positioning with z-index management
- Dark background (#1a1a1a) with white text
- Purple accent color (#7c3aed) for active elements
- Rounded corners (16px) with shadow effects
- Smooth transitions for hover states

### ResultsPanel Styles
- Uses `panda-extract` base class
- Consistent header styling with actions
- Progress bar for active extractions
- Empty state styling for no data

## Best Practices

1. **State Management**
   - Use context for shared state
   - Keep local state minimal
   - Handle loading/error states

2. **User Experience**
   - Provide visual feedback for all actions
   - Show progress during long operations
   - Clear empty states with actionable messages

3. **Accessibility**
   - Keyboard navigation support
   - Proper ARIA labels
   - Focus management

4. **Performance**
   - Lazy load tab content
   - Memoize expensive computations
   - Clean up event listeners

## Integration Example
```jsx
import { MainPanel } from './panels/MainPanel';
import { ResultsPanel } from './panels/ResultsPanel';

function ExtractorApp() {
  const [showMain, setShowMain] = useState(true);
  const [showResults, setShowResults] = useState(false);
  
  return (
    <>
      <MainPanel 
        isOpen={showMain}
        onClose={() => setShowMain(false)}
      />
      <ResultsPanel 
        isOpen={showResults}
        onClose={() => setShowResults(false)}
      />
    </>
  );
} 