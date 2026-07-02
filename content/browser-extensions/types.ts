export type Browser = "Chrome" | "Firefox" | "Safari" | "Edge" | "Arc";

export type ExtensionCategory =
  "Productivity" | "DevTools" | "AI" | "Design" | "Privacy" | "Accessibility";

export interface BrowserExtension {
  id: string;
  name: string;
  description: string;
  publisher: string;
  category: ExtensionCategory[];
  browsers: Browser[];
  storeUrls: Partial<Record<Browser, string>>;
  installs: number;
  rating: number;
  ratingCount: number;
  tags: string[];
  repoUrl?: string;
  isFree: boolean;
  isOpenSource: boolean;
  lastUpdated: string;
}
