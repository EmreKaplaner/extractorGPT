# Analytics Module

## Overview
The analytics module provides event tracking functionality for the extension. Currently implemented as a no-op (no operation) version that doesn't send any data to external services.

## Files

### 1. `index.js`
**Purpose**: Module entry point that re-exports the event tracker.

**Exports**:
- `eventTracker` (named export) - The main event tracker instance
- `default` (default export) - Also exports the event tracker as default

### 2. `event-tracker.js`
**Purpose**: Simplified event tracker implementation that logs events locally without sending them anywhere.

**Class**: `EventTracker`
- Constructor: Logs that analytics is disabled

**Methods**:
- `trackPageView(page, properties = {})` - Logs page view events
- `trackUserAction(action, properties = {})` - Logs user action events
- `trackError(error, context = '')` - Logs error events
- `trackExtraction(type, properties = {})` - Logs extraction events
- `track(eventType, properties = {})` - Generic tracking method
- `sendAnalytics(event)` - No-op async method
- `flushQueue()` - No-op async method
- `getSessionId()` - Returns a mock session ID with timestamp
- `getUserId()` - Returns 'local-user'
- `getBrowserInfo()` - Returns browser information object
- `generateId()` - Generates a unique ID using timestamp and random string
- `trackExtractionStarted({ urls, elements, type })` - Logs extraction start
- `trackExtractionCompleted({ urls, elements, type, duration, rowCount })` - Logs extraction completion
- `trackExport({ format, rowCount })` - Logs export events
- `trackFeatureUsage(feature)` - Logs feature usage
- `setUserId(userId)` - Logs user ID setting
- `clearUserId()` - Logs user ID clearing
- `trackTiming({ category, variable, time, label })` - Logs timing events

**Exported Object**: `eventTrackerWrapper`
- Wraps all EventTracker methods
- Provides a consistent interface for the rest of the application
- Methods: `trackPageView`, `trackExtractionStarted`, `trackExtractionCompleted`, `trackExport`, `trackError`, `trackFeatureUsage`, `trackUserAction`, `setUserId`, `clearUserId`, `trackTiming`

## Usage Example
```javascript
import eventTracker from './analytics';

// Track a user action
eventTracker.trackUserAction('button_clicked', { buttonId: 'extract' });

// Track extraction completion
eventTracker.trackExtractionCompleted({
  urls: ['https://example.com'],
  type: 'list',
  duration: 5000,
  rowCount: 100
});
```

## Notes
- All methods are implemented as no-ops that only log to console
- No actual analytics data is sent to any external service
- This implementation bypasses all analytics requirements
- Safe to use without privacy concerns 