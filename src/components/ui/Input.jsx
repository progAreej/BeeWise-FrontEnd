// components/ui/input.js
import React from 'react';

export const Input = ({ type = 'text', ...props }) => (
  <input type={type} className="border rounded-lg p-2 w-full" {...props} />
);
