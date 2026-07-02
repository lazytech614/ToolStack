import type { CLITool } from "../types";

export const curlie: CLITool = {
  id: "curlie",
  name: "curlie",
  description:
    "A frontend to curl that adds the ease of use of HTTPie without giving up curl's power, speed, and reliability",
  category: ["Network"],
  installCommands: {
    brew: "brew install curlie",
    winget: "winget install rs.curlie",
    scoop: "scoop install curlie",
    go: "go install github.com/rs/curlie@latest",
  },
  shells: ["bash", "zsh", "fish", "powershell"],
  os: ["Mac", "Linux", "Windows"],
  tags: ["http", "curl", "api", "rest"],
  repoUrl: "https://github.com/rs/curlie",
  stars: 4700,
  version: "1.8.2",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2024-12-01",
};
