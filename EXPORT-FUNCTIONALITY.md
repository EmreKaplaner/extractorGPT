# Export Functionality for Extract Page Details

## Overview
After extraction completes, you can export your data in multiple formats from the results section.

## Export Options

### 1. Export CSV 📄
- Click the "Export CSV" button in the results header
- Creates a properly formatted CSV file with:
  - Escaped commas and quotes
  - UTF-8 encoding for international characters
  - Filename: `extraction_results_YYYY-MM-DD.csv`
- Perfect for Excel, Google Sheets, or any spreadsheet application

### 2. Export JSON {}
- Click the "Export JSON" button in the results header
- Creates a formatted JSON file with:
  - Pretty-printed format (indented)
  - Filename: `extraction_results_YYYY-MM-DD.json`
- Ideal for developers or data processing pipelines

### 3. Copy to Clipboard 📋
- Click the "Copy" button in the results header
- Copies the data as formatted JSON to your clipboard
- Shows green "✓ Copied!" confirmation for 2 seconds
- Paste anywhere: text editors, chat, emails, etc.

## Where to Find Export Buttons

1. Complete your extraction (URLs + Elements + Start Extraction)
2. Wait for extraction to finish
3. Look for the **"Extraction Results"** section that appears below
4. In the header, you'll see three export buttons on the right:
   - 📄 Export CSV
   - {} Export JSON  
   - 📋 Copy

## Results Display

The extraction results are shown in a table format with:
- Column headers for each selected element
- One row per URL extracted
- Scrollable table for large datasets
- Clean, dark theme styling

## Tips

1. **CSV for Spreadsheets**: Use CSV export when you need to work with the data in Excel or Google Sheets
2. **JSON for APIs**: Use JSON export when integrating with other applications or APIs
3. **Copy for Quick Sharing**: Use the copy button to quickly share results in chat or email
4. **Multiple Exports**: You can export the same results multiple times in different formats

## Troubleshooting

If export doesn't work:
1. Check if pop-up blockers are preventing downloads
2. Ensure you have enough disk space
3. Try a different browser if issues persist
4. For clipboard: Some browsers require HTTPS for clipboard access 