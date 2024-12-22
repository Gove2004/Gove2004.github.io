import React from 'react';
import { Card } from '../components/ui/Card';
import { TableOfContents } from '../components/TableOfContents';
import { MarkdownContent } from '../components/MarkdownContent';
import { useMarkdownFiles } from '../hooks/useMarkdownFiles';
import { useParams } from 'react-router-dom';

export function HomePage() {
  const { files, loading } = useMarkdownFiles();
  const { id } = useParams();

  const currentFile = id 
    ? files.find(file => file.id === id)
    : files[0];

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <Card className="h-40 bg-white/50" />
        <Card className="h-96 bg-white/50" />
      </div>
    );
  }

  if (!currentFile) {
    return (
      <Card className="text-center py-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Page Not Found</h2>
        <p className="text-blue-600">The requested page could not be found.</p>
      </Card>
    );
  }

  return (
    <div>
      <TableOfContents />
      <Card>
        <MarkdownContent content={currentFile} />
      </Card>
    </div>
  );
}