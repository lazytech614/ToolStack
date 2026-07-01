import type { BoilerplateCategory } from "./types";

export interface CategoryMeta {
  label: BoilerplateCategory;
  slug: string;
  description: string;
  /** lucide-react icon name */
  icon: string;
}

export const categories: CategoryMeta[] = [
  {
    label: "Full Stack",
    slug: "full-stack",
    description:
      "End-to-end applications with frontend, backend, and database wired together out of the box.",
    icon: "Layers",
  },
  {
    label: "Frontend",
    slug: "frontend",
    description:
      "Client-side apps, static sites, and UI-focused starters with no bundled backend.",
    icon: "LayoutTemplate",
  },
  {
    label: "Backend",
    slug: "backend",
    description: "APIs, servers, and services with no bundled UI.",
    icon: "Server",
  },
  {
    label: "Mobile",
    slug: "mobile",
    description: "Native and cross-platform mobile app starters.",
    icon: "Smartphone",
  },
];

export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryByLabel(
  label: BoilerplateCategory
): CategoryMeta | undefined {
  return categories.find((c) => c.label === label);
}
