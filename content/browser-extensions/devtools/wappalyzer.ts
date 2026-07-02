import { BrowserExtension } from "../types";

export const wappalyzer: BrowserExtension = {
  id: "wappalyzer",
  name: "Wappalyzer",
  description:
    "Identify the technology stack of any website — CMS, frameworks, analytics, hosting, and more — in one click.",
  publisher: "Wappalyzer",
  category: ["DevTools", "Productivity"],
  browsers: ["Chrome", "Firefox", "Edge"],
  storeUrls: {
    Chrome:
      "https://chromewebstore.google.com/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg",
    Firefox: "https://addons.mozilla.org/en-US/firefox/addon/wappalyzer/",
    Edge: "https://microsoftedge.microsoft.com/addons/detail/wappalyzer-technology-p/mnbndgmknlpdjdnjfoocpbibfoinapon",
  },
  installs: 2000000,
  rating: 4.3,
  ratingCount: 3300,
  tags: ["tech-stack-detection", "web-research", "competitive-analysis"],
  isFree: true,
  isOpenSource: false,
  lastUpdated: "2024-01-25",
};
