import { TaskRunner } from './task-runner.js';
import { ExtractionEngine } from './extraction-engine.js';
import { RunStatus } from '../constants/index.js';
import { paginationDetector } from './pagination-detector.js';

/**
 * AutomationHandler - Manages automated extraction with scrolling and pagination
 */
export class AutomationHandler {
  constructor() {
    this.isRunning = false;
    this.settings = {
      autoScroll: true,
      dynamic: true,
      pagination: null,
      scrollDelay: 1000,
      maxScrollAttempts: 10,
      elementWaitTime: 2000,
      smartPaginationDetection: true
    };
    this.callbacks = {};
    this.extractedData = [];
    this.processedElements = new Set();
    this.paginationElement = null;
  }

  /**
   * Start automation with current settings
   */
  async start({ 
    selectionEngine, 
    extractionEngine, 
    resultsTable,
    settings = {},
    callbacks = {}
  }) {
    if (this.isRunning) {
      console.log('[AutomationHandler] Already running');
      return;
    }

    this.isRunning = true;
    this.settings = { ...this.settings, ...settings };
    this.callbacks = callbacks;
    this.extractedData = [];
    this.processedElements.clear();

    try {
      // Notify start
      if (this.callbacks.onStart) {
        this.callbacks.onStart();
      }

      // Get the current selected collection parent
      // First try to get from selection engine highlights
      let collectionParent = selectionEngine.highlights?.selected;
      
      // If not found, try to get the last selected collection parent
      if (!collectionParent && window.__extractorGPT?.lastSelectedCollectionParent) {
        collectionParent = window.__extractorGPT.lastSelectedCollectionParent;
        console.log('[AutomationHandler] Using stored collection parent');
      }
      
      if (!collectionParent) {
        throw new Error('No collection selected for extraction');
      }

      console.log('[AutomationHandler] Starting automation on:', collectionParent);

      // Extract initial data
      await this.extractFromCurrentView(collectionParent, extractionEngine, resultsTable);

      // Handle scrolling if enabled
      if (this.settings.autoScroll) {
        await this.handleAutoScroll(collectionParent, extractionEngine, resultsTable);
      }

      // Handle pagination if configured
      if (this.settings.pagination) {
        await this.handlePagination(collectionParent, extractionEngine, resultsTable);
      }

      // Notify completion
      if (this.callbacks.onComplete) {
        this.callbacks.onComplete({
          totalExtracted: this.extractedData.length,
          data: this.extractedData
        });
      }
      
      // Disable selection mode and remove highlights after automation completes
      if (selectionEngine) {
        console.log('[AutomationHandler] Disabling selection mode after automation');
        selectionEngine.stopSelectionListMode();
        selectionEngine.removeAllHighlights();
        selectionEngine.detach();
        selectionEngine.isActive = false;
        
        // Dispatch event to update UI state
        window.dispatchEvent(new CustomEvent('extractorGPT:selectionDisabled'));
      }

    } catch (error) {
      console.error('[AutomationHandler] Error:', error);
      if (this.callbacks.onError) {
        this.callbacks.onError(error);
      }
    } finally {
      this.isRunning = false;
    }
  }

  /**
   * Stop automation
   */
  stop() {
    console.log('[AutomationHandler] Stopping automation');
    this.isRunning = false;
  }

  /**
   * Extract data from current view
   */
  async extractFromCurrentView(collectionParent, extractionEngine, resultsTable) {
    // Re-query the collection parent to get fresh elements
    const freshParent = this.findFreshCollectionParent(collectionParent);
    const elements = Array.from(freshParent.children);
    console.log('[AutomationHandler] Extracting from', elements.length, 'elements');

    const newData = [];
    let newElementsCount = 0;
    
    for (const element of elements) {
      // Skip if already processed
      const elementId = this.getElementId(element);
      if (this.processedElements.has(elementId)) {
        continue;
      }

      // Extract data from element using depth 100 like WebPeeler
      const extractResult = extractionEngine.findExtractableElements({
        elements: [element],  // findExtractableElements expects array
        depth: 100,
        settings: {
          extractImages: true,
          extractAriaLabel: false
        }
      });

      if (extractResult && extractResult.extractableElements && extractResult.extractableElements.length > 0) {
        // Get the first group of extractables (since we passed one element)
        const extractables = extractResult.extractableElements[0];
        if (extractables && extractables.length > 0) {
          newData.push(extractables);
          this.processedElements.add(elementId);
          newElementsCount++;
        }
      }
    }

    if (newData.length > 0) {
      // Add to results table with append = true
      resultsTable.insertExtractablesFromList({
        parent: freshParent,
        extractables: newData,
        append: true  // Append instead of replace
      });

      // Store extracted data
      this.extractedData.push(...newData);

      // Notify progress
      if (this.callbacks.onProgress) {
        this.callbacks.onProgress({
          extracted: newData.length,
          total: this.extractedData.length,
          newElements: newElementsCount
        });
      }
    }

    return newData.length;
  }

  /**
   * Handle auto-scroll functionality
   */
  async handleAutoScroll(collectionParent, extractionEngine, resultsTable) {
    console.log('[AutomationHandler] Starting auto-scroll');
    
    let scrollAttempts = 0;
    let lastExtractedCount = this.extractedData.length;
    let noNewDataCount = 0;
    let lastElementCount = collectionParent.children.length;

    // Find the scrollable container intelligently
    let scrollElement = this.findScrollableContainer(collectionParent);
    console.log('[AutomationHandler] Using scroll container:', scrollElement);
    
    // Detect if page uses infinite scroll
    const hasInfiniteScroll = this.detectInfiniteScroll();
    console.log('[AutomationHandler] Infinite scroll detected:', hasInfiniteScroll);

    while (this.isRunning && scrollAttempts < this.settings.maxScrollAttempts) {
      // Get current scroll position
      const scrollHeight = scrollElement === window 
        ? document.documentElement.scrollHeight 
        : scrollElement.scrollHeight;
      
      const currentScroll = scrollElement === window
        ? window.pageYOffset || document.documentElement.scrollTop
        : scrollElement.scrollTop;

      // Scroll to bottom
      if (scrollElement === window) {
        window.scrollTo({
          top: scrollHeight,
          behavior: 'smooth'
        });
      } else {
        scrollElement.scrollTo({
          top: scrollElement.scrollHeight,
          behavior: 'smooth'
        });
      }

      // Wait for scroll animation
      await this.delay(this.settings.scrollDelay);

      // For infinite scroll, wait for new elements to load
      if (hasInfiniteScroll || this.settings.dynamic) {
        const freshParent = this.findFreshCollectionParent(collectionParent);
        const hasNewElements = await this.waitForNewElements(freshParent, lastElementCount);
        
        if (hasNewElements) {
          lastElementCount = freshParent.children.length;
        }
      } else {
        // For non-infinite scroll, just wait for dynamic content
        await this.delay(this.settings.elementWaitTime);
      }

      // Extract new data
      const extracted = await this.extractFromCurrentView(
        collectionParent, 
        extractionEngine, 
        resultsTable
      );

      // Check if we got new data
      if (this.extractedData.length === lastExtractedCount) {
        noNewDataCount++;
        if (noNewDataCount >= 3) {
          console.log('[AutomationHandler] No new data after 3 attempts, stopping scroll');
          break;
        }
      } else {
        noNewDataCount = 0;
        lastExtractedCount = this.extractedData.length;
      }

      scrollAttempts++;

      // Check if we've reached the bottom
      const newScrollHeight = scrollElement === window 
        ? document.documentElement.scrollHeight 
        : scrollElement.scrollHeight;
      
      const newScroll = scrollElement === window
        ? window.pageYOffset || document.documentElement.scrollTop
        : scrollElement.scrollTop;
        
      // For infinite scroll, check if scroll height hasn't changed
      if (hasInfiniteScroll) {
        if (newScrollHeight === scrollHeight && Math.abs(newScroll - currentScroll) < 10) {
          // Give it one more chance with longer wait
          console.log('[AutomationHandler] Possible end of infinite scroll, waiting longer...');
          await this.delay(this.settings.elementWaitTime * 2);
          
          const finalHeight = scrollElement === window 
            ? document.documentElement.scrollHeight 
            : scrollElement.scrollHeight;
            
          if (finalHeight === newScrollHeight) {
            console.log('[AutomationHandler] Reached end of infinite scroll');
            break;
          }
        }
      } else {
        // For regular pages, check if we can't scroll anymore
        if (newScrollHeight === scrollHeight && Math.abs(newScroll - currentScroll) < 10) {
          console.log('[AutomationHandler] Reached bottom of page');
          break;
        }
      }
    }
  }

  /**
   * Handle pagination
   */
  async handlePagination(collectionParent, extractionEngine, resultsTable) {
    console.log('[AutomationHandler] Checking for pagination...');
    
    // First try smart detection if no selector provided
    if (!this.settings.pagination && this.settings.smartPaginationDetection) {
      console.log('[AutomationHandler] Using smart pagination detection...');
      
      // Detect pagination type
      const paginationType = paginationDetector.detectPaginationType();
      console.log('[AutomationHandler] Detected pagination type:', paginationType);
      
      if (paginationType === 'PAGINATION_BUTTON') {
        // Find the pagination button
        this.paginationElement = await paginationDetector.findPaginationButton({
          rootView: document.body,
          timeoutMs: 3000
        });
        
        if (this.paginationElement) {
          console.log('[AutomationHandler] Found pagination button:', this.paginationElement);
        }
      } else if (paginationType === 'PAGINATION_INFINITE_SCROLL') {
        console.log('[AutomationHandler] Infinite scroll detected, will be handled by auto-scroll');
        return; // Infinite scroll is handled by auto-scroll
      }
    } else if (this.settings.pagination) {
      // Use provided selector
      console.log('[AutomationHandler] Looking for pagination element:', this.settings.pagination);
      this.paginationElement = document.querySelector(this.settings.pagination);
    }
    
    if (!this.paginationElement) {
      console.log('[AutomationHandler] No pagination element found');
      return;
    }
    
    // Check if pagination is still valid
    if (!paginationDetector.isValidPaginationButton(this.paginationElement)) {
      console.log('[AutomationHandler] Pagination element is disabled or hidden');
      return;
    }
    
    // Click pagination
    console.log('[AutomationHandler] Clicking pagination element');
    this.paginationElement.click();
    
    // Wait for page to load
    await this.delay(2000);
    
    // Wait for dynamic content
    if (this.settings.dynamic) {
      await this.delay(this.settings.elementWaitTime);
    }
    
    // Continue extraction on new page
    if (this.isRunning) {
      // Reset processed elements for new page
      this.processedElements.clear();
      
      // Find the collection parent again (it might have changed)
      const newCollectionParent = this.findSimilarElement(collectionParent);
      if (newCollectionParent) {
        await this.start({
          selectionEngine: window.__extractorGPT.selectionEngine,
          extractionEngine: extractionEngine,
          resultsTable: resultsTable,
          settings: this.settings,
          callbacks: this.callbacks
        });
      } else {
        console.log('[AutomationHandler] Could not find collection parent on new page');
      }
    }
  }
  
  /**
   * Find similar element after page change
   */
  findSimilarElement(originalElement) {
    // Try to find by same class
    if (originalElement.className) {
      const elements = document.getElementsByClassName(originalElement.className);
      if (elements.length > 0) {
        return elements[0];
      }
    }
    
    // Try to find by same tag and similar position
    const tagName = originalElement.tagName;
    const elements = document.getElementsByTagName(tagName);
    
    // Find the most similar element based on content structure
    let bestMatch = null;
    let bestScore = 0;
    
    for (const element of elements) {
      let score = 0;
      
      // Check if has similar number of children
      if (Math.abs(element.children.length - originalElement.children.length) < 5) {
        score += 1;
      }
      
      // Check if has similar classes
      const originalClasses = originalElement.className.split(' ');
      const elementClasses = element.className.split(' ');
      const commonClasses = originalClasses.filter(c => elementClasses.includes(c));
      score += commonClasses.length;
      
      if (score > bestScore) {
        bestScore = score;
        bestMatch = element;
      }
    }
    
    return bestMatch;
  }

  /**
   * Get unique ID for element
   */
  getElementId(element) {
    // Try to use existing ID
    if (element.id) {
      return element.id;
    }

    // Generate ID based on content and position
    const text = element.textContent?.trim().substring(0, 50) || '';
    const className = element.className || '';
    const index = Array.from(element.parentNode.children).indexOf(element);
    
    return `${text}_${className}_${index}`;
  }

  /**
   * Delay helper
   */
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Find scrollable container
   */
  findScrollableContainer(element) {
    // Start from the element and traverse up to find scrollable container
    let current = element;
    
    while (current && current !== document.body) {
      // Check if current element is scrollable
      const style = window.getComputedStyle(current);
      const isScrollable = (
        (style.overflowY === 'auto' || style.overflowY === 'scroll') &&
        current.scrollHeight > current.clientHeight
      );
      
      if (isScrollable) {
        console.log('[AutomationHandler] Found scrollable container:', current);
        return current;
      }
      
      current = current.parentElement;
    }
    
    // Check common scrollable containers by selector
    const commonContainers = [
      // Common feed/list containers
      '[role="feed"]',
      '[role="list"]',
      '[role="grid"]',
      '[role="table"]',
      // Common class patterns
      '.scroll-container',
      '.scrollable',
      '.overflow-auto',
      '.overflow-y-auto',
      '.overflow-scroll',
      '.overflow-y-scroll',
      // Common ID patterns
      '#results',
      '#content',
      '#main-content',
      // Framework specific
      '.infinite-scroll-component',
      '[data-infinite-scroll]',
      // Social media patterns
      '.feed',
      '.timeline',
      '.stream',
      // E-commerce patterns
      '.product-list',
      '.search-results',
      '.items-grid'
    ];
    
    for (const selector of commonContainers) {
      const container = document.querySelector(selector);
      if (container && container.scrollHeight > container.clientHeight) {
        const style = window.getComputedStyle(container);
        if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
          console.log('[AutomationHandler] Found scrollable container by selector:', selector, container);
          return container;
        }
      }
    }
    
    // Check if body is scrollable (some sites use body as scroll container)
    const bodyStyle = window.getComputedStyle(document.body);
    if (bodyStyle.overflowY === 'auto' || bodyStyle.overflowY === 'scroll') {
      if (document.body.scrollHeight > document.body.clientHeight) {
        console.log('[AutomationHandler] Using body as scroll container');
        return document.body;
      }
    }
    
    // Default to window scrolling (document scrolling)
    console.log('[AutomationHandler] Using default window scrolling');
    return window;
  }

  /**
   * Find fresh collection parent (re-query to get dynamically loaded elements)
   */
  findFreshCollectionParent(originalParent) {
    // If the original parent still exists and is in the DOM, use it
    if (originalParent && document.body.contains(originalParent)) {
      return originalParent;
    }
    
    // Otherwise, try to find it again using its characteristics
    const tagName = originalParent.tagName;
    const className = originalParent.className;
    const role = originalParent.getAttribute('role');
    
    // Try to find by exact class match first
    if (className) {
      const elements = document.getElementsByClassName(className);
      for (const el of elements) {
        if (el.tagName === tagName && el.children.length > 0) {
          console.log('[AutomationHandler] Found fresh parent by class');
          return el;
        }
      }
    }
    
    // Try by role attribute
    if (role) {
      const element = document.querySelector(`${tagName}[role="${role}"]`);
      if (element && element.children.length > 0) {
        console.log('[AutomationHandler] Found fresh parent by role');
        return element;
      }
    }
    
    // Fallback to original if we can't find a match
    console.log('[AutomationHandler] Using original parent');
    return originalParent;
  }

  /**
   * Wait for new elements to appear after scroll
   */
  async waitForNewElements(collectionParent, previousCount) {
    const maxWaitTime = 5000; // 5 seconds max
    const checkInterval = 100; // Check every 100ms
    const startTime = Date.now();
    
    while (Date.now() - startTime < maxWaitTime) {
      const freshParent = this.findFreshCollectionParent(collectionParent);
      const currentCount = freshParent.children.length;
      
      if (currentCount > previousCount) {
        console.log(`[AutomationHandler] New elements loaded: ${currentCount - previousCount}`);
        return true;
      }
      
      await this.delay(checkInterval);
    }
    
    return false;
  }

  /**
   * Detect if page uses infinite scroll
   */
  detectInfiniteScroll() {
    // Check for common infinite scroll indicators
    const indicators = [
      // Intersection Observer based
      document.querySelector('[data-infinite-scroll]'),
      document.querySelector('.infinite-scroll-component'),
      document.querySelector('[class*="infinite"]'),
      
      // Check for loading spinners at bottom
      document.querySelector('.loading-spinner:last-child'),
      document.querySelector('.loader:last-child'),
      document.querySelector('[class*="loading"]:last-child'),
      
      // Check meta tags or data attributes
      document.querySelector('meta[name="infinite-scroll"]'),
      document.querySelector('[data-pagination-type="infinite"]')
    ];
    
    return indicators.some(el => el !== null);
  }
}

// Export singleton instance
export const automationHandler = new AutomationHandler();
export default automationHandler; 