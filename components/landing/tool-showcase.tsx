import { FileCode, Table2, FileText, LayoutTemplate } from "lucide-react";

import { ToolCard } from "./tool-card";

export function ToolShowcase() {
  return (
    <div className="relative lg:w-1/2">
      <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-purple-500/20 to-violet-500/20 blur-3xl dark:from-purple-500/10 dark:to-violet-500/10" />

      <div className="relative rounded-3xl border border-zinc-200 bg-zinc-50/80 p-6 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/80 dark:shadow-none">
        {/* Window chrome */}
        <div className="mb-6 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-2">
              <p className="text-xs text-nowrap text-zinc-600 dark:text-zinc-400">
                Developer Tools
              </p>
              <div className="h-px w-full rounded-full bg-zinc-200 dark:bg-zinc-700" />
            </div>
            <ToolCard
              title="Commit Generator"
              description="Generate conventional commit messages from your git diff."
              href="/tools/commit-generator"
              badge="Popular"
              badgeColor="green"
              icon={<FileCode size={20} />}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-2">
              <p className="text-xs text-nowrap text-zinc-600 dark:text-zinc-400">Code Snippets</p>
              <div className="h-px w-full rounded-full bg-zinc-200 dark:bg-zinc-700" />
            </div>
            <ToolCard
              title="React Snippets"
              description="Browse a collection of reusable React components, hooks, patterns, and utility snippets."
              href="/snippets"
              badge="New"
              badgeColor="blue"
              icon={<Table2 size={20} />}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-2">
              <p className="text-xs text-nowrap text-zinc-600 dark:text-zinc-400">Cheatsheets</p>
              <div className="h-px w-full rounded-full bg-zinc-200 dark:bg-zinc-700" />
            </div>

            <ToolCard
              title="Developer Cheatsheets"
              description="Quick reference guides for Git, Docker, React, Next.js, CSS, Linux commands, and more."
              href="/cheatsheets"
              badge="Popular"
              badgeColor="orange"
              icon={<FileText size={20} />}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-2">
              <p className="text-xs text-nowrap text-zinc-600 dark:text-zinc-400">Templates</p>
              <div className="h-px w-full rounded-full bg-zinc-200 dark:bg-zinc-700" />
            </div>

            <ToolCard
              title="Project Templates"
              description="Kickstart your next project with production-ready React, Next.js, Node.js, and Tailwind templates."
              href="/templates"
              badge="New"
              badgeColor="purple"
              icon={<LayoutTemplate size={20} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
