import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm transition-all duration-200 transform hover:scale-105',
        variant === 'primary' && 'text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600',
        variant === 'secondary' && 'text-blue-900 bg-white hover:bg-blue-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}