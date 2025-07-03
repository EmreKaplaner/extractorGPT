import { le } from '../selection/selection-constants.js';

// WeakMap for private methods (WebPeeler pattern)
const privateHandlers = new WeakMap();
  
// Private handler functions
const ve = function(e) {
    const n = e.event;
    const t = e.element;
    this.cursorHighlighter.highlight({
      element: t
    });
    if (this.onElementHovered) {
      this.onElementHovered({
        event: n,
        element: t
      });
    }
    if (this.context.mode === le.SELECTION) {
      this.highlightIfCollection({
        element: t
      });
    }
};

const ue = function(t, e) {
    const n = e.target;
    if (!t.isIgnoredElement(n)) {
      if (t.context.mode === le.SELECTION_LIST) {
        t.cursorHighlighter.highlight({
          element: n
        });
        if (t.onElementHovered) {
          t.onElementHovered({
            event: e,
            element: n
          });
        }
        t.highlightIfCollection({
          element: n
        });
      } else if (t.context.mode === le.SELECT_PAGINATION_BUTTON || t.context.mode === le.SELECT_PAGE_DEATILS) {
        t.cursorHighlighter.highlight({
          element: n
        });
        if (t.onElementHovered) {
          t.onElementHovered({
            event: e,
            element: n
          });
        pe.call(t, t, n);
        }
      } else {
      ve.call(t, {
          event: e,
          element: n
        });
      }
    }
};

const de = function(t, e) {
    const n = e.target;
    if (!t.isIgnoredElement(n)) {
      e.stopImmediatePropagation();
      e.stopPropagation();
      e.preventDefault();
      if (t.context.mode === le.SELECTION_LIST) {
        if (t.isHighlightedCollectionElement(n) && t.onListSelected) {
          t.onListSelected({
            element: n,
            parent: t.highlights.selected
          });
        }
      } else if (t.context.mode === le.SELECT_PAGE_DEATILS) {
        if (t.onElementClick) {
          t.onElementClick({
            event: e,
            data: {
              viewType: "ELEMENT",
              element: n,
              hoveredSelection: t.getHoveredSelection()
            }
          });
        }
      } else if (t.onElementClick) {
        t.onElementClick({
          event: e,
          data: {
            element: n,
            viewType: "ELEMENT"
          }
        });
      }
    }
};

const fe = function(t, e) {
    if (e.key === "Escape") {
      if (t.context.mode === le.SELECTION_LIST) {
        t.resetSelectionMode();
      }
    } else if (e.key.toLowerCase() === "r" && e.ctrlKey) {
      t.resume();
    } else if (e.key.toLowerCase() === "p" && e.ctrlKey) {
      t.pause();
    } else if (t.highlights) {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        t.updateSelectedParent("UP");
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        t.updateSelectedParent("DOWN");
      }
    } else if (t.context.mode === le.SELECT_PAGE_DEATILS && t.selections) {
      if (e.key === "ArrowUp") {
        e.preventDefault();
      ge.call(t, t, "UP");
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
      ge.call(t, t, "DOWN");
    }
  }
};

const pe = function(t, e) {
    const n = [];
    let r = e;
    while (r && r.tagName !== "BODY") {
      n.push(r);
      r = r.parentElement;
    }
    if (r && r.tagName === "BODY") {
      n.push(r);
    }
    t.selections = {
      hierarchy: n,
      selectedIndex: 0
    };
};

const ge = function(t, e) {
    if (t.selections) {
      const n = t.selections;
      const r = n.hierarchy;
      const a = n.selectedIndex + (e === "UP" ? 1 : -1);
      if (a >= 0 && a < r.length) {
        const o = r[a];
        t.selections.selectedIndex = a;
      ve.call(t, {
          event: null,
          element: o
        });
      }
    }
};

export class EventHandlers {
  constructor() {
    // Store private handlers in WeakMap
    privateHandlers.set(this, {
      ve: ve.bind(this),
      ue: ue.bind(this),
      de: de.bind(this),
      fe: fe.bind(this),
      pe: pe.bind(this),
      ge: ge.bind(this)
    });
  }
  
  /**
   * Mouse move handler (ue function)
   */
  static ue(t, e) {
    ue(t, e);
  }

  /**
   * Mouse click handler (de function)
   */
  static de(t, e) {
    de(t, e);
  }

  /**
   * Key press handler (fe function)
   */
  static fe(t, e) {
    fe(t, e);
  }
}

export default EventHandlers; 