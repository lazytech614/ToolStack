import { CheatsheetSection } from "../types";

export const branchingSection: CheatsheetSection = {
  title: "Branching",
  language: "bash",
  snippets: [
    { code: `git branch`, description: "List branches" },
    { code: `git branch <name>`, description: "Create a branch" },
    { code: `git switch <name>`, description: "Switch to a branch" },
    { code: `git switch -c <name>`, description: "Create and switch" },
    { code: `git branch -d <name>`, description: "Delete a branch" },
  ],
};

export const mergingRebasingSection: CheatsheetSection = {
  title: "Merging & Rebasing",
  language: "bash",
  snippets: [
    { code: `git merge <branch>`, description: "Merge branch into current" },
    { code: `git rebase <branch>`, description: "Rebase onto branch" },
    { code: `git rebase -i HEAD~3`, description: "Interactive rebase last 3 commits" },
    { code: `git cherry-pick <hash>`, description: "Apply a specific commit" },
  ],
};

export const undoingChangesSection: CheatsheetSection = {
  title: "Undoing Changes",
  language: "bash",
  snippets: [
    { code: `git restore <file>`, description: "Discard working dir changes" },
    { code: `git restore --staged <file>`, description: "Unstage a file" },
    { code: `git reset HEAD~1`, description: "Undo last commit, keep changes" },
    { code: `git reset --hard HEAD~1`, description: "Undo last commit, discard changes" },
    { code: `git revert <hash>`, description: "Create a revert commit" },
  ],
};
