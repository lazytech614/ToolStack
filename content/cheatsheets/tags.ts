export const cheatsheetTags = ["All", "language", "tool", "framework", "styling"] as const;
export type CheatsheetTag = (typeof cheatsheetTags)[number];
