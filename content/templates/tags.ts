export interface TagGroup {
  label: string;
  tags: string[];
}

export const TEMPLATE_TAG_GROUPS: TagGroup[] = [
  {
    label: "Language",
    tags: ["typescript", "javascript"],
  },
  {
    label: "Styling",
    tags: ["tailwind", "scss", "material-ui"],
  },
  {
    label: "Data & Backend",
    tags: ["prisma", "drizzle", "postgres", "mdx", "markdown"],
  },
  {
    label: "Payments",
    tags: ["stripe", "shopify"],
  },
  {
    label: "Purpose",
    tags: ["portfolio", "blog", "dashboard", "admin", "e-commerce", "vite"],
  },
];

export const allTemplateTags: string[] = TEMPLATE_TAG_GROUPS.flatMap((g) => g.tags);
