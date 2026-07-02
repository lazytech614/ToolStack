import { BrowserExtension } from "../types";

export const privacyBadger: BrowserExtension = {
  id: "privacy-badger",
  name: "Privacy Badger",
  description:
    "Automatically learns to block invisible trackers based on their behavior, without relying on blocklists.",
  publisher: "Electronic Frontier Foundation (EFF)",
  category: ["Privacy"],
  browsers: ["Chrome", "Firefox", "Edge"],
  storeUrls: {
    Chrome:
      "https://chromewebstore.google.com/detail/privacy-badger/pkehgijcmpdhfbdbbnkijodmdjhbjlgp",
    Firefox: "https://addons.mozilla.org/en-US/firefox/addon/privacy-badger17/",
    Edge: "https://microsoftedge.microsoft.com/addons/detail/privacy-badger/dpfggkndljpcocjfaphdafapnfblkeih",
  },
  installs: 3000000,
  rating: 4.6,
  ratingCount: 6100,
  tags: ["tracker-blocking", "privacy", "eff", "machine-learning"],
  repoUrl: "https://github.com/EFForg/privacybadger",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2024-03-20",
};
