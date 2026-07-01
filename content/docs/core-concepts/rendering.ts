import { Doc } from "../types";

export const rendering: Doc = {
  slug: "rendering",
  title: "Rendering",
  description: "How content blocks are turned into the UI you see on each page.",
  category: "core-concepts",
  order: 3,
  content: [
    {
      type: "paragraph",
      text: "Docs, cheatsheets, and other structured content are stored as arrays of typed content blocks rather than raw markdown or HTML. This keeps rendering predictable and lets every block type control its own styling.",
    },
    {
      type: "heading",
      level: 2,
      text: "Content blocks",
    },
    {
      type: "paragraph",
      text: "A doc's content field is an array of ContentBlock objects. Each block has a type discriminator that determines which React component renders it.",
    },
    {
      type: "table",
      headers: ["Block type", "Renders as"],
      rows: [
        ["heading", "h2 or h3 with anchor id for the TOC"],
        ["paragraph", "Styled prose text"],
        ["code", "Syntax-highlighted code block with optional filename"],
        ["callout", "Colored box (info, warning, tip, danger)"],
        ["list", "Ordered or unordered list"],
        ["table", "Responsive data table"],
        ["divider", "Horizontal rule"],
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "The block renderer",
    },
    {
      type: "code",
      language: "typescript",
      filename: "components/docs/block-renderer.tsx",
      code: `function BlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      return <Heading level={block.level}>{block.text}</Heading>;
    case "paragraph":
      return <Paragraph>{block.text}</Paragraph>;
    case "code":
      return <CodeBlock language={block.language} code={block.code} />;
    default:
      return null;
  }
}`,
    },
    {
      type: "callout",
      variant: "tip",
      title: "Why not markdown?",
      text: "Typed blocks give full type safety and autocomplete when authoring docs, and avoid an extra markdown-parsing step at build time.",
    },
  ],
};
