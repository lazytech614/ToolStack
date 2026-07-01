import { CheatsheetSection } from "../types";

export const positioningSection: CheatsheetSection = {
  title: "Positioning & Selectors",
  language: "css",
  snippets: [
    { code: `position: sticky; top: 0;`, description: "Sticky header" },
    { code: `position: absolute; inset: 0;`, description: "Fill nearest positioned ancestor" },
    { code: `margin: 0 auto;`, description: "Horizontal centering" },
    { code: `.parent > .child {}`, description: "Direct child selector" },
    { code: `.a + .b {}`, description: "Adjacent sibling selector" },
    { code: `.a ~ .b {}`, description: "General sibling selector" },
    { code: `[data-active="true"] {}`, description: "Attribute selector" },
    { code: `:root {\n  --color-primary: #7c3aed;\n}`, description: "Define CSS variable" },
    { code: `color: var(--color-primary, #000);`, description: "Use variable with fallback" },
  ],
};
