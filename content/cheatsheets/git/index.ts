import { Cheatsheet } from "../types";
import { gitMeta } from "./meta";
import { setupSection, stagingSection, remoteSection } from "./basic";
import { branchingSection, mergingRebasingSection, undoingChangesSection } from "./branching";
import { stashSection } from "./stash";

export const gitCheatsheet: Cheatsheet = {
  ...gitMeta,
  sections: [
    setupSection,
    stagingSection,
    remoteSection,
    branchingSection,
    mergingRebasingSection,
    undoingChangesSection,
    stashSection,
  ],
};
