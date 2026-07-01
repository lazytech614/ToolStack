interface Props {
  tags: string[];
}

export function SnippetTags({ tags }: Props) {
  if (!tags.length) return null;

  return (
    <div className="flex flex-wrap gap-2 border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-500/10 dark:text-purple-300"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
