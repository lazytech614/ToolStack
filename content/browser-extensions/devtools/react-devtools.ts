import { BrowserExtension } from "../types";

export const reactDevtools: BrowserExtension = {
  id: "react-devtools",
  name: "React Developer Tools",
  description:
    "Adds React debugging tools to the browser's DevTools, letting you inspect the React component tree, props, and state.",
  publisher: "Meta Open Source",
  category: ["DevTools"],
  browsers: ["Chrome", "Firefox", "Edge"],
  storeUrls: {
    Chrome:
      "https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi",
    Firefox: "https://addons.mozilla.org/en-US/firefox/addon/react-devtools/",
    Edge: "https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil",
  },
  installs: 4000000,
  rating: 4.1,
  ratingCount: 2400,
  tags: ["react", "debugging", "component-tree", "devtools"],
  repoUrl: "https://github.com/facebook/react/tree/main/packages/react-devtools-extensions",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2024-03-01",
};
