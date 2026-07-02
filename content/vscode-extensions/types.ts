export type Category =
  "Linting" | "Formatting" | "AI" | "Git" | "Themes" | "Snippets" | "Docker" | "Testing";

export interface VSCodeExtension {
  id: string;
  name: string;
  description: string;
  publisher: string;
  category: Category[];
  installs: number;
  rating: number; // 1-5
  ratingCount: number;
  tags: string[];
  marketplaceUrl: string;
  repoUrl?: string;
  isVerified: boolean;
  isFree: boolean;
  lastUpdated: string;
  icon?: string;
}
