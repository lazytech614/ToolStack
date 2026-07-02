"use client";

import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { useGlobalSearch } from "@/hooks/useGlobalSearch";

interface SearchTriggerProps {
  className?: string;
}

export function SearchTrigger({ className }: SearchTriggerProps) {
  const { openSearch } = useGlobalSearch();

  return (
    <button
      onClick={openSearch}
      className={cn(
        "group flex h-10 w-64 items-center justify-between rounded-lg",
        "border border-zinc-200 bg-white px-3",
        "transition-all duration-200",
        "hover:border-purple-400 hover:bg-zinc-50",
        "dark:border-zinc-800 dark:bg-zinc-900",
        "dark:hover:border-purple-500 dark:hover:bg-zinc-800",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <Search className="h-4 w-4 text-zinc-400" />

        <span className="text-sm text-zinc-500 dark:text-zinc-400">Search...</span>
      </div>

      <kbd className="hidden rounded-md border border-zinc-200 bg-zinc-100 px-2 py-0.5 text-[11px] text-zinc-500 sm:inline-flex dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
        ⌘K
      </kbd>
    </button>
  );
}
