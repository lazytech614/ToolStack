import type { CLITool } from "../types";

export const gitui: CLITool = {
  id: "gitui",
  name: "gitui",
  description:
    "A blazing fast terminal UI for git written in Rust, focused on speed and keyboard-driven workflows",
  category: ["Git", "Productivity"],
  installCommands: {
    brew: "brew install gitui",
    winget: "winget install gitui",
    scoop: "scoop install gitui",
    cargo: "cargo install gitui",
  },
  shells: ["bash", "zsh", "fish", "powershell"],
  os: ["Mac", "Linux", "Windows"],
  tags: ["git", "tui", "rust", "fast"],
  repoUrl: "https://github.com/extrawurst/gitui",
  stars: 16000,
  version: "0.26.3",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2025-09-20",
};
