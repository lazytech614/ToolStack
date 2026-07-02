import type { CLITool } from "../types";

export const dust: CLITool = {
  id: "dust",
  name: "dust",
  description:
    "A more intuitive version of du, written in Rust, that shows disk usage as an easy-to-read visual tree",
  category: ["File Management"],
  installCommands: {
    brew: "brew install dust",
    winget: "winget install bootandy.dust",
    scoop: "scoop install dust",
    cargo: "cargo install du-dust",
  },
  shells: ["bash", "zsh", "fish", "powershell"],
  os: ["Mac", "Linux", "Windows"],
  tags: ["disk-usage", "du", "rust", "visualization"],
  repoUrl: "https://github.com/bootandy/dust",
  stars: 9500,
  version: "1.1.2",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2025-04-18",
};
