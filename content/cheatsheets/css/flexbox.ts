import { CheatsheetSection } from "../types";

export const flexboxSection: CheatsheetSection = {
  title: "Flexbox",
  language: "css",
  snippets: [
    { code: `display: flex;`, description: "Enable flex container" },
    { code: `flex-direction: row | column;`, description: "Main axis direction" },
    {
      code: `justify-content: center | space-between | flex-end;`,
      description: "Align on main axis",
    },
    {
      code: `align-items: center | flex-start | stretch;`,
      description: "Align on cross axis",
    },
    { code: `flex: 1;`, description: "Grow to fill space" },
    { code: `gap: 1rem;`, description: "Space between items" },
  ],
};
