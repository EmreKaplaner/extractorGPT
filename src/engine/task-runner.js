import { RunStatus } from '../constants/index.js';
import { ExtractionEngine } from './extraction-engine.js';

/**
 * Task Runner System (bE) - Manages extraction task execution
 * This class orchestrates the execution of extraction tasks with progress tracking
 */
class TaskRunner {
  constructor() {
    this.currentTask = null;
    this.isRunning = false;
    this.callbacks = {};
    this.extractSettings = {};
    this.contentWindow = null;
  }

  /**
   * Run extraction task
   * @param {Object} config - Configuration object
   * @param {Window} config.contentWindow - Target window/iframe to extract from
   * @param {Object} config.task - Task definition with steps and actions
   * @param {Object} options - Execution options
   * @param {boolean} options.shouldLoadUrl - Whether to load URL before extraction
   * @param {Object} extractSettings - Extraction settings
   * @param {Object} callbacks - Event callbacks
   * @param {Function} callbacks.onTaskStarted - Called when task starts
   * @param {Function} callbacks.onStepStarted - Called when step starts
   * @param {Function} callbacks.onStepCompleted - Called when step completes
   * @param {Function} callbacks.onTaskCompleted - Called when task completes
   * @param {Function} callbacks.onError - Called on error
   */
  run(config, options = {}, extractSettings = {}, callbacks = {}) {
    // Validate inputs
    if (!config.contentWindow) {
      throw new Error('contentWindow is required');
    }
    
    if (!config.task) {
      throw new Error('task is required');
    }

    // Store configuration
    this.contentWindow = config.contentWindow;
    this.currentTask = config.task;
    this.extractSettings = extractSettings;
    this.callbacks = callbacks;
    
    const shouldLoadUrl = options.shouldLoadUrl !== undefined ? options.shouldLoadUrl : true;

    // Start execution
    this.isRunning = true;
    
    // Notify task started
    if (this.callbacks.onTaskStarted) {
      this.callbacks.onTaskStarted(this.currentTask);
    }

    // Execute task steps
    this.executeTask(shouldLoadUrl);
  }

  /**
   * Execute the task steps
   * @private
   */
  async executeTask(shouldLoadUrl) {
    try {
      // If shouldLoadUrl is true, wait for page to load
      if (shouldLoadUrl && this.currentTask.url) {
        await this.waitForPageLoad();
      }

      // Process each step in the task
      const steps = this.currentTask.steps || [];
      
      for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        
        // Notify step started
        if (this.callbacks.onStepStarted) {
          this.callbacks.onStepStarted({
            stepId: step.id,
            stepIndex: i,
            totalSteps: steps.length
          });
        }

        // Execute step based on action type
        const result = await this.executeStep(step);

        // Notify step completed
        if (this.callbacks.onStepCompleted) {
          this.callbacks.onStepCompleted({
            stepId: step.id,
            stepIndex: i,
            totalSteps: steps.length,
            result: result
          });
        }
      }

      // Task completed successfully
      this.isRunning = false;
      
      if (this.callbacks.onTaskCompleted) {
        this.callbacks.onTaskCompleted({
          task: this.currentTask,
          pagination: null // TODO: Handle pagination if needed
        });
      }

    } catch (error) {
      this.isRunning = false;
      
      if (this.callbacks.onError) {
        this.callbacks.onError(error);
      } else {
        console.error('Task execution error:', error);
      }
    }
  }

  /**
   * Execute a single step
   * @private
   */
  async executeStep(step) {
    const { action, selector, elements } = step;

    switch (action) {
      case 'extract':
        return this.performExtraction(selector, elements);
      
      case 'click':
        return this.performClick(selector);
      
      case 'scroll':
        return this.performScroll();
      
      case 'wait':
        return this.performWait(step.duration || 1000);
      
      default:
        throw new Error(`Unknown action type: ${action}`);
    }
  }

  /**
   * Perform extraction on elements
   * @private
   */
  performExtraction(selector, elements) {
    try {
      let targetElements = [];

      // Get elements to extract from
      if (selector) {
        targetElements = Array.from(this.contentWindow.document.querySelectorAll(selector));
      } else if (elements && elements.length > 0) {
        targetElements = elements;
      } else {
        // Extract from entire body
        targetElements = [this.contentWindow.document.body];
      }

      // Use ExtractionEngine to find extractable elements
      const result = ExtractionEngine.findExtractableElements({
        elements: targetElements,
        settings: this.extractSettings
      });

      return {
        extractableElements: result.extractableElements,
        children: result.children
      };

    } catch (error) {
      console.error('Extraction error:', error);
      throw error;
    }
  }

  /**
   * Perform click action
   * @private
   */
  performClick(selector) {
    try {
      const element = this.contentWindow.document.querySelector(selector);
      
      if (!element) {
        throw new Error(`Element not found: ${selector}`);
      }

      // Simulate click
      const clickEvent = new this.contentWindow.MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: this.contentWindow
      });
      
      element.dispatchEvent(clickEvent);
      
      return { clicked: true, selector };

    } catch (error) {
      console.error('Click error:', error);
      throw error;
    }
  }

  /**
   * Perform scroll action
   * @private
   */
  performScroll() {
    try {
      // Scroll to bottom
      this.contentWindow.scrollTo({
        top: this.contentWindow.document.body.scrollHeight,
        behavior: 'smooth'
      });

      return { scrolled: true };

    } catch (error) {
      console.error('Scroll error:', error);
      throw error;
    }
  }

  /**
   * Wait for specified duration
   * @private
   */
  performWait(duration) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ waited: duration });
      }, duration);
    });
  }

  /**
   * Wait for page to load
   * @private
   */
  waitForPageLoad() {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Page load timeout'));
      }, 30000); // 30 second timeout

      // Check if already loaded
      if (this.contentWindow.document.readyState === 'complete') {
        clearTimeout(timeout);
        resolve();
        return;
      }

      // Wait for load event
      const handleLoad = () => {
        clearTimeout(timeout);
        this.contentWindow.removeEventListener('load', handleLoad);
        resolve();
      };

      this.contentWindow.addEventListener('load', handleLoad);
    });
  }

  /**
   * Cancel current task execution
   */
  cancel() {
    this.isRunning = false;
    this.currentTask = null;
    
    if (this.callbacks.onTaskCompleted) {
      this.callbacks.onTaskCompleted({
        task: this.currentTask,
        cancelled: true
      });
    }
  }

  /**
   * Get current execution status
   */
  getStatus() {
    return {
      isRunning: this.isRunning,
      currentTask: this.currentTask
    };
  }
}

// Create singleton instance (matching pattern: var bE = new gl)
const taskRunner = new TaskRunner();

// Export both named and default
export { taskRunner as TaskRunner };
export default taskRunner; 