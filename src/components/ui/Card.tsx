import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div 
      className={clsx(
        "bg-white/90 backdrop-blur-sm shadow-xl rounded-lg p-6",
        "transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]",
        className
      )}
    >
      {children}
    </div>
  );
}