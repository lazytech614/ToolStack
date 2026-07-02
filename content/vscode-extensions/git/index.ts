import type { VSCodeExtension } from "../types";
import { gitlens } from "./gitlens";
import { githubPullRequests } from "./github-pull-requests";

export { gitlens, githubPullRequests };

export const gitExtensions: VSCodeExtension[] = [gitlens, githubPullRequests];
