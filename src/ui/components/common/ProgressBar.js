import React from 'react';

/**
 * ProgressBar - Progress indicator component
 * Shows progress as a filled bar with percentage
 */
export function ProgressBar({ 
  progress = 0, 
  showPercentage = true,
  className = '',
  size = 'medium',
  color = 'primary',
  animated = false
}) {
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'progress-small';
      case 'large':
        return 'progress-large';
      default:
        return 'progress-medium';
    }
  };
  
  const getColorClass = () => {
    switch (color) {
      case 'secondary':
        return 'progress-secondary';
      case 'success':
        return 'progress-success';
      case 'warning':
        return 'progress-warning';
      case 'error':
        return 'progress-error';
      default:
        return 'progress-primary';
    }
  };
  
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  
  return (
    <div className={`progress-bar ${getSizeClass()} ${getColorClass()} ${animated ? 'animated' : ''} ${className}`}>
      <div className="progress-track">
        <div 
          className="progress-fill"
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
      {showPercentage && (
        <span className="progress-text">
          {Math.round(clampedProgress)}%
        </span>
      )}
    </div>
  );
}

export default ProgressBar; 