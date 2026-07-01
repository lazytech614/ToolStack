import { Doc } from "../types";

export const quickStart: Doc = {
  slug: "quick-start",
  title: "Quick Start",
  description: "Get up and running with ToolStack in under two minutes.",
  category: "getting-started",
  order: 2,
  content: [
    {
      type: "paragraph",
      text: "This guide walks you through the three most common things developers do on ToolStack: finding a snippet, opening a cheatsheet, and looking up a term.",
    },
    {
      type: "heading",
      level: 2,
      text: "1. Find a snippet",
    },
    {
      type: "paragraph",
      text: "Navigate to /snippets and type what you're looking for into the search bar. You can filter by language using the pills below the search input.",
    },
    {
      type: "code",
      language: "bash",
      filename: "example search",
      code: `# What you type into the search bar
debounce
useLocalStorage
truncate text`,
    },
    {
      type: "callout",
      variant: "info",
      title: "Search tip",
      text: "Search matches against title, description, and tags — so 'async' will surface snippets tagged with async even if the word isn't in the title.",
    },
    {
      type: "heading",
      level: 2,
      text: "2. Open a cheatsheet",
    },
    {
      type: "paragraph",
      text: "Go to /cheatsheets and pick a language or tool. Each cheatsheet is split into sections — use the sticky sidebar on the left to jump directly to the section you need.",
    },
    {
      type: "heading",
      level: 2,
      text: "3. Look up a term",
    },
    {
      type: "paragraph",
      text: "Visit /glossary and either search for a term or use the A–Z jump bar to browse. Each definition includes related terms so you can explore connected concepts.",
    },
    {
      type: "callout",
      variant: "tip",
      title: "Keyboard shortcut",
      text: "Press Cmd+K (Mac) or Ctrl+K (Windows) anywhere on the site to open the command palette and jump directly to any page.",
    },
  ],
};
