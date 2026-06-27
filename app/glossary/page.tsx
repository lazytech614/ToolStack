"use client";

import { useState, useMemo, useRef } from "react";
import {
  glossaryTerms,
  categories,
  alphabet,
  type Category,
  type GlossaryTerm,
} from "@/constants/glossary";
import { Container } from "@/components/shared/container";
import { Search } from "lucide-react";

// ─── Category colors ──────────────────────────────────────────────────────────

const categoryColors: Record<string, string> = {
  networking:
    "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",
  javascript:
    "bg-yellow-50 text-yellow-600 dark:bg-yellow-950/40 dark:text-yellow-500",
  devops:
    "bg-orange-50 text-orange-600 dark:bg-orange-950/40 dark:text-orange-400",
  database:
    "bg-green-50 text-green-600 dark:bg-green-950/40 dark:text-green-400",
  patterns:
    "bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400",
};

// ─── Category Filter ──────────────────────────────────────────────────────────

function CategoryFilter({
  active,
  onChange,
}: {
  active: Category;
  onChange: (c: Category) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all duration-150 ${
            active === cat
              ? "bg-purple-600 text-white dark:bg-purple-500"
              : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

// ─── A–Z Jump Bar ─────────────────────────────────────────────────────────────

function AlphabetBar({ available }: { available: string[] }) {
  return (
    <div className="flex flex-wrap gap-1">
      {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => {
        const active = available.includes(letter);
        return active ? (
          <a
            key={letter}
            href={`#letter-${letter}`}
            className="flex h-7 w-7 items-center justify-center rounded-md text-xs font-semibold
              text-purple-600 dark:text-purple-400
              hover:bg-purple-50 dark:hover:bg-purple-950/40 transition-colors"
          >
            {letter}
          </a>
        ) : (
          <span
            key={letter}
            className="flex h-7 w-7 items-center justify-center rounded-md text-xs font-medium text-zinc-300 dark:text-zinc-700 cursor-default"
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
}

// ─── Term Card ────────────────────────────────────────────────────────────────

function TermCard({ term }: { term: GlossaryTerm }) {
  return (
    <div className="rounded-2xl border p-5 transition-all duration-200
      bg-white border-zinc-200 hover:border-purple-300 hover:shadow-sm hover:shadow-purple-100/40
      dark:bg-zinc-900/40 dark:border-zinc-800 dark:hover:border-purple-500/40"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
          {term.term}
        </h3>
        <span
          className={`shrink-0 inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold capitalize ${
            categoryColors[term.category]
          }`}
        >
          {term.category}
        </span>
      </div>

      {/* Definition */}
      <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
        {term.definition}
      </p>

      {/* Related terms */}
      {term.related && term.related.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] text-zinc-400 dark:text-zinc-500 font-medium">
            Related:
          </span>
          {term.related.map((r) => (
            <span
              key={r}
              className="rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-[11px] font-medium text-zinc-500 dark:text-zinc-400"
            >
              {r}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Letter Group ─────────────────────────────────────────────────────────────

function LetterGroup({
  letter,
  terms,
}: {
  letter: string;
  terms: GlossaryTerm[];
}) {
  return (
    <div id={`letter-${letter}`} className="scroll-mt-24">
      {/* Letter heading */}
      <div className="flex items-center gap-3 mb-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 dark:bg-purple-950/40 text-sm font-extrabold text-purple-600 dark:text-purple-400">
          {letter}
        </span>
        <div className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800" />
      </div>

      {/* Terms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
        {terms.map((term) => (
          <TermCard key={term.id} term={term} />
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GlossaryPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered = useMemo(() => {
    return glossaryTerms.filter((t) => {
      const matchesCat =
        activeCategory === "all" || t.category === activeCategory;
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        t.related?.some((r) => r.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }, [query, activeCategory]);

  // Group filtered terms by first letter
  const grouped = useMemo(() => {
    return filtered.reduce((acc, term) => {
      const letter = term.term[0].toUpperCase();
      (acc[letter] ??= []).push(term);
      return acc;
    }, {} as Record<string, GlossaryTerm[]>);
  }, [filtered]);

  const availableLetters = Object.keys(grouped).sort();

  return (
    <main className="min-h-screen py-16">
      <Container>
        {/* Header */}
        <div className="mb-10 max-w-xl">
          <span className="inline-flex items-center rounded-full border border-purple-200 dark:border-purple-500/30 bg-purple-50 dark:bg-purple-950/40 px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400 mb-4">
            Reference
          </span>
          <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Glossary
          </h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Plain-English definitions for developer terminology. Search a term or browse by category.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search terms..."
              className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 pl-9 pr-4 py-2 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 outline-none focus:border-purple-400 dark:focus:border-purple-500 transition-colors"
            />
          </div>

          {/* Category filter */}
          <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        </div>

        {/* A–Z jump bar — only shown when not searching */}
        {!query && activeCategory === "all" && (
          <div className="mb-8">
            <AlphabetBar available={availableLetters} />
          </div>
        )}

        {/* Count */}
        <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-8">
          {filtered.length} term{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "all" && ` in ${activeCategory}`}
          {query && ` matching "${query}"`}
        </p>

        {/* Terms */}
        {availableLetters.length > 0 ? (
          availableLetters.map((letter) => (
            <LetterGroup
              key={letter}
              letter={letter}
              terms={grouped[letter]}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-sm font-medium text-zinc-900 dark:text-white">
              No terms found
            </p>
            <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
              Try a different search or category.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 text-xs font-medium text-purple-600 dark:text-purple-400 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </Container>
    </main>
  );
}