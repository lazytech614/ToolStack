import { Snippet } from "../types";

export const lineClampSnippet: Snippet = {
  id: "css-line-clamp",
  title: "Multi-line Text Clamp",
  description: "Truncates text after a specified number of lines, appending an ellipsis.",
  language: "css",
  tags: ["typography", "utils"],
  difficulty: "Intermediate",
  category: "Typography",

  code: `.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Usage */
/*
<p class="line-clamp">
  A long paragraph of text that will be clamped to three lines
  and truncated with an ellipsis at the end...
</p>
*/`,
};
