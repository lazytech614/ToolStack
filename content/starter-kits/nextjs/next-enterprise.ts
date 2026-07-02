import type { StarterKit } from "../types";

export const nextEnterprise: StarterKit = {
  id: "next-enterprise",
  name: "Next Enterprise",
  description:
    "An opinionated, batteries-included Next.js boilerplate built for scale, with strict typing, testing, and CI baked in",
  framework: "Next.js",
  stack: ["Next.js", "TypeScript", "Tailwind", "Storybook", "Playwright"],
  features: {
    authentication: false,
    database: false,
    payments: false,
    email: false,
    storage: false,
    analytics: false,
    testing: true,
    docker: true,
  },
  techDetails: {},
  stars: 6800,
  repoUrl: "https://github.com/Blazity/next-enterprise",
  author: "Blazity",
  pricing: "Free",
  lastUpdated: "2025-11-20",
};
