export type Framework = "Next.js" | "React" | "Astro" | "Vue" | "Svelte";

export type Category =
  "SaaS" | "E-commerce" | "Dashboard" | "Blog" | "Portfolio" | "Admin" | "Full Stack";

export interface Template {
  id: string;
  name: string;
  description: string;
  framework: Framework;
  category: Category;
  stars: number;
  tags: string[];
  repoUrl: string;
  previewUrl?: string;
  thumbnail?: string;
  author: string;
}
