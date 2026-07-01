import { Snippet } from "../types";

export const truncateTextSnippet: Snippet = {
  id: "css-truncate-text",
  title: "Truncate Text",
  description: "Truncates a single line of text with an ellipsis when it overflows its container.",
  language: "css",
  tags: ["typography", "utils"],
  difficulty: "Beginner",
  category: "Typography",

  code: `.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Usage */
/*
<p class="truncate" style="max-width: 200px;">
  This is a really long line of text that will be truncated.
</p>
*/`,
};
