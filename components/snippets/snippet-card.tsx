import { Snippet } from "@/constants/learnings/snippets";
import { LanguageBadge } from "./language-badge";
import { CodeBlock } from "../cheatsheets/code-block";

export function SnippetCard({ snippet }: { snippet: Snippet }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border p-5 transition-all duration-200
      bg-white border-zinc-200 hover:border-purple-300 hover:shadow-md hover:shadow-purple-100/40
      dark:bg-zinc-900/40 dark:border-zinc-800 dark:hover:border-purple-500/40 dark:hover:shadow-purple-900/20"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white font-mono">
            {snippet.title}
          </h3>
          <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {snippet.description}
          </p>
        </div>
        <LanguageBadge language={snippet.language} />
      </div>

      {/* Code */}
      <CodeBlock code={snippet.code} language={snippet.language} />

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {snippet.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-[11px] font-medium text-zinc-500 dark:text-zinc-400"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}