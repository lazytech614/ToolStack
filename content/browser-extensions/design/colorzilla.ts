import { BrowserExtension } from "../types";

export const colorzilla: BrowserExtension = {
  id: "colorzilla",
  name: "ColorZilla",
  description:
    "Advanced eyedropper, color picker, gradient generator, and CSS color analyzer for any webpage.",
  publisher: "ColorZilla / Alex Sirota",
  category: ["Design"],
  browsers: ["Chrome", "Firefox", "Edge"],
  storeUrls: {
    Chrome: "https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbnjnlbeecpepjnmadlbtcneb",
    Firefox: "https://addons.mozilla.org/en-US/firefox/addon/colorzilla/",
    Edge: "https://microsoftedge.microsoft.com/addons/detail/colorzilla/pplckfhbendfpjifdifonobrbdkpfmck",
  },
  installs: 6000000,
  rating: 4.7,
  ratingCount: 9700,
  tags: ["color-picker", "eyedropper", "css", "gradient-generator"],
  isFree: true,
  isOpenSource: false,
  lastUpdated: "2023-12-01",
};
