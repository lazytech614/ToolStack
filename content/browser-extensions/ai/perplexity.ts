import { BrowserExtension } from "../types";

export const perplexity: BrowserExtension = {
  id: "perplexity-ai-companion",
  name: "Perplexity – AI Companion",
  description:
    "Ask questions, summarize pages, and get cited, real-time answers directly from your browser toolbar.",
  publisher: "Perplexity AI",
  category: ["AI", "Productivity"],
  browsers: ["Chrome", "Edge", "Arc"],
  storeUrls: {
    Chrome:
      "https://chromewebstore.google.com/detail/perplexity-ai-companion/hlgbcneanomplepojfcnclggenpcoldo",
  },
  installs: 3000000,
  rating: 4.5,
  ratingCount: 8800,
  tags: ["ai-search", "answer-engine", "summarization", "citations"],
  isFree: true,
  isOpenSource: false,
  lastUpdated: "2024-04-22",
};
