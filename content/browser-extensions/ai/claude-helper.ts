import { BrowserExtension } from "../types";

export const claudeHelper: BrowserExtension = {
  id: "claude-in-chrome",
  name: "Claude for Chrome",
  description:
    "Anthropic's official browsing agent — lets Claude read pages, fill forms, and complete tasks directly inside Chrome.",
  publisher: "Anthropic",
  category: ["AI", "Productivity"],
  browsers: ["Chrome"],
  storeUrls: {
    Chrome:
      "https://chromewebstore.google.com/detail/claude-for-chrome/fdhboaidmnokgahakgcpjkgphopllfbc",
  },
  installs: 500000,
  rating: 4.5,
  ratingCount: 900,
  tags: ["claude", "ai-agent", "browsing-agent", "automation"],
  isFree: true,
  isOpenSource: false,
  lastUpdated: "2025-09-01",
};
