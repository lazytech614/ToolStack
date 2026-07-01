import { FileCode2 } from "lucide-react";

export function SnippetEmpty() {
  return (
    <div className="flex h-150 flex-col items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-zinc-50 px-6 text-center dark:border-zinc-700 dark:bg-zinc-900/40">
      <FileCode2 className="mb-4 h-14 w-14 text-zinc-400" />

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Select a snippet</h2>

      <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500 dark:text-zinc-400">
        Choose a snippet from the sidebar to preview its code, description, language, and tags.
      </p>
    </div>
  );
}
