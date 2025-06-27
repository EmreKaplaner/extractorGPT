import { TAILWIND_CSS } from './styles/tailwind-css.js';

// Helper function for getting styles (L function)
function L() {
  // Return basic styles needed for the shadow DOM content to be visible
  return `
    * {
      box-sizing: border-box;
    }
    
    #app-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 999999;
    }
    
    #app-container > * {
      pointer-events: auto;
    }
  `;
}

export class ShadowDomUtils {
  static ID_SHADOW = "shadow-container-panda-extract";

  /**
   * Build shadow DOM container - EXACT COPY with Tailwind CSS injection
   */
  static build() {
    const n = document.createElement("div");
    n.id = ShadowDomUtils.ID_SHADOW;
    const t = n.attachShadow({
      mode: "open"
    });
    
    // Create style element with Tailwind CSS (like WebPeeler)
    const r = document.createElement("style");
    r.textContent = `
    :host {
      color: initial;
      font-family: sans-serif;
      font-size: initial;
      line-height: initial;
      letter-spacing: initial;
      text-align: left;
    }
    ${L()}
    ${TAILWIND_CSS}
  `;
    t.appendChild(r);
    return n;
  }

  /**
   * Remove shadow DOM container - EXACT COPY
   */
  static remove() {
    const n = document.getElementById(ShadowDomUtils.ID_SHADOW);
    if (n) {
      n.remove();
    }
  }

  /**
   * Get shadow root - EXACT COPY
   */
  static getShadowRoot() {
    let n = document.getElementById(ShadowDomUtils.ID_SHADOW);
    if (!n) {
      n = ShadowDomUtils.build();
      document.body.appendChild(n);
    }
    return n.shadowRoot;
  }

  /**
   * Check if container is in body - EXACT COPY
   */
  static isContainerInBody() {
    return document.getElementById(ShadowDomUtils.ID_SHADOW) != null;
  }
}

export default ShadowDomUtils; 