import React from 'react';
import { TabTypes } from '../../../constants/index.js';

/**
 * TabBar - Navigation tabs component
 * Allows switching between different extraction views
 */
export function TabBar({ activeTab, onTabChange, resultsCounts = {} }) {
  const tabs = [
    {
      id: TabTypes.RUN,
      label: 'List Extraction',
      icon: '📋',
      count: resultsCounts.list || 0
    },
    {
      id: TabTypes.PAGE_DETAILS,
      label: 'Page Details',
      icon: '📄',
      count: resultsCounts.details || 0
    },
    {
      id: TabTypes.EXTRACT_EMAILS,
      label: 'Extract Emails',
      icon: '✉️',
      count: resultsCounts.emails || 0
    },
    {
      id: TabTypes.DOWNLOAD_IMAGES,
      label: 'Download Images',
      icon: '🖼️',
      count: 0
    },
    {
      id: TabTypes.HELP,
      label: 'Help',
      icon: '❓',
      count: 0
    },
    {
      id: TabTypes.SETTINGS,
      label: 'Settings',
      icon: '⚙️',
      count: 0
    }
  ];

  return (
    <div className="panda-extract tab-bar">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          <span className="tab-icon">{tab.icon}</span>
          <span className="tab-label">{tab.label}</span>
          {tab.count > 0 && (
            <span className="tab-count">{tab.count}</span>
          )}
        </button>
      ))}
    </div>
  );
}

export default TabBar; 