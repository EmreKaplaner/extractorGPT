import React from 'react';

/**
 * TableHeader - Table header component
 * Renders table headers with sorting indicators
 */
export function TableHeader({ 
  headers, 
  onSort, 
  sortColumn, 
  sortDirection,
  showSelectAll,
  allSelected,
  onSelectAll 
}) {
  return (
    <tr>
      {showSelectAll && (
        <th className="select-column">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={onSelectAll}
            title="Select all rows"
          />
        </th>
      )}
      <th className="row-number">#</th>
      {headers.map((header, index) => (
        <th 
          key={index}
          className={`sortable ${sortColumn === header ? 'sorted' : ''}`}
          onClick={() => onSort(header)}
        >
          <span className="header-text">{header}</span>
          {sortColumn === header && (
            <span className="sort-indicator">
              {sortDirection === 'asc' ? '▲' : '▼'}
            </span>
          )}
        </th>
      ))}
    </tr>
  );
}

export default TableHeader; 