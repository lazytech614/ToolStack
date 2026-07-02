import type { CLITool } from "../types";

export const dive: CLITool = {
  id: "dive",
  name: "dive",
  description:
    "A tool for exploring each layer of a Docker image to discover ways to shrink its size and reduce wasted space",
  category: ["Docker"],
  installCommands: {
    brew: "brew install dive",
    winget: "winget install wagoodman.dive",
    scoop: "scoop install dive",
    apt: "sudo apt install dive",
  },
  shells: ["bash", "zsh", "fish", "powershell"],
  os: ["Mac", "Linux", "Windows"],
  tags: ["docker", "images", "layers", "optimization"],
  repoUrl: "https://github.com/wagoodman/dive",
  stars: 20000,
  version: "0.13.1",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2025-02-09",
};
