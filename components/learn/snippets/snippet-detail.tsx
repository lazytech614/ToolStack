"use client";

import { Snippet } from "@/content/snippets/types";

import { SnippetToolbar } from "./snippet-toolbar";
import { SnippetCode } from "./snippet-code";
import { SnippetTags } from "./snippet-tags";
import { SnippetHeader } from "./snippet-header";
import { SnippetEmpty } from "./snippet-empty";

interface Props {
  snippet: Snippet | null;
  pinned: boolean;
  onTogglePin: () => void;
  related?: Snippet[];
  onSelectRelated?: (id: string) => void;
}

export function SnippetDetail({
  snippet,
  pinned,
  onTogglePin,
  related = [],
  onSelectRelated,
}: Props) {
  if (!snippet) {
    return <SnippetEmpty />;
  }

  return (
    <div className="rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <SnippetHeader snippet={snippet} />
      <SnippetToolbar snippet={snippet} pinned={pinned} onTogglePin={onTogglePin} />
      <SnippetTags tags={snippet.tags} />
      <SnippetCode snippet={snippet} />

      {related.length > 0 && (
        <div className="border-t border-zinc-200 px-5 py-4 dark:border-zinc-800">
          <h3 className="text-xs font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
            Related snippets
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {related.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => onSelectRelated?.(s.id)}
                  className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:bg-zinc-800"
                >
                  {s.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
