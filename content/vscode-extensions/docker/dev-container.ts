import type { VSCodeExtension } from "../types";

export const devContainers: VSCodeExtension = {
  id: "ms-vscode-remote.remote-containers",
  name: "Dev Containers",
  description:
    "Open any folder inside a Docker container and use the full VS Code feature set for a consistent, isolated dev environment",
  publisher: "Microsoft",
  category: ["Docker"],
  installs: 27000000,
  rating: 4.3,
  ratingCount: 1050,
  tags: ["docker", "containers", "remote-development"],
  marketplaceUrl:
    "https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers",
  repoUrl: "https://github.com/microsoft/vscode-remote-release",
  isVerified: true,
  isFree: true,
  lastUpdated: "2025-10-19",
};
