"use client";

import { Copy, Pin, PinOff } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Snippet } from "@/content/snippets/types";

interface Props {
  snippet: Snippet;
  pinned: boolean;
  onTogglePin: () => void;
}

export function SnippetToolbar({ snippet, pinned, onTogglePin }: Props) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(snippet.code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  return (
    <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
      <div className="flex items-center gap-2">
        <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 uppercase dark:bg-zinc-800 dark:text-zinc-300">
          {snippet.language}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onTogglePin}
          className={cn(
            "rounded-lg border p-2 transition-colors",
            pinned
              ? "border-purple-500 bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400"
              : "border-zinc-200 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800",
          )}
        >
          {pinned ? <PinOff className="h-4 w-4" /> : <Pin className="h-4 w-4" />}
        </button>

        <button
          onClick={copyCode}
          className="flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2 text-sm font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
        >
          <Copy className="h-4 w-4" />

          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
