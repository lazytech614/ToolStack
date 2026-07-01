import { BundledLanguage } from "shiki";

export type Snippet = {
  code: string;
  description?: string;
};

export type Section = {
  title: string;
  language: BundledLanguage;
  snippets: Snippet[];
};

export type Cheatsheet = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  tag: "language" | "tool" | "framework" | "styling";
  sections: Section[];
};

export const cheatsheets: Cheatsheet[] = [
  // ─── TypeScript ───────────────────────────────────────────────────────────
  {
    slug: "typescript",
    title: "TypeScript",
    description: "Types, interfaces, generics, and utility types",
    icon: "TS",
    tag: "language",
    sections: [
      {
        title: "Primitive Types",
        language: "typescript",
        snippets: [
          { code: `let name: string = "Alice";`, description: "String" },
          { code: `let age: number = 30;`, description: "Number" },
          { code: `let active: boolean = true;`, description: "Boolean" },
          { code: `let data: null = null;`, description: "Null" },
          { code: `let value: undefined = undefined;`, description: "Undefined" },
          { code: `let id: string | number = 1;`, description: "Union type" },
        ],
      },
      {
        title: "Arrays & Tuples",
        language: "typescript",
        snippets: [
          { code: `let nums: number[] = [1, 2, 3];`, description: "Array shorthand" },
          { code: `let strs: Array<string> = ["a", "b"];`, description: "Generic array" },
          { code: `let pair: [string, number] = ["age", 30];`, description: "Tuple" },
          {
            code: `let rgb: readonly [number, number, number] = [255, 0, 0];`,
            description: "Readonly tuple",
          },
        ],
      },
      {
        title: "Interfaces & Types",
        language: "typescript",
        snippets: [
          {
            code: `interface User {\n  id: number;\n  name: string;\n  email?: string;\n}`,
            description: "Interface with optional field",
          },
          {
            code: `type Point = {\n  x: number;\n  y: number;\n};`,
            description: "Type alias",
          },
          {
            code: `interface Admin extends User {\n  role: "admin";\n}`,
            description: "Interface extension",
          },
          {
            code: `type ID = string | number;`,
            description: "Union type alias",
          },
        ],
      },
      {
        title: "Generics",
        language: "typescript",
        snippets: [
          {
            code: `function identity<T>(arg: T): T {\n  return arg;\n}`,
            description: "Generic function",
          },
          {
            code: `interface Box<T> {\n  value: T;\n}`,
            description: "Generic interface",
          },
          {
            code: `function first<T>(arr: T[]): T {\n  return arr[0];\n}`,
            description: "Generic with array",
          },
        ],
      },
      {
        title: "Utility Types",
        language: "typescript",
        snippets: [
          { code: `Partial<User>`, description: "All fields optional" },
          { code: `Required<User>`, description: "All fields required" },
          { code: `Readonly<User>`, description: "All fields readonly" },
          { code: `Pick<User, 'id' | 'name'>`, description: "Pick specific fields" },
          { code: `Omit<User, 'password'>`, description: "Omit specific fields" },
          { code: `Record<string, number>`, description: "Key-value map" },
          { code: `ReturnType<typeof fn>`, description: "Infer return type" },
          { code: `Parameters<typeof fn>`, description: "Infer parameter types" },
        ],
      },
      {
        title: "Type Assertions & Guards",
        language: "typescript",
        snippets: [
          {
            code: `const el = document.getElementById("app") as HTMLDivElement;`,
            description: "Type assertion",
          },
          {
            code: `function isString(val: unknown): val is string {\n  return typeof val === "string";\n}`,
            description: "Type guard",
          },
          { code: `const len = (val as string).length;`, description: "Inline assertion" },
        ],
      },
    ],
  },

  // ─── Git ──────────────────────────────────────────────────────────────────
  {
    slug: "git",
    title: "Git",
    description: "Everyday Git commands for branching, merging, and history",
    icon: "Git",
    tag: "tool",
    sections: [
      {
        title: "Setup",
        language: "bash",
        snippets: [
          { code: `git config --global user.name "Your Name"`, description: "Set username" },
          { code: `git config --global user.email "you@example.com"`, description: "Set email" },
          { code: `git init`, description: "Init a new repo" },
          { code: `git clone <url>`, description: "Clone a remote repo" },
        ],
      },
      {
        title: "Staging & Committing",
        language: "bash",
        snippets: [
          { code: `git status`, description: "Check working tree status" },
          { code: `git add .`, description: "Stage all changes" },
          { code: `git add <file>`, description: "Stage a specific file" },
          { code: `git commit -m "message"`, description: "Commit with message" },
          { code: `git commit --amend`, description: "Amend the last commit" },
        ],
      },
      {
        title: "Branching",
        language: "bash",
        snippets: [
          { code: `git branch`, description: "List branches" },
          { code: `git branch <name>`, description: "Create a branch" },
          { code: `git switch <name>`, description: "Switch to a branch" },
          { code: `git switch -c <name>`, description: "Create and switch" },
          { code: `git branch -d <name>`, description: "Delete a branch" },
        ],
      },
      {
        title: "Merging & Rebasing",
        language: "bash",
        snippets: [
          { code: `git merge <branch>`, description: "Merge branch into current" },
          { code: `git rebase <branch>`, description: "Rebase onto branch" },
          { code: `git rebase -i HEAD~3`, description: "Interactive rebase last 3 commits" },
          { code: `git cherry-pick <hash>`, description: "Apply a specific commit" },
        ],
      },
      {
        title: "Remote",
        language: "bash",
        snippets: [
          { code: `git remote -v`, description: "List remotes" },
          { code: `git remote add origin <url>`, description: "Add remote" },
          { code: `git push origin <branch>`, description: "Push branch" },
          { code: `git pull origin <branch>`, description: "Pull branch" },
          { code: `git fetch --all`, description: "Fetch all remotes" },
        ],
      },
      {
        title: "Undoing Changes",
        language: "bash",
        snippets: [
          { code: `git restore <file>`, description: "Discard working dir changes" },
          { code: `git restore --staged <file>`, description: "Unstage a file" },
          { code: `git reset HEAD~1`, description: "Undo last commit, keep changes" },
          { code: `git reset --hard HEAD~1`, description: "Undo last commit, discard changes" },
          { code: `git revert <hash>`, description: "Create a revert commit" },
        ],
      },
      {
        title: "Stash",
        language: "bash",
        snippets: [
          { code: `git stash`, description: "Stash current changes" },
          { code: `git stash pop`, description: "Apply and remove latest stash" },
          { code: `git stash list`, description: "List stashes" },
          { code: `git stash drop`, description: "Delete latest stash" },
        ],
      },
    ],
  },

  // ─── CSS ──────────────────────────────────────────────────────────────────
  {
    slug: "css",
    title: "CSS",
    description: "Flexbox, Grid, selectors, variables, and common patterns",
    icon: "CSS",
    tag: "styling",
    sections: [
      {
        title: "Flexbox",
        language: "css",
        snippets: [
          { code: `display: flex;`, description: "Enable flex container" },
          { code: `flex-direction: row | column;`, description: "Main axis direction" },
          {
            code: `justify-content: center | space-between | flex-end;`,
            description: "Align on main axis",
          },
          {
            code: `align-items: center | flex-start | stretch;`,
            description: "Align on cross axis",
          },
          { code: `flex: 1;`, description: "Grow to fill space" },
          { code: `gap: 1rem;`, description: "Space between items" },
        ],
      },
      {
        title: "Grid",
        language: "css",
        snippets: [
          { code: `display: grid;`, description: "Enable grid container" },
          { code: `grid-template-columns: repeat(3, 1fr);`, description: "3 equal columns" },
          { code: `grid-template-rows: auto 1fr auto;`, description: "Header, main, footer" },
          { code: `gap: 1rem;`, description: "Row and column gap" },
          { code: `grid-column: span 2;`, description: "Span 2 columns" },
          { code: `place-items: center;`, description: "Center items (shorthand)" },
        ],
      },
      {
        title: "Selectors",
        language: "css",
        snippets: [
          { code: `.parent > .child {}`, description: "Direct child" },
          { code: `.a + .b {}`, description: "Adjacent sibling" },
          { code: `.a ~ .b {}`, description: "General sibling" },
          { code: `a:hover {}`, description: "Pseudo-class" },
          { code: `p::first-line {}`, description: "Pseudo-element" },
          { code: `[data-active="true"] {}`, description: "Attribute selector" },
        ],
      },
      {
        title: "Custom Properties",
        language: "css",
        snippets: [
          { code: `:root {\n  --color-primary: #7c3aed;\n}`, description: "Define variable" },
          { code: `color: var(--color-primary);`, description: "Use variable" },
          { code: `color: var(--color-accent, #000);`, description: "With fallback" },
        ],
      },
      {
        title: "Common Patterns",
        language: "css",
        snippets: [
          { code: `* { box-sizing: border-box; }`, description: "Border box reset" },
          { code: `margin: 0 auto;`, description: "Horizontal centering" },
          { code: `position: sticky; top: 0;`, description: "Sticky header" },
          {
            code: `overflow: hidden;\ntext-overflow: ellipsis;\nwhite-space: nowrap;`,
            description: "Truncate text",
          },
          { code: `aspect-ratio: 16 / 9;`, description: "Fixed aspect ratio" },
          { code: `min-height: 100dvh;`, description: "Full viewport height (mobile-safe)" },
        ],
      },
    ],
  },
];

export const tags = ["All", "language", "tool", "framework", "styling"] as const;
export type Tag = (typeof tags)[number];
