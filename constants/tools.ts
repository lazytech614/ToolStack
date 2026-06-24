import {
  GitCommit,
  GitPullRequest,
  FileText,
  ScrollText,
} from "lucide-react";

export const TOOLS = [
  {
    title: "Commit Message Generator",
    description:
      "Generate conventional commits from git diff",
    href: "/tools/commit-generator",
    category: "Git",
    featured: true,
    badge: "Popular",
    icon: GitCommit,
  },

  {
    title: "PR Description Generator",
    description:
      "Generate pull request descriptions",
    href: "/tools/pr-generator",
    category: "Git",
    featured: true,
    badge: "New",
    icon: GitPullRequest,
  },

  {
    title: "README Generator",
    description:
      "Create README files instantly",
    href: "/tools/readme-generator",
    category: "Documentation",
    featured: true,
    badge: "AI",
    icon: FileText,
  },

  {
    title: "Changelog Generator",
    description:
      "Generate release notes automatically",
    href: "/tools/changelog-generator",
    category: "Documentation",
    featured: false,
    badge: "Beta",
    icon: ScrollText,
  },
];