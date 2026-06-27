"use client";

import { useCopy } from "@/hooks/useCopy";
import { Check, Copy } from "lucide-react";

export function CodeBlock({
  code,
  description,
}: {
  code: string;
  description?: string;
}) {
  const { copied, copy } = useCopy();

  return (
    <div className="group relative rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 overflow-hidden">
      {/* Description */}
      {description && (
        <div className="px-4 pt-3 pb-1">
          <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500">
            {description}
          </span>
        </div>
      )}

      {/* Code + Copy */}
      <div className="relative flex items-start justify-between gap-3 px-4 py-3">
        <pre className="text-xs text-zinc-800 dark:text-zinc-200 font-mono leading-relaxed whitespace-pre-wrap break-all">
          {code}
        </pre>

        <button
          onClick={() => copy(code)}
          className="shrink-0 mt-0.5 flex items-center justify-center h-6 w-6 rounded-md
            text-zinc-400 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-200
            bg-transparent hover:bg-zinc-200 dark:hover:bg-zinc-700
            opacity-0 group-hover:opacity-100 transition-all duration-150"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-purple-500" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
    </div>
  );
}