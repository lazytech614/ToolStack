import { Snippet } from "../types";

export const skeletonLoaderSnippet: Snippet = {
  id: "css-skeleton-loader",
  title: "Skeleton Loading Shimmer",
  description: "Creates an animated shimmer effect for skeleton loading placeholders.",
  language: "css",
  tags: ["animation", "loading", "ui"],
  difficulty: "Intermediate",
  category: "UI Effects",

  code: `.skeleton {
  background: linear-gradient(
    90deg,
    #e0e0e0 25%,
    #f0f0f0 37%,
    #e0e0e0 63%
  );
  background-size: 400% 100%;
  animation: skeleton-shimmer 1.4s ease infinite;
  border-radius: 4px;
}

@keyframes skeleton-shimmer {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Usage */
/*
<div class="skeleton" style="width: 100%; height: 20px;"></div>
*/`,
};
