import type { VSCodeExtension } from "../types";

export const cody: VSCodeExtension = {
  id: "sourcegraph.cody-ai",
  name: "Cody: AI Coding Agent with Autocomplete & Chat",
  description:
    "Sourcegraph's AI coding assistant with codebase-aware chat, autocomplete, and refactoring commands",
  publisher: "Sourcegraph",
  category: ["AI"],
  installs: 2600000,
  rating: 4.2,
  ratingCount: 380,
  tags: ["ai", "autocomplete", "chat", "codebase-context"],
  marketplaceUrl: "https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai",
  repoUrl: "https://github.com/sourcegraph/cody",
  isVerified: true,
  isFree: true,
  lastUpdated: "2025-07-21",
};
