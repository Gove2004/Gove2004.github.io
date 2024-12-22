import { ContentItem } from '../types/content';

export const initialContent: ContentItem[] = [
  {
    id: 'welcome',
    title: 'Welcome to Our Documentation',
    content: `# Welcome to Our Documentation
    
This is a sample documentation page. You can:
- Navigate between pages
- View rendered markdown with full formatting
- Enjoy smooth animations

## Getting Started
Check out our [first steps guide](first) to begin your journey.
    `,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'first',
    title: 'First Steps',
    content: `# Getting Started

Welcome to your first steps! This guide will help you understand the basics.

## Key Features
- Easy navigation between pages
- Beautiful animations
- Markdown support with full formatting

## Next Steps
Check out our [welcome guide](welcome) to learn more.`,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];