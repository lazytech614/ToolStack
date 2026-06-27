"use client";

import { useState } from "react";
import Link from "next/link";
import { cheatsheets, tags, type Tag, type Cheatsheet } from "@/constants/cheatsheets";
import { Container } from "@/components/shared/container";
import { ArrowUpRight } from "lucide-react";

// ─── Tag Filter ───────────────────────────────────────────────────────────────

function TagFilter({
  active,
  onChange,
}: {
  active: Tag;
  onChange: (t: Tag) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onChange(tag)}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all duration-150 ${
            active === tag
              ? "bg-purple-600 text-white dark:bg-purple-500"
              : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

// ─── Cheatsheet Card ──────────────────────────────────────────────────────────

function CheatsheetCard({ sheet }: { sheet: Cheatsheet }) {
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CheatsheetsPage() {
  const [activeTag, setActiveTag] = useState<Tag>("all");

  const filtered =
    activeTag === "all"
      ? cheatsheets
      : cheatsheets.filter((s) => s.tag === activeTag);

  return (
    <main className="min-h-screen py-16">
      <Container>
        {/* Header */}
        <div className="mb-10 max-w-xl">
          <span className="inline-flex items-center rounded-full border border-purple-200 dark:border-purple-500/30 bg-purple-50 dark:bg-purple-950/40 px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400 mb-4">
            Reference
          </span>
          <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Cheatsheets
          </h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Quick syntax references for the tools you use every day. No fluff, just the commands and patterns you actually need.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-8">
          <TagFilter active={activeTag} onChange={setActiveTag} />
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((sheet) => (
              <CheatsheetCard key={sheet.slug} sheet={sheet} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-sm font-medium text-zinc-900 dark:text-white">
              No cheatsheets yet
            </p>
            <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
              More coming soon for this category.
            </p>
          </div>
        )}
      </Container>
    </main>
  );
}