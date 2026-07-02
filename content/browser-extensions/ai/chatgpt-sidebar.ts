import { BrowserExtension } from "../types";

export const chatgptSidebar: BrowserExtension = {
  id: "chatgpt-sidebar",
  name: "Sider: ChatGPT Sidebar + GPT-4o",
  description:
    "A persistent AI sidebar for summarizing pages, chatting, and writing assistance, accessible from any tab.",
  publisher: "Sider",
  category: ["AI", "Productivity"],
  browsers: ["Chrome", "Edge"],
  storeUrls: {
    Chrome:
      "https://chromewebstore.google.com/detail/sider-chatgpt-sidebar-gp/difoiogjjojoaoomphldepapgpbgkhkb",
    Edge: "https://microsoftedge.microsoft.com/addons/detail/sider-chatgpt-sidebar/hdmoblfnlkeklpddpgeikgokjjkpepea",
  },
  installs: 5000000,
  rating: 4.6,
  ratingCount: 22000,
  tags: ["chatgpt", "ai-assistant", "sidebar", "summarization"],
  isFree: true,
  isOpenSource: false,
  lastUpdated: "2024-05-05",
};
