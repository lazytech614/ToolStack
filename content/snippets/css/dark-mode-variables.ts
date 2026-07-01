import { Snippet } from "../types";

export const darkModeVariablesSnippet: Snippet = {
  id: "css-dark-mode-variables",
  title: "Dark Mode with CSS Variables",
  description:
    "Implements theme switching using CSS custom properties toggled by a data attribute.",
  language: "css",
  tags: ["theming", "variables"],
  difficulty: "Intermediate",
  category: "Theming",

  code: `:root {
  --bg-color: #ffffff;
  --text-color: #111111;
}

[data-theme="dark"] {
  --bg-color: #111111;
  --text-color: #ffffff;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Usage */
/*
<html data-theme="dark">
  ...
</html>
*/`,
};
