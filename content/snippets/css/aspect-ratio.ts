import { Snippet } from "../types";

export const aspectRatioSnippet: Snippet = {
  id: "css-aspect-ratio",
  title: "Aspect Ratio Box",
  description:
    "Maintains a fixed width-to-height ratio for responsive media like images and videos.",
  language: "css",
  tags: ["layout", "responsive"],
  difficulty: "Beginner",
  category: "Layout",

  code: `.aspect-video {
  aspect-ratio: 16 / 9;
  width: 100%;
  object-fit: cover;
}

/* Usage */
/*
<img class="aspect-video" src="banner.jpg" alt="Banner" />
<iframe class="aspect-video" src="https://example.com/embed"></iframe>
*/`,
};
