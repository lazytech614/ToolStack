import type { CLITool } from "../types";

export const lazygit: CLITool = {
  id: "lazygit",
  name: "lazygit",
  description:
    "A simple terminal UI for git commands, letting you stage, commit, branch, and rebase visually with keyboard shortcuts",
  category: ["Git", "Productivity"],
  installCommands: {
    brew: "brew install lazygit",
    winget: "winget install JesseDuffield.lazygit",
    scoop: "scoop install lazygit",
    apt: "sudo apt install lazygit",
    go: "go install github.com/jesseduffield/lazygit@latest",
  },
  shells: ["bash", "zsh", "fish", "powershell"],
  os: ["Mac", "Linux", "Windows"],
  tags: ["git", "tui", "terminal-ui", "rebase", "staging"],
  repoUrl: "https://github.com/jesseduffield/lazygit",
  stars: 56000,
  version: "0.44.1",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2025-10-15",
};
