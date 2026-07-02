import type { StarterKit } from "../types";

export const remixSaas: StarterKit = {
  id: "remix-saas",
  name: "Remix SaaS",
  description:
    "An opinionated Remix starter for building SaaS applications, with authentication, a landing page, and a dashboard shell",
  framework: "Remix",
  stack: ["Remix", "TypeScript", "Prisma", "Tailwind", "shadcn/ui"],
  features: {
    authentication: true,
    database: true,
    payments: false,
    email: true,
    storage: false,
    analytics: false,
    testing: false,
    docker: false,
  },
  techDetails: {
    auth: "Remix Auth",
    database: "Prisma + PostgreSQL",
    email: "Resend",
  },
  stars: 1400,
  repoUrl: "https://github.com/dev-xo/remix-saas",
  demoUrl: "https://remix-saas.vercel.app",
  author: "dev-xo",
  pricing: "Free",
  lastUpdated: "2025-04-11",
};
