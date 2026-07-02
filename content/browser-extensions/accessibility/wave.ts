import { BrowserExtension } from "../types";

export const wave: BrowserExtension = {
  id: "wave-evaluation-tool",
  name: "WAVE Evaluation Tool",
  description:
    "Visually flags accessibility errors, alerts, and structural issues directly on the rendered page.",
  publisher: "WebAIM",
  category: ["Accessibility"],
  browsers: ["Chrome", "Firefox", "Edge"],
  storeUrls: {
    Chrome:
      "https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh",
    Firefox: "https://addons.mozilla.org/en-US/firefox/addon/wave-accessibility-tool/",
    Edge: "https://microsoftedge.microsoft.com/addons/detail/wave-evaluation-tool/objdgnhipkcnkjcpgcnedkiigipmbcfg",
  },
  installs: 400000,
  rating: 4.4,
  ratingCount: 700,
  tags: ["accessibility", "wcag", "a11y", "visual-audit"],
  isFree: true,
  isOpenSource: false,
  lastUpdated: "2023-08-15",
};
