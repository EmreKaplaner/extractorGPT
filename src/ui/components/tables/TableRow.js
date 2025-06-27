import React from 'react';

/**
 * TableRow - Table row component
 * Renders a single row of data
 */
export function TableRow({ rowIndex, data, headers, selected, onSelect }) {
  return (
    <tr className={selected ? 'selected' : ''}>
      <td className="select-column">
        <input
          type="checkbox"
          checked={selected}
          onChange={onSelect}
        />
      </td>
      <td className="row-number">{rowIndex + 1}</td>
      {headers.map((header, index) => (
        <td key={index} title={data[header] || ''}>
          {renderCellContent(data[header], header)}
        </td>
      ))}
    </tr>
  );
}

// Helper function to render cell content based on type
function renderCellContent(value, header) {
  if (!value) return '-';
  
  // Handle URLs
  if (header.toLowerCase().includes('url') || 
      (typeof value === 'string' && value.startsWith('http'))) {
    return (
      <a 
        href={value} 
        target="_blank" 
        rel="noopener noreferrer"
        className="cell-link"
      >
        {truncateText(value, 50)}
      </a>
    );
  }
  
  // Handle emails
  if (header.toLowerCase().includes('email') || 
      (typeof value === 'string' && value.includes('@'))) {
    return (
      <a href={`mailto:${value}`} className="cell-email">
        {value}
      </a>
    );
  }
  
  // Handle long text
  if (typeof value === 'string' && value.length > 100) {
    return (
      <span title={value}>
        {truncateText(value, 100)}
      </span>
    );
  }
  
  // Handle arrays
  if (Array.isArray(value)) {
    return value.join(', ');
  }
  
  // Handle objects
  if (typeof value === 'object') {
    return JSON.stringify(value);
  }
  
  return value;
}

// Helper function to truncate text
function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

export default TableRow; 