import React from 'react';

export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={`w-full px-3 py-2 text-sm border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-[#0a2540] focus:ring-1 focus:ring-[#0a2540] resize-vertical disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}
