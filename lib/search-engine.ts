import type { SearchItem } from "@/types/search-types";
import { SEARCH_INDEX } from "@/constants/configs/search-index";

const MAX_RESULTS = 20;

function score(item: SearchItem, query: string) {
  const q = query.toLowerCase();

  let score = 0;

  // Exact title
  if (item.title.toLowerCase() === q) score += 100;

  // Starts with
  if (item.title.toLowerCase().startsWith(q)) score += 75;

  // Title contains
  if (item.title.toLowerCase().includes(q)) score += 50;

  // Description
  if (item.description.toLowerCase().includes(q)) score += 20;

  // Tags
  if (item.tags?.some((tag) => tag.toLowerCase().includes(q))) score += 25;

  // Keywords
  if (item.keywords?.some((keyword) => keyword.toLowerCase().includes(q))) score += 25;

  return score;
}

export function search(query: string): SearchItem[] {
  if (!query.trim()) return [];

  return SEARCH_INDEX.map((item) => ({
    item,
    score: score(item, query),
  }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_RESULTS)
    .map((result) => result.item);
}

export function groupResults(results: SearchItem[]) {
  return {
    Tools: results.filter((r) => r.category === "Tools"),
    Learn: results.filter((r) => r.category === "Learn"),
    Resources: results.filter((r) => r.category === "Resources"),
  };
}
