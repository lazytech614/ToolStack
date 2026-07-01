import { snippets } from "./index";

export const snippetLanguages = [...Array.from(new Set(snippets.map((s) => s.language)))];
