import type { Category } from "./types";

export interface CategoryMeta {
  id: Category;
  label: string;
  description: string;
  icon: string; // lucide-react icon name
}

export const VSCODE_EXTENSIONS_CATEGORIES: CategoryMeta[] = [
  {
    id: "Linting",
    label: "Linting",
    description: "Catch bugs and enforce code quality rules",
    icon: "ShieldCheck",
  },
  {
    id: "Formatting",
    label: "Formatting",
    description: "Auto-format code on save for a consistent style",
    icon: "AlignLeft",
  },
  {
    id: "AI",
    label: "AI",
    description: "AI-powered completions, chat, and coding agents",
    icon: "Sparkles",
  },
  {
    id: "Git",
    label: "Git",
    description: "Supercharge version control inside the editor",
    icon: "GitBranch",
  },
  {
    id: "Themes",
    label: "Themes",
    description: "Color themes and icon packs for the editor UI",
    icon: "Palette",
  },
  {
    id: "Snippets",
    label: "Snippets",
    description: "Reusable code snippets and boilerplate generators",
    icon: "Code2",
  },
  {
    id: "Docker",
    label: "Docker",
    description: "Manage containers, images, and dev containers",
    icon: "Container",
  },
  {
    id: "Testing",
    label: "Testing",
    description: "Run and debug tests without leaving the editor",
    icon: "FlaskConical",
  },
];

export const allVscodeExtensionsCategories: Category[] = VSCODE_EXTENSIONS_CATEGORIES.map(
  (c) => c.id,
);
