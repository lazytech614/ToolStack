import type { StarterKit } from "../types";

export const skeleton: StarterKit = {
  id: "skeleton",
  name: "Skeleton",
  description:
    "A UI toolkit and starter for SvelteKit that pairs Tailwind-based design tokens with pre-built components to bootstrap full apps quickly",
  framework: "SvelteKit",
  stack: ["SvelteKit", "TypeScript", "Tailwind"],
  features: {
    authentication: false,
    database: false,
    payments: false,
    email: false,
    storage: false,
    analytics: false,
    testing: false,
    docker: false,
  },
  techDetails: {},
  stars: 9600,
  repoUrl: "https://github.com/skeletonlabs/skeleton",
  demoUrl: "https://skeleton.dev",
  author: "skeletonlabs",
  pricing: "Free",
  lastUpdated: "2025-12-10",
};
