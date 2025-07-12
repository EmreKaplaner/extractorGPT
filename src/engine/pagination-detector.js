/**
 * WebPeeler-style Integrated Pagination - EXACT COPY from WebPeeler patterns
 * WebPeeler integrates pagination detection directly into the selector engine
 */

/**
 * WebPeeler Pagination Constants - EXACT COPY from WebPeeler
 */
export const WebPeelerPaginationTypes = {
  PAGINATION_BUTTON: "PAGINATION_BUTTON",
  PAGINATION_INFINITE_SCROLL: "PAGINATION_INFINITE_SCROLL",
  NONE: "NONE"
};

/**
 * WebPeeler Selection Modes - EXACT COPY from WebPeeler selector patterns
 */
export const WebPeelerSelectionModes = {
  SELECTION: "selection",
  SELECTION_LIST: "selection-list", 
  SELECT_PAGINATION_BUTTON: "select-pagination-button",
  SELECT_PAGE_DETAILS: "select-page-details"
};

/**
 * WebPeeler Pagination Utilities - EXACT COPY from WebPeeler patterns
 */
export class WebPeelerPaginationUtils {
  
  /**
   * Simple pagination detection - WebPeeler style integrated approach
   */
  static detectPaginationType() {
    // Check for infinite scroll indicators first
    const infiniteScrollSelectors = [
      '[data-infinite-scroll]',
      '[data-infinite]',
      '.infinite-scroll-container',
      '.infinite-scroll',
      '[class*="infinite-scroll"]',
      '.endless-scroll',
      '.auto-load'
    ];
    
    for (const selector of infiniteScrollSelectors) {
      if (document.querySelector(selector)) {
        return WebPeelerPaginationTypes.PAGINATION_INFINITE_SCROLL;
      }
    }
    
    // Check for pagination buttons
    const paginationSelectors = [
      // Next buttons - EXACT COPY from WebPeeler patterns
      'a[rel="next"]',
      'a[aria-label*="next" i]',
      'a[aria-label*="Next" i]',
      'button[aria-label*="next" i]',
      'button[aria-label*="Next" i]',
      'a.next',
      'button.next',
      '.pagination-next',
      '.next-page',
      'a[class*="next" i]',
      'button[class*="next" i]',
      
      // Arrow buttons
      'a:contains("→")',
      'button:contains("→")',
      'a:contains(">")',
      'button:contains(">")',
      'a:contains("»")',
      'button:contains("»")',
      
      // Load more buttons
      'button[class*="load-more" i]',
      'a[class*="load-more" i]',
      '.load-more',
      '#load-more',
      
      // Common pagination containers
      '.pagination a:last-child',
      '.pagination button:last-child',
      'nav[role="navigation"] a',
      'nav[role="navigation"] button',
      
      // Numbered pagination
      '.pagination li:last-child a',
      '.pagination li:last-child button',
      'ul.pagination li:last-child a'
    ];
    
    for (const selector of paginationSelectors) {
      try {
        // Handle :contains pseudo-selector (simplified)
        if (selector.includes(':contains(')) {
          const [baseSelector, text] = selector.split(':contains(');
          const searchText = text.replace(')', '').replace(/"/g, '');
          const elements = document.querySelectorAll(baseSelector || '*');
          
          for (const element of elements) {
            if (element.textContent && element.textContent.includes(searchText)) {
              if (this.isValidPaginationButton(element)) {
                return WebPeelerPaginationTypes.PAGINATION_BUTTON;
              }
            }
          }
        } else {
          const elements = document.querySelectorAll(selector);
          for (const element of elements) {
            if (this.isValidPaginationButton(element)) {
              return WebPeelerPaginationTypes.PAGINATION_BUTTON;
            }
          }
        }
      } catch (e) {
        // Invalid selector, continue
        continue;
      }
    }
    
    return WebPeelerPaginationTypes.NONE;
  }
  
  /**
   * Check if element is valid pagination button - EXACT COPY from WebPeeler
   */
  static isValidPaginationButton(element) {
    if (!element) return false;
    
    // Check if element is visible - EXACT COPY from WebPeeler
    if (!this.isElementVisible(element)) {
      return false;
    }
    
    // Check if disabled - EXACT COPY from WebPeeler
    if (element.disabled || 
        element.getAttribute('disabled') !== null ||
        element.classList.contains('disabled') ||
        element.getAttribute('aria-disabled') === 'true') {
      return false;
    }
    
    return true;
  }
  
  /**
   * Check if element is visible - EXACT COPY from WebPeeler
   */
  static isElementVisible(element) {
    if (!element) return false;
    
    const style = window.getComputedStyle(element);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
      return false;
    }
    
    const rect = element.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) {
      return false;
    }
    
    return true;
  }
  
  /**
   * Find pagination button synchronously - WebPeeler style
   */
  static findPaginationButtonSync() {
    const selectors = [
      'a[rel="next"]',
      'button[aria-label*="next" i]',
      'a[aria-label*="next" i]',
      '.pagination a:last-child',
      '.pagination button:last-child',
      'a.next',
      'button.next',
      '.next-page',
      '.load-more'
    ];
    
    for (const selector of selectors) {
      try {
        const elements = document.querySelectorAll(selector);
        for (const element of elements) {
          if (this.isValidPaginationButton(element)) {
            return element;
          }
        }
      } catch (e) {
        continue;
      }
    }
    
    return null;
  }
  
  /**
   * Scroll to bottom for pagination search - WebPeeler style
   */
  static async scrollToBottomForPagination(window) {
    return new Promise((resolve) => {
      const scrollHeight = window.document.documentElement.scrollHeight;
      window.scrollTo({
        top: scrollHeight,
        behavior: 'smooth'
      });
      
      // Wait for scroll to complete
      setTimeout(resolve, 1000);
    });
  }
}

/**
 * WebPeeler Selection Engine Integration - EXACT COPY from WebPeeler patterns
 * This represents how WebPeeler integrates pagination into its selection engine
 */
export class WebPeelerSelectionIntegration {
  constructor() {
    this.mode = WebPeelerSelectionModes.SELECTION;
    this.paginationElement = null;
  }
  
  /**
   * Start pagination select mode - EXACT COPY from WebPeeler
   */
  startPaginationSelectMode() {
    this.mode = WebPeelerSelectionModes.SELECT_PAGINATION_BUTTON;
    // In WebPeeler, this removes collection highlights and sets mode
    console.log('[WebPeelerSelection] Started pagination select mode');
  }
  
  /**
   * Stop pagination select mode - EXACT COPY from WebPeeler  
   */
  stopPaginationSelectMode() {
    this.mode = WebPeelerSelectionModes.SELECTION;
    console.log('[WebPeelerSelection] Stopped pagination select mode');
  }
  
  /**
   * Start page details select mode - EXACT COPY from WebPeeler
   */
  startPageDetailsSelectMode() {
    this.mode = WebPeelerSelectionModes.SELECT_PAGE_DETAILS;
    console.log('[WebPeelerSelection] Started page details select mode');
  }
  
  /**
   * Stop page details select mode - EXACT COPY from WebPeeler
   */
  stopPageDetailsSelectMode() {
    this.mode = WebPeelerSelectionModes.SELECTION;
    console.log('[WebPeelerSelection] Stopped page details select mode');
  }
  
  /**
   * Get current mode - EXACT COPY from WebPeeler
   */
  getMode() {
    return this.mode;
  }
  
  /**
   * Handle pagination button selection - WebPeeler style
   */
  selectPaginationButton(element) {
    if (this.mode === WebPeelerSelectionModes.SELECT_PAGINATION_BUTTON) {
      if (WebPeelerPaginationUtils.isValidPaginationButton(element)) {
        this.paginationElement = element;
        console.log('[WebPeelerSelection] Selected pagination button:', element);
        return true;
      }
    }
    return false;
  }
  
  /**
   * Click selected pagination button - WebPeeler style
   */
  clickPaginationButton() {
    if (this.paginationElement && WebPeelerPaginationUtils.isValidPaginationButton(this.paginationElement)) {
      this.paginationElement.click();
      console.log('[WebPeelerSelection] Clicked pagination button');
      return true;
    }
    return false;
  }
}

/**
 * Simple pagination detector that integrates with WebPeeler's approach
 * This is much simpler than ExtractorGPT's original standalone detector
 */
export class WebPeelerIntegratedPagination {
  constructor() {
    this.selectionIntegration = new WebPeelerSelectionIntegration();
  }
  
  /**
   * Detect pagination type - WebPeeler style
   */
  detectPaginationType() {
    return WebPeelerPaginationUtils.detectPaginationType();
  }
  
  /**
   * Find pagination button - WebPeeler style
   */
  findPaginationButton() {
    return WebPeelerPaginationUtils.findPaginationButtonSync();
  }
  
  /**
   * Check if element is valid pagination button
   */
  isValidPaginationButton(element) {
    return WebPeelerPaginationUtils.isValidPaginationButton(element);
  }
  
  /**
   * Get selection integration
   */
  getSelectionIntegration() {
    return this.selectionIntegration;
  }
}

// Export singleton instance like WebPeeler's integrated approach
export const webPeelerPagination = new WebPeelerIntegratedPagination();
export default webPeelerPagination; 