import { cheatsheets } from "./index";

export function getCheatsheet(slug: string) {
  return cheatsheets.find((c) => c.slug === slug);
}
