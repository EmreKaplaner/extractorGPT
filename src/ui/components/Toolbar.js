import React from 'react';

/**
 * Toolbar component - Similar to WebPeeler's Mo component
 * This appears above the main panel and contains the selection controls
 */
const Toolbar = ({ 
  tab, 
  setTab, 
  highlightEnabled, 
  onHighlightClicked, 
  onCloseClicked,
  isContainerCollapsed,
  onStatusBubbleClick 
}) => {
  return (
    <div className="bg-zinc-900/95 backdrop-blur-lg shadow-2xl rounded-xl border border-white/10 ring-1 ring-white/5 p-3 flex items-center gap-3">
      {/* Logo and Title */}
      <div className="flex items-center gap-3 flex-1">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">E</span>
        </div>
        <h2 className="text-lg font-semibold text-white">EXTRACTOR GPT</h2>
      </div>
      
      {/* Selection Control Button */}
      {tab === 'list' && (
        <button
          onClick={onHighlightClicked}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-2 ${
            highlightEnabled
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-zinc-700 hover:bg-zinc-600 text-white'
          }`}
        >
          {highlightEnabled ? (
            <>
              <span>✓</span>
              <span>List Selection</span>
            </>
          ) : (
            <>
              <span>👆</span>
              <span>Enable List Selection</span>
            </>
          )}
        </button>
      )}
      
      {/* Collapse/Expand Button */}
      <button
        onClick={onStatusBubbleClick}
        className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
        title={isContainerCollapsed ? "Expand" : "Collapse"}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d={isContainerCollapsed ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"} />
        </svg>
      </button>
      
      {/* Close Button */}
      <button
        onClick={onCloseClicked}
        className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default Toolbar; 