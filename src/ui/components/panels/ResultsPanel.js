import React, { useState } from 'react';
import { ExportUtils } from '../../../data-management';

/**
 * ResultsPanel - WebPeeler's results display panel
 * Shows extracted data with export options and automation controls
 */
export function ResultsPanel({ data, onClose, onRunAutomation }) {
  const [activeTab, setActiveTab] = useState('list');
  const [selectedRows, setSelectedRows] = useState(new Set());
  
  if (!data || data.length === 0) return null;
  
  const handleExport = () => {
    const exportData = {
      headers: ['#', 'Image Preview', 'text-10', 'text-11', 'text-12', 'text-13'],
      rows: data
    };
    ExportUtils.exportToJSON(exportData);
  };
  
  const handleDownloadImages = () => {
    // TODO: Implement image download
    console.log('Download images clicked');
  };
  
  const handleExtractPageDetails = () => {
    // TODO: Implement page details extraction
    console.log('Extract page details clicked');
  };
  
  return (
    <div className="fixed top-20 right-4 bg-zinc-900/95 backdrop-blur-lg rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-zinc-700/30 overflow-hidden"
         style={{
           width: '60vw',
           maxWidth: '900px',
           minWidth: '600px',
           maxHeight: '80vh'
         }}>
      {/* Header */}
      <div className="bg-zinc-800 px-4 py-3 flex items-center justify-between border-b border-zinc-700">
        <div className="flex items-center gap-3">
          <span className="text-red-500 text-sm font-bold">🔴 RESULTS</span>
          <span className="text-zinc-400 text-xs">Need help? <a href="#" className="text-blue-400 hover:underline">Join Discord</a></span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => window.open('https://discord.gg/example', '_blank')}
            className="p-1 hover:bg-zinc-700 rounded"
          >
            <svg className="w-4 h-4 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </button>
          <button 
            onClick={onClose}
            className="text-zinc-400 hover:text-white"
          >
            ✕
          </button>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="bg-zinc-800/50 px-4 py-2 flex items-center gap-2 border-b border-zinc-700">
        <button 
          onClick={handleDownloadImages}
          className="px-3 py-1.5 bg-zinc-700 hover:bg-zinc-600 rounded text-sm text-white flex items-center gap-2"
        >
          📷 Download Images ({data.filter(d => d.imageUrl).length})
        </button>
        <button className="px-3 py-1.5 bg-zinc-700 hover:bg-zinc-600 rounded text-sm text-white flex items-center gap-2">
          🏷️ Label Data
        </button>
        <button 
          onClick={handleExtractPageDetails}
          className="px-3 py-1.5 bg-green-600 hover:bg-green-500 rounded text-sm text-white flex items-center gap-2"
        >
          📄 EXTRACT PAGE DETAILS
        </button>
        <button 
          onClick={handleExport}
          className="px-3 py-1.5 bg-purple-600 hover:bg-purple-500 rounded text-sm text-white flex items-center gap-2 ml-auto"
        >
          📤 EXPORT
        </button>
      </div>
      
      {/* Tabs */}
      <div className="bg-zinc-800/30 px-4 py-2 flex items-center gap-4 border-b border-zinc-700">
        <button 
          onClick={() => setActiveTab('list')}
          className={`text-sm ${activeTab === 'list' ? 'text-white border-b-2 border-purple-500' : 'text-zinc-400 hover:text-white'} pb-1`}
        >
          List Data ({data.length})
        </button>
        <button 
          onClick={() => setActiveTab('details')}
          className={`text-sm ${activeTab === 'details' ? 'text-white border-b-2 border-purple-500' : 'text-zinc-400 hover:text-white'} pb-1`}
        >
          Details Data (0)
        </button>
        <button 
          onClick={() => setActiveTab('emails')}
          className={`text-sm ${activeTab === 'emails' ? 'text-white border-b-2 border-purple-500' : 'text-zinc-400 hover:text-white'} pb-1`}
        >
          Emails (0)
        </button>
      </div>
      
      {/* Data Table */}
      <div className="bg-zinc-900 overflow-auto" style={{ maxHeight: 'calc(80vh - 200px)' }}>
        <table className="w-full">
          <thead className="bg-zinc-800 sticky top-0">
            <tr>
              <th className="text-left px-3 py-2 text-xs text-zinc-400 font-normal">#</th>
              <th className="text-left px-3 py-2 text-xs text-zinc-400 font-normal">📷 Image Preview</th>
              <th className="text-left px-3 py-2 text-xs text-zinc-400 font-normal">📝 text-10</th>
              <th className="text-left px-3 py-2 text-xs text-zinc-400 font-normal">📝 text-11</th>
              <th className="text-left px-3 py-2 text-xs text-zinc-400 font-normal">📝 text-12</th>
              <th className="text-left px-3 py-2 text-xs text-zinc-400 font-normal">📝 text-13</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-b border-zinc-800 hover:bg-zinc-800/50">
                <td className="px-3 py-2 text-sm text-zinc-300">{index + 1}</td>
                <td className="px-3 py-2">
                  {row.imageUrl && (
                    <img src={row.imageUrl} alt="" className="w-16 h-16 object-cover rounded" />
                  )}
                </td>
                <td className="px-3 py-2 text-sm text-zinc-300">{row.data || row.text || ''}</td>
                <td className="px-3 py-2 text-sm text-zinc-300">{row.groupId || ''}</td>
                <td className="px-3 py-2 text-sm text-zinc-300">{row.type || ''}</td>
                <td className="px-3 py-2 text-sm text-zinc-300">{row.selector || ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Bottom Section */}
      <div className="bg-zinc-800 p-4 border-t border-zinc-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <span className="text-green-400 text-sm flex items-center gap-2">
              ✅ READY
            </span>
            <span className="text-zinc-400 text-sm">
              🔢 {data.length} items
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <label className="flex items-center gap-2 text-zinc-300">
              <input type="checkbox" defaultChecked className="rounded" />
              auto-scroll
            </label>
            <label className="flex items-center gap-2 text-zinc-300">
              <input type="checkbox" defaultChecked className="rounded" />
              dynamic
            </label>
          </div>
        </div>
        
        <button 
          onClick={onRunAutomation}
          className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-lg text-white font-semibold flex items-center justify-center gap-2"
        >
          ▶️ RUN AUTOMATION
        </button>
      </div>
    </div>
  );
}

export default ResultsPanel; 