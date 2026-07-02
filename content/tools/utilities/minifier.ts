import { Minimize2 } from "lucide-react";
import { Tool } from "../types";

export const minifier: Tool = {
  id: "minifier",
  name: "Code Minifier",
  description: "Minify HTML, CSS, and JavaScript to reduce file size for production.",
  icon: Minimize2,
  category: "Utilities",
  href: "/tools/minifier",
  seo: {
    title: "HTML, CSS & JS Code Minifier Online ",
    description:
      "Minify HTML, CSS, and JavaScript files to reduce bundle size for production. Fast, browser-based minification with no file upload needed.",
    keywords: [
      "code minifier",
      "js minifier",
      "css minifier",
      "html minifier",
      "minify javascript online",
    ],
  },
};
