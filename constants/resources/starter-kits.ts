export interface StarterKit {
  id: string;
  name: string;
  description: string;
  framework: string;
  stack: string[];
  features: {
    authentication: boolean;
    database: boolean;
    payments: boolean;
    email: boolean;
    storage: boolean;
    analytics: boolean;
    testing: boolean;
    docker: boolean;
  };
  techDetails: {
    auth?: string;        // 'NextAuth' | 'Clerk' | 'Supabase Auth'
    database?: string;    // 'Prisma + PostgreSQL' | 'Drizzle + MySQL'
    payments?: string;    // 'Stripe' | 'Paddle'
    email?: string;       // 'Resend' | 'SendGrid'
    storage?: string;     // 'S3' | 'Cloudinary'
  };
  stars: number;
  repoUrl: string;
  demoUrl?: string;
  author: string;
  pricing: 'Free' | 'Paid' | 'Freemium';
  lastUpdated: string;
}

export const starterKits: StarterKit[] = [
  {
    id: '1',
    name: 'Shipfast',
    description: 'The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app',
    framework: 'Next.js',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'MongoDB', 'Stripe'],
    features: {
      authentication: true,
      database: true,
      payments: true,
      email: true,
      storage: false,
      analytics: true,
      testing: false,
      docker: false,
    },
    techDetails: {
      auth: 'NextAuth + Google',
      database: 'Mongoose + MongoDB',
      payments: 'Stripe',
      email: 'Mailgun',
    },
    stars: 4100,
    repoUrl: 'https://github.com/...',
    demoUrl: 'https://shipfa.st',
    author: 'marc_louvion',
    pricing: 'Paid',
    lastUpdated: '2024-02-10',
  },
  {
    id: '2',
    name: 'Next Starter',
    description: 'Open-source starter kit with auth, database and payments ready to go',
    framework: 'Next.js',
    stack: ['Next.js', 'Prisma', 'NextAuth', 'Stripe', 'Tailwind'],
    features: {
      authentication: true,
      database: true,
      payments: true,
      email: true,
      storage: true,
      analytics: false,
      testing: true,
      docker: true,
    },
    techDetails: {
      auth: 'NextAuth',
      database: 'Prisma + PostgreSQL',
      payments: 'Stripe',
      email: 'Resend',
      storage: 'S3',
    },
    stars: 3200,
    repoUrl: 'https://github.com/...',
    author: 'oss-contrib',
    pricing: 'Free',
    lastUpdated: '2024-01-20',
  },
];