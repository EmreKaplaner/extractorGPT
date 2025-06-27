import React, { useState, useContext } from 'react';
import { Modal } from '../common/Modal';
import { ExportUtils } from '../../../data-management';
import { ExportFormats } from '../../../constants';
import { GlobalStateContext } from '../../../state-management/global-state-provider';

/**
 * ExportPopup - Export functionality UI
 * Allows users to export data in various formats
 */
export function ExportPopup({ data, onClose }) {
  const { globalState } = useContext(GlobalStateContext);
  const [selectedFormat, setSelectedFormat] = useState(ExportFormats.CSV);
  const [isExporting, setIsExporting] = useState(false);
  const [exportError, setExportError] = useState(null);
  
  const exportOptions = [
    {
      format: ExportFormats.CSV,
      label: 'CSV File',
      icon: '📄',
      description: 'Comma-separated values, opens in Excel'
    },
    {
      format: ExportFormats.EXCEL,
      label: 'Excel File',
      icon: '📊',
      description: 'Microsoft Excel format (.xlsx)'
    },
    {
      format: ExportFormats.JSON,
      label: 'JSON File',
      icon: '{ }',
      description: 'JavaScript Object Notation'
    },
    {
      format: ExportFormats.CLIPBOARD,
      label: 'Copy to Clipboard',
      icon: '📋',
      description: 'Copy data to clipboard'
    },
    {
      format: ExportFormats.GOOGLE_SHEETS,
      label: 'Google Sheets',
      icon: '📑',
      description: 'Export to Google Sheets',
      requiresPro: true
    }
  ];
  
  const handleExport = async () => {
    setIsExporting(true);
    setExportError(null);
    
    try {
      switch (selectedFormat) {
        case ExportFormats.CSV:
          await ExportUtils.toCSV(data);
          break;
        case ExportFormats.EXCEL:
          await ExportUtils.toExcel(data);
          break;
        case ExportFormats.JSON:
          await ExportUtils.exportToJSON(data);
          break;
        case ExportFormats.CLIPBOARD:
          await ExportUtils.exportToClipboard(data);
          break;
        case ExportFormats.GOOGLE_SHEETS:
          if (globalState.userState?.tier === 'PRO') {
            await ExportUtils.exportToGoogleSheets(data);
          } else {
            setExportError('Google Sheets export requires PRO subscription');
            return;
          }
          break;
      }
      
      // Close modal on successful export
      setTimeout(onClose, 500);
      
    } catch (error) {
      setExportError(error.message || 'Export failed');
    } finally {
      setIsExporting(false);
    }
  };
  
  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      title="Export Data"
      className="panda-export-popup"
    >
      <div className="export-popup-content">
        <div className="export-info">
          <p>Export {data?.rows?.length || 0} rows of data</p>
        </div>
        
        <div className="export-options">
          {exportOptions.map(option => (
            <div
              key={option.format}
              className={`export-option ${selectedFormat === option.format ? 'selected' : ''} ${option.requiresPro && globalState.userState?.tier !== 'PRO' ? 'disabled' : ''}`}
              onClick={() => {
                if (!option.requiresPro || globalState.userState?.tier === 'PRO') {
                  setSelectedFormat(option.format);
                }
              }}
            >
              <span className="option-icon">{option.icon}</span>
              <div className="option-details">
                <h4>{option.label}</h4>
                <p>{option.description}</p>
                {option.requiresPro && globalState.userState?.tier !== 'PRO' && (
                  <span className="pro-badge">PRO</span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {exportError && (
          <div className="export-error">
            <span>❌</span> {exportError}
          </div>
        )}
        
        <div className="export-actions">
          <button
            className="panda-extract-choice-button cancel"
            onClick={onClose}
            disabled={isExporting}
          >
            Cancel
          </button>
          <button
            className="panda-extract-choice-button primary"
            onClick={handleExport}
            disabled={isExporting}
          >
            {isExporting ? 'Exporting...' : 'Export'}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ExportPopup; 