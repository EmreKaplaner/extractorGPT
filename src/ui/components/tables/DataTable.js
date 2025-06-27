import React from 'react';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

/**
 * DataTable - Generic data table component
 * Renders tabular data with sorting and selection
 */
export function DataTable({ 
  headers, 
  rows, 
  selectedRows, 
  onRowSelect, 
  onSelectAll,
  onSort,
  sortColumn,
  sortDirection 
}) {
  const allSelected = selectedRows.size === rows.length && rows.length > 0;
  
  return (
    <div className="extract-small-table-container">
      <table className="extract-small-table">
        <thead>
          <TableHeader
            headers={headers}
            onSort={onSort}
            sortColumn={sortColumn}
            sortDirection={sortDirection}
            showSelectAll={true}
            allSelected={allSelected}
            onSelectAll={onSelectAll}
          />
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              rowIndex={index}
              data={row}
              headers={headers}
              selected={selectedRows.has(index)}
              onSelect={() => onRowSelect(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable; 