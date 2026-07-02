import { FileText } from "lucide-react";
import { Tool } from "../types";

export const readmeGenerator: Tool = {
  id: "readme-generator",
  name: "README Generator",
  description:
    "Generate professional GitHub README files with customizable sections, badges, and markdown formatting.",
  icon: FileText,
  category: "Generator",
  href: "/tools/readme-generator",
  seo: {
    title: "README Generator for GitHub Projects ",
    description:
      "Create professional GitHub README files in minutes. Generate markdown with project descriptions, installation guides, usage examples, badges, contributing guidelines, license, and more.",
    keywords: [
      "readme generator",
      "github readme generator",
      "markdown readme generator",
      "readme creator",
      "github documentation",
      "project readme",
      "markdown generator",
      "opensource readme",
      "repository readme",
      "developer documentation",
    ],
  },
};
