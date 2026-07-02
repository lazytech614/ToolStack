import { Code2 } from "lucide-react";
import { Tool } from "../types";

export const htmlPreview: Tool = {
  id: "html-preview",
  name: "HTML Preview",
  description: "Write and preview raw HTML in real-time with a live sandboxed renderer.",
  icon: Code2,
  category: "Preview",
  href: "/tools/html-preview",
  seo: {
    title: "Live HTML Preview Editor Online ",
    description:
      "Write raw HTML and see a real-time rendered preview in a sandboxed iframe. Perfect for quick prototyping and HTML snippet testing.",
    keywords: [
      "html preview",
      "live html editor",
      "html renderer",
      "online html editor",
      "html sandbox",
    ],
  },
};
