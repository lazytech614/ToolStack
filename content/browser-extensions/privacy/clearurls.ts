import { BrowserExtension } from "../types";

export const clearUrls: BrowserExtension = {
  id: "clearurls",
  name: "ClearURLs",
  description:
    "Automatically removes tracking parameters (UTM tags, click IDs, etc.) from URLs as you browse.",
  publisher: "Kevin Röbert",
  category: ["Privacy"],
  browsers: ["Chrome", "Firefox", "Edge"],
  storeUrls: {
    Chrome: "https://chromewebstore.google.com/detail/clearurls/lckanjgmijmafbedllaakclkaicjfmnk",
    Firefox: "https://addons.mozilla.org/en-US/firefox/addon/clearurls/",
    Edge: "https://microsoftedge.microsoft.com/addons/detail/clearurls/adbjebkbcolapdheghjkedmbjndamgpi",
  },
  installs: 700000,
  rating: 4.8,
  ratingCount: 3500,
  tags: ["url-tracking", "privacy", "utm-removal"],
  repoUrl: "https://github.com/ClearURLs/Addon",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2023-10-05",
};
