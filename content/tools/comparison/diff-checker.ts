import { GitCommitIcon } from "lucide-react";
import { Tool } from "../types";

export const diffChecker: Tool = {
  id: "diff-checker",
  name: "Diff Checker",
  description:
    "Compare two text blocks and highlight added, removed, and unchanged lines in split or inline view.",
  icon: GitCommitIcon,
  category: "Comparison",
  href: "/tools/diff-checker",
  isFeatured: true,
  status: "ACTIVE",
  seo: {
    title: "Online Diff Checker – Compare Text & Code ",
    description:
      "Compare two text blocks side by side and highlight additions, deletions, and unchanged lines. Supports split and inline diff views.",
    keywords: ["diff checker", "text diff", "code diff", "compare text online", "diff tool"],
  },
};
