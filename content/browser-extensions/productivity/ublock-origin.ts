import { BrowserExtension } from "../types";

export const ublockOrigin: BrowserExtension = {
  id: "ublock-origin",
  name: "uBlock Origin",
  description: "An efficient wide-spectrum content blocker. Easy on CPU and memory.",
  publisher: "Raymond Hill (gorhill)",
  category: ["Privacy", "Productivity"],
  browsers: ["Chrome", "Firefox", "Edge"],
  storeUrls: {
    Chrome:
      "https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm",
    Firefox: "https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/",
    Edge: "https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak",
  },
  installs: 40000000,
  rating: 4.7,
  ratingCount: 155000,
  tags: ["ad-blocker", "content-blocker", "privacy", "security"],
  repoUrl: "https://github.com/gorhill/uBlock",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2024-05-01",
};
