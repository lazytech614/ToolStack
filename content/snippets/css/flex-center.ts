import { Snippet } from "../types";

export const flexCenterSnippet: Snippet = {
  id: "css-flex-center",
  title: "Flex Center",
  description: "Centers a child element both horizontally and vertically using Flexbox.",
  language: "css",
  tags: ["flexbox", "layout"],
  difficulty: "Beginner",
  category: "Layout",

  code: `.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Usage */
/*
<div class="flex-center" style="height: 300px;">
  <div>Centered content</div>
</div>
*/`,
};
