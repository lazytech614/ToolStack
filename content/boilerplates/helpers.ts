import { fullStackBoilerplates } from "./full-stack";
import { frontendBoilerplates } from "./frontend";
import { backendBoilerplates } from "./backend";
import { mobileBoilerplates } from "./mobile";
import type { Boilerplate, BoilerplateCategory, Difficulty } from "./types";

/** Every boilerplate across all categories, assembled once. */
export const allBoilerplates: Boilerplate[] = [
  ...fullStackBoilerplates,
  ...frontendBoilerplates,
  ...backendBoilerplates,
  ...mobileBoilerplates,
];

export function getBoilerplateBySlug(slug: string): Boilerplate | undefined {
  return allBoilerplates.find((b) => b.slug === slug);
}

export function getBoilerplatesByCategory(category: BoilerplateCategory): Boilerplate[] {
  return allBoilerplates.filter((b) => b.category === category);
}

export function getBoilerplatesByStack(stack: string): Boilerplate[] {
  return allBoilerplates.filter((b) =>
    b.stack.some((s) => s.toLowerCase() === stack.toLowerCase()),
  );
}

export function getBoilerplatesByDifficulty(difficulty: Difficulty): Boilerplate[] {
  return allBoilerplates.filter((b) => b.difficulty === difficulty);
}

export function getFeaturedBoilerplates(minStars = 10000): Boilerplate[] {
  return [...allBoilerplates].filter((b) => b.stars >= minStars).sort((a, b) => b.stars - a.stars);
}

export function searchBoilerplates(query: string): Boilerplate[] {
  const q = query.toLowerCase().trim();
  if (!q) return allBoilerplates;

  return allBoilerplates.filter((b) =>
    [b.name, b.description, ...b.stack, ...b.includes].join(" ").toLowerCase().includes(q),
  );
}

/** Turn an arbitrary name into a URL-safe slug, e.g. for new entries. */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
