import type { VSCodeExtension } from "../types";

// Note: Cursor ships as its own standalone editor (a VS Code fork) rather than a
// traditional marketplace extension. It's included here for completeness since it's
// part of the same AI-coding-tool landscape, but installCount/rating reflect the
// editor's own download/review stats rather than a VS Code Marketplace listing.
export const cursor: VSCodeExtension = {
  id: "cursor.cursor-editor",
  name: "Cursor",
  description:
    "An AI-first code editor built as a VS Code fork, with multi-file editing, chat, and agent mode built in",
  publisher: "Anysphere",
  category: ["AI"],
  installs: 5000000,
  rating: 4.5,
  ratingCount: 900,
  tags: ["ai", "editor", "autocomplete", "agent"],
  marketplaceUrl: "https://cursor.com/downloads",
  isVerified: true,
  isFree: false,
  lastUpdated: "2025-12-20",
};
