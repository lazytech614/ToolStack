import { Snippet } from "../types";

export const gridAutoFitSnippet: Snippet = {
  id: "css-grid-auto-fit",
  title: "Responsive Grid (auto-fit)",
  description:
    "Creates a responsive grid that automatically wraps columns based on available space, without media queries.",
  language: "css",
  tags: ["grid", "responsive", "layout"],
  difficulty: "Intermediate",
  category: "Layout",

  code: `.grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

/* Usage */
/*
<div class="grid-auto-fit">
  <div class="card">1</div>
  <div class="card">2</div>
  <div class="card">3</div>
</div>
*/`,
};
