import type { CLITool } from "../types";

export const gh: CLITool = {
  id: "gh",
  name: "gh",
  description:
    "GitHub's official command-line tool for working with pull requests, issues, releases, and more without leaving the terminal",
  category: ["Git", "Productivity"],
  installCommands: {
    brew: "brew install gh",
    winget: "winget install --id GitHub.cli",
    scoop: "scoop install gh",
    apt: "sudo apt install gh",
  },
  shells: ["bash", "zsh", "fish", "powershell"],
  os: ["Mac", "Linux", "Windows"],
  tags: ["github", "git", "pull-requests", "issues", "cli"],
  repoUrl: "https://github.com/cli/cli",
  docsUrl: "https://cli.github.com/manual",
  stars: 39000,
  version: "2.63.0",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2025-11-01",
};
