import type { CLITool } from "../types";

export const fzf: CLITool = {
  id: "fzf",
  name: "fzf",
  description:
    "A general-purpose command-line fuzzy finder that integrates with any list — files, history, processes, and more",
  category: ["Productivity", "Search"],
  installCommands: {
    brew: "brew install fzf",
    apt: "sudo apt install fzf",
    winget: "winget install fzf",
    scoop: "scoop install fzf",
  },
  shells: ["bash", "zsh", "fish", "powershell"],
  os: ["Mac", "Linux", "Windows"],
  tags: ["fuzzy-search", "productivity", "terminal", "search"],
  repoUrl: "https://github.com/junegunn/fzf",
  stars: 68000,
  version: "0.57.0",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2025-11-10",
};
