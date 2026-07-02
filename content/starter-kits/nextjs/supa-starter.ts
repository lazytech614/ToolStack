import type { StarterKit } from "../types";

export const supastarter: StarterKit = {
  id: "supastarter",
  name: "supastarter",
  description:
    "A production-ready SaaS starter with multi-tenancy, teams, and billing built in, supporting both Next.js and Nuxt",
  framework: "Next.js",
  stack: ["Next.js", "Supabase", "Prisma", "Stripe", "Tailwind", "shadcn/ui"],
  features: {
    authentication: true,
    database: true,
    payments: true,
    email: true,
    storage: true,
    analytics: true,
    testing: false,
    docker: false,
  },
  techDetails: {
    auth: "Supabase Auth",
    database: "Prisma + PostgreSQL",
    payments: "Stripe + Paddle + Lemon Squeezy",
    email: "Resend",
    storage: "Supabase Storage",
  },
  stars: 1900,
  repoUrl: "https://github.com/supastarter-dev/supastarter-nextjs",
  demoUrl: "https://supastarter.dev",
  author: "supastarter",
  pricing: "Paid",
  lastUpdated: "2025-12-05",
};
