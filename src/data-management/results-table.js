import { DataTypes } from '../constants/index.js';

class ResultsTable {
  constructor() {
    this.rows = [];
    this.headers = [];
    this.thresholds = {
      removeEmptyGroupsThreshold: 0.2,
      removeSimilarGroupsThreshold: 0.9
    };
  }

  // Generate a friendly ID for grouping
  generateFriendlyId(type, groupId) {
    const typeMap = {
      [DataTypes.TEXT]: 'text',
      [DataTypes.IMAGE_URL]: 'image',
      [DataTypes.LINK_URL]: 'link',
      [DataTypes.EMAIL]: 'email'
    };
    return `${typeMap[type] || 'data'}_${groupId}`;
  }

  // Insert extractables from list selection
  insertExtractablesFromList({ parent, extractables, append = false }) {
    if (!extractables) return null;

    console.log('[ResultsTable] insertExtractablesFromList called with:', {
      extractablesLength: extractables.length,
      firstGroup: extractables[0]
    });

    // Determine the structure of extractables
    // WebPeeler sends each list item as a separate group with multiple data types
    // We need to properly organize this into rows with multiple columns
    
    const rows = [];
    
    // Process each group (each group represents one row in the table)
    extractables.forEach((group, groupIndex) => {
      const row = {};
      
      // Add row number
      row['#'] = groupIndex + 1;
      
      // Initialize columns for each data type
      let textIndex = 0;
      let linkIndex = 0;
      let imageIndex = 0;
      let emailIndex = 0;
      
      // Process all items in this group
      group.forEach((item) => {
        if (!item || !item.data) return;
        
        // Create column header based on type and index
        let columnName;
        switch(item.type) {
          case 'text':
            textIndex++;
            columnName = textIndex === 1 ? 'Text' : `Text ${textIndex}`;
            break;
          case 'link-url':
            linkIndex++;
            columnName = linkIndex === 1 ? 'Link' : `Link ${linkIndex}`;
            break;
          case 'image-url':
            imageIndex++;
            columnName = imageIndex === 1 ? 'Image' : `Image ${imageIndex}`;
            row['🖼️ Image Preview'] = item.data; // Also add to preview column
            break;
          case 'email':
            emailIndex++;
            columnName = emailIndex === 1 ? 'Email' : `Email ${emailIndex}`;
            break;
          default:
            columnName = item.type || 'Data';
        }
        
        // Add data to row
        row[columnName] = item.data;
      });
      
      // Only add row if it has data
      if (Object.keys(row).length > 1) { // More than just the row number
        rows.push(row);
      }
    });

    console.log('[ResultsTable] Processed rows:', rows);

    // Build headers from all rows
    const headerSet = new Set(['#']); // Always include row number
    let hasImages = false;
    
    rows.forEach(row => {
      Object.keys(row).forEach(key => {
        if (key !== '#' && key !== '🖼️ Image Preview') {
          headerSet.add(key);
        }
        if (key === '🖼️ Image Preview' && row[key]) {
          hasImages = true;
        }
      });
    });
    
    // Add image preview column if any images exist
    if (hasImages) {
      headerSet.add('🖼️ Image Preview');
    }
    
    // Convert to array and sort headers logically
    const headers = Array.from(headerSet).sort((a, b) => {
      // Keep # first
      if (a === '#') return -1;
      if (b === '#') return 1;
      // Keep image preview second
      if (a === '🖼️ Image Preview') return -1;
      if (b === '🖼️ Image Preview') return 1;
      // Sort other columns alphabetically
      return a.localeCompare(b);
    });

    // Ensure all rows have all headers
    rows.forEach(row => {
      headers.forEach(header => {
        if (!(header in row)) {
          row[header] = '';
        }
      });
    });

    // Handle append mode
    if (append) {
      // Update row numbers for new rows
      const startingRowNum = this.rows.length + 1;
      rows.forEach((row, index) => {
        row['#'] = startingRowNum + index;
      });
      
      // Merge headers
      const existingHeaders = new Set(this.headers);
      headers.forEach(h => existingHeaders.add(h));
      
      // Update headers array maintaining order
      this.headers = Array.from(existingHeaders).sort((a, b) => {
        if (a === '#') return -1;
        if (b === '#') return 1;
        if (a === '🖼️ Image Preview') return -1;
        if (b === '🖼️ Image Preview') return 1;
        return a.localeCompare(b);
      });
      
      // Ensure existing rows have new headers
      this.rows.forEach(row => {
        this.headers.forEach(header => {
          if (!(header in row)) {
            row[header] = '';
          }
        });
      });
      
      // Add new rows
      this.rows = [...this.rows, ...rows];
    } else {
      // Replace all data
      this.rows = rows;
      this.headers = headers;
    }
    
    this.filterAndClean();
    this.removeDuplicateRows();

    console.log('[ResultsTable] Final state:', {
      headers: this.headers,
      rowCount: this.rows.length,
      firstRow: this.rows[0]
    });

    return this;
  }

  // Insert extractables from task
  insertExtractabalesFromTask(task) {
    if (!task) return null;

    const idGenerator = {
      generateFriendlyId: (type) => {
        const timestamp = Date.now();
        const random = Math.random().toString(36).substr(2, 5);
        return `${type}_${timestamp}_${random}`;
      }
    };

    const data = task
      .filter(item => item.data && item.data.length > 0)
      .reduce((acc, item) => acc.concat(item.data), []);

    const groupedData = {};
    data.forEach((item) => {
      const key = `${item.url}_${item.selector}_${item.type}`;
      if (!groupedData[key]) {
        groupedData[key] = {
          ...item,
          groupId: idGenerator.generateFriendlyId(item.type),
          data: []
        };
      }
      groupedData[key].data.push(item.data);
    });

    const rows = Object.values(groupedData).map(group => ({
      ...group,
      data: group.data.join(', ')
    }));

    this.rows = rows;
    this.invalidateHeaders();
    this.filterAndClean();
    this.removeDuplicateRows();

    const urls = task.map(item => item.url).filter(Boolean);
    if (urls.length > 0) {
      this.rows.forEach(row => {
        row.url = urls[0]; // Assuming single URL for now
      });
    }

    return this;
  }

  // Insert from page details status
  insertFromPageDetailsStatus({ status }) {
    if (!status || !Array.isArray(status)) return this;

    status.forEach((item) => {
      if (item.status === 'complete' && item.outcome) {
        const newRows = item.outcome.map(result => ({
          url: item.url,
          groupId: this.generateFriendlyId(result.type, result.id),
          name: result.name,
          type: result.type,
          data: result.data,
          selectorType: result.selectorType,
          error: result.error
        }));
        
        this.rows.push(...newRows);
      }
    });

    this.invalidateHeaders();
    this.filterAndClean();
    this.removeDuplicateRows();

    return this;
  }

  // Insert emails from status
  insertEmailsFromStatus({ status }) {
    if (!status || !Array.isArray(status)) return this;

    status.forEach((item) => {
      if (item.status === 'complete' && item.outcome) {
        const emailData = item.outcome.find(result => result.type === 'emails');
        if (emailData && emailData.data) {
          emailData.data.forEach(email => {
            this.rows.push({
              url: item.url,
              groupId: this.generateFriendlyId('email', email),
              type: 'email',
              data: email
            });
          });
        }
      }
    });

    this.invalidateHeaders();
    this.filterAndClean();
    this.removeDuplicateRows();

    return this;
  }

  // Filter and clean data
  filterAndClean() {
    // Remove completely empty rows
    this.rows = this.rows.filter(row => {
      // Check if at least one value in the row is non-empty
      return Object.values(row).some(value => 
        value && value.toString().trim() !== ''
      );
    });

    return this;
  }

  // Remove duplicate rows
  removeDuplicateRows() {
    const seen = new Set();
    this.rows = this.rows.filter(row => {
      // Create a key from all row values
      const key = JSON.stringify(row);
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
    return this;
  }

  // Invalidate headers (recalculate from data)
  invalidateHeaders() {
    const headerSet = new Set();
    
    this.rows.forEach(row => {
      Object.keys(row).forEach(key => {
        if (key !== 'element' && key !== 'selector') {
          headerSet.add(key);
        }
      });
    });

    this.headers = Array.from(headerSet);
    return this;
  }

  // Create new instance
  newInstance() {
    const instance = new ResultsTable();
    instance.rows = [...this.rows];
    instance.headers = [...this.headers];
    instance.thresholds = { ...this.thresholds };
    return instance;
  }

  // Helper method for selector (should be imported from css-selector-utils)
  getSelectorNthChild({ root, element, depth }) {
    // Simplified implementation - should use the actual CSS selector utility
    let path = [];
    let current = element;
    let currentDepth = 0;

    while (current && current !== root && currentDepth < depth) {
      if (current.nodeType === Node.ELEMENT_NODE) {
        const tagName = current.tagName.toLowerCase();
        const index = Array.from(current.parentNode?.children || [])
          .filter(child => child.tagName === current.tagName)
          .indexOf(current) + 1;
        
        path.unshift(`${tagName}:nth-of-type(${index})`);
        currentDepth++;
      }
      current = current.parentNode;
    }

    return path.join(' > ');
  }

  // Update thresholds
  updateThresholds(thresholds) {
    this.thresholds = { ...this.thresholds, ...thresholds };
    return this;
  }
}

export default ResultsTable; 