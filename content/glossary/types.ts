export type GlossaryCategory = "networking" | "javascript" | "devops" | "database" | "patterns";

export type GlossaryTerm = {
  id: string;
  term: string;
  definition: string;
  category: GlossaryCategory;
  related?: string[];
};
