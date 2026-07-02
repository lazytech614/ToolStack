import type { CLITool } from "../types";

export const ripgrep: CLITool = {
  id: "ripgrep",
  name: "ripgrep",
  description:
    "A line-oriented search tool that recursively searches directories for a regex pattern, respecting .gitignore and outperforming grep",
  category: ["Productivity", "Search"],
  installCommands: {
    brew: "brew install ripgrep",
    apt: "sudo apt install ripgrep",
    winget: "winget install BurntSushi.ripgrep.MSVC",
    scoop: "scoop install ripgrep",
    cargo: "cargo install ripgrep",
  },
  shells: ["bash", "zsh", "fish", "powershell"],
  os: ["Mac", "Linux", "Windows"],
  tags: ["grep", "search", "regex", "fast"],
  repoUrl: "https://github.com/BurntSushi/ripgrep",
  stars: 49000,
  version: "14.1.1",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2025-05-02",
};
