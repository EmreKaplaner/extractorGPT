// Selection module exports
export { SelectionEngine } from './selection-engine.js';
export { le, ce, se } from './selection-constants.js';
export * from './css-selector-utils.js';
export * from './group-finder.js';

// Add .dot() method to String prototype if not already added
if (!String.prototype.dot) {
  String.prototype.dot = function() {
    return '.' + this;
  };
} 