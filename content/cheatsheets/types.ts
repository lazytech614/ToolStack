import { BundledLanguage } from "shiki";

export type CheatsheetSnippet = {
  code: string;
  description?: string;
};

export type CheatsheetSection = {
  title: string;
  language: BundledLanguage;
  snippets: CheatsheetSnippet[];
};

export type CheatsheetMeta = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  tag: "language" | "tool" | "framework" | "styling";
};

export type Cheatsheet = CheatsheetMeta & {
  sections: CheatsheetSection[];
};
