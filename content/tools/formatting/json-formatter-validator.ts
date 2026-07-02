import { Braces } from "lucide-react";
import { Tool } from "../types";

export const jsonFormatterValidator: Tool = {
  id: "json-formatter-validator",
  name: "JSON Formatter And Validator",
  description:
    "Prettify, minify, and validate JSON with syntax highlighting and collapsible nodes.",
  icon: Braces,
  category: "Formatting",
  href: "/tools/json-formatter-validator",
  isNew: false,
  isFeatured: true,
  seo: {
    title: "JSON Formatter, Validator & Minifier Online ",
    description:
      "Prettify and validate JSON with syntax highlighting and collapsible tree nodes. Also supports JSON minification for production use.",
    keywords: [
      "json formatter",
      "json validator",
      "json beautifier",
      "json minifier",
      "json tools",
    ],
  },
};
