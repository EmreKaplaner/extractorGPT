import React from 'react';

/**
 * EmptyView - Empty state display
 * Shows when there's no data to display
 */
export function EmptyView({ 
  title = 'No data available', 
  subtitle = '',
  icon = '📭',
  action = null 
}) {
  return (
    <div className="empty-view-title-container">
      <div className="empty-view-icon">{icon}</div>
      <h3 className="empty-view-title">{title}</h3>
      {subtitle && (
        <p className="empty-view-subtitle">{subtitle}</p>
      )}
      {action && (
        <div className="empty-view-action">
          {action}
        </div>
      )}
    </div>
  );
}

export default EmptyView; 