// Engine module exports - UPDATED for WebPeeler compatibility
export { ExtractionEngine } from './extraction-engine.js';

// WebPeeler-style TaskRunner (parallel URL processing)
export { TaskRunner } from './task-runner.js';

// WebPeeler-style integrated automation and pagination
export { 
  webPeelerAutomation,
  WebPeelerIntegratedAutomation,
  WebPeelerScrollUtils,
  WebPeelerScrollOptions,
  WebPeelerScrollTypes,
  WebPeelerProgressUtils
} from './automation-handler.js';

export { 
  webPeelerPagination,
  WebPeelerIntegratedPagination,
  WebPeelerPaginationUtils,
  WebPeelerPaginationTypes,
  WebPeelerSelectionModes,
  WebPeelerSelectionIntegration
} from './pagination-detector.js';

export * from './constants.js';

// Convenience exports for common methods (unchanged)
export const findExtractableElements = ExtractionEngine.findExtractableElements;
export const extractText = ExtractionEngine.extractText;
export const extractImageUrl = ExtractionEngine.extractImageUrl;
export const extractLinkUrl = ExtractionEngine.extractLinkUrl;

// WebPeeler-style convenience exports
export const webPeelerTaskRunner = TaskRunner;
export const webPeelerScrollUtils = WebPeelerScrollUtils;
export const webPeelerPaginationUtils = WebPeelerPaginationUtils; 