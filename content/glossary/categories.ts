export const glossaryCategories = [
  "all",
  "networking",
  "javascript",
  "devops",
  "database",
  "patterns",
] as const;

export type GlossaryCategoryFilter = (typeof glossaryCategories)[number];
