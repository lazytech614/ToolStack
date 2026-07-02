import { BrowserExtension } from "../types";

export const fontsNinja: BrowserExtension = {
  id: "fonts-ninja",
  name: "Fonts Ninja",
  description:
    "Identify fonts on any website instantly, inspect type properties, and try fonts in your own text.",
  publisher: "Fonts Ninja",
  category: ["Design"],
  browsers: ["Chrome", "Firefox", "Edge", "Safari"],
  storeUrls: {
    Chrome:
      "https://chromewebstore.google.com/detail/fonts-ninja-font-inspect/eljapbgkmcgabaggmnnbdilbdriflbpo",
    Firefox: "https://addons.mozilla.org/en-US/firefox/addon/fonts-ninja/",
  },
  installs: 1000000,
  rating: 4.8,
  ratingCount: 4200,
  tags: ["font-identifier", "typography", "web-inspector"],
  isFree: true,
  isOpenSource: false,
  lastUpdated: "2024-02-14",
};
