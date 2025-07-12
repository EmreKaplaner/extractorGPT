import { U, regexAcceptableNodes } from './constants.js';

export class ExtractionEngine {
  
  static regexAcceptableNodes = regexAcceptableNodes;

  /**
   * Find nearest link URL (exactly as in xe class)
   */
  static findNearestLinkUrl(e) {
    const n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
    let t = e;
    let r = 0;
    for (; t && r < n; t = t.parentElement, r++) {
      if (t.tagName === "A" && t.href) {
        return t.href;
      }
    }
    return null;
  }

  /**
   * Find nearest image URL (exactly as in xe class)
   */
  static findNearestImageUrl(e) {
    const n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
    let t = e;
    let r = 0;
    for (; t && r < n; t = t.parentElement, r++) {
      if (t.tagName === "IMG" && t.src) {
        return t.src;
      }
    }
    const a = e.querySelector("img");
    if (a && a.src) {
      return a.src;
    } else {
      return null;
    }
  }

  /**
   * Find extractable elements with full depth analysis - EXACT COPY
   */
  static findExtractableElements(n) {
    const t = n.elements;
    const r = n.depth;
    const a = r === undefined ? 1 : r;
    const o = n.settings;
    const i = o == null ? undefined : o.extractImages;
    const l = o == null ? undefined : o.extractAriaLabel;
    let c = [];
    const s = t;
    
    if (s.length === 0) {
      return [];
    } else {
      s.forEach(function (n) {
        const t = [];
        if (n.nodeType === Node.ELEMENT_NODE) {
          const r = new Set();
          n.querySelectorAll("*").forEach(function (n) {
            let o;
            if (n.tagName !== "SCRIPT" && n.tagName !== "STYLE") {
              const i = (o = n.parentElement) === null || o === undefined || (o = o.innerText) === null || o === undefined ? undefined : o.trim();
              if (!i || !r.has(i)) {
                let l = "";
                if (a >= 2) {
                  try {
                    let c;
                    l = n == null || (c = n.innerText) === null || c === undefined ? undefined : c.trim();
                    if (r.has(l)) {
                      return;
                    }
                  } catch (e) {}
                } else if (Array.from(n.childNodes).every(function (childNode) {
                  return childNode.nodeType === Node.TEXT_NODE || ExtractionEngine.regexAcceptableNodes.test(childNode.nodeName);
                })) {
                  // EXACT WebPeeler logic: for depth=1, only extract if ALL child nodes are text nodes OR acceptable nodes
                  try {
                    let s;
                    l = n == null || (s = n.innerText) === null || s === undefined ? undefined : s.trim();
                    if (r.has(l)) {
                      return;
                    }
                  } catch (e) {}
                }
                if (l) {
                  r.add(l);
                  t.push({
                    type: U.TEXT,
                    data: l,
                    element: n
                  });
                }
              }
            }
          });
          
          if (n.tagName === "A") {
            const o = n.href;
            if (o && !o.toLowerCase().startsWith("javascript:")) {
              t.push({
                type: U.LINK_URL,
                data: o,
                element: n
              });
              const s = n.innerText.trim();
              if (s) {
                t.push({
                  type: U.TEXT,
                  data: s,
                  element: n
                });
              }
            }
          }
          
          n.querySelectorAll("a").forEach(function (e) {
            const n = e.href;
            if (n && !n.toLowerCase().startsWith("javascript:")) {
              t.push({
                type: U.LINK_URL,
                data: n,
                element: e
              });
              const r = e.innerText.trim();
              if (r) {
                t.push({
                  type: U.TEXT,
                  data: r,
                  element: e
                });
              }
            }
          });
          
          if (i || i === undefined) {
            if (n.tagName === "IMG") {
              const u = n.src;
              if (u) {
                t.push({
                  type: U.IMAGE_URL,
                  data: u,
                  element: n
                });
              }
            }
            n.querySelectorAll("img").forEach(function (e) {
              const n = e.src;
              if (n) {
                t.push({
                  type: U.IMAGE_URL,
                  data: n,
                  element: e
                });
              }
            });
            n.querySelectorAll("*").forEach(function (e) {
              const n = window.getComputedStyle(e).backgroundImage;
              if (n && n.startsWith("url(")) {
                const r = n.slice(4, -1).replace(/["']/g, "");
                if (r) {
                  t.push({
                    type: U.IMAGE_URL,
                    data: r,
                    element: e
                  });
                }
              }
            });
          }
          
          if (l) {
            n.querySelectorAll("*").forEach(function (e) {
              const n = e.getAttribute("aria-label");
              if (n) {
                if (!Array.from(e.childNodes).some(function (e) {
                  return e.nodeType === Node.TEXT_NODE && e.textContent.trim() !== "";
                })) {
                  t.push({
                    type: U.TEXT,
                    data: n,
                    element: e
                  });
                }
              }
            });
          }
        }
        c.push(t);
      });
      
      c = ExtractionEngine.cleanupExtractableElements(c);
      c.forEach(function (e) {
        const elements = e.map(function (e) {
          return e.element;
        }).filter(function (e) {
          return e;
        });
        
        elements.forEach(function (e) {
          if (e.style) {
            e.style.outline = "1px dotted blue";
            e.classList.add("panda-extractable-highlight");
          }
        });
      });
      
      return {
        children: s,
        extractableElements: c
      };
    }
  }

  /**
   * Async version of findExtractableElements - EXACT COPY
   */
  static findExtractableElementsAsync(n) {
    const t = n.elements;
    const r = n.depth;
    const a = r === undefined ? 1 : r;
    const o = n.settings;
    
    return new Promise(function (n, r) {
      try {
        n(ExtractionEngine.findExtractableElements({
          elements: t,
          depth: a,
          settings: o
        }));
      } catch (e) {
        r(e);
      }
    });
  }

  /**
   * Clear extraction highlights - EXACT COPY
   */
  static clearExtractableHighlights(e) {
    (e || document.body).querySelectorAll(".panda-extractable-highlight").forEach(function (e) {
      e.style.outline = "none";
      e.classList.remove("panda-extractable-highlight");
    });
  }

  /**
   * Cleanup extractable elements - EXACT COPY
   */
  static cleanupExtractableElements(e) {
    let n = e.filter(function (e) {
      return Object.keys(e).length > 0;
    });
    return n = n.map(function (e) {
      const n = new Map();
      const t = [function (e) {
        return e === "javascript:void(0)";
      }, function (e) {
        return e.length == 1 && !/^[a-zA-Z0-9]+$/.test(e);
      }];
      e.forEach(function (e) {
        let r;
        if (!n.has(e.data) && !(r = e.data, t.some(function (e) {
          return e(r);
        }))) {
          n.set(e.data, e);
        }
      });
      return Array.from(n.values());
    });
  }

  /**
   * Find simple extractable elements - EXACT WebPeeler implementation with debugging
   */
  static findSimpleExtractableElements(e) {
    let n;
    const t = e.element;
    const r = [];
    
    console.log('[ExtractionEngine] findSimpleExtractableElements called with element:', t);
    console.log('[ExtractionEngine] Element tagName:', t.tagName);
    console.log('[ExtractionEngine] Element innerHTML preview:', t.innerHTML?.substring(0, 200));
    
    // EXACT WebPeeler text extraction
    const a = (n = t.innerText) === null || n === undefined ? undefined : n.trim();
    console.log('[ExtractionEngine] innerText extracted:', a ? `"${a.substring(0, 100)}..."` : 'null/empty');
    
    if (a) {
      r.push({
        type: U.TEXT,
        data: a,
        element: t
      });
      console.log('[ExtractionEngine] Added TEXT extractable');
    } else {
      console.log('[ExtractionEngine] No text content found');
    }
    
    // EXACT WebPeeler link extraction
    const o = t.querySelectorAll("a");
    console.log('[ExtractionEngine] Found', o.length, 'link(s) in element');
    
    if (t.tagName === "A" && t.href && !t.href.startsWith("javascript:")) {
      const i = t.href;
      if (i) {
        r.push({
          type: U.LINK_URL,
          data: i,
          element: t
        });
        console.log('[ExtractionEngine] Added LINK_URL extractable (self):', i);
      }
    } else if (o.length === 1 && !o[0].href.startsWith("javascript:")) {
      const l = o[0].href;
      if (l) {
        r.push({
          type: U.LINK_URL,
          data: l,
          element: o[0]
        });
        console.log('[ExtractionEngine] Added LINK_URL extractable (child):', l);
      }
    }
    
    // EXACT WebPeeler image extraction
    if (t.tagName === "IMG" && t.src) {
      const c = t.src;
      if (c) {
        r.push({
          type: U.IMAGE_URL,
          data: c,
          element: t
        });
        console.log('[ExtractionEngine] Added IMAGE_URL extractable:', c);
      }
    }
    
    console.log('[ExtractionEngine] Final extractables count:', r.length);
    console.log('[ExtractionEngine] Final extractables:', r);
    
    return r;
  }

  /**
   * Async version of findSimpleExtractableElements - EXACT COPY
   */
  static findSimpleExtractableElementsAsync(n) {
    const t = n.element;
    
    return new Promise(function (n, r) {
      try {
        n(ExtractionEngine.findSimpleExtractableElements({
          element: t
        }));
      } catch (e) {
        r(e);
      }
    });
  }

  /**
   * Extract text from element - EXACT COPY
   */
  static extractText(e) {
    let n;
    return ((n = e.textContent) === null || n === undefined ? undefined : n.trim()) || null;
  }

  /**
   * Extract HTML from element - EXACT COPY
   */
  static extractHtml(e) {
    return e.innerHTML;
  }

  /**
   * Extract attribute from element - EXACT COPY
   */
  static extractAttribute(e, n) {
    return e.getAttribute(n);
  }

  /**
   * Extract image URL with fallbacks - EXACT COPY
   */
  static extractImageUrl(n) {
    let t = n.src;
    if (!t) {
      const r = window.getComputedStyle(n).backgroundImage;
      if (r.startsWith("url(")) {
        t = r.slice(4, -1).replace(/["']/g, "");
      }
    }
    t ||= ExtractionEngine.findNearestImageUrl(n);
    return t;
  }

  /**
   * Extract link URL with fallbacks - EXACT COPY
   */
  static extractLinkUrl(n) {
    let t = n.href;
    t ||= ExtractionEngine.findNearestLinkUrl(n);
    return t;
  }

  /**
   * Extract emails from text using regex - EXACT COPY
   */
  static extractEmailsFromText(e) {
    return (e == null ? undefined : e.match(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g)) || [];
  }

  /**
   * Extract phone numbers from text using regex - EXACT COPY
   */
  static extractPhoneNumbersFromText(e) {
    return (e == null ? undefined : e.match(/(\+?\d{1,4}[\s-]?)?(\(?\d{1,4}\)?[\s-]?)?[\d\s-]{3,15}\d/g)) || [];
  }

  /**
   * Extract all data from element - combines all extraction methods
   * This method is called by main-content-react.js but was missing
   */
  static extractAllData(element) {
    if (!element) return null;
    
    const data = {};
    
    // Extract text
    const text = this.extractText(element);
    if (text) {
      data.text = text;
      
      // Extract emails from text
      const emails = this.extractEmailsFromText(text);
      if (emails.length > 0) {
        data.emails = emails;
      }
      
      // Extract phone numbers from text
      const phones = this.extractPhoneNumbersFromText(text);
      if (phones.length > 0) {
        data.phones = phones;
      }
    }
    
    // Extract HTML
    data.html = this.extractHtml(element);
    
    // Extract link URL
    const linkUrl = this.extractLinkUrl(element);
    if (linkUrl) {
      data.linkUrl = linkUrl;
    }
    
    // Extract image URL
    const imageUrl = this.extractImageUrl(element);
    if (imageUrl) {
      data.imageUrl = imageUrl;
    }
    
    // Extract common attributes
    const id = element.id;
    if (id) {
      data.id = id;
    }
    
    const className = element.className;
    if (className) {
      data.className = className;
    }
    
    // Add element tag name
    data.tagName = element.tagName.toLowerCase();
    
    // Add data type based on what was extracted
    if (data.emails && data.emails.length > 0) {
      data.type = U.EMAIL;
    } else if (data.imageUrl) {
      data.type = U.IMAGE_URL;
    } else if (data.linkUrl) {
      data.type = U.LINK_URL;
    } else if (data.text) {
      data.type = U.TEXT;
    }
    
    return data;
  }
} 