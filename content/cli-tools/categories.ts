import type { Category } from "./types";

export interface CategoryMeta {
  id: Category;
  label: string;
  description: string;
  icon: string; // lucide-react icon name
}

export const CLI_TOOLS_CATEGORIES: CategoryMeta[] = [
  {
    id: "Git",
    label: "Git",
    description: "Tools that make working with Git and GitHub faster",
    icon: "GitBranch",
  },
  {
    id: "Productivity",
    label: "Productivity",
    description: "General terminal productivity boosters",
    icon: "Zap",
  },
  {
    id: "File Management",
    label: "File Management",
    description: "Browse, inspect, and manage files and directories",
    icon: "FolderOpen",
  },
  {
    id: "Network",
    label: "Network",
    description: "HTTP clients and networking utilities",
    icon: "Globe",
  },
  {
    id: "AI",
    label: "AI",
    description: "AI-powered coding and chat assistants for the terminal",
    icon: "Sparkles",
  },
  {
    id: "Docker",
    label: "Docker",
    description: "Tools for working with containers and images",
    icon: "Container",
  },
];

export const allCliToolsCategories: Category[] = CLI_TOOLS_CATEGORIES.map((c) => c.id);
