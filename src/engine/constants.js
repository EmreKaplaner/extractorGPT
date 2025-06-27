// Data types for extraction
export const U = Object.freeze({
  TEXT: "text",
  IMAGE_URL: "image-url",
  LINK_URL: "link-url",
  EMAIL: "email"
});

// Extraction Actions 
export const ExtractionActions = Object.freeze({
  EXTRACT: "EXTRACT",
  EXTRACT_TEXT: "EXTRACT_TEXT",
  EXTRACT_HTML: "EXTRACT_HTML",
  EXTRACT_ATTRIBUTE: "EXTRACT_ATTRIBUTE",
  EXTRACT_IMAGE_URL: "EXTRACT_IMAGE_URL",
  EXTRACT_LINK_URL: "EXTRACT_LINK_URL"
});

// Regex for acceptable text nodes - EXACT MATCH with WebPeeler
export const regexAcceptableNodes = /^(#text|BR|SPAN|EM|STRONG|I|B|U|MARK|SMALL|A)$/i; 