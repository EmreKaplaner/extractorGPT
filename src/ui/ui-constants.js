// View types
export const ViewTypes = Object.freeze({
  LIST: "LIST",
  TABLE: "TABLE", 
  ELEMENT: "ELEMENT"
});

// Extraction actions
export const ExtractionActions = Object.freeze({
  EXTRACT: "EXTRACT",
  EXTRACT_TEXT: "EXTRACT_TEXT",
  EXTRACT_HTML: "EXTRACT_HTML",
  EXTRACT_ATTRIBUTE: "EXTRACT_ATTRIBUTE",
  EXTRACT_IMAGE_URL: "EXTRACT_IMAGE_URL",
  EXTRACT_LINK_URL: "EXTRACT_LINK_URL"
});

// Extraction UI CSS Classes
export const ExtractionUIClasses = Object.freeze({
  PANDA_EXTRACT: "panda-extract",
  PANDA_EXTRACT_CURSOR_MOVE_OVERLAY: "panda-extract-cursor-move-overlay",
  PANDA_EXTRACT_ELEMENT_INFO_OVERLAY: "panda-extract-element-info-overlay",
  PANDA_EXTRACT_ELEMENT_INFO_OVERLAY_ITEM: "panda-extract-element-info-overlay-item",
  PANDA_EXTRACT_SIMILAR_ELEMENT_OVERLAY: "panda-extract-similar-element-overlay",
  PANDA_EXTRACT_POPUP_COLUMN: "panda-extract-popup-column",
  PANDA_EXTRACT_ITEM: "panda-extract-item",
  PANDA_EXTRACT_TYPE_MENU: "panda-extract-type-menu",
  PANDA_EXTRACT_CHOICE_BUTTON: "panda-extract-choice-button",
  PANDA_EXTRACTABLE_HIGHLIGHT: "panda-extractable-highlight",
  PANDA_EXTRACT_HIGHLIGHTED_ITEM: "panda-extract-highlighted-item"
});

// Highlighting CSS Classes
export const HighlightingClasses = Object.freeze({
  PANDA_HIGHLIGHT_COLLECTION_ELEMENT: "panda-highlight-collection-element",
  PANDA_HIGHLIGHT_ACTIVE_COLLECTION_ELEMENT: "panda-highlight-active-collection-element",
  PANDA_HIGHLIGHT_CHILD_ELEMENT_ACTIVE: "panda-highlight-child-element-active",
  PANDA_HIGHLIGHTER_OVERLAY: "panda-highlighter-overlay",
  PANDA_HIGHLIGHTER_ITEM: "panda-highlighter-item"
});

// Layer/Z-Index CSS Classes
export const LayerClasses = Object.freeze({
  PANDA_Z: "panda-z",
  PANDA_Z_1: "panda-z-1",
  PANDA_Z_2: "panda-z-2",
  PANDA_Z_3: "panda-z-3",
  PANDA_Z_4: "panda-z-4",
  PANDA_Z_5: "panda-z-5",
  PANDA_Z_6: "panda-z-6",
  PANDA_Z_7: "panda-z-7",
  PANDA_Z_8: "panda-z-8",
  PANDA_Z_9: "panda-z-9",
  PANDA_Z_10: "panda-z-10",
  PANDA_Z_11: "panda-z-11",
  PANDA_Z_12: "panda-z-12",
  LAYER_FLOATING_CONTENT: "layer-floating-content",
  LAYER_POPUP_BG: "layer-popup-bg",
  LAYER_POPUP: "layer-popup",
  LAYER_POPUP_MENU_BG: "layer-popup-menu-bg",
  LAYER_POPUP_MENU: "layer-popup-menu",
  PANDA_LAYER_CONTENT: "panda-layer-content",
  PANDA_LAYER_HIGHLIGHT: "panda-layer-highlight"
});

// Table styling
export const TableClasses = Object.freeze({
  EXTRACT_SMALL_TABLE: "extract-small-table"
});

// Shadow DOM
export const ShadowDomConstants = Object.freeze({
  CONTAINER_ID: "shadow-container-panda-extract"
});

// Configuration objects structure
export const ConfigDefaults = Object.freeze({
  ignoreViewsWithClass: ["panda-extract"],
  extractImages: true,
  extractAriaLabel: false
}); 