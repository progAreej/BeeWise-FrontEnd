// components/Alert.js
import React from 'react';

const Alert = ({ children, className }) => (
  <div className={`bg-red-100 border border-red-400 text-red-700 p-4 rounded relative ${className}`}>
    {children}
  </div>
);

const AlertDescription = ({ children }) => (
  <p>
    {children}
  </p>
);

export { Alert, AlertDescription };
