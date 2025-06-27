// Simplified Event Tracker - No-op implementation
// This version doesn't send any analytics or make network calls

class EventTracker {
  constructor() {
    console.log('[EXTRACTOR-GPT] Analytics disabled - using no-op implementation');
  }

  // All methods are no-ops that just log in development
  trackPageView(page, properties = {}) {
    console.debug('[Analytics] Page view:', page, properties);
  }
  
  trackUserAction(action, properties = {}) {
    console.debug('[Analytics] User action:', action, properties);
  }
  
  trackError(error, context = '') {
    console.debug('[Analytics] Error:', error, context);
  }
  
  trackExtraction(type, properties = {}) {
    console.debug('[Analytics] Extraction:', type, properties);
  }
  
  track(eventType, properties = {}) {
    console.debug('[Analytics] Track:', eventType, properties);
  }
  
  async sendAnalytics(event) {
    // No-op - don't send anything
  }
  
  async flushQueue() {
    // No-op - no queue to flush
  }
  
  async getSessionId() {
    return 'local-session-' + Date.now();
  }

  async getUserId() {
    return 'local-user';
  }

  getBrowserInfo() {
    return {
      name: 'Chrome',
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform
    };
  }

  generateId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  trackExtractionStarted({ urls, elements, type }) {
    console.debug('[Analytics] Extraction started:', { urls, elements, type });
  }

  trackExtractionCompleted({ urls, elements, type, duration, rowCount }) {
    console.debug('[Analytics] Extraction completed:', { urls, elements, type, duration, rowCount });
  }

  trackExport({ format, rowCount }) {
    console.debug('[Analytics] Export:', { format, rowCount });
  }

  trackFeatureUsage(feature) {
    console.debug('[Analytics] Feature usage:', feature);
  }

  async setUserId(userId) {
    console.debug('[Analytics] Set user ID:', userId);
  }

  async clearUserId() {
    console.debug('[Analytics] Clear user ID');
  }

  trackTiming({ category, variable, time, label }) {
    console.debug('[Analytics] Timing:', { category, variable, time, label });
  }
}

// Create singleton instance
const eventTracker = new EventTracker();

// Create a wrapper with all the same methods
const eventTrackerWrapper = {
  trackPageView: (pageName) => eventTracker.trackPageView(pageName),
  trackExtractionStarted: (data) => eventTracker.trackExtractionStarted(data),
  trackExtractionCompleted: (data) => eventTracker.trackExtractionCompleted(data),
  trackExport: (data) => eventTracker.trackExport(data),
  trackError: (data) => eventTracker.trackError(data),
  trackFeatureUsage: (feature) => eventTracker.trackFeatureUsage(feature),
  trackUserAction: (action, data) => eventTracker.trackUserAction(action, data),
  setUserId: async (userId) => await eventTracker.setUserId(userId),
  clearUserId: async () => await eventTracker.clearUserId(),
  trackTiming: (data) => eventTracker.trackTiming(data)
};

export default eventTrackerWrapper; 