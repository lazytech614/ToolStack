import { BrowserExtension } from "../types";

export const oneTab: BrowserExtension = {
  id: "one-tab",
  name: "OneTab",
  description:
    "Convert all your open tabs into a list, saving up to 95% memory and reducing tab clutter.",
  publisher: "OneTab",
  category: ["Productivity"],
  browsers: ["Chrome", "Firefox", "Edge"],
  storeUrls: {
    Chrome: "https://chromewebstore.google.com/detail/onetab/chphlpgkkbolifaimnlloiipkdnihall",
    Firefox: "https://addons.mozilla.org/en-US/firefox/addon/onetab/",
    Edge: "https://microsoftedge.microsoft.com/addons/detail/onetab/hoightlnaidjaefjmbfceakncmapldjh",
  },
  installs: 2000000,
  rating: 4.6,
  ratingCount: 15000,
  tags: ["tab-management", "productivity", "memory-saver"],
  isFree: true,
  isOpenSource: false,
  lastUpdated: "2023-11-20",
};
