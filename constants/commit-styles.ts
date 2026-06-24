export const COMMIT_STYLES = [
  "conventional",
  "simple",
  "detailed",
  "enterprise",
  "funny",
] as const;

export type CommitStyle = (typeof COMMIT_STYLES)[number];