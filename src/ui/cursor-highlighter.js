import BaseHighlighter from './base-highlighter.js';

export class CursorHighlighter extends BaseHighlighter {
  constructor(e) {
    super();
    // Note: WebPeeler passes rootView but actually appends to document.body
    // We'll keep the parameter for compatibility but use document.body for overlays
    const r = e ? e.rootView : undefined;
    const a = r === undefined ? document.body : r;
    
    this.rootView = a;
    this.config = {
      clsOverlay: "panda-extract-cursor-move-overlay",
      clsLayer: "panda-z-2"
    };
  }

  /**
   * Highlight element - EXACT COPY
   */
  highlight(e) {
    const n = e.element;
    const t = this.getOrCreateOverlay();
    const r = n.getBoundingClientRect();
    const a = r.width;
    const o = r.height;
    
    t.style.position = "absolute";
    t.style.width = `${a}px`;
    t.style.height = `${o}px`;
    t.style.top = `${window.scrollY + r.top}px`;
    t.style.left = `${window.scrollX + r.left}px`;
  }

  /**
   * Remove highlight - EXACT COPY
   */
  removeHighlight() {
    // Always look in document.body for the overlay
    const e = document.body.querySelector(this.config.clsOverlay.dot());
    if (e) {
      e.remove();
    }
  }

  /**
   * Get or create overlay element - EXACT COPY (private method b)
   */
  getOrCreateOverlay() {
    // Always look in document.body for the overlay
    const e = document.body.querySelector(this.config.clsOverlay.dot());
    if (!e) {
      const n = document.createElement("div");
      n.classList.add(this.config.clsOverlay, this.config.clsLayer);
      // Always append to document.body for proper positioning
      document.body.appendChild(n);
      return n;
    }
    return e;
  }
}

export default CursorHighlighter; 