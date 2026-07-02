import type { VSCodeExtension } from "../types";
import { docker } from "./docker";
import { devContainers } from "./dev-container";

export { docker, devContainers };

export const dockerExtensions: VSCodeExtension[] = [docker, devContainers];
