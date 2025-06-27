import React, { useState } from 'react';
import { DataTable } from './DataTable';
import { ExportUtils } from '../../../data-management';

/**
 * ResultsTable - Table view for results
 * Displays extraction results in a tabular format
 */
export function ResultsTable({ data, source }) {
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  
  if (!data || !data.rows || data.rows.length === 0) {
    return (
      <div style={{
        padding: '40px',
        textAlign: 'center',
        color: '#9ca3af'
      }}>
        No data extracted yet
      </div>
    );
  }
  
  // Handle row selection
  const handleRowSelect = (rowId) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(rowId)) {
      newSelected.delete(rowId);
    } else {
      newSelected.add(rowId);
    }
    setSelectedRows(newSelected);
  };
  
  // Handle select all
  const handleSelectAll = () => {
    if (selectedRows.size === data.rows.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(data.rows.map((_, index) => index)));
    }
  };
  
  // Handle sort
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };
  
  // Sort data
  const sortedData = [...data.rows];
  if (sortColumn) {
    sortedData.sort((a, b) => {
      const aVal = a[sortColumn] || '';
      const bVal = b[sortColumn] || '';
      
      if (sortDirection === 'asc') {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });
  }
  
  // Handle export selected
  const handleExportSelected = (format) => {
    const selectedData = {
      headers: data.headers,
      rows: sortedData.filter((_, index) => selectedRows.has(index))
    };
    
    switch (format) {
      case 'csv':
        ExportUtils.toCSV(selectedData);
        break;
      case 'json':
        ExportUtils.exportToJSON(selectedData);
        break;
      case 'clipboard':
        ExportUtils.exportToClipboard(selectedData);
        break;
      default:
        break;
    }
  };
  
  return (
    <div style={{
      width: '100%',
      overflowX: 'auto'
    }}>
      <table className="extract-small-table" style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontFamily: 'Arial, sans-serif',
        fontSize: '12px',
        color: '#e5e7eb',
        backgroundColor: 'transparent'
      }}>
        <thead>
          <tr style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <th style={{
              padding: '8px 12px',
              textAlign: 'left',
              fontWeight: 'bold',
              color: '#d1d5db',
              whiteSpace: 'nowrap',
              minWidth: '40px'
            }}>
              #
            </th>
            {data.headers.map((header, index) => (
              <th key={index} style={{
                padding: '8px 12px',
                textAlign: 'left',
                fontWeight: 'bold',
                color: '#d1d5db',
                whiteSpace: 'nowrap',
                borderLeft: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr key={rowIndex} style={{
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <td style={{
                padding: '8px 12px',
                textAlign: 'right',
                fontWeight: 'bold',
                color: '#9ca3af',
                minWidth: '40px'
              }}>
                {rowIndex + 1}
              </td>
              {data.headers.map((header, colIndex) => (
                <td key={colIndex} style={{
                  padding: '8px 12px',
                  textAlign: 'left',
                  color: '#e5e7eb',
                  maxWidth: '300px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.05)'
                }}
                title={row[header] || ''}
                >
                  {row[header] || ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Table Footer */}
      <div style={{
        padding: '8px 12px',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        fontSize: '12px',
        color: '#9ca3af',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span>
          Showing {data.rows.length} row{data.rows.length !== 1 ? 's' : ''}
        </span>
        {source && (
          <span style={{ fontSize: '11px' }}>
            Source: {source}
          </span>
        )}
      </div>
    </div>
  );
}

export default ResultsTable; 