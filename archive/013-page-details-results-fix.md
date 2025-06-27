# Page Details Results Table Fix

## Issue
The extraction process completes successfully (as shown by the progress indicator), but the results table is not displayed after extraction finishes.

## Root Cause Analysis

### 1. **State Management Issue**
When extraction completes, the `isExtracting` state might still be true, preventing the results from showing.

### 2. **Results Formatting**
The ExtractionProcessor returns results in this format:
```javascript
[
  {
    id: "element-id",
    name: "element-name", 
    type: "text",
    data: "extracted data",
    selectorType: "general"
  }
]
```

But the background handler needs to format these into table rows:
```javascript
{
  url: "https://example.com",
  "element-name": "extracted data"
}
```

### 3. **Async Response Handling**
The extraction response might be arriving after the UI has already updated, causing a race condition.

## Debug Steps Added

1. Added console logging in background handler to show:
   - Raw extraction outcomes
   - Processing of each URL outcome
   - Final formatted results

2. Added console logging in ExtractDetailsTab to show:
   - Full extraction response
   - Results being set in state

## Fix Plan

1. **Ensure State Updates**: When extraction completes, explicitly set:
   - `setIsExtracting(false)`
   - `setExtractionStatus('idle')`
   - `setExtractionResults(response.results || [])`

2. **Fix Results Display Logic**: The results table only shows when:
   - `extractionResults.length > 0`
   - `!isExtracting` (this might be the issue)

3. **Improve Results Formatting**: Ensure the background handler properly formats the ExtractionProcessor outcomes into table-friendly rows.

## Testing Instructions

1. Reload the extension
2. Open developer console
3. Go to Extract Details tab
4. Add URLs and select elements
5. Start extraction
6. Watch console for:
   - `[Background] Extraction outcomes:`
   - `[Background] Final extraction results:`
   - `[ExtractDetailsTab] Extraction response:`
7. Check if results table appears after extraction completes

## Expected Console Output
```
[Background] Extraction outcomes: Map(2) { ... }
[Background] Processing outcome for URL: https://example.com Outcome: [...]
[Background] Final extraction results: [{url: "...", element1: "...", ...}]
[ExtractDetailsTab] Extraction response: {success: true, results: [...]}
[ExtractDetailsTab] Setting extraction results: [...]
``` 