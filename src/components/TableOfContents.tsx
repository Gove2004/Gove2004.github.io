import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { Card } from './ui/Card';
import { useMarkdownFiles } from '../hooks/useMarkdownFiles';

export function TableOfContents() {
  const { files, loading } = useMarkdownFiles();
  const location = useLocation();

  if (loading) {
    return (
      <Card className="animate-pulse h-40 bg-white/50 mb-4 lg:mb-8" />
    );
  }

  return (
    <Card className="mb-4 lg:mb-8">
      <div className="flex items-center gap-2 mb-4 text-blue-900">
        <FileText className="h-5 w-5" />
        <h2 className="text-lg font-semibold">Table of Contents</h2>
      </div>
      <div className="overflow-x-auto">
        <ul className="space-y-2 min-w-[200px]">
          {files.map((file) => {
            const isActive = location.hash === `#/${file.id}` || 
                            (!location.hash && file.id === 'welcome');
            
            return (
              <li 
                key={file.id}
                className={`transform transition-all duration-200 hover:translate-x-2 ${
                  isActive ? 'bg-blue-50 rounded-lg' : ''
                }`}
              >
                <Link
                  to={`/${file.id}`}
                  className={`flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 ${
                    isActive 
                      ? 'text-blue-800 font-medium'
                      : 'text-blue-600 hover:text-blue-800'
                  }`}
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  {file.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
}