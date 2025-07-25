import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  as: Component = 'button',
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  onClick,
  type = 'button',
  className = '',
  ...props 
}) => {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && 'btn--full-width',
    loading && 'btn--loading',
    disabled && 'btn--disabled',
    className
  ].filter(Boolean).join(' ');

  return (
    <Component
      type={Component === 'button' ? type : undefined}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <span className="btn__spinner">
          <svg className="btn__spinner-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25"/>
            <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"/>
          </svg>
        </span>
      )}
      
      {leftIcon && !loading && (
        <span className="btn__icon btn__icon--left">
          {leftIcon}
        </span>
      )}
      
      <span className="btn__content">
        {children}
      </span>
      
      {rightIcon && !loading && (
        <span className="btn__icon btn__icon--right">
          {rightIcon}
        </span>
      )}
    </Component>
  );
};

export default Button;

