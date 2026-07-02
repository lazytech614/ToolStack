import type { StarterKit } from "../types";

export const astroSaas: StarterKit = {
  id: "astrowind",
  name: "AstroWind",
  description:
    "A fast, SEO-optimized template for building SaaS marketing sites and landing pages with Astro and Tailwind CSS",
  framework: "Astro",
  stack: ["Astro", "Tailwind", "TypeScript"],
  features: {
    authentication: false,
    database: false,
    payments: false,
    email: false,
    storage: false,
    analytics: true,
    testing: false,
    docker: false,
  },
  techDetails: {},
  stars: 4400,
  repoUrl: "https://github.com/onwidget/astrowind",
  demoUrl: "https://astrowind.vercel.app",
  author: "onwidget",
  pricing: "Free",
  lastUpdated: "2025-08-19",
};
