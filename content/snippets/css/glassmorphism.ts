import { Snippet } from "../types";

export const glassmorphismSnippet: Snippet = {
  id: "css-glassmorphism",
  title: "Glassmorphism Card",
  description:
    "Creates a frosted-glass effect using backdrop blur, transparency, and a subtle border.",
  language: "css",
  tags: ["effects", "ui"],
  difficulty: "Intermediate",
  category: "UI Effects",

  code: `.glass-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

/* Usage */
/*
<div class="glass-card" style="padding: 2rem;">
  Frosted glass content
</div>
*/`,
};
