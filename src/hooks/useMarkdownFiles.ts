import { useState, useEffect } from 'react';
import { ContentItem } from '../types/content';
import { initialContent } from '../data/initialContent';

export function useMarkdownFiles() {
  const [files, setFiles] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading from backend
    const loadFiles = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFiles(initialContent);
      setLoading(false);
    };

    loadFiles();
  }, []);

  return { files, loading };
}