import { glossaryTerms } from "./index";

export function getGlossaryTerm(id: string) {
  return glossaryTerms.find((t) => t.id === id);
}

export function getGlossaryTermsByCategory(category: string) {
  if (category === "all") return glossaryTerms;

  return glossaryTerms.filter((t) => t.category === category);
}

export const glossaryAlphabet = [
  ...new Set(glossaryTerms.map((t) => t.term[0].toUpperCase())),
].sort();

export function getGlossaryTermsByLetter(letter: string) {
  return glossaryTerms.filter((t) => t.term[0].toUpperCase() === letter.toUpperCase());
}
