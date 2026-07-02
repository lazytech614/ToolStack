import type { Category } from "./types";

export interface CategoryMeta {
  id: Category;
  label: string;
  description: string;
}

export const TEMPLATE_CATEGORIES: CategoryMeta[] = [
  {
    id: "SaaS",
    label: "SaaS",
    description: "Subscription products with auth, billing, and a dashboard",
  },
  {
    id: "E-commerce",
    label: "E-commerce",
    description: "Storefronts with product catalogs, carts, and checkout",
  },
  { id: "Dashboard", label: "Dashboard", description: "Data-dense admin and analytics UIs" },
  {
    id: "Blog",
    label: "Blog",
    description: "Markdown or MDX-powered writing and publishing sites",
  },
  {
    id: "Portfolio",
    label: "Portfolio",
    description: "Personal sites for showcasing work and resumes",
  },
  { id: "Admin", label: "Admin", description: "Backend management panels for internal tools" },
  {
    id: "Full Stack",
    label: "Full Stack",
    description: "End-to-end typesafe application starters",
  },
];

export const allTemplateCategories: Category[] = TEMPLATE_CATEGORIES.map((c) => c.id);
