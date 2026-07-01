"use client";

import { useEffect, useState } from "react";
import { getShikiTheme, highlightCode } from "@/lib/shiki";
import { useTheme } from "next-themes";
import { Snippet } from "@/content/snippets/types";

interface Props {
  snippet: Snippet;
}

export function SnippetCode({ snippet }: Props) {
  const [html, setHtml] = useState("");

  const { resolvedTheme } = useTheme();

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const highlighted = await highlightCode(
        snippet.code,
        snippet.language,
        getShikiTheme(resolvedTheme),
      );

      if (!cancelled) {
        setHtml(highlighted);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [snippet.code, snippet.language, resolvedTheme]);

  return (
    <section className="p-6">
      <div className="overflow-hidden rounded-xl border border-zinc-700">
        <div className="flex items-center gap-2 border-b border-zinc-700 px-4 py-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />

          <span className="ml-4 text-xs text-zinc-400">{snippet.title}.tsx</span>
        </div>

        <div
          className="[&_pre]:m-0 [&_pre]:overflow-x-auto [&_pre]:rounded-b-xl [&_pre]:p-4 [&_pre]:text-[13px] [&_pre]:leading-7"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </div>
    </section>
  );
}
