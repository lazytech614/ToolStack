import type { VSCodeExtension } from "../types";

export const playwright: VSCodeExtension = {
  id: "ms-playwright.playwright",
  name: "Playwright Test for VSCode",
  description:
    "Run, debug, and generate end-to-end Playwright tests directly from the editor, with a visual test explorer and trace viewer",
  publisher: "Microsoft",
  category: ["Testing"],
  installs: 3800000,
  rating: 4.7,
  ratingCount: 210,
  tags: ["playwright", "testing", "e2e", "automation"],
  marketplaceUrl: "https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright",
  repoUrl: "https://github.com/microsoft/playwright-vscode",
  isVerified: true,
  isFree: true,
  lastUpdated: "2025-12-01",
};
