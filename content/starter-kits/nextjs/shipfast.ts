import type { StarterKit } from "../types";

export const shipfast: StarterKit = {
  id: "shipfast",
  name: "ShipFast",
  description:
    "The Next.js boilerplate with all you need to build your SaaS, AI tool, or any other web app and ship it fast",
  framework: "Next.js",
  stack: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Stripe"],
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
    auth: "NextAuth + Google",
    database: "Mongoose + MongoDB",
    payments: "Stripe",
    email: "Mailgun",
  },
  stars: 4100,
  repoUrl: "https://github.com/Marc-Lou-Org/ship-fast",
  demoUrl: "https://shipfa.st",
  author: "marc_louvion",
  pricing: "Paid",
  lastUpdated: "2025-09-15",
};
