import { ExportFormats } from '../constants/index.js';
import * as XLSX from 'xlsx';

class ExportUtils {
  // Convert data to CSV format
  static toCSV({ headers, rows, filename = 'export.csv' }) {
    try {
      // Create CSV header
      const csvHeaders = headers.join(',');
      
      // Create CSV rows
      const csvRows = rows.map(row => {
        return headers.map(header => {
          const value = row[header] || '';
          // Escape quotes and wrap in quotes if contains comma
          const escaped = value.toString().replace(/"/g, '""');
          return escaped.includes(',') ? `"${escaped}"` : escaped;
        }).join(',');
      });
      
      // Combine header and rows
      const csvContent = [csvHeaders, ...csvRows].join('\n');
      
      // Download file
      this.downloadFile(csvContent, filename, 'text/csv;charset=utf-8;');
      
      return csvContent;
    } catch (error) {
      console.error('Error exporting to CSV:', error);
      throw error;
    }
  }

  // Convert data to Excel format using SheetJS
  static toExcel({ headers, rows, filename = 'export.xlsx' }) {
    try {
      console.log('[EXTRACTOR-GPT] Exporting to Excel with SheetJS');
      
      // Convert rows to array of arrays format for SheetJS
      const data = [headers];
      rows.forEach(row => {
        const rowData = headers.map(header => row[header] || '');
        data.push(rowData);
      });
      
      // Create worksheet
      const ws = XLSX.utils.aoa_to_sheet(data);
      
      // Set column widths based on content
      const colWidths = headers.map((header, index) => {
        let maxWidth = header.length;
        rows.forEach(row => {
          const cellValue = String(row[header] || '');
          maxWidth = Math.max(maxWidth, cellValue.length);
        });
        return { wch: Math.min(maxWidth + 2, 50) }; // Cap at 50 characters
      });
      ws['!cols'] = colWidths;
      
      // Create workbook
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'ExtractorGPT Data');
      
      // Add metadata
      wb.Props = {
        Title: 'ExtractorGPT Export',
        Author: 'ExtractorGPT',
        CreatedDate: new Date()
      };
      
      // Generate Excel file
      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      
      // Download file
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      return true;
    } catch (error) {
      console.error('Error exporting to Excel:', error);
      // Fallback to CSV if Excel export fails
      console.warn('Falling back to CSV export');
      const csvFilename = filename.replace('.xlsx', '.csv');
      return this.toCSV({ headers, rows, filename: csvFilename });
    }
  }

  // Export data to JSON format
  static exportToJSON({ headers, rows, filename = 'export.json' }) {
    try {
      // Convert rows to objects with headers as keys
      const jsonData = rows.map(row => {
        const obj = {};
        headers.forEach(header => {
          obj[header] = row[header] || '';
        });
        return obj;
      });
      
      const jsonContent = JSON.stringify(jsonData, null, 2);
      
      this.downloadFile(jsonContent, filename, 'application/json');
      
      return jsonContent;
    } catch (error) {
      console.error('Error exporting to JSON:', error);
      throw error;
    }
  }

  // Export data to clipboard
  static exportToClipboard({ headers, rows }) {
    try {
      const plainText = this.toPlainText({ headers, rows });
      
      // Try to use the Clipboard API
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(plainText)
          .then(() => console.log('Data copied to clipboard'))
          .catch(err => {
            console.warn('Clipboard API failed, using fallback:', err);
            this.copyToClipboardFallback(plainText);
          });
      } else {
        // Use fallback method
        this.copyToClipboardFallback(plainText);
      }
    } catch (error) {
      console.error('Error exporting to clipboard:', error);
      throw error;
    }
  }

  // Export to Google Sheets (placeholder)
  static exportToGoogleSheets({ headers, rows }) {
    try {
      console.log('Google Sheets export would require OAuth implementation');
      // For now, copy to clipboard for manual paste
      this.exportToClipboard({ headers, rows });
    } catch (error) {
      console.error('Error exporting to Google Sheets:', error);
      throw error;
    }
  }

  // Convert data to plain text format
  static toPlainText({ headers, rows }) {
    try {
      // Create header row
      const headerRow = headers.join('\t');
      
      // Create data rows
      const dataRows = rows.map(row => {
        return headers.map(header => row[header] || '').join('\t');
      });
      
      // Combine all rows
      return [headerRow, ...dataRows].join('\n');
    } catch (error) {
      console.error('Error converting to plain text:', error);
      throw error;
    }
  }

  // Fallback clipboard copy method
  static copyToClipboardFallback(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    console.log('Data copied to clipboard using fallback method');
  }

  // Helper method to trigger file download
  static downloadFile(content, filename, mimeType) {
    try {
      const blob = new Blob([content], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
      throw error;
    }
  }

  // Export based on format type
  static export({ format, headers, rows, filename }) {
    const baseFilename = filename || `extractorgpt_export_${new Date().toISOString().slice(0, 10)}`;
    
    switch (format) {
      case ExportFormats.CSV:
        return this.toCSV({ 
          headers, 
          rows, 
          filename: `${baseFilename}.csv` 
        });
        
      case ExportFormats.EXCEL:
        return this.toExcel({ 
          headers, 
          rows, 
          filename: `${baseFilename}.xlsx` 
        });
        
      case ExportFormats.JSON:
        return this.exportToJSON({ 
          headers, 
          rows, 
          filename: `${baseFilename}.json` 
        });
        
      case ExportFormats.CLIPBOARD:
        return this.exportToClipboard({ headers, rows });
        
      case ExportFormats.GOOGLE_SHEETS:
        return this.exportToGoogleSheets({ headers, rows });
        
      default:
        throw new Error(`Unsupported export format: ${format}`);
    }
  }
}

export default ExportUtils;
export { ExportUtils }; 