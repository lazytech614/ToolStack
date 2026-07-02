import type { StarterKit } from "../types";

export const reactSaas: StarterKit = {
  id: "react-saas-starter-kit",
  name: "React SaaS Starter Kit",
  description:
    "A Vite-powered React starter for building SaaS dashboards, with client-side routing, auth guards, and a component library",
  framework: "React",
  stack: ["React", "Vite", "TypeScript", "Tailwind", "React Router"],
  features: {
    authentication: true,
    database: false,
    payments: true,
    email: false,
    storage: false,
    analytics: false,
    testing: true,
    docker: false,
  },
  techDetails: {
    auth: "Clerk",
    payments: "Stripe",
  },
  stars: 1200,
  repoUrl: "https://github.com/react-saas/react-saas-starter-kit",
  author: "react-saas",
  pricing: "Free",
  lastUpdated: "2025-06-30",
};
