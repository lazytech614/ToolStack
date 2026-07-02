import type { FeatureKey, Framework, Pricing, StarterKit } from "./types";

/** Filter kits by framework */
export function getKitsByFramework(kits: StarterKit[], framework: Framework): StarterKit[] {
  return kits.filter((kit) => kit.framework === framework);
}

/** Filter kits that have a given feature enabled */
export function getKitsByFeature(kits: StarterKit[], feature: FeatureKey): StarterKit[] {
  return kits.filter((kit) => kit.features[feature]);
}

/** Filter kits by pricing model */
export function getKitsByPricing(kits: StarterKit[], pricing: Pricing): StarterKit[] {
  return kits.filter((kit) => kit.pricing === pricing);
}

/** Simple case-insensitive search across name, description, and stack */
export function searchKits(kits: StarterKit[], query: string): StarterKit[] {
  const q = query.trim().toLowerCase();
  if (!q) return kits;
  return kits.filter(
    (kit) =>
      kit.name.toLowerCase().includes(q) ||
      kit.description.toLowerCase().includes(q) ||
      kit.stack.some((tech) => tech.toLowerCase().includes(q)),
  );
}

/** Count how many of the boolean features a kit has enabled */
export function countFeatures(kit: StarterKit): number {
  return Object.values(kit.features).filter(Boolean).length;
}

/** Sort kits by GitHub stars, descending */
export function sortByStars(kits: StarterKit[]): StarterKit[] {
  return [...kits].sort((a, b) => b.stars - a.stars);
}

/** Sort kits by most recently updated */
export function sortByLastUpdated(kits: StarterKit[]): StarterKit[] {
  return [...kits].sort(
    (a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime(),
  );
}

/** Lookup a single kit by its id (name-based) */
export function getKitById(kits: StarterKit[], id: string): StarterKit | undefined {
  return kits.find((kit) => kit.id === id);
}
