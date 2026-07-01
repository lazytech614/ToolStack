"use client";

import { Pin, PinOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { Snippet } from "@/content/snippets/types";

interface Props {
  snippet: Snippet;
  selected: boolean;
  pinned: boolean;
  onSelect: () => void;
  onTogglePin: () => void;
}

export function SnippetListItem({ snippet, selected, pinned, onSelect, onTogglePin }: Props) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        "group relative w-full border-b border-zinc-200 dark:border-zinc-800",
        "px-4 py-3 text-left transition-all duration-200",

        selected
          ? "border-l-2 border-l-purple-600 bg-purple-100 shadow-sm dark:border-l-purple-400 dark:bg-purple-500/30"
          : "hover:bg-zinc-50 dark:hover:bg-zinc-900/70",
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3
              className={cn(
                "truncate font-semibold",
                selected ? "text-purple-700 dark:text-purple-300" : "text-zinc-900 dark:text-white",
              )}
            >
              {snippet.title}
            </h3>

            {snippet.language && (
              <span className="rounded bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-600 uppercase dark:bg-zinc-800 dark:text-zinc-400">
                {snippet.language}
              </span>
            )}
          </div>

          <p className="mt-1 line-clamp-2 text-sm text-zinc-500 dark:text-zinc-400">
            {snippet.description}
          </p>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onTogglePin();
          }}
          className={cn(
            "rounded-md p-1 transition",
            pinned
              ? "text-purple-600 dark:text-purple-400"
              : "text-zinc-400 opacity-0 group-hover:opacity-100 hover:text-zinc-700 dark:hover:text-zinc-300",
          )}
        >
          {pinned ? <PinOff className="h-4 w-4" /> : <Pin className="h-4 w-4" />}
        </button>
      </div>

      {/* Tags */}
      {snippet.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {snippet.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded bg-zinc-100 px-2 py-0.5 text-[11px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}

          {snippet.tags.length > 3 && (
            <span className="text-[11px] text-zinc-400">+{snippet.tags.length - 3}</span>
          )}
        </div>
      )}
    </button>
  );
}
