import React, { useState } from 'react';

/**
 * Tooltip - Tooltip component
 * Shows helpful text on hover
 */
export function Tooltip({ 
  children, 
  content, 
  position = 'top',
  delay = 500,
  className = ''
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  
  const handleMouseEnter = () => {
    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    setTimeoutId(id);
  };
  
  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsVisible(false);
  };
  
  const getPositionClass = () => {
    switch (position) {
      case 'bottom':
        return 'tooltip-bottom';
      case 'left':
        return 'tooltip-left';
      case 'right':
        return 'tooltip-right';
      default:
        return 'tooltip-top';
    }
  };
  
  return (
    <div 
      className={`tooltip-container ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && content && (
        <div className={`tooltip ${getPositionClass()}`}>
          <div className="tooltip-content">
            {content}
          </div>
          <div className="tooltip-arrow" />
        </div>
      )}
    </div>
  );
}

export default Tooltip; 