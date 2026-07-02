import type { Category, VSCodeExtension } from "./types";

/** Filter extensions by a single category */
export function getExtensionsByCategory(
  extensions: VSCodeExtension[],
  category: Category,
): VSCodeExtension[] {
  return extensions.filter((ext) => ext.category.includes(category));
}

/** Filter extensions by publisher (case-insensitive) */
export function getExtensionsByPublisher(
  extensions: VSCodeExtension[],
  publisher: string,
): VSCodeExtension[] {
  const p = publisher.toLowerCase();
  return extensions.filter((ext) => ext.publisher.toLowerCase() === p);
}

/** Simple case-insensitive search across name, description, and tags */
export function searchExtensions(extensions: VSCodeExtension[], query: string): VSCodeExtension[] {
  const q = query.trim().toLowerCase();
  if (!q) return extensions;
  return extensions.filter(
    (ext) =>
      ext.name.toLowerCase().includes(q) ||
      ext.description.toLowerCase().includes(q) ||
      ext.tags.some((tag) => tag.toLowerCase().includes(q)),
  );
}

/** Sort extensions by install count, descending */
export function sortByInstalls(extensions: VSCodeExtension[]): VSCodeExtension[] {
  return [...extensions].sort((a, b) => b.installs - a.installs);
}

/** Sort extensions by rating, descending (ties broken by rating count) */
export function sortByRating(extensions: VSCodeExtension[]): VSCodeExtension[] {
  return [...extensions].sort((a, b) => b.rating - a.rating || b.ratingCount - a.ratingCount);
}

/** Sort extensions by most recently updated */
export function sortByLastUpdated(extensions: VSCodeExtension[]): VSCodeExtension[] {
  return [...extensions].sort(
    (a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime(),
  );
}

/** Lookup a single extension by its id (publisher.extension-name) */
export function getExtensionById(
  extensions: VSCodeExtension[],
  id: string,
): VSCodeExtension | undefined {
  return extensions.find((ext) => ext.id === id);
}

/** Format a raw install count into a compact human-readable string, e.g. 32000000 -> "32M" */
export function formatInstalls(installs: number): string {
  if (installs >= 1_000_000)
    return `${(installs / 1_000_000).toFixed(installs % 1_000_000 === 0 ? 0 : 1)}M`;
  if (installs >= 1_000) return `${(installs / 1_000).toFixed(installs % 1_000 === 0 ? 0 : 1)}K`;
  return `${installs}`;
}
