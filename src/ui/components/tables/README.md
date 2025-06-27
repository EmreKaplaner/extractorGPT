# Table Components

## Overview
This directory contains table-related components for displaying extracted data in a structured, tabular format.

## Components

### `DataTable.js`
Generic data table component that renders tabular data with sorting and selection capabilities.

**Props:**
- `headers` (array) - Column headers
- `rows` (array) - Data rows (array of objects)
- `selectedRows` (Set) - Set of selected row indices
- `onRowSelect` (function) - Row selection handler
- `onSelectAll` (function) - Select all handler
- `onSort` (function) - Column sort handler
- `sortColumn` (string) - Currently sorted column
- `sortDirection` (string) - Sort direction ('asc' or 'desc')

**Features:**
- Column sorting with visual indicators
- Row selection with checkboxes
- Select all functionality
- Responsive table layout

**Usage:**
```jsx
<DataTable
  headers={['Name', 'Email', 'Phone']}
  rows={data}
  selectedRows={selectedRows}
  onRowSelect={handleRowSelect}
  onSelectAll={handleSelectAll}
  onSort={handleSort}
  sortColumn="Name"
  sortDirection="asc"
/>
```

### `ResultsTable.js`
Specialized table for displaying extraction results with additional features.

**Props:**
- `data` (object) - Data object with `headers` and `rows`
- `source` (string) - Data source identifier ('list', 'details', 'emails')

**Features:**
- Built on top of DataTable
- Row selection management
- Sorting functionality
- Export selected rows
- Results metadata display (source, row count, selection count)
- Empty state handling

**State Management:**
- `selectedRows` - Set of selected row indices
- `sortColumn` - Current sort column
- `sortDirection` - Current sort direction

**Export Actions:**
- CSV export for selected rows
- Clipboard copy for selected rows

**Usage:**
```jsx
<ResultsTable 
  data={{
    headers: ['Title', 'URL', 'Description'],
    rows: extractedData
  }}
  source="list"
/>
```

### `TableHeader.js`
Table header row component with sorting capabilities.

**Props:**
- `headers` (array) - Column header names
- `onSort` (function) - Sort handler
- `sortColumn` (string) - Currently sorted column
- `sortDirection` (string) - Sort direction
- `showSelectAll` (boolean) - Show select all checkbox
- `allSelected` (boolean) - All rows selected state
- `onSelectAll` (function) - Select all handler

**Features:**
- Clickable headers for sorting
- Sort direction indicators (▲/▼)
- Select all checkbox in first column
- Row number column (#)

**Usage:**
```jsx
<TableHeader
  headers={['Name', 'Email']}
  onSort={handleSort}
  sortColumn="Name"
  sortDirection="asc"
  showSelectAll={true}
  allSelected={false}
  onSelectAll={handleSelectAll}
/>
```

### `TableRow.js`
Individual table row component with cell rendering logic.

**Props:**
- `rowIndex` (number) - Row index for numbering
- `data` (object) - Row data object
- `headers` (array) - Column headers for data mapping
- `selected` (boolean) - Row selection state
- `onSelect` (function) - Row selection handler

**Features:**
- Checkbox for row selection
- Row numbering
- Smart cell content rendering:
  - URLs rendered as clickable links
  - Email addresses as mailto links
  - Long text truncated with ellipsis
  - Arrays joined with commas
  - Objects stringified
- Hover tooltips for truncated content

**Cell Rendering Logic:**
1. **URLs** - Rendered as links with truncated display
2. **Emails** - Rendered as mailto links
3. **Long Text** - Truncated at 100 characters
4. **Arrays** - Joined with commas
5. **Objects** - JSON stringified
6. **Empty Values** - Shown as dash (-)

**Usage:**
```jsx
<TableRow
  rowIndex={0}
  data={{ Name: 'John', Email: 'john@example.com' }}
  headers={['Name', 'Email']}
  selected={false}
  onSelect={() => handleRowSelect(0)}
/>
```

## Table Structure
```
ResultsTable
├── Toolbar
│   ├── Results Info (source, count)
│   └── Actions (export, copy)
└── DataTable
    ├── TableHeader
    │   ├── Select All Checkbox
    │   ├── Row Number Column
    │   └── Data Columns (sortable)
    └── TableRow(s)
        ├── Selection Checkbox
        ├── Row Number
        └── Data Cells
```

## Styling

### CSS Classes
- `extract-small-table-container` - Table wrapper
- `extract-small-table` - Main table element
- `select-column` - Selection checkbox column
- `row-number` - Row number column
- `sortable` - Sortable header
- `sorted` - Currently sorted column
- `sort-indicator` - Sort direction arrow
- `selected` - Selected row
- `cell-link` - Link styling
- `cell-email` - Email link styling

## Best Practices

1. **Performance**
   - Use React.memo for row components
   - Implement virtual scrolling for large datasets
   - Debounce sort operations

2. **Accessibility**
   - Proper table semantics (thead, tbody)
   - ARIA labels for interactive elements
   - Keyboard navigation support

3. **User Experience**
   - Clear visual feedback for interactions
   - Consistent sorting behavior
   - Meaningful empty states

4. **Data Handling**
   - Handle null/undefined values gracefully
   - Format data appropriately for display
   - Provide export options for data portability 