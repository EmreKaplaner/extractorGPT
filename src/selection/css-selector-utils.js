export class CssSelectorUtils {
  
  /**
   * Get generalized CSS selector for element - EXACT COPY
   */
  static getGeneralizedCssSelector(e) {
    let n = e.element;
    const t = e.clsDepth;
    const r = t === undefined ? 2 : t;
    const a = e.nodeDepth;
    const o = a === undefined ? 5 : a;
    const i = e.root;
    const l = i === undefined ? null : i;
    
    if (n) {
      const c = [];
      let s = 0;
      
      for (; n.nodeType === Node.ELEMENT_NODE && 
             n.nodeName.toLowerCase() !== "body" && 
             n !== l && 
             s < o; n = n.parentNode, s++) {
        
        let u = n.nodeName.toLowerCase().replace(/:/g, "\\:");
        
        const d = Array.from(n.classList)
          .filter(function (e) {
            return /^[a-zA-Z_][a-zA-Z0-9-_]*$/.test(e) && !e.includes("panda-");
          })
          .slice(0, r);
        
        if (d.length) {
          u += "." + d.join(".");
        }
        
        c.unshift(u);
      }
      
      return c.join(" > ");
    }
  }

  /**
   * Get CSS selector using nth-of-type - EXACT COPY
   */
  static getSelectorNthType(e) {
    const n = e.root;
    let t = e.element;
    const r = [];
    
    for (; t.nodeType === Node.ELEMENT_NODE && 
           t.nodeName.toLowerCase() !== "body" && 
           t != n; t = t.parentNode) {
      
      let a = t.nodeName.toLowerCase();
      
      const o = Array.from(t.parentNode.children)
        .filter(function (e) {
          return e.nodeName === t.nodeName;
        })
        .indexOf(t) + 1;
      
      a += `:nth-of-type(${o})`;
      r.unshift(a);
    }
    
    if (n) {
      r[0] = r[0].replace(/:nth-type\(\d+\)/, "");
    }
    
    return r.join(" > ");
  }

  /**
   * Get CSS selector using nth-child - EXACT COPY
   */
  static getSelectorNthChild(e) {
    const n = e.root;
    let t = e.element;
    const r = e.depth;
    const a = r === undefined ? 4 : r;
    const o = [];
    
    for (; t && 
           t.nodeType === Node.ELEMENT_NODE && 
           t.nodeName.toLowerCase() !== "body" && 
           t !== n;) {
      
      let i = t.nodeName.toLowerCase();
      const l = t.parentNode;
      
      if (l && l.children) {
        const c = Array.from(l.children).indexOf(t) + 1;
        i += `:nth-child(${c})`;
      }
      
      o.unshift(i);
      t = l;
    }
    
    if (n && o.length > 0) {
      o[0] = o[0].replace(/:nth-child\(\d+\)/, "");
    }
    
    if (a > 0) {
      return o.slice(-a).join(" > ");
    } else {
      return o.join(" > ");
    }
  }

  /**
   * Find index of element in selector results - EXACT COPY
   */
  static findSelectorResultIndex(e) {
    const n = e.rootView;
    const t = e.element;
    const r = e.selector;
    
    const a = n.querySelectorAll(r);
    if (!a || !a.length) {
      return -1;
    }
    
    const o = Array.from(a).indexOf(t);
    return o;
  }

  /**
   * Check if CSS selector is valid - EXACT COPY
   */
  static isSelectorValid(e) {
    let n;
    try {
      n = e;
      document.createDocumentFragment().querySelector(n);
    } catch (e) {
      return false;
    }
    return true;
  }

  /**
   * Verify selector matches element and return index - EXACT COPY
   */
  static verifySelector(e) {
    const n = e.rootView;
    const t = e.element;
    const r = e.selector;
    
    try {
      const a = n.querySelectorAll(r);
      if (!a || !a.length) {
        return null;
      }
      
      const o = Array.from(a).indexOf(t);
      if (o === -1) {
        return null;
      } else {
        return o;
      }
    } catch (e) {
      return null;
    }
  }
}

export default CssSelectorUtils; 