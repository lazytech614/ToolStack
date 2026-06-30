import { ReactNode } from "react";

interface ContentGridProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  emptyMessage?: string;
  className?: string;
}

export function ContentGrid<T>({
  items,
  renderItem,
  emptyMessage = "Nothing found.",
  className = "",
}: ContentGridProps<T>) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          {emptyMessage}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ${className}`}
    >
      {items.map(renderItem)}
    </div>
  );
}