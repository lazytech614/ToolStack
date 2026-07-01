import { CheatsheetSection } from "../types";

export const stashSection: CheatsheetSection = {
  title: "Stash",
  language: "bash",
  snippets: [
    { code: `git stash`, description: "Stash current changes" },
    { code: `git stash pop`, description: "Apply and remove latest stash" },
    { code: `git stash list`, description: "List stashes" },
    { code: `git stash drop`, description: "Delete latest stash" },
  ],
};
