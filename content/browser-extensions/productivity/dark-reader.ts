import { BrowserExtension } from "../types";

export const darkReader: BrowserExtension = {
  id: "dark-reader",
  name: "Dark Reader",
  description:
    "Enables a dark theme for every website. Adjust brightness, contrast, and sepia filters.",
  publisher: "Dark Reader Ltd",
  category: ["Productivity", "Design"],
  browsers: ["Chrome", "Firefox", "Edge", "Safari"],
  storeUrls: {
    Chrome: "https://chromewebstore.google.com/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh",
    Firefox: "https://addons.mozilla.org/en-US/firefox/addon/darkreader/",
    Edge: "https://microsoftedge.microsoft.com/addons/detail/dark-reader/ifomfmkkkbgofmigbmcnjmbfjjfckhco",
    Safari: "https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180",
  },
  installs: 7000000,
  rating: 4.7,
  ratingCount: 27000,
  tags: ["dark-mode", "accessibility", "eye-strain", "theming"],
  repoUrl: "https://github.com/darkreader/darkreader",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2024-03-15",
};
