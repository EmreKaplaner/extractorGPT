import BaseHighlighter from './base-highlighter.js';

export class CollectionHighlighter extends BaseHighlighter {
  constructor(e) {
    super();
    const r = e.overlayClassName;
    const a = e.highlightedItemClassName;
    const o = e.highlightedSubItemClassName;
    const i = e.rootView;
    const l = i === undefined ? document.body : i;
    
    this.rootView = l;
    this.config = {
      clsOverlay: r,
      clsLayer: "panda-z-2",
      clsItem: a,
      clsSubItem: o
    };
  }

  /**
   * Highlight collection elements - EXACT COPY
   */
  highlight(e) {
    const n = this;
    e.elements.forEach(function (e) {
      if (n.config.clsItem) {
        e.classList.add(n.config.clsItem);
      }
      if (n.config.clsOverlay) {
        const t = n.createOverlay();
        // Always append to document.body for proper positioning
        document.body.appendChild(t);
        setTimeout(function () {
          const n = e.getBoundingClientRect();
          t.style.position = "absolute";
          t.style.width = `${n.width}px`;
          t.style.height = `${n.height}px`;
          t.style.top = `${window.scrollY + n.top}px`;
          t.style.left = `${window.scrollX + n.left}px`;
        }, 305);
      }
    });
  }

  /**
   * Highlight directly - EXACT COPY
   */
  highlightDirectly(e) {
    e.elements.forEach(function (e) {
      e.classList.add("panda-highlight-child-element-active");
    });
  }

  /**
   * Highlight elements of children - EXACT COPY
   */
  highlightElementsOfChildren(e) {
    const n = this;
    e.elements.forEach(function (e) {
      e.classList.add(n.config.clsSubItem);
    });
  }

  /**
   * Check if element is highlighted - EXACT COPY
   */
  isHighlighted(e) {
    const n = e.closest(this.config.clsOverlay.dot()) != null;
    const t = !!this.config.clsItem && e.closest(this.config.clsItem.dot()) != null;
    return n || t;
  }

  /**
   * Remove highlights inside children - EXACT COPY
   */
  removeHighlightsInsideChildren() {
    const e = this;
    if (this.config.clsSubItem) {
      document.querySelectorAll(this.config.clsSubItem.dot()).forEach(function (n) {
        return n.classList.remove(e.config.clsSubItem);
      });
    }
  }

  /**
   * Remove highlights - EXACT COPY
   */
  removeHighlights() {
    const e = this;
    const n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      removeOverlay: true,
      removeItemHighlight: true,
      removeDirectHighlight: true
    };
    const t = n.removeOverlay;
    const r = n.removeItemHighlight;
    const a = n.removeDirectHighlight;
    
    if (this.config.clsOverlay && t) {
      // Always look in document.body for overlays
      document.body.querySelectorAll(this.config.clsOverlay.dot()).forEach(function (e) {
        return e.remove();
      });
    }
    if (r) {
      this.removeHighlightsInsideChildren();
    }
    if (this.config.clsItem && r) {
      document.querySelectorAll(this.config.clsItem.dot()).forEach(function (n) {
        return n.classList.remove(e.config.clsItem);
      });
    }
    if (this.config.clsItem && a) {
      document.querySelectorAll(this.config.clsItem.dot()).forEach(function (n) {
        return n.classList.remove(e.config.clsItem);
      });
    }
  }

  /**
   * Create overlay element - EXACT COPY (private method O)
   */
  createOverlay() {
    const e = document.createElement("div");
    e.classList.add(this.config.clsOverlay, this.config.clsLayer);
    return e;
  }
}

export default CollectionHighlighter; 