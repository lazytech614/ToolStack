import { GitCommitIcon } from "lucide-react";
import { Tool } from "../types";

export const commitGenerator: Tool = {
  id: "commit-generator",
  name: "Commit Generator",
  description: "Generate different commit messages from your git diff.",
  icon: GitCommitIcon,
  category: "Generator",
  href: "/tools/commit-generator",
  isFeatured: true,
  status: "BETA",
  seo: {
    title: "AI Git Commit Message Generator ",
    description:
      "Generate meaningful Git commit messages from your code changes instantly. Supports Conventional Commits and AI-powered suggestions.",
    keywords: [
      "git commit generator",
      "commit message generator",
      "ai commit generator",
      "git tools",
      "github helper",
    ],
  },
};
