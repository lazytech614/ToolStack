import { Eye } from "lucide-react";
import { Tool } from "../types";

export const markdownPreview: Tool = {
  id: "markdown-preview",
  name: "Markdown Preview",
  description: "Write Markdown and see the rendered output side-by-side with GFM support.",
  icon: Eye,
  category: "Preview",
  href: "/tools/markdown-preview",
  isFeatured: true,
  seo: {
    title: "Live Markdown Preview Editor with GFM Support ",
    description:
      "Write Markdown and see the rendered HTML output in real-time. Supports GitHub Flavored Markdown including tables, task lists, and code blocks.",
    keywords: [
      "markdown preview",
      "markdown editor",
      "live markdown",
      "gfm markdown",
      "markdown renderer",
    ],
  },
};
