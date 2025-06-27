# Tab Components

## Overview
This directory contains the tab content components for the EXTRACTOR-GPT extension's main panel. Each tab provides specific extraction functionality.

## Components

### `ExtractListTab.js`
Tab for extracting lists and tables from web pages.

**Props:**
- `isPro` (boolean) - User tier status

**Features:**
- Step-by-step instructions for list extraction
- Activates selection engine in list mode
- Real-time extraction status feedback
- Results display with export functionality
- Event-based data updates

**Workflow:**
1. User clicks "Start List Extraction"
2. Selection engine activates
3. User hovers over lists/tables (highlighted)
4. User clicks to extract
5. Results displayed in table format

**Event Listeners:**
- `extractorGPT:dataUpdated` - Receives extraction results

**State:**
- `extractionStarted` - Tracks if extraction is active
- `extractedData` - Stores extraction results

### `ExtractDetailsTab.js`
Tab for extracting specific details from multiple similar pages.

**Props:**
- `isPro` (boolean) - User tier status

**Features:**
- Multi-URL input management
- Add/remove URL functionality
- Step-by-step extraction guide
- Video tutorial link

**Workflow:**
1. Add URLs of similar pages
2. Navigate to first page
3. Select elements to extract
4. System extracts from all pages

**State:**
- `pageUrls` - Array of URLs to process

### `ExtractEmailsTab.js`
Tab for scanning and extracting email addresses (PRO feature).

**Props:**
- `isPro` (boolean) - User tier status

**Features:**
- Page email scanning
- Multi-page email extraction
- Email list display
- Copy individual emails
- Export to CSV
- Bulk operations (copy all, export)

**Functions:**
- `handleScanEmails()` - Scans current page for emails
- `handleCopyAll()` - Copies all emails to clipboard
- `handleExportCSV()` - Exports emails as CSV file

**State:**
- `foundEmails` - Array of discovered emails
- `isScanning` - Scanning status

### `ExtractImagesTab.js`
Tab for discovering and downloading images (PRO feature).

**Props:**
- `isPro` (boolean) - User tier status

**Features:**
- Image discovery on current page
- Image gallery view with thumbnails
- Multi-select functionality
- Bulk download capability
- Image filtering (>50x50 pixels)
- Dimensions display

**Functions:**
- `handleScanImages()` - Finds all images on page
- `handleToggleImage()` - Toggle image selection
- `handleSelectAll()` - Select/deselect all images
- `handleDownloadSelected()` - Download selected images

**State:**
- `foundImages` - Array of discovered images
- `isScanning` - Scanning status
- `selectedImages` - Set of selected image IDs

### `HelpTab.js`
Tab containing help resources and account management.

**Props:**
- `isPro` (boolean) - User tier status
- `onProToggle` (function) - Toggle PRO status

**Sections:**
1. **Account Status**
   - Shows current tier (FREE/PRO)
   - Account avatar and description

2. **Settings**
   - Upgrade to PRO
   - Register License
   - Purchase License

3. **Help**
   - Video Tutorials
   - Request Feature
   - Join Community

4. **Version Info**
   - Current version display
   - License status

**External Links:**
- YouTube tutorials
- GitHub issues
- Discord community

## Common Patterns

### UI Structure
All tabs follow a consistent structure:
1. Description text
2. Step-by-step instructions (if applicable)
3. Action buttons
4. Results/content area
5. Status indicators

### Styling
- Consistent spacing and typography
- Dark theme with #1a1a1a background
- Purple accent color (#7c3aed)
- Hover effects on interactive elements
- PRO badges where applicable

### State Management
- Local state for UI interactions
- Event listeners for data updates
- Integration with selection engine

## Best Practices

1. **User Guidance**
   - Clear step-by-step instructions
   - Visual feedback for all actions
   - Helpful empty states

2. **Error Handling**
   - Graceful failure modes
   - User-friendly error messages
   - Recovery options

3. **Performance**
   - Efficient DOM queries
   - Debounced operations
   - Cleanup on unmount

4. **Accessibility**
   - Keyboard navigation
   - Screen reader support
   - Clear focus indicators

## Integration Example
```jsx
import { ExtractListTab } from './tabs/ExtractListTab';

function MainPanel() {
  const [activeTab, setActiveTab] = useState('list');
  const [isPro, setIsPro] = useState(false);
  
  return (
    <div className="panel-content">
      {activeTab === 'list' && <ExtractListTab isPro={isPro} />}
      {activeTab === 'details' && <ExtractDetailsTab isPro={isPro} />}
      {/* ... other tabs */}
    </div>
  );
} 