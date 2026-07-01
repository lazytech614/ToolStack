import { Snippet } from "../types";

export const customScrollbarSnippet: Snippet = {
  id: "css-custom-scrollbar",
  title: "Custom Scrollbar",
  description: "Styles the browser scrollbar with custom width, track, and thumb colors.",
  language: "css",
  tags: ["scrollbar", "ui"],
  difficulty: "Intermediate",
  category: "UI Effects",

  code: `.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}`,
};
