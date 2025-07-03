import { le, ce, se } from './selection-constants.js';
import { CursorHighlighter, CollectionHighlighter } from '../ui/index.js';
import { ShadowDomUtils } from '../ui/index.js';
import GroupFinder from './group-finder.js';
import CssSelectorUtils from './css-selector-utils.js';
import EventHandlers from '../ui/event-handlers.js';

// Add .dot() method to String prototype for class name handling
if (!String.prototype.dot) {
  String.prototype.dot = function() {
    return '.' + this;
  };
}

// Aliases for imports
const D = ShadowDomUtils;
const G = GroupFinder;
const q = CssSelectorUtils;
const v = CursorHighlighter;
const P = CollectionHighlighter;

// ViewType constants (F object)
const F = Object.freeze({
  LIST: "LIST",
  TABLE: "TABLE", 
  ELEMENT: "ELEMENT"
});

export class SelectionEngine {
  constructor(n) {
    // Add defensive check
    if (!n) {
      console.error('[SelectionEngine] Constructor called without config object');
      n = {
        onElementClick: () => {},
        config: {},
        onPause: () => {},
        onResume: () => {},
        onListSelected: () => {},
        onModeChanged: () => {},
        onElementHovered: () => {}
      };
    }
    
    const t = this;
    const r = n.onElementClick;
    const a = n.config;
    const o = n.onPause;
    const i = n.onResume;
    const l = n.onListSelected;
    const c = n.onModeChanged;
    const s = n.onElementHovered;

    // Store callbacks
    this.onElementClick = r;
    this.onPause = o;
    this.onResume = i;
    this.onListSelected = l;
    this.onModeChanged = c;
    this.onElementHovered = s;
    
    // Config with defaults
    this.config = {
      ...a,
      ignoreViewsWithClass: ["panda-extract"]
    };
    
    // Initialize root view with Shadow DOM
    this.rootView = D.getShadowRoot();
    
    // Website-specific configuration
    const u = window.location.href;
    const d = se.find(function (e) {
      return u.includes(e.website);
    });
    this.groupFinderType = d ? d.type : ce.TYPE_2;
    
    // Initialize highlighters
    // IMPORTANT: WebPeeler passes shadow DOM root to highlighters
    this.cursorHighlighter = new v({
      rootView: this.rootView
    });
    
    this.collectionHighlighter = new P({
      overlayClassName: "panda-highlight-collection-element",
      highlightedItemClassName: "panda-extract-highlighted-item",
      rootView: this.rootView
    });
    
    // Initialize context
    this.context = {
      mode: le.SELECTION
    };
    
    // Event listeners - using arrow functions to maintain context
    this.mouseMoveListener = function (e) {
      EventHandlers.ue(t, e);
    };
    
    this.mouseClickListener = function (e) {
      EventHandlers.de(t, e);
    };
    
    this.keyPressListener = function (e) {
      EventHandlers.fe(t, e);
    };
    
    this.pointerDownListener = function (e) {
      e.stopImmediatePropagation();
      e.stopPropagation();
      e.preventDefault();
    };
  }

  /**
   * Get hovered selection - EXACT COPY
   */
  getHoveredSelection() {
    try {
      if (!this.selections) {
        return null;
      }
      const e = this.selections;
      return e.hierarchy[e.selectedIndex];
    } catch (e) {
      return null;
    }
  }

  /**
   * Find group element - EXACT COPY
   */
  findGroupElement(e) {
    if (this.groupFinderType !== ce.TYPE_1) {
      let r;
      const a = new G().findGroupParent(e);
      if (a) {
        return {
          bestCandidate: a.bestCandidate?.tableNode,
          candidates: (r = a.candidates) === null || r === undefined ? undefined : r.map(function (e) {
            return e.tableNode;
          })
        };
      } else {
        return null;
      }
    }
    
    const o = q.getGeneralizedCssSelector({
      element: e
    });
    const i = document.querySelectorAll(o);
    
    if (i.length > 1) {
      const l = function (e) {
        const n = e.target;
        const t = e.elements;
        const r = [];
        let a = n || t[0];
        
        if (!a) {
          return null;
        }
        
        while (a.parentNode && a.parentNode !== document.body) {
          if (a.parentNode.offsetWidth !== 0 && a.parentNode.offsetHeight !== 0) {
            r.push(a.parentNode);
          }
          a = a.parentNode;
        }
        
        let o;
        const i = function () {
          const e = c[l];
          if (Array.from(t).every(function (n) {
            for (let t = n; t.parentNode;) {
              if (t.parentNode === e) {
                return true;
              }
              t = t.parentNode;
            }
            return false;
          })) {
            return {
              v: {
                commonParent: e,
                allParents: r,
                elements: t
              }
            };
          }
        };
        
        for (let l = 0, c = r; l < c.length; l++) {
          if (o = i()) {
            return o.v;
          }
        }
        return null;
      }({
        target: e,
        elements: i
      });
      
      return {
        bestCandidate: l == null ? undefined : l.commonParent,
        candidates: l == null ? undefined : l.allParents
      };
    }
  }

  /**
   * Update state highlights - EXACT COPY
   */
  updateStateHighlights(e) {
    let n = e.allParents;
    const r = e.selected;
    n = n ? n.filter(function (e) {
      return e.children.length > 1;
    }) : [];
    
    this.highlights = {
      selected: r,
      all: n
    };
  }

  /**
   * Check if element should be ignored - EXACT COPY
   */
  isIgnoredElement(e) {
    return (function (e) {
      return e.id === "shadow-container-panda-extract" || e.closest("shadow-container-panda-extract") !== null;
    })(e) || this.config.ignoreViewsWithClass.some(function (n) {
      return e.closest(n.dot());
    }) || e.tagName === "HTML";
  }

  /**
   * Check if element is highlighted collection element - EXACT COPY
   */
  isHighlightedCollectionElement(e) {
    return this.collectionHighlighter.isHighlighted(e);
  }

  /**
   * Check if element is highlighted active element - EXACT COPY
   */
  isHighlightedActiveElement(e) {
    return false;
  }

  /**
   * Get current mode - EXACT COPY
   */
  getMode() {
    return this.context.mode;
  }

  /**
   * Start pagination select mode - EXACT COPY
   */
  startPaginationSelectMode() {
    this.context.mode = le.SELECT_PAGINATION_BUTTON;
    this.collectionHighlighter.removeHighlights();
    this.highlights = null;
    this.onModeChanged(le.SELECT_PAGINATION_BUTTON);
  }

  /**
   * Stop pagination select mode - EXACT COPY
   */
  stopPaginationSelectMode() {
    this.context.mode = le.SELECTION;
    this.highlights = null;
    this.onModeChanged(le.SELECTION);
  }

  /**
   * Start page details select mode - EXACT COPY
   */
  startPageDetailsSelectMode() {
    this.context.mode = le.SELECT_PAGE_DEATILS;
    this.collectionHighlighter.removeHighlights();
    this.highlights = null;
    this.onModeChanged(le.SELECT_PAGE_DEATILS);
  }

  /**
   * Stop page details select mode - EXACT COPY
   */
  stopPageDetailsSelectMode() {
    this.context.mode = le.SELECTION;
    this.highlights = null;
    this.onModeChanged(le.SELECTION);
  }

  /**
   * Start selection list mode - EXACT COPY
   */
  startSelectionListMode() {
    this.context.mode = le.SELECTION_LIST;
    this.collectionHighlighter.removeHighlights();
    this.onModeChanged(le.SELECTION_LIST);
  }

  /**
   * Stop selection list mode - EXACT COPY
   */
  stopSelectionListMode() {
    this.context.mode = le.SELECTION;
    this.highlights = null;
    this.previousCollectionParent = null;
    this.onModeChanged(le.SELECTION);
  }

  /**
   * Reset selection mode - EXACT COPY
   */
  resetSelectionMode() {
    this.stopSelectionListMode();
    this.collectionHighlighter.removeHighlights();
    this.highlights = null;
    this.previousCollectionParent = null;
    this.onModeChanged(le.SELECTION);
  }

  /**
   * Set selection mode - EXACT COPY
   */
  setSelectionMode() {
    this.context.mode = le.SELECTION;
    this.onModeChanged(le.SELECTION);
  }

  /**
   * Highlight if collection - EXACT COPY
   */
  highlightIfCollection(e) {
    const t = e.element;
    const r = this.findGroupElement(t);
    const a = r == null ? undefined : r.bestCandidate;
    const o = r == null ? undefined : r.candidates;
    
    if (a && a.children?.length > 1) {
      const i = a;
      const l = o;
      
      if (this.previousCollectionParent !== i) {
        this.collectionHighlighter.removeHighlights();
        
        if (i) {
          const c = Array.from(i.children);
          if (c) {
            this.collectionHighlighter.highlight({
              elements: c
            });
          }
        }
        
        this.updateStateHighlights({
          allParents: l,
          selected: i
        });
        
        this.previousCollectionParent = i;
        return;
      }
    } else {
      this.previousCollectionParent = null;
      this.collectionHighlighter.removeHighlights();
    }
  }

  /**
   * Remove all highlights - EXACT COPY
   */
  removeAllHighlights() {
    this.highlights = null;
    this.previousCollectionParent = null;
    this.cursorHighlighter.removeHighlight();
    this.collectionHighlighter.removeHighlights();
  }

  /**
   * Update selected parent - EXACT COPY
   */
  updateSelectedParent(e) {
    if (this.highlights) {
      const n = this.highlights;
      const t = n.selected;
      const r = n.all;
      
      if (t) {
        const a = r.indexOf(t);
        const o = r[e === "UP" ? a - 1 : a + 1];
        
        if (o) {
          const i = Array.from(o.children);
          if (i) {
            this.collectionHighlighter.removeHighlights();
            this.collectionHighlighter.highlight({
              elements: i
            });
          }
          this.highlights.selected = o;
        }
      }
    }
  }

  /**
   * Pause - EXACT COPY
   */
  pause() {
    document.removeEventListener("mouseover", this.mouseMoveListener, true);
    document.removeEventListener("click", this.mouseClickListener, true);
    this.onPause();
  }

  /**
   * Resume - EXACT COPY
   */
  resume() {
    document.addEventListener("mouseover", this.mouseMoveListener, true);
    document.addEventListener("click", this.mouseClickListener, true);
    this.onResume();
  }

  /**
   * Attach event listeners - EXACT COPY (renamed from attachEvents)
   */
  attach() {
    document.addEventListener("mouseover", this.mouseMoveListener, true);
    document.addEventListener("click", this.mouseClickListener, true);
    document.addEventListener("keydown", this.keyPressListener);
    document.addEventListener("pointerdown", this.pointerDownListener, true);
  }

  /**
   * Detach event listeners and cleanup - EXACT COPY
   */
  detach() {
    document.removeEventListener("mouseover", this.mouseMoveListener, true);
    document.removeEventListener("click", this.mouseClickListener, true);
    document.removeEventListener("keydown", this.keyPressListener);
    document.removeEventListener("pointerdown", this.pointerDownListener, true);
    this.removeAllHighlights();
  }

  /**
   * Confirm selection - used by ExtractListTab and other components
   */
  confirmSelection() {
    console.log("[SelectionEngine] Confirming selection...");
    this.detach();
    this.setSelectionMode();
    this.removeAllHighlights();
    if (this.onSelectionConfirmed) {
      this.onSelectionConfirmed();
    }
    console.log("[SelectionEngine] Selection confirmed");
  }
}

export default SelectionEngine; 