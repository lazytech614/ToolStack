import { BrowserExtension } from "../types";

export const bitwarden: BrowserExtension = {
  id: "bitwarden",
  name: "Bitwarden – Password Manager",
  description: "Securely generate, store, and share passwords and passkeys from any browser.",
  publisher: "Bitwarden Inc.",
  category: ["Productivity", "Privacy"],
  browsers: ["Chrome", "Firefox", "Edge", "Safari", "Arc"],
  storeUrls: {
    Chrome:
      "https://chromewebstore.google.com/detail/bitwarden-password-manage/nngceckbapebfimnlniiiahkandclblb",
    Firefox: "https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/",
    Edge: "https://microsoftedge.microsoft.com/addons/detail/bitwarden-free-password/jbkfoedolllekgbhcbcoahefnbanhhlh",
    Safari: "https://apps.apple.com/us/app/bitwarden/id1352778147",
  },
  installs: 10000000,
  rating: 4.7,
  ratingCount: 12000,
  tags: ["password-manager", "security", "passkeys", "vault"],
  repoUrl: "https://github.com/bitwarden/clients",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2024-04-10",
};
