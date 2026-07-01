import { Doc } from "../types";

export const howToolsWork: Doc = {
  slug: "how-tools-work",
  title: "How Tools Work",
  description: "Understand how ToolStack organises and serves its content.",
  category: "core-concepts",
  order: 1,
  content: [
    {
      type: "paragraph",
      text: "Every piece of content on ToolStack — snippets, cheatsheets, glossary terms, and docs — is stored as structured TypeScript data and rendered at build time. There is no CMS, no database, and no API call required to display content.",
    },
    {
      type: "heading",
      level: 2,
      text: "Static generation",
    },
    {
      type: "paragraph",
      text: "All pages are statically generated using Next.js generateStaticParams. This means every route is pre-rendered at build time and served as plain HTML, making the site extremely fast and resilient.",
    },
    {
      type: "code",
      language: "typescript",
      filename: "app/cheatsheets/[slug]/page.tsx",
      code: `export function generateStaticParams() {
  return cheatsheets.map((s) => ({ slug: s.slug }));
}`,
    },
    {
      type: "heading",
      level: 2,
      text: "Content structure",
    },
    {
      type: "paragraph",
      text: "Each content type follows a strict TypeScript schema defined in the content directory. Adding new content is as simple as adding a new file to the relevant folder — the UI picks it up automatically.",
    },
    {
      type: "table",
      headers: ["Folder", "Content type"],
      rows: [
        ["content/learning/snippets", "Code snippets"],
        ["content/learning/cheatsheets", "Cheatsheet sections and snippets"],
        ["content/learning/glossary", "Glossary terms and definitions"],
        ["content/learning/docs", "Documentation pages"],
      ],
    },
    {
      type: "callout",
      variant: "info",
      title: "Adding content",
      text: "To add a new snippet, create a new file in content/learning/snippets and export it from the folder's index.ts. The listing page, search, and filters update automatically.",
    },
    {
      type: "heading",
      level: 2,
      text: "Rendering pipeline",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Content is defined as TypeScript objects, one per file",
        "Next.js reads the aggregated data at build time via generateStaticParams",
        "Each page receives its data as a plain prop — no fetch needed",
        "Components render the typed content blocks into HTML",
      ],
    },
  ],
};
