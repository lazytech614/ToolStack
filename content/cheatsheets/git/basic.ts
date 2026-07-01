import { CheatsheetSection } from "../types";

export const setupSection: CheatsheetSection = {
  title: "Setup",
  language: "bash",
  snippets: [
    { code: `git config --global user.name "Your Name"`, description: "Set username" },
    { code: `git config --global user.email "you@example.com"`, description: "Set email" },
    { code: `git init`, description: "Init a new repo" },
    { code: `git clone <url>`, description: "Clone a remote repo" },
  ],
};

export const stagingSection: CheatsheetSection = {
  title: "Staging & Committing",
  language: "bash",
  snippets: [
    { code: `git status`, description: "Check working tree status" },
    { code: `git add .`, description: "Stage all changes" },
    { code: `git add <file>`, description: "Stage a specific file" },
    { code: `git commit -m "message"`, description: "Commit with message" },
    { code: `git commit --amend`, description: "Amend the last commit" },
  ],
};

export const remoteSection: CheatsheetSection = {
  title: "Remote",
  language: "bash",
  snippets: [
    { code: `git remote -v`, description: "List remotes" },
    { code: `git remote add origin <url>`, description: "Add remote" },
    { code: `git push origin <branch>`, description: "Push branch" },
    { code: `git pull origin <branch>`, description: "Pull branch" },
    { code: `git fetch --all`, description: "Fetch all remotes" },
  ],
};
