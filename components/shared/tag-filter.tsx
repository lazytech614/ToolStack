import { cn } from "@/lib/utils";

interface Props<T extends string> {
  tags: readonly T[];
  active: string;
  onChange: (t: T) => void;
}

export function TagFilter<T extends string>({ tags, active, onChange }: Props<T>) {
  return (
    <div className="flex shrink-0 flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onChange(tag)}
          className={cn(
            "rounded-full border px-3.5 py-1.5 text-xs font-medium capitalize transition-all duration-150",
            active === tag
              ? "border-transparent bg-linear-to-r from-purple-600 to-violet-600 text-white shadow-sm"
              : "border-zinc-200 bg-transparent text-zinc-600 hover:border-purple-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-purple-500/40 dark:hover:text-white",
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
