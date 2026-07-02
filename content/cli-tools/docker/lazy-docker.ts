import type { CLITool } from "../types";

export const lazydocker: CLITool = {
  id: "lazydocker",
  name: "lazydocker",
  description:
    "A simple terminal UI for both Docker and Docker Compose, for managing containers, images, volumes, and logs at a glance",
  category: ["Docker", "Productivity"],
  installCommands: {
    brew: "brew install lazydocker",
    winget: "winget install jesseduffield.lazydocker",
    scoop: "scoop install lazydocker",
    go: "go install github.com/jesseduffield/lazydocker@latest",
  },
  shells: ["bash", "zsh", "fish", "powershell"],
  os: ["Mac", "Linux", "Windows"],
  tags: ["docker", "tui", "containers", "compose"],
  repoUrl: "https://github.com/jesseduffield/lazydocker",
  stars: 37000,
  version: "0.23.3",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2025-08-27",
};
