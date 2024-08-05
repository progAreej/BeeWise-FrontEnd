// components/Card.js
import React from 'react';

const Card = ({ children, className }) => (
  <div className={`border rounded-xl shadow-lg p-4 ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="border-b pb-2 mb-2">
    {children}
  </div>
);

const CardTitle = ({ children, className }) => (
  <h2 className={`text-xl font-semibold ${className}`}>
    {children}
  </h2>
);

const CardContent = ({ children, className }) => (
  <div className={`flex-grow ${className}`}>
    {children}
  </div>
);

export { Card, CardHeader, CardTitle, CardContent };
