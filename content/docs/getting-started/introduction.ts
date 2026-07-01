import { Doc } from "../types";

export const introduction: Doc = {
  slug: "introduction",
  title: "Introduction",
  description: "What ToolStack is, who it's for, and how it's organised.",
  category: "getting-started",
  order: 1,
  content: [
    {
      type: "paragraph",
      text: "ToolStack is a developer reference platform — a single place for the snippets, cheatsheets, glossary terms, and guides you reach for every day. No ads, no clutter, just the information you need to keep moving.",
    },
    {
      type: "callout",
      variant: "tip",
      title: "Just getting started?",
      text: "Head to the Quick Start guide to have your first snippet copied and your first cheatsheet open in under two minutes.",
    },
    {
      type: "heading",
      level: 2,
      text: "What's included",
    },
    {
      type: "list",
      items: [
        "Snippets — copy-paste TypeScript, React, and CSS patterns",
        "Cheatsheets — grouped syntax references for Git, CSS, and more",
        "Glossary — plain-English definitions for common dev terms",
        "Docs — the guide you're reading right now",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Who it's for",
    },
    {
      type: "paragraph",
      text: "ToolStack is built for working developers who want reference material that is fast to search, easy to read, and impossible to get lost in. Whether you're a solo developer or part of a larger team, the tools here are designed to fit into your existing workflow.",
    },
    {
      type: "heading",
      level: 2,
      text: "How the docs are organised",
    },
    {
      type: "table",
      headers: ["Section", "What you'll find"],
      rows: [
        ["Getting Started", "Orientation and setup — start here"],
        ["Core Concepts", "How ToolStack works under the hood"],
        ["API Reference", "Endpoints, parameters, and rate limits"],
      ],
    },
  ],
};
