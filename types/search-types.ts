export type SearchCategory = "Tools" | "Learn" | "Resources";

export interface SearchItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: SearchCategory;
  keywords?: string[];
  tags?: string[];
}
