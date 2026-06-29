export interface Template {
  id: string;
  name: string;
  description: string;
  framework: string; // 'Next.js' | 'React' | 'Vue' | etc.
  category: string; // 'SaaS' | 'E-commerce' | 'Portfolio' | etc.
  stars: number;
  tags: string[];
  repoUrl: string;
  previewUrl?: string;
  thumbnail?: string;
  author: string;
}

export const RESOURCES_TEMPLATES: Template[] = [
  {
    id: '1',
    name: 'Next.js SaaS Starter',
    description: 'Production-ready SaaS template with auth, payments, and dashboard',
    framework: 'Next.js',
    category: 'SaaS',
    stars: 4200,
    tags: ['typescript', 'prisma', 'stripe', 'tailwind'],
    repoUrl: 'https://github.com/...',
    author: 'vercel',
  },
  // add more...
];