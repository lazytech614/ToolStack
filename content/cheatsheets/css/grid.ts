import { CheatsheetSection } from "../types";

export const gridSection: CheatsheetSection = {
  title: "Grid",
  language: "css",
  snippets: [
    { code: `display: grid;`, description: "Enable grid container" },
    { code: `grid-template-columns: repeat(3, 1fr);`, description: "3 equal columns" },
    { code: `grid-template-rows: auto 1fr auto;`, description: "Header, main, footer" },
    { code: `gap: 1rem;`, description: "Row and column gap" },
    { code: `grid-column: span 2;`, description: "Span 2 columns" },
    { code: `place-items: center;`, description: "Center items (shorthand)" },
  ],
};
