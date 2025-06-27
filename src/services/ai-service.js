/**
 * AI Service for intelligent data processing
 * Provides header renaming and data analysis capabilities
 */

class AIService {
  /**
   * Generate intelligent headers based on data content
   * @param {Object} params - Parameters for header generation
   * @param {string} params.site - Website URL
   * @param {Array} params.headers - Current headers
   * @param {Array} params.rows - Sample data rows
   * @returns {Promise<Object>} Renamed headers mapping
   */
  static async generateHeaders({ site, headers, rows }) {
    try {
      console.log('[AI Service] Generating intelligent headers for:', site);
      
      // For now, use a simple heuristic-based approach
      // In production, this would call an AI API (OpenAI, Claude, etc.)
      const renamedHeaders = {};
      
      headers.forEach((header, index) => {
        // Skip if already has a meaningful name
        if (header && !header.match(/^(column|col|field|property)\s*\d*$/i)) {
          renamedHeaders[header] = header;
          return;
        }
        
        // Analyze the data in this column
        const columnData = rows.slice(0, 10).map(row => row[header]).filter(Boolean);
        const inferredName = this.inferColumnType(columnData, index);
        
        renamedHeaders[header] = inferredName;
      });
      
      return renamedHeaders;
    } catch (error) {
      console.error('[AI Service] Error generating headers:', error);
      throw error;
    }
  }
  
  /**
   * Infer column type based on data patterns
   * @private
   */
  static inferColumnType(columnData, columnIndex) {
    if (!columnData || columnData.length === 0) {
      return `Field ${columnIndex + 1}`;
    }
    
    // Check for common patterns
    const patterns = {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      phone: /^[\d\s\-\(\)\+]+$/,
      url: /^https?:\/\//,
      price: /^\$?\d+\.?\d*$/,
      date: /^\d{1,4}[-\/]\d{1,2}[-\/]\d{1,4}$/,
      zipCode: /^\d{5}(-\d{4})?$/,
      percentage: /^\d+\.?\d*%$/
    };
    
    // Check if all values match a pattern
    for (const [type, pattern] of Object.entries(patterns)) {
      if (columnData.every(value => pattern.test(String(value).trim()))) {
        return this.formatHeaderName(type);
      }
    }
    
    // Check for specific keywords
    const firstValue = String(columnData[0]).toLowerCase();
    if (firstValue.includes('name')) return 'Name';
    if (firstValue.includes('title')) return 'Title';
    if (firstValue.includes('description')) return 'Description';
    if (firstValue.includes('address')) return 'Address';
    if (firstValue.includes('city')) return 'City';
    if (firstValue.includes('state')) return 'State';
    if (firstValue.includes('country')) return 'Country';
    if (firstValue.includes('company')) return 'Company';
    
    // Check data characteristics
    const allNumbers = columnData.every(value => !isNaN(value));
    if (allNumbers) return `Number ${columnIndex + 1}`;
    
    const avgLength = columnData.reduce((sum, val) => sum + String(val).length, 0) / columnData.length;
    if (avgLength > 50) return 'Description';
    if (avgLength > 20) return 'Text';
    
    return `Field ${columnIndex + 1}`;
  }
  
  /**
   * Format header name to title case
   * @private
   */
  static formatHeaderName(type) {
    const formatted = {
      email: 'Email',
      phone: 'Phone Number',
      url: 'Website',
      price: 'Price',
      date: 'Date',
      zipCode: 'Zip Code',
      percentage: 'Percentage'
    };
    
    return formatted[type] || type.charAt(0).toUpperCase() + type.slice(1);
  }
  
  /**
   * Call external AI API for advanced header generation
   * @param {Object} params - API parameters
   * @returns {Promise<Object>} AI-generated headers
   */
  static async callAIAPI({ site, headers, sampleData }) {
    // This would be implemented when integrating with OpenAI/Claude/etc.
    // For now, return the heuristic-based approach
    console.warn('[AI Service] External AI API not configured, using heuristic approach');
    return this.generateHeaders({ site, headers, rows: sampleData });
  }
  
  /**
   * Analyze data quality and suggest improvements
   * @param {Array} rows - Data rows to analyze
   * @returns {Object} Data quality report
   */
  static analyzeDataQuality(rows) {
    const report = {
      totalRows: rows.length,
      emptyValues: 0,
      duplicates: 0,
      suggestions: []
    };
    
    // Count empty values
    rows.forEach(row => {
      Object.values(row).forEach(value => {
        if (!value || String(value).trim() === '') {
          report.emptyValues++;
        }
      });
    });
    
    // Check for duplicates
    const seen = new Set();
    rows.forEach(row => {
      const key = JSON.stringify(row);
      if (seen.has(key)) {
        report.duplicates++;
      }
      seen.add(key);
    });
    
    // Generate suggestions
    if (report.emptyValues > rows.length * 0.1) {
      report.suggestions.push('Consider filtering out rows with empty values');
    }
    if (report.duplicates > 0) {
      report.suggestions.push(`Found ${report.duplicates} duplicate rows`);
    }
    
    return report;
  }
}

export default AIService;
export { AIService }; 