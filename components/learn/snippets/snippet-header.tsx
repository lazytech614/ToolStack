import { Snippet } from "@/constants/learnings/snippets";

interface Props {
  snippet: Snippet;
}

export function SnippetHeader({ snippet }: Props) {
  return (
    <div className="border-b border-zinc-200 p-6 dark:border-zinc-800">
      <h1 className="text-3xl font-bold">{snippet.title}</h1>

      <p className="mt-3 text-zinc-500">{snippet.description}</p>
    </div>
  );
}
