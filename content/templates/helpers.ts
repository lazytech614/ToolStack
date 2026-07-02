import type { Category, Framework, Template } from "./types";

/** Filter templates by framework */
export function getTemplatesByFramework(templates: Template[], framework: Framework): Template[] {
  return templates.filter((t) => t.framework === framework);
}

/** Filter templates by category */
export function getTemplatesByCategory(templates: Template[], category: Category): Template[] {
  return templates.filter((t) => t.category === category);
}

/** Filter templates that include a given tag */
export function getTemplatesByTag(templates: Template[], tag: string): Template[] {
  const t = tag.toLowerCase();
  return templates.filter((template) => template.tags.some((tg) => tg.toLowerCase() === t));
}

/** Simple case-insensitive search across name, description, and tags */
export function searchTemplates(templates: Template[], query: string): Template[] {
  const q = query.trim().toLowerCase();
  if (!q) return templates;
  return templates.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.tags.some((tag) => tag.toLowerCase().includes(q)),
  );
}

/** Sort templates by GitHub stars, descending */
export function sortByStars(templates: Template[]): Template[] {
  return [...templates].sort((a, b) => b.stars - a.stars);
}

/** Lookup a single template by its id (name-based) */
export function getTemplateById(templates: Template[], id: string): Template | undefined {
  return templates.find((t) => t.id === id);
}
