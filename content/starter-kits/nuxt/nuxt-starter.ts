import type { StarterKit } from "../types";

export const nuxtStarter: StarterKit = {
  id: "nuxt-saas-template",
  name: "Nuxt SaaS Template",
  description:
    "A full-stack Nuxt 3 starter for SaaS products, with authentication, a Postgres database, and Stripe billing pre-wired",
  framework: "Nuxt",
  stack: ["Nuxt", "TypeScript", "Tailwind", "Drizzle", "Stripe"],
  features: {
    authentication: true,
    database: true,
    payments: true,
    email: true,
    storage: false,
    analytics: false,
    testing: false,
    docker: true,
  },
  techDetails: {
    auth: "Nuxt Auth Utils",
    database: "Drizzle + PostgreSQL",
    payments: "Stripe",
    email: "Resend",
  },
  stars: 980,
  repoUrl: "https://github.com/dianprata/nuxt-saas-template",
  author: "dianprata",
  pricing: "Free",
  lastUpdated: "2025-05-22",
};
