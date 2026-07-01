import { CheatsheetSection } from "../types";

export const animationSection: CheatsheetSection = {
  title: "Transitions & Animation",
  language: "css",
  snippets: [
    { code: `transition: all 0.2s ease-in-out;`, description: "Basic transition" },
    {
      code: `transition: transform 0.3s ease, opacity 0.3s ease;`,
      description: "Transition specific properties",
    },
    { code: `transform: translateY(-4px) scale(1.02);`, description: "Hover lift effect" },
    {
      code: `@keyframes fade-in {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}`,
      description: "Define a keyframe animation",
    },
    { code: `animation: fade-in 0.4s ease-out forwards;`, description: "Apply an animation" },
    { code: `animation: spin 1s linear infinite;`, description: "Infinite loading spinner" },
    { code: `will-change: transform;`, description: "Hint the browser to optimize" },
  ],
};
