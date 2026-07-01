"use client";

import { Snippet } from "@/constants/learnings/snippets";

import { SnippetToolbar } from "./snippet-toolbar";
import { SnippetCode } from "./snippet-code";
import { SnippetTags } from "./snippet-tags";
import { SnippetHeader } from "./snippet-header";
import { SnippetEmpty } from "./snippet-empty";

interface Props {
  snippet: Snippet | null;
  pinned: boolean;
  onTogglePin: () => void;
}

export function SnippetDetail({ snippet, pinned, onTogglePin }: Props) {
  if (!snippet) {
    return <SnippetEmpty />;
  }

  return (
    <div className="rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <SnippetHeader snippet={snippet} />
      <SnippetToolbar snippet={snippet} pinned={pinned} onTogglePin={onTogglePin} />
      <SnippetTags tags={snippet.tags} />
      <SnippetCode snippet={snippet} />
    </div>
  );
}
