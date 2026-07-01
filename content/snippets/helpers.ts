import { snippets } from "./index";

export function getSnippet(id: string) {
  return snippets.find((s) => s.id === id);
}

export function getSnippetsByTag(tag: string) {
  return snippets.filter((s) => s.tags.includes(tag));
}
