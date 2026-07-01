import type { BundledLanguage } from "shiki";

export type HeadingBlock = {
  type: "heading";
  level: 2 | 3;
  text: string;
};

export type ParagraphBlock = {
  type: "paragraph";
  text: string;
};

export type CodeBlock = {
  type: "code";
  language: BundledLanguage;
  code: string;
  filename?: string;
};

export type CalloutBlock = {
  type: "callout";
  variant: "info" | "warning" | "tip" | "danger";
  title: string;
  text: string;
};

export type ListBlock = {
  type: "list";
  ordered?: boolean;
  items: string[];
};

export type TableBlock = {
  type: "table";
  headers: string[];
  rows: string[][];
};

export type DividerBlock = {
  type: "divider";
};

export type ContentBlock =
  HeadingBlock | ParagraphBlock | CodeBlock | CalloutBlock | ListBlock | TableBlock | DividerBlock;

export type DocCategory = "getting-started" | "core-concepts" | "api-reference";

export type Doc = {
  slug: string;
  title: string;
  description: string;
  category: DocCategory;
  order: number;
  content: ContentBlock[];
};
