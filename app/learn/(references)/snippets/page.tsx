"use client";

import { useState, useMemo } from "react";
import { snippets, type Language } from "@/constants/learnings/snippets";
import { Container } from "@/components/shared/container";
import { PageHeading } from "@/components/shared/page-heading";
import { StatusBar } from "@/components/shared/satus-bar";
import { SearchBar } from "@/components/shared/search-bar";
import { LanguageFilter } from "@/components/learn/snippets/language-filter";
import { SnippetCard } from "@/components/learn/snippets/snippet-card";

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
    <main className="min-h-screen bg-white dark:bg-black py-10">
      <Container>
        {/* Top row: heading + status */}
        <div className="flex flex-col gap-4 md:flex-row items-start md:justify-between">
          <PageHeading
            title="Snippets"
            description="Copy-paste code patterns for everyday tasks. Search by name, tag, or description."
          />
          <div className="text-left md:text-right md:shrink-0">
            <StatusBar
              items={snippets}
              getName={(snippet) => snippet.title}
              itemLabel="snippet"
            />
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-4">
          {/* Search */}
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="Search snippets..."
              className="w-full"
            />
            {/* Language filter */}
            <LanguageFilter active={activeLanguage} onChange={setActiveLanguage} />
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="columns-1 sm:columns-2 gap-3.5 mt-10">
            {filtered.map((s) => (
              <div key={s.id} style={{ breakInside: "avoid", marginBottom: "14px" }}>
                <SnippetCard snippet={s} />
              </div>
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