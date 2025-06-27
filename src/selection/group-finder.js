export class GroupFinder {
  constructor(n) {
    this.options = n || {
      minRowsFilter: 4
    };
    this.tableNode = null;
    this.rowNode = null;
  }

  /**
   * Find group parent for collection detection
   */
  findGroupParent(e) {
    let n = e;
    let t = e;
    const r = [];
    let a = 0;
    
    try {
      while (n && n !== document.body && n !== document.documentElement) {
        let o;
        let i = 0;
        const l = [];
        const c = Array.from(n.children);
        
        try {
          for (const s of c) {
            if (this.isValidGroupElement(s) && s.offsetHeight > 0) {
              l.push(s);
              i++;
            }
          }
        } catch (e) {
          // Handle iteration error
        }
        
        if (i >= this.options.minRowsFilter) {
          r.push({
            tableNode: n,
            children: l,
            rowNode: t,
            childCount: i
          });
          if (i > a) {
            a = i;
          }
        }
        t = n;
        n = n.parentNode;
      }
      
      let u = null;
      for (let d = 0; d < r.length; d++) {
        const p = r[d];
        if (p.childCount === a) {
          u = p;
          break;
        }
      }
      
      return {
        bestCandidate: u,
        candidates: r
      };
    } catch (e) {
      return null;
    }
  }

  /**
   * Check if element is valid for grouping
   */
  isValidGroupElement(e) {
    return ["TR", "SUMMARY", "LI", "DIV", "DETAILS", "ASIDE", "ARTICLE", "A", "FIGURE"].includes(e.tagName) || /-/g.test(e.tagName);
  }

  /**
   * Get selector for group
   */
  getSelector(e, n) {
    const t = this.findGroupParent(e, n);
    if (!t) {
      return "";
    }
    this.tableNode = t.tableNode;
    this.rowNode = t.rowNode;
    const r = this.generateSelector(this.tableNode);
    const a = this.generateSelector(this.rowNode);
    return `${r} > ${a}`;
  }

  /**
   * Generate CSS selector for element
   */
  generateSelector(e) {
    if (e.id) {
      return `#${e.id}`;
    } else if (e.className) {
      return `.${e.className.split(" ").join(".")}`;
    } else {
      return e.tagName.toLowerCase();
    }
  }

  /**
   * Select group elements using selector
   */
  selectGroup(e, n) {
    return n.document.body.querySelectorAll(e);
  }
}

export default GroupFinder; 