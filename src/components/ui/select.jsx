import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export function Select({ value, onValueChange, children }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <SelectContext.Provider value={{ value, onValueChange, open, setOpen }}>
      <div ref={ref} className="relative">
        {children}
      </div>
    </SelectContext.Provider>
  );
}

const SelectContext = React.createContext({});

export function SelectTrigger({ className = '', children, ...props }) {
  const { open, setOpen, value } = React.useContext(SelectContext);
  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      className={`w-full flex items-center justify-between px-3 py-2 text-sm border border-slate-300 bg-white text-slate-900 outline-none transition-all hover:border-slate-400 ${open ? 'border-[#0a2540] ring-1 ring-[#0a2540]' : ''} ${className}`}
      {...props}
    >
      {children}
      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
    </button>
  );
}

export function SelectValue({ placeholder }) {
  const { value } = React.useContext(SelectContext);
  return <span className={value ? 'text-slate-900' : 'text-slate-400'}>{value || placeholder}</span>;
}

export function SelectContent({ children }) {
  const { open } = React.useContext(SelectContext);
  if (!open) return null;
  return (
    <div className="absolute top-full left-0 right-0 z-50 bg-white border border-slate-200 shadow-lg mt-1 max-h-60 overflow-auto">
      {children}
    </div>
  );
}

export function SelectItem({ value: itemValue, children }) {
  const { value, onValueChange, setOpen } = React.useContext(SelectContext);
  const isSelected = value === itemValue;
  return (
    <div
      onClick={() => { onValueChange(itemValue); setOpen(false); }}
      className={`px-3 py-2 text-sm cursor-pointer transition-colors ${isSelected ? 'bg-[#0a2540] text-white' : 'text-slate-700 hover:bg-slate-50'}`}
    >
      {children}
    </div>
  );
}
