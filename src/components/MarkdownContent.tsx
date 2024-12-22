import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link, useLocation } from 'react-router-dom';
import { ContentItem } from '../types/content';

interface MarkdownContentProps {
  content: ContentItem;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const location = useLocation();

  const components = {
    a: ({ href, children }: { href?: string; children: React.ReactNode }) => {
      if (href?.startsWith('/')) {
        const to = href.substring(1);
        if (location.pathname === href || location.hash === `#/${to}`) {
          return <span className="text-blue-400">{children}</span>;
        }
        return <Link to={to} className="text-blue-600 hover:text-blue-800 underline">{children}</Link>;
      }
      return <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">{children}</a>;
    },
    pre: ({ children }: { children: React.ReactNode }) => (
      <div className="overflow-x-auto">
        <pre className="p-4 bg-gray-50 rounded-lg">{children}</pre>
      </div>
    ),
    table: ({ children }: { children: React.ReactNode }) => (
      <div className="overflow-x-auto">
        <table className="min-w-full">{children}</table>
      </div>
    ),
  };

  return (
    <article className="prose prose-sm lg:prose-lg max-w-none animate-fadeIn">
      <h1 className="text-blue-900 group text-2xl lg:text-4xl">
        {content.title}
        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-blue-400">
          #{content.id}
        </span>
      </h1>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content.content}
      </ReactMarkdown>
      <div className="text-sm text-blue-600 mt-8 flex items-center gap-2">
        <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        Last updated: {content.updatedAt.toLocaleDateString()}
      </div>
    </article>
  );
}