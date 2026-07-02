import { BrowserExtension } from "../types";

export const jsonFormatter: BrowserExtension = {
  id: "json-formatter",
  name: "JSON Formatter",
  description:
    "Makes JSON easy to read by rendering it in the browser with collapsible trees, syntax highlighting, and search.",
  publisher: "Callum Locke",
  category: ["DevTools"],
  browsers: ["Chrome", "Firefox"],
  storeUrls: {
    Chrome:
      "https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa",
    Firefox: "https://addons.mozilla.org/en-US/firefox/addon/jsonview/",
  },
  installs: 3000000,
  rating: 4.5,
  ratingCount: 5300,
  tags: ["json", "formatting", "api-debugging", "syntax-highlighting"],
  repoUrl: "https://github.com/callumlocke/json-formatter",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2023-09-12",
};
