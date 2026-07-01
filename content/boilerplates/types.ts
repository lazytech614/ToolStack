export type BoilerplateCategory = "Full Stack" | "Frontend" | "Backend" | "Mobile";

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type License = "MIT" | "Apache-2.0" | "BSD-3-Clause" | "ISC";

export interface Boilerplate {
  /** Stable internal identifier, kept for data integrity / joins */
  id: string;
  /** URL-friendly identifier, e.g. "t3-stack" -> /boilerplates/t3-stack */
  slug: string;

  name: string;
  description: string;

  category: BoilerplateCategory;

  /** e.g. ['Next.js', 'Prisma', 'NextAuth', 'Tailwind'] */
  stack: string[];
  /** e.g. ['Authentication', 'Database', 'CI/CD', 'Docker'] */
  includes: string[];

  stars: number;
  /** ISO date string (YYYY-MM-DD) of the last known repo update */
  lastUpdated: string;

  repoUrl: string;
  previewUrl?: string;

  author: string;

  difficulty: Difficulty;

  featured?: boolean;

  license: License;
}
