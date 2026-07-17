import React from 'react';

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  noBorder?: boolean;
  id?: string;
}

export function TerminalWindow({
  title = 'julio@portfolio:~',
  children,
  className = '',
  noBorder = false,
  id,
}: TerminalWindowProps) {
  return (
    <div 
      id={id} 
      className={`bg-surface flex flex-col overflow-hidden ${
        noBorder ? 'border-none rounded-none' : 'border border-border rounded-none md:rounded-lg md:border-x'
      } ${className}`}
    >
      <div className="h-9 bg-black/20 flex items-center px-4 relative">
        <div className="hidden md:flex gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]"></span>
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
          <span className="w-3 h-3 rounded-full bg-[#28C840]"></span>
        </div>
        <span className="absolute left-1/2 -translate-x-1/2 font-mono text-sm text-muted">
          {title}
        </span>
      </div>
      <div className="p-4 flex-1">
        {children}
      </div>
    </div>
  );
}
