import type { VSCodeExtension } from "../types";

export const githubPullRequests: VSCodeExtension = {
  id: "GitHub.vscode-pull-request-github",
  name: "GitHub Pull Requests",
  description: "Review and manage GitHub pull requests and issues directly within the editor",
  publisher: "GitHub",
  category: ["Git"],
  installs: 9800000,
  rating: 4.4,
  ratingCount: 540,
  tags: ["github", "pull-requests", "issues", "code-review"],
  marketplaceUrl:
    "https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github",
  repoUrl: "https://github.com/microsoft/vscode-pull-request-github",
  isVerified: true,
  isFree: true,
  lastUpdated: "2025-10-02",
};
