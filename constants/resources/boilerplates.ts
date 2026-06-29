export interface Boilerplate {
  id: string;
  name: string;
  description: string;
  stack: string[];           // ['Next.js', 'Prisma', 'NextAuth', 'Tailwind']
  category: string;          // 'Full Stack' | 'Frontend' | 'Backend' | 'Mobile'
  includes: string[];        // ['Authentication', 'Database', 'CI/CD', 'Docker']
  stars: number;
  lastUpdated: string;
  repoUrl: string;
  previewUrl?: string;
  author: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  license: string;           // 'MIT' | 'Apache' | etc.
}

export const boilerplates: Boilerplate[] = [
  {
    id: '1',
    name: 'Next.js Enterprise Boilerplate',
    description: 'Scalable Next.js codebase with auth, database, testing and CI/CD pre-configured',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind'],
    category: 'Full Stack',
    includes: ['Authentication', 'Database', 'Testing', 'CI/CD', 'Docker'],
    stars: 6800,
    lastUpdated: '2024-01-15',
    repoUrl: 'https://github.com/...',
    author: 'blazity',
    difficulty: 'Advanced',
    license: 'MIT',
  },
  {
    id: '2',
    name: 'T3 Stack Boilerplate',
    description: 'The best way to start a full-stack, typesafe Next.js app',
    stack: ['Next.js', 'tRPC', 'Prisma', 'NextAuth', 'Tailwind'],
    category: 'Full Stack',
    includes: ['Authentication', 'Database', 'Type Safety'],
    stars: 22000,
    lastUpdated: '2024-02-01',
    repoUrl: 'https://github.com/t3-oss/create-t3-app',
    author: 't3-oss',
    difficulty: 'Intermediate',
    license: 'MIT',
  },
  // add more...
];