import {
  FileCode,
  GitPullRequest,
  BookOpen,
  FileText,
} from "lucide-react";

import { ToolCard } from "./tool-card";

export function ToolShowcase() {
  return (
    <div className="relative lg:w-1/2">
      <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-purple-500/20 to-violet-500/20 dark:from-purple-500/10 dark:to-violet-500/10 blur-3xl" />

      <div className="relative rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/80 p-6 backdrop-blur-xl shadow-xl dark:shadow-none">
        {/* Window chrome */}
        <div className="mb-6 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <div className="flex flex-col gap-y-4">
          <ToolCard
            title="Commit Generator"
            description="Generate conventional commit messages from your git diff."
            href="/tools/commit-generator"
            badge="Popular"
            badgeColor="green"
            icon={<FileCode size={20} />}
          />

          <ToolCard
            title="PR Description Generator"
            description="Create clear and detailed pull request descriptions."
            href="/tools/pr-generator"
            badge="New"
            badgeColor="blue"
            icon={<GitPullRequest size={20} />}
          />

          <ToolCard
            title="Release Notes Generator"
            description="Generate changelogs and release notes in seconds."
            href="/tools/release-notes-generator"
            badge="Coming Soon"
            badgeColor="purple"
            icon={<FileText size={20} />}
          />

          <ToolCard
            title="README Generator"
            description="Generate professional README files for your projects."
            href="/tools/readme-generator"
            badge="Coming Soon"
            badgeColor="purple"
            icon={<BookOpen size={20} />}
          />
        </div>
      </div>
    </div>
  );
}