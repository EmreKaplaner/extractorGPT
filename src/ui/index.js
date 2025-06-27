// UI module exports
export { BaseHighlighter } from './base-highlighter.js';
export { CursorHighlighter } from './cursor-highlighter.js';
export { CollectionHighlighter } from './collection-highlighter.js';
export { ShadowDomUtils } from './shadow-dom-utils.js';
export { EventHandlers } from './event-handlers.js';
export * from './ui-constants.js';

// Add .dot() method to String prototype if not already added
if (!String.prototype.dot) {
  String.prototype.dot = function() {
    return '.' + this;
  };
} 