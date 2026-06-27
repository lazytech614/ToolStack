"use client";

import { useState, useMemo } from "react";
import { snippets, languages, type Language, type Snippet } from "@/constants/snippets";
import { Container } from "@/components/shared/container";
import { CodeBlock } from "@/components/cheatsheets/code-block";
import { Search } from "lucide-react";

// ─── Language Badge ───────────────────────────────────────────────────────────

const languageColors: Record<string, string> = {
  typescript: "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",
  react: "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400",
  css: "bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400",
};

function LanguageBadge({ language }: { language: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold capitalize ${
        languageColors[language] ?? "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
      }`}
    >
      {language}
    </span>
  );
}

// ─── Snippet Card ─────────────────────────────────────────────────────────────

function SnippetCard({ snippet }: { snippet: Snippet }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border p-5 transition-all duration-200
      bg-white border-zinc-200 hover:border-purple-300 hover:shadow-md hover:shadow-purple-100/40
      dark:bg-zinc-900/40 dark:border-zinc-800 dark:hover:border-purple-500/40 dark:hover:shadow-purple-900/20"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white font-mono">
            {snippet.title}
          </h3>
          <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {snippet.description}
          </p>
        </div>
        <LanguageBadge language={snippet.language} />
      </div>

      {/* Code */}
      <CodeBlock code={snippet.code} />

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {snippet.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-[11px] font-medium text-zinc-500 dark:text-zinc-400"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Language Filter ──────────────────────────────────────────────────────────

function LanguageFilter({
  active,
  onChange,
}: {
  active: Language;
  onChange: (l: Language) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => onChange(lang)}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all duration-150 ${
            active === lang
              ? "bg-purple-600 text-white dark:bg-purple-500"
              : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SnippetsPage() {
  const [query, setQuery] = useState("");
  const [activeLanguage, setActiveLanguage] = useState<Language>("all");

  const filtered = useMemo(() => {
    return snippets.filter((s) => {
      const matchesLang =
        activeLanguage === "all" || s.language === activeLanguage;
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q));
      return matchesLang && matchesQuery;
    });
  }, [query, activeLanguage]);

  return (
    <main className="min-h-screen py-16">
      <Container>
        {/* Header */}
        <div className="mb-10 max-w-xl">
          <span className="inline-flex items-center rounded-full border border-purple-200 dark:border-purple-500/30 bg-purple-50 dark:bg-purple-950/40 px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400 mb-4">
            Reference
          </span>
          <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Snippets
          </h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Copy-paste code patterns for everyday tasks. Search by name, tag, or description.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search snippets..."
              className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 pl-9 pr-4 py-2 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 outline-none focus:border-purple-400 dark:focus:border-purple-500 transition-colors"
            />
          </div>

          {/* Language filter */}
          <LanguageFilter active={activeLanguage} onChange={setActiveLanguage} />
        </div>

        {/* Count */}
        <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-5">
          {filtered.length} snippet{filtered.length !== 1 ? "s" : ""}
          {activeLanguage !== "all" && ` in ${activeLanguage}`}
          {query && ` matching "${query}"`}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filtered.map((snippet) => (
              <SnippetCard key={snippet.id} snippet={snippet} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-sm font-medium text-zinc-900 dark:text-white">
              No snippets found
            </p>
            <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
              Try a different search term or language.
            </p>
            <button
              onClick={() => { setQuery(""); setActiveLanguage("all"); }}
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