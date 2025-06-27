# Data Management

## Overview
This directory contains modules for managing extracted data, including storage, transformation, and export functionality for the EXTRACTOR-GPT extension.

## Files

### `index.js`
Main export file that re-exports data management utilities.

**Exports:**
- `ResultsTable` - Class for managing tabular extraction results
- `ExportUtils` - Utilities for exporting data in various formats

### `results-table.js`
Core class for managing extraction results in a tabular format.

**Class: `ResultsTable`**

**Properties:**
- `rows` - Array of data rows
- `headers` - Array of column headers
- `thresholds` - Filtering thresholds object
  - `removeEmptyGroupsThreshold` (default: 0.2) - Remove groups with >20% empty cells
  - `removeSimilarGroupsThreshold` (default: 0.9) - Remove groups >90% similar

**Methods:**

1. **Data Insertion**
   - `insertExtractablesFromList({ parent, extractables })` - Insert data from list selection
   - `insertExtractabalesFromTask(task)` - Insert data from extraction task
   - `insertFromPageDetailsStatus({ status })` - Insert from page details extraction
   - `insertEmailsFromStatus({ status })` - Insert emails from extraction status

2. **Data Processing**
   - `filterAndClean()` - Remove empty rows and filter by thresholds
   - `removeDuplicateRows()` - Remove duplicate entries
   - `invalidateHeaders()` - Recalculate headers from data
   - `updateThresholds(thresholds)` - Update filtering thresholds

3. **Utilities**
   - `generateFriendlyId(type, groupId)` - Generate readable IDs
   - `getSelectorNthChild({ root, element, depth })` - Generate CSS selector
   - `newInstance()` - Create a copy of the table

**Data Structure:**
```javascript
{
  rows: [
    {
      groupId: 'text_1234_abc',
      selector: 'div > p:nth-of-type(1)',
      type: 'text',
      data: 'Extracted content',
      url: 'https://example.com',
      name: 'Field name',
      error: null
    }
  ],
  headers: ['groupId', 'type', 'data', 'url']
}
```

### `export-utils.js`
Utilities for exporting data in various formats.

**Class: `ExportUtils` (static methods)**

**Export Methods:**

1. **CSV Export**
   ```javascript
   ExportUtils.toCSV({ headers, rows, filename })
   ```
   - Escapes quotes and handles commas
   - Downloads as .csv file
   - Returns CSV content string

2. **Excel Export**
   ```javascript
   ExportUtils.toExcel({ headers, rows, filename })
   ```
   - Currently uses CSV fallback with BOM
   - Downloads as Excel-compatible CSV
   - Plans for true XLSX support

3. **JSON Export**
   ```javascript
   ExportUtils.exportToJSON({ headers, rows, filename })
   ```
   - Converts rows to objects with headers as keys
   - Pretty-printed with 2-space indentation
   - Downloads as .json file

4. **Clipboard Export**
   ```javascript
   ExportUtils.exportToClipboard({ headers, rows })
   ```
   - Tab-separated format for spreadsheets
   - Uses Clipboard API with fallback
   - No file download

5. **Google Sheets Export**
   ```javascript
   ExportUtils.exportToGoogleSheets({ headers, rows })
   ```
   - Placeholder for OAuth integration
   - Currently copies to clipboard

**Helper Methods:**
- `toPlainText({ headers, rows })` - Convert to tab-separated text
- `copyToClipboardFallback(text)` - Fallback clipboard method
- `downloadFile(content, filename, mimeType)` - Trigger file download
- `export({ format, headers, rows, filename })` - Universal export method

**Export Formats Enum:**
```javascript
{
  CSV: 'csv',
  EXCEL: 'excel',
  JSON: 'json',
  CLIPBOARD: 'clipboard',
  GOOGLE_SHEETS: 'google-sheets'
}
```

## Usage Examples

### Creating and Populating a Results Table
```javascript
import { ResultsTable } from './data-management';

const table = new ResultsTable();

// Insert from list extraction
table.insertExtractablesFromList({
  parent: document.querySelector('.list-container'),
  extractables: [
    [
      { element: el1, type: 'text', data: 'Item 1' },
      { element: el2, type: 'text', data: 'Item 2' }
    ]
  ]
});

// Update thresholds
table.updateThresholds({
  removeEmptyGroupsThreshold: 0.3,
  removeSimilarGroupsThreshold: 0.8
});

// Clean data
table.filterAndClean();
```

### Exporting Data
```javascript
import { ExportUtils } from './data-management';

const data = {
  headers: ['Name', 'Email', 'Phone'],
  rows: [
    { Name: 'John Doe', Email: 'john@example.com', Phone: '555-1234' },
    { Name: 'Jane Smith', Email: 'jane@example.com', Phone: '555-5678' }
  ]
};

// Export as CSV
ExportUtils.toCSV({
  ...data,
  filename: 'contacts.csv'
});

// Export to clipboard
ExportUtils.exportToClipboard(data);

// Universal export
ExportUtils.export({
  format: 'json',
  ...data,
  filename: 'contacts'
});
```

## Data Flow

### Extraction to Export Pipeline
1. **Extraction** → SelectionEngine captures elements
2. **Transformation** → ResultsTable processes raw data
3. **Storage** → Data stored in ResultsTable rows
4. **Filtering** → Empty/duplicate removal
5. **Export** → ExportUtils formats and downloads

### Data Types
The system handles these extraction types:
- `text` - Plain text content
- `link-url` - Hyperlink URLs
- `image-url` - Image source URLs
- `email` - Email addresses

## Best Practices

1. **Data Integrity**
   - Always validate data before insertion
   - Handle null/undefined gracefully
   - Maintain consistent data structure

2. **Performance**
   - Use thresholds to filter large datasets
   - Batch operations when possible
   - Clear old data before new extractions

3. **Export Handling**
   - Check browser compatibility for features
   - Provide fallbacks for older browsers
   - Handle large datasets efficiently

4. **Error Handling**
   - Catch and log export errors
   - Provide user feedback on failures
   - Validate data before export

## Integration with State Management

The ResultsTable instances are stored in GlobalState:
- `globalState.resultsList` - List extraction results
- `globalState.resultsDetails` - Page details results  
- `globalState.resultsEmails` - Email extraction results

Components can update results through context:
```javascript
const { setListResults } = useGlobalState();

setListResults(table => {
  const newTable = table.newInstance();
  newTable.insertExtractablesFromList(data);
  return newTable;
});
```

## Future Enhancements
1. True Excel export with SheetJS
2. Google Sheets OAuth integration
3. Cloud storage export options
4. Data validation rules
5. Custom export templates 