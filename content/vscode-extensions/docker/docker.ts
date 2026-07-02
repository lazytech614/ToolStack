import type { VSCodeExtension } from "../types";

export const docker: VSCodeExtension = {
  id: "ms-azuretools.vscode-docker",
  name: "Docker",
  description:
    "Build, manage, and deploy containerized applications; adds syntax highlighting, IntelliSense, and a container explorer",
  publisher: "Microsoft",
  category: ["Docker"],
  installs: 20000000,
  rating: 4.4,
  ratingCount: 690,
  tags: ["docker", "containers", "devops"],
  marketplaceUrl: "https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker",
  repoUrl: "https://github.com/microsoft/vscode-docker",
  isVerified: true,
  isFree: true,
  lastUpdated: "2025-05-27",
};
