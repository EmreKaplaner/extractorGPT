// Engine module exports
export { ExtractionEngine } from './extraction-engine.js';
export { TaskRunner } from './task-runner.js';
export { automationHandler, AutomationHandler } from './automation-handler.js';
export { paginationDetector, PaginationDetector } from './pagination-detector.js';
export * from './constants.js';

// Convenience exports for common methods
export const findExtractableElements = ExtractionEngine.findExtractableElements;
export const extractText = ExtractionEngine.extractText;
export const extractImageUrl = ExtractionEngine.extractImageUrl;
export const extractLinkUrl = ExtractionEngine.extractLinkUrl; 