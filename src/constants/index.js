// Re-export everything from engine constants
export * from '../engine/constants.js';

// Data Types
export const DataTypes = {
  TEXT: 'text',
  LINK_URL: 'link-url', 
  IMAGE_URL: 'image-url',
  EMAIL: 'email'
};

// Action Types
export const ActionTypes = {
  EXTRACT: 'extract',
  PAGINATION: 'pagination'
};

// View Types
export const ViewTypes = {
  LIST: 'LIST',
  TABLE: 'TABLE',
  ELEMENT: 'ELEMENT'
};

// Extended Action Types
export const ExtendedActionTypes = {
  EXTRACT_TEXT: 'extract-text',
  EXTRACT_HTML: 'extract-html',
  EXTRACT_ATTRIBUTE: 'extract-attribute',
  EXTRACT_IMAGE_URL: 'extract-image-url',
  EXTRACT_LINK_URL: 'extract-link-url',
  PAGINATION_BUTTON: 'pagination-button',
  PAGINATION_INFINITE_SCROLL: 'pagination-infinite-scroll',
  LOOP_LIST: 'loop-list'
};

// Run Status
export const RunStatus = {
  IDLE: 'idle',
  RUNNING: 'running',
  STOPPING: 'stopping',
  ERROR: 'error',
  COMPLETED: 'completed'
};

// Export Formats
export const ExportFormats = {
  CLIPBOARD: 'clipboard',
  CSV: 'csv',
  EXCEL: 'excel',
  JSON: 'json',
  GOOGLE_SHEETS: 'google-sheets'
};

// Tab Types
export const TabTypes = {
  RUN: 'run',
  PAGE_DETAILS: 'page-details',
  EXTRACT_EMAILS: 'extract-emails',
  DOWNLOAD_IMAGES: 'download-images',
  HELP: 'help',
  SETTINGS: 'settings'
};

// Scroll Types
export const ScrollTypes = {
  SCROLL_INTO_VIEW: 'scroll-into-view',
  SMOOTH_SCROLL_TO: 'smooth-scroll-to'
};

// Message Actions
export const MessageActions = {
  DOWNLOAD_IMAGES: 'download-images',
  DOWNLOAD_FILE: 'download-file',
  REQUEST_CLIPBOARD_PERMISSIONS: 'request-clipboard-permissions',
  PAGE_DETAILS_HIGHLIGHT: 'page-details-highlight',
  PAGE_DETAILS_SELECTED: 'page-details-selected',
  PAGE_DETAILS_EXTRACT: 'page-details-extract',
  STOP_PAGE_DETAILS_EXTRACTION: 'stop-page-details-extraction',
  EXTRACT_EMAILS: 'extract-emails',
  EXTRACT_EMAILS_STOP: 'extract-emails-stop',
  STATUS_UPDATE_EXTRACT: 'status-update-extract',
  STATUS_UPDATE_EXTRACT_EMAILS: 'status-update-extract-emails'
};

// Storage Keys
export const StorageKeys = {
  PERMISSIONS_GRANTED: 'permissionsGranted',
  PERMISSIONS_CLIPBOARD_GRANTED: 'permissionsClipboardGranted',
  REQUEST_HIGHLIGHT_TAB_ID: 'requestHighlightTabId',
  EXTRACT_SETTINGS: 'extractSettings'
};

// Regex Patterns
export const RegexPatterns = {
  EMAIL: /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
  PHONE: /(\+?\d{1,4}[\s-]?)?(\(?\d{1,4}\)?[\s-]?)?[\d\s-]{3,15}\d/g
};

// Default extract settings
export const DEFAULT_EXTRACT_SETTINGS = {
  extractImages: true,
  extractAriaLabel: false,
  removeEmptyGroupsThreshold: 0.2,
  removeSimilarGroupsThreshold: 0.9
}; 