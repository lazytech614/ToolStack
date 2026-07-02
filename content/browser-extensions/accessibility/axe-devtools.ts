import { BrowserExtension } from "../types";

export const axeDevtools: BrowserExtension = {
  id: "axe-devtools",
  name: "axe DevTools – Web Accessibility Testing",
  description:
    "Automated accessibility testing built into DevTools, flagging WCAG issues with guided remediation.",
  publisher: "Deque Systems",
  category: ["Accessibility", "DevTools"],
  browsers: ["Chrome", "Firefox", "Edge"],
  storeUrls: {
    Chrome:
      "https://chromewebstore.google.com/detail/axe-devtools-web-accessi/lhdoppojpmngadmnindnejefpokejbdd",
    Firefox: "https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/",
    Edge: "https://microsoftedge.microsoft.com/addons/detail/axe-devtools-web-access/blaocfojfphealkjkgeidplpccecleoj",
  },
  installs: 1000000,
  rating: 4.6,
  ratingCount: 1100,
  tags: ["accessibility", "wcag", "a11y", "audit"],
  isFree: true,
  isOpenSource: false,
  lastUpdated: "2024-04-01",
};
