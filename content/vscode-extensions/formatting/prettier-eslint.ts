import type { VSCodeExtension } from "../types";

export const prettierEslint: VSCodeExtension = {
  id: "rvest.vs-code-prettier-eslint",
  name: "Prettier ESLint",
  description:
    "Formats JavaScript and TypeScript using prettier followed by eslint --fix, resolving conflicts between the two",
  publisher: "Rexford Essilfie",
  category: ["Formatting", "Linting"],
  installs: 900000,
  rating: 4.2,
  ratingCount: 140,
  tags: ["formatting", "linting", "javascript", "typescript"],
  marketplaceUrl:
    "https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint",
  repoUrl: "https://github.com/rexfordessilfie/vs-code-prettier-eslint",
  isVerified: false,
  isFree: true,
  lastUpdated: "2024-11-03",
};
