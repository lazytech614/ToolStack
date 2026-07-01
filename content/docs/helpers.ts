import { docs } from "./index";
import { Doc, DocCategory, HeadingBlock } from "./types";

export function getDocBySlug(slug: string) {
  return docs.find((d) => d.slug === slug);
}

export function getDocsByCategory(category: DocCategory) {
  return docs.filter((d) => d.category === category).sort((a, b) => a.order - b.order);
}

export function getHeadings(doc: Doc) {
  return doc.content.filter((block): block is HeadingBlock => block.type === "heading");
}
