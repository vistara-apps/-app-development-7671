import React, { forwardRef } from 'react';
import './Input.css';

const Input = forwardRef(({ 
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  size = 'md',
  variant = 'default',
  fullWidth = false,
  className = '',
  id,
  ...props 
}, ref) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  const baseClass = 'input';
  const sizeClass = `input--${size}`;
  const variantClass = `input--${variant}`;
  const errorClass = error ? 'input--error' : '';
  const fullWidthClass = fullWidth ? 'input--full-width' : '';
  const hasLeftIconClass = leftIcon ? 'input--has-left-icon' : '';
  const hasRightIconClass = rightIcon ? 'input--has-right-icon' : '';
  
  const inputClasses = [
    baseClass,
    sizeClass,
    variantClass,
    errorClass,
    fullWidthClass,
    hasLeftIconClass,
    hasRightIconClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={`input-wrapper ${fullWidth ? 'input-wrapper--full-width' : ''}`}>
      {label && (
        <label htmlFor={inputId} className="input__label">
          {label}
        </label>
      )}
      
      <div className="input__container">
        {leftIcon && (
          <span className="input__icon input__icon--left">
            {leftIcon}
          </span>
        )}
        
        <input
          ref={ref}
          id={inputId}
          className={inputClasses}
          {...props}
        />
        
        {rightIcon && (
          <span className="input__icon input__icon--right">
            {rightIcon}
          </span>
        )}
      </div>
      
      {error && (
        <span className="input__error">
          {error}
        </span>
      )}
      
      {helperText && !error && (
        <span className="input__helper">
          {helperText}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
