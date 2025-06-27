/**
 * PaginationDetector - Smart pagination detection
 * Finds pagination buttons and infinite scroll automatically
 */
export class PaginationDetector {
  constructor() {
    // Common pagination selectors
    this.paginationSelectors = [
      // Next buttons
      'a[rel="next"]',
      'a[aria-label*="next" i]',
      'a[aria-label*="Next" i]',
      'button[aria-label*="next" i]',
      'button[aria-label*="Next" i]',
      'a:contains("Next")',
      'button:contains("Next")',
      'a.next',
      'button.next',
      '.pagination-next',
      '.next-page',
      'a[class*="next" i]',
      'button[class*="next" i]',
      
      // Arrow buttons
      'a[aria-label*="→"]',
      'button[aria-label*="→"]',
      'a:contains("→")',
      'button:contains("→")',
      'a:contains(">")',
      'button:contains(">")',
      'a:contains("»")',
      'button:contains("»")',
      
      // Load more buttons
      'button:contains("Load more")',
      'button:contains("load more")',
      'a:contains("Load more")',
      'a:contains("load more")',
      'button[class*="load-more" i]',
      'a[class*="load-more" i]',
      '.load-more',
      '#load-more',
      
      // Show more
      'button:contains("Show more")',
      'a:contains("Show more")',
      'button[class*="show-more" i]',
      
      // Common pagination containers
      '.pagination a:last-child',
      '.pagination button:last-child',
      'nav[role="navigation"] a:contains("Next")',
      'nav[role="navigation"] button:contains("Next")',
      
      // Numbered pagination
      '.pagination li:last-child a',
      '.pagination li:last-child button',
      'ul.pagination li:last-child a',
      
      // WordPress
      '.nav-previous a',
      '.nav-links .next',
      
      // Common frameworks
      '.page-link:contains("Next")',
      '.page-item:last-child .page-link',
      
      // Custom data attributes
      '[data-page="next"]',
      '[data-action="next-page"]',
      '[data-pagination="next"]'
    ];
    
    // Infinite scroll indicators
    this.infiniteScrollSelectors = [
      '[data-infinite-scroll]',
      '[data-infinite]',
      '.infinite-scroll-container',
      '.infinite-scroll',
      '[class*="infinite-scroll"]',
      '.endless-scroll',
      '.auto-load'
    ];
  }
  
  /**
   * Find pagination button with smart search
   */
  async findPaginationWithSmartSearch({ 
    window, 
    selector, 
    expectedText, 
    expectedByteSize,
    timeoutMs = 5000,
    shouldScrollToBottom = true,
    requireTextMatch = true,
    requireByteSizeMatch = true
  }) {
    const startTime = Date.now();
    
    // First try without scrolling
    let element = await this.findPaginationButton({
      rootView: window.document.body,
      selector,
      expectedText,
      expectedByteSize,
      timeoutMs: Math.min(timeoutMs / 2, 2000),
      requireTextMatch,
      requireByteSizeMatch
    });
    
    if (element) {
      return element;
    }
    
    // If not found and should scroll, scroll to bottom
    if (shouldScrollToBottom) {
      await this.scrollToBottom(window);
      
      // Try again after scrolling
      element = await this.findPaginationButton({
        rootView: window.document.body,
        selector,
        expectedText,
        expectedByteSize,
        timeoutMs: timeoutMs - (Date.now() - startTime),
        requireTextMatch,
        requireByteSizeMatch
      });
    }
    
    return element;
  }
  
  /**
   * Find pagination button
   */
  async findPaginationButton({
    rootView,
    selector,
    expectedText,
    expectedByteSize,
    timeoutMs = 5000,
    requireTextMatch = true,
    requireByteSizeMatch = true
  }) {
    const startTime = Date.now();
    
    return new Promise((resolve) => {
      const checkForButton = () => {
        // If we have a specific selector, try it first
        if (selector) {
          try {
            const elements = rootView.querySelectorAll(selector);
            for (const element of elements) {
              if (this.isValidPaginationButton(element, expectedText, expectedByteSize, requireTextMatch, requireByteSizeMatch)) {
                resolve(element);
                return;
              }
            }
          } catch (e) {
            // Invalid selector, continue
          }
        }
        
        // Try all common selectors
        for (const sel of this.paginationSelectors) {
          try {
            // Handle :contains pseudo-selector
            if (sel.includes(':contains(')) {
              const [baseSelector, text] = sel.split(':contains(');
              const searchText = text.replace(')', '').replace(/"/g, '');
              const elements = rootView.querySelectorAll(baseSelector || '*');
              
              for (const element of elements) {
                if (element.textContent && element.textContent.includes(searchText)) {
                  if (this.isValidPaginationButton(element, expectedText, expectedByteSize, requireTextMatch, requireByteSizeMatch)) {
                    resolve(element);
                    return;
                  }
                }
              }
            } else {
              const elements = rootView.querySelectorAll(sel);
              for (const element of elements) {
                if (this.isValidPaginationButton(element, expectedText, expectedByteSize, requireTextMatch, requireByteSizeMatch)) {
                  resolve(element);
                  return;
                }
              }
            }
          } catch (e) {
            // Invalid selector, continue
          }
        }
        
        // Check if timeout
        if (Date.now() - startTime >= timeoutMs) {
          resolve(null);
          return;
        }
        
        // Check again after a delay
        setTimeout(checkForButton, 100);
      };
      
      checkForButton();
    });
  }
  
  /**
   * Check if element is a valid pagination button
   */
  isValidPaginationButton(element, expectedText, expectedByteSize, requireTextMatch, requireByteSizeMatch) {
    // Check if element is visible
    if (!this.isElementVisible(element)) {
      return false;
    }
    
    // Check if disabled
    if (element.disabled || 
        element.getAttribute('disabled') !== null ||
        element.classList.contains('disabled') ||
        element.getAttribute('aria-disabled') === 'true') {
      return false;
    }
    
    // Check text match if required
    if (requireTextMatch && expectedText) {
      const elementText = element.textContent?.trim() || '';
      if (elementText !== expectedText) {
        return false;
      }
    }
    
    // Check byte size if required
    if (requireByteSizeMatch && expectedByteSize) {
      const elementSize = new Blob([element.outerHTML]).size;
      if (Math.abs(elementSize - expectedByteSize) > expectedByteSize * 0.1) {
        return false;
      }
    }
    
    return true;
  }
  
  /**
   * Check if element is visible
   */
  isElementVisible(element) {
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
   * Detect pagination type on current page
   */
  detectPaginationType() {
    // Check for infinite scroll
    for (const selector of this.infiniteScrollSelectors) {
      if (document.querySelector(selector)) {
        return 'PAGINATION_INFINITE_SCROLL';
      }
    }
    
    // Check for pagination buttons
    const button = this.findPaginationButtonSync();
    if (button) {
      return 'PAGINATION_BUTTON';
    }
    
    return 'NONE';
  }
  
  /**
   * Find pagination button synchronously
   */
  findPaginationButtonSync() {
    // Try all selectors
    for (const selector of this.paginationSelectors) {
      try {
        // Handle :contains pseudo-selector
        if (selector.includes(':contains(')) {
          const [baseSelector, text] = selector.split(':contains(');
          const searchText = text.replace(')', '').replace(/"/g, '');
          const elements = document.querySelectorAll(baseSelector || '*');
          
          for (const element of elements) {
            if (element.textContent && element.textContent.includes(searchText)) {
              if (this.isValidPaginationButton(element)) {
                return element;
              }
            }
          }
        } else {
          const elements = document.querySelectorAll(selector);
          for (const element of elements) {
            if (this.isValidPaginationButton(element)) {
              return element;
            }
          }
        }
      } catch (e) {
        // Invalid selector, continue
      }
    }
    
    return null;
  }
  
  /**
   * Scroll to bottom of page
   */
  async scrollToBottom(window) {
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

// Export singleton instance
export const paginationDetector = new PaginationDetector();
export default paginationDetector; 