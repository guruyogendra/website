import React from 'react';

export function Label({ className = '', children, ...props }) {
  return (
    <label
      className={`block text-xs font-semibold text-slate-500 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}
