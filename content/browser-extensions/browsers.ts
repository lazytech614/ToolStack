import { Browser } from "./types";

export const BROWSERS: Browser[] = ["Chrome", "Firefox", "Safari", "Edge", "Arc"];

export const BROWSER_STORE_NAMES: Record<Browser, string> = {
  Chrome: "Chrome Web Store",
  Firefox: "Firefox Add-ons",
  Safari: "Safari Extensions Gallery",
  Edge: "Microsoft Edge Add-ons",
  Arc: "Arc Boosts / Chrome Web Store",
};
