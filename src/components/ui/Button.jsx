// components/Button.js
import React from 'react';

const Button = ({ children, className, onClick }) => (
  <button
    className={`py-2 px-4 rounded text-white ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export { Button };
