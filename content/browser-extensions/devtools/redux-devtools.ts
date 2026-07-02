import { BrowserExtension } from "../types";

export const reduxDevtools: BrowserExtension = {
  id: "redux-devtools",
  name: "Redux DevTools",
  description:
    "Inspect every Redux state and action payload, with time-travel debugging, action replay, and customizable UI.",
  publisher: "Redux DevTools contributors (Mihail Diordiev / reduxjs)",
  category: ["DevTools"],
  browsers: ["Chrome", "Firefox", "Edge"],
  storeUrls: {
    Chrome:
      "https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd",
    Firefox: "https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/",
    Edge: "https://microsoftedge.microsoft.com/addons/detail/redux-devtools/nnkgneoiohoecpdiaponcejilbhhikei",
  },
  installs: 1500000,
  rating: 4.6,
  ratingCount: 1900,
  tags: ["redux", "state-management", "time-travel-debugging", "devtools"],
  repoUrl: "https://github.com/reduxjs/redux-devtools",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2024-02-18",
};
