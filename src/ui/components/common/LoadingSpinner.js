import React from 'react';

/**
 * LoadingSpinner - Loading indicator component
 * Shows a spinning animation during loading states
 */
export function LoadingSpinner({ 
  size = 'medium', 
  color = 'primary',
  className = '',
  text = ''
}) {
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'spinner-small';
      case 'large':
        return 'spinner-large';
      default:
        return 'spinner-medium';
    }
  };
  
  const getColorClass = () => {
    switch (color) {
      case 'secondary':
        return 'spinner-secondary';
      case 'white':
        return 'spinner-white';
      default:
        return 'spinner-primary';
    }
  };
  
  return (
    <div className={`loading-spinner ${getSizeClass()} ${getColorClass()} ${className}`}>
      <div className="spinner-circle"></div>
      {text && <span className="spinner-text">{text}</span>}
    </div>
  );
}

export default LoadingSpinner; 