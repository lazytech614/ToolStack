import { browserExtensions } from "./index";
import { BrowserExtension, Browser, ExtensionCategory } from "./types";

export const getExtensionById = (id: string): BrowserExtension | undefined =>
  browserExtensions.find((ext) => ext.id === id);

export const getExtensionsByCategory = (category: ExtensionCategory): BrowserExtension[] =>
  browserExtensions.filter((ext) => ext.category.includes(category));

export const getExtensionsByBrowser = (browser: Browser): BrowserExtension[] =>
  browserExtensions.filter((ext) => ext.browsers.includes(browser));

export const getFreeExtensions = (): BrowserExtension[] =>
  browserExtensions.filter((ext) => ext.isFree);

export const getOpenSourceExtensions = (): BrowserExtension[] =>
  browserExtensions.filter((ext) => ext.isOpenSource);

export const getTopRated = (minRating = 4.5): BrowserExtension[] =>
  browserExtensions.filter((ext) => ext.rating >= minRating).sort((a, b) => b.rating - a.rating);

export const getMostInstalled = (limit = 10): BrowserExtension[] =>
  [...browserExtensions].sort((a, b) => b.installs - a.installs).slice(0, limit);

export const searchExtensions = (query: string): BrowserExtension[] => {
  const q = query.trim().toLowerCase();
  if (!q) return browserExtensions;

  return browserExtensions.filter(
    (ext) =>
      ext.name.toLowerCase().includes(q) ||
      ext.description.toLowerCase().includes(q) ||
      ext.publisher.toLowerCase().includes(q) ||
      ext.tags.some((tag) => tag.toLowerCase().includes(q)),
  );
};
