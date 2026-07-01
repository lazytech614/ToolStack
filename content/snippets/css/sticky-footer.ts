import { Snippet } from "../types";

export const stickyFooterSnippet: Snippet = {
  id: "css-sticky-footer",
  title: "Sticky Footer",
  description:
    "Keeps the footer pinned to the bottom of the viewport when page content is shorter than the screen.",
  language: "css",
  tags: ["layout", "flexbox"],
  difficulty: "Intermediate",
  category: "Layout",

  code: `html, body {
  height: 100%;
  margin: 0;
}

.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-content {
  flex: 1;
}

/* Usage */
/*
<div class="page-wrapper">
  <header>Header</header>
  <main class="page-content">Main content</main>
  <footer>Footer</footer>
</div>
*/`,
};
