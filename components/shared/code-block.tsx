"use client";

import { useCopy } from "@/hooks/useCopy";
import { getShikiTheme, highlightCode } from "@/lib/shiki";
import { Check, Copy } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BundledLanguage } from "shiki";

export function CodeBlock({
  code,
  description,
  language,
}: {
  code: string;
  description?: string;
  language: BundledLanguage;
}) {
  const [html, setHtml] = useState("");

  const { copied, copy } = useCopy();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const highlighted = await highlightCode(code, language, getShikiTheme(resolvedTheme));

      if (!cancelled) {
        setHtml(highlighted);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [code, language, resolvedTheme]);

  return (
    <div className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/60">
      {/* Description */}
      {description && (
        <div className="px-4 pt-3 pb-1">
          <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500">
            {description}
          </span>
        </div>
      )}

      {/* Code + Copy */}
      <div className="flex items-center gap-1.5 bg-[#2d2d2d] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28ca41]" />
      </div>
      <div className="relative flex items-start justify-between gap-3 px-4 py-3">
        <div
          className="w-full [&_pre]:m-0 [&_pre]:overflow-x-auto [&_pre]:rounded-b-xl [&_pre]:p-4 [&_pre]:text-[13px] [&_pre]:leading-7"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />

        <button
          onClick={() => copy(code)}
          className="absolute top-4 right-4 h-6 w-6 bg-transparent text-zinc-400 transition-all duration-150 group-hover:opacity-100 hover:text-zinc-700 md:opacity-0 dark:text-zinc-500 dark:hover:text-zinc-200"
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
