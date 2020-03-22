import React from 'react';
import './button-styles.css';

const Button = ({ className, children, ...props }) => {
  return (
    <button className={`button ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
