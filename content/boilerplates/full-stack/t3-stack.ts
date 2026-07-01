import type { Boilerplate } from "../types";

export const t3Stack: Boilerplate = {
  id: "t3-stack",
  slug: "t3-stack",
  name: "Create T3 App",
  description:
    "CLI-scaffolded, full-stack, typesafe Next.js app combining tRPC, Prisma or Drizzle, NextAuth.js (Auth.js), and Tailwind CSS. Every piece is optional, so the generated project matches exactly what you ask for.",
  category: "Full Stack",
  stack: [
    "Next.js",
    "tRPC",
    "Prisma",
    "Drizzle ORM",
    "NextAuth.js",
    "Tailwind CSS",
    "TypeScript",
  ],
  includes: ["Authentication", "Database", "Type Safety", "ORM", "Validation"],
  stars: 28900,
  lastUpdated: "2026-06-13",
  repoUrl: "https://github.com/t3-oss/create-t3-app",
  previewUrl: "https://create.t3.gg",
  author: "t3-oss",
  difficulty: "Intermediate",
  license: "MIT",
};
