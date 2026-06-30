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
    id: "1",
    name: "Next.js SaaS Starter",
    description:
      "Production-ready SaaS template with auth, payments, and dashboard.",
    framework: "Next.js",
    category: "SaaS",
    stars: 4200,
    tags: ["typescript", "prisma", "stripe", "tailwind"],
    repoUrl: "https://github.com/vercel/nextjs-subscription-payments",
    author: "Vercel",
  },
  {
    id: "2",
    name: "T3 App Starter",
    description:
      "End-to-end typesafe starter with Next.js, tRPC, Prisma, and NextAuth.",
    framework: "Next.js",
    category: "Full Stack",
    stars: 27000,
    tags: ["typescript", "trpc", "prisma", "tailwind"],
    repoUrl: "https://github.com/t3-oss/create-t3-app",
    author: "T3 OSS",
  },
  {
    id: "3",
    name: "React Admin Dashboard",
    description:
      "Modern admin dashboard template with charts, authentication, and responsive UI.",
    framework: "React",
    category: "Dashboard",
    stars: 9800,
    tags: ["react", "vite", "mui", "dashboard"],
    repoUrl: "https://github.com/marmelab/react-admin",
    author: "Marmelab",
  },
  {
    id: "4",
    name: "Astro Portfolio Starter",
    description:
      "Minimal portfolio starter optimized for speed, SEO, and static deployment.",
    framework: "Astro",
    category: "Portfolio",
    stars: 6300,
    tags: ["astro", "tailwind", "portfolio", "blog"],
    repoUrl: "https://github.com/withastro/astro",
    author: "Astro",
  },
];