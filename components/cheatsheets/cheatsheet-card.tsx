import { Cheatsheet } from "@/constants/learnings/cheatsheets";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function CheatsheetCard({ sheet }: { sheet: Cheatsheet }) {
  const totalSnippets = sheet.sections.reduce(
    (acc, s) => acc + s.snippets.length,
    0
  );

  return (
    <Link
      href={`/cheatsheets/${sheet.slug}`}
      className="group flex flex-col justify-between rounded-2xl border p-5 transition-all duration-200
        bg-white border-zinc-200 hover:border-purple-300 hover:shadow-md hover:shadow-purple-100/50
        dark:bg-zinc-900/40 dark:border-zinc-800 dark:hover:border-purple-500/40 dark:hover:shadow-purple-900/20"
    >
      {/* Top */}
      <div className="flex items-start justify-between gap-3">
        {/* Icon */}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/40 transition-colors duration-200">
          <span className="text-xs font-bold text-zinc-600 dark:text-zinc-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
            {sheet.icon}
          </span>
        </div>

        {/* Arrow */}
        <ArrowUpRight className="h-4 w-4 text-zinc-300 dark:text-zinc-600 group-hover:text-purple-500 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>

      {/* Title & description */}
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
          {sheet.title}
        </h3>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
          {sheet.description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        <span className="inline-flex items-center rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-[11px] font-medium capitalize text-zinc-500 dark:text-zinc-400">
          {sheet.tag}
        </span>
        <span className="text-[11px] text-zinc-400 dark:text-zinc-500">
          {totalSnippets} snippets · {sheet.sections.length} sections
        </span>
      </div>
    </Link>
  );
}