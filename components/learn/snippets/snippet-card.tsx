"use client";

import { Pin, PinOff } from "lucide-react";

import { Snippet } from "@/constants/learnings/snippets";
import { LanguageBadge } from "./language-badge";
import { CodeBlock } from "../cheatsheets/code-block";
import { cn } from "@/lib/utils";

interface SnippetCardProps {
  snippet: Snippet;
  pin?: {
    pinned: boolean;
    onToggle: () => void;
  };
}

export function SnippetCard({
  snippet,
  pin,
}: SnippetCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-3 rounded-2xl border p-5",
        "transition-all duration-200",
        "bg-white border-zinc-200",
        "hover:border-purple-300 hover:shadow-md hover:shadow-purple-100/40",
        "dark:bg-zinc-900/40 dark:border-zinc-800",
        "dark:hover:border-purple-500/40 dark:hover:shadow-purple-900/20"
      )}
    >
      {/* Pin */}

      {pin && (
        <button
          onClick={pin.onToggle}
          aria-label={pin.pinned ? "Unpin snippet" : "Pin snippet"}
          className={cn(
            "absolute right-4 top-4 rounded-full p-1.5 transition-all duration-200",
            pin.pinned
              ? "bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400"
              : "opacity-0 text-zinc-400 group-hover:opacity-100 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
          )}
        >
          {pin.pinned ? (
            <PinOff className="h-4 w-4" />
          ) : (
            <Pin className="h-4 w-4" />
          )}
        </button>
      )}

      {/* Header */}

      <div className="flex items-start justify-between gap-3 pr-8">
        <div>
          <h3 className="font-mono text-sm font-semibold text-zinc-900 dark:text-white">
            {snippet.title}
          </h3>

          <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            {snippet.description}
          </p>
        </div>

        <LanguageBadge language={snippet.language} />
      </div>

      {/* Code */}

      <CodeBlock
        code={snippet.code}
        language={snippet.language}
      />

      {/* Tags */}

      <div className="flex flex-wrap gap-1.5">
        {snippet.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}