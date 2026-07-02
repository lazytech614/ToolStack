import type { StarterKit } from "../types";

export const nextStarter: StarterKit = {
  id: "next-saas-starter",
  name: "Next.js SaaS Starter",
  description:
    "An open-source starter template from Vercel with authentication, Stripe subscriptions, and a dashboard ready to go",
  framework: "Next.js",
  stack: ["Next.js", "Postgres", "Drizzle", "Stripe", "Tailwind"],
  features: {
    authentication: true,
    database: true,
    payments: true,
    email: false,
    storage: false,
    analytics: false,
    testing: false,
    docker: true,
  },
  techDetails: {
    auth: "Custom JWT sessions",
    database: "Drizzle + PostgreSQL",
    payments: "Stripe",
  },
  stars: 8300,
  repoUrl: "https://github.com/nextjs/saas-starter",
  demoUrl: "https://next-saas-start.vercel.app",
  author: "vercel",
  pricing: "Free",
  lastUpdated: "2025-10-28",
};
