import React from 'react';

/**
 * IconButton - Icon-based button component
 * Renders a button with an icon and optional text
 */
export function IconButton({ 
  icon, 
  text = '',
  onClick,
  variant = 'default',
  size = 'medium',
  disabled = false,
  className = '',
  title = '',
  ...props
}) {
  const getVariantClass = () => {
    switch (variant) {
      case 'primary':
        return 'icon-button-primary';
      case 'secondary':
        return 'icon-button-secondary';
      case 'ghost':
        return 'icon-button-ghost';
      case 'danger':
        return 'icon-button-danger';
      default:
        return 'icon-button-default';
    }
  };
  
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'icon-button-small';
      case 'large':
        return 'icon-button-large';
      default:
        return 'icon-button-medium';
    }
  };
  
  return (
    <button
      className={`icon-button ${getVariantClass()} ${getSizeClass()} ${disabled ? 'disabled' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      title={title || text}
      {...props}
    >
      {typeof icon === 'string' ? (
        <span className="icon-button-icon">{icon}</span>
      ) : (
        <span className="icon-button-icon">{icon}</span>
      )}
      {text && (
        <span className="icon-button-text">{text}</span>
      )}
    </button>
  );
}

export default IconButton; 