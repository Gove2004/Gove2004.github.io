import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export function UploadPage() {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);

    // Here you would typically upload the file
    console.log('Uploading:', { title, file });
    navigate('/');
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-8 text-blue-900">
        <Upload className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Upload New Content</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-blue-900">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-lg border-blue-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="file" className="block text-sm font-medium text-blue-900">
            Markdown File
          </label>
          <input
            type="file"
            id="file"
            accept=".md"
            onChange={(e) => setFile(e.files?.[0] || null)}
            className="mt-1 block w-full text-blue-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600 transition-colors"
            required
          />
        </div>

        <Button type="submit">
          Upload Content
        </Button>
      </form>
    </Card>
  );
}