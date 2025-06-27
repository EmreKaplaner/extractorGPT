export class BaseHighlighter {
  constructor() {
    this.clsHighlighterOverlay = "panda-highlighter-overlay";
    this.clsHighlighterItem = "panda-highlighter-item";
  }

  /**
   * Add overlay class to element
   */
  addOverlayClass(e) {
    e.classList.add(this.clsHighlighterOverlay);
  }

  /**
   * Add item class to element
   */
  addItemClass(e) {
    e.classList.add(this.clsHighlighterItem);
  }

  /**
   * Remove overlay class from element
   */
  removeOverlayClass(e) {
    e.classList.remove(this.clsHighlighterOverlay);
  }

  /**
   * Remove item class from element
   */
  removeItemClass(e) {
    e.classList.remove(this.clsHighlighterItem);
  }
}

export default BaseHighlighter; 