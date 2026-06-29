"use client";

import { useMemo, useState } from "react";
import { cheatsheets, type Tag } from "@/constants/learnings/cheatsheets";
import { Container } from "@/components/shared/container";
import { PageHeading } from "@/components/shared/page-heading";
import { StatusBar } from "@/components/shared/satus-bar";
import { SearchBar } from "@/components/shared/search-bar";
import { ResourceCard } from "@/components/shared/resource-card";
import { cheatsheetToResourceCard } from "@/lib/cheatsheet-to-resource";
import { TagFilter } from "@/components/learn/cheatsheets/tag-filter";

export default function CheatsheetsPage() {
  const [activeTag, setActiveTag] = useState<Tag>("all");
  const [search, setSearch] = useState("")

    const filtered = useMemo(() => {
      const q = search.toLowerCase().trim()
      return cheatsheets.filter((cheatsheet) => {
        const matchesSearch =
          !q ||
          cheatsheet.title.toLowerCase().includes(q) ||
          cheatsheet.description.toLowerCase().includes(q) ||
          cheatsheet.tag.toLowerCase().includes(q)
        const matchesTag = activeTag === "all" || cheatsheet.tag === activeTag
        return matchesSearch && matchesTag
      })
    }, [search, activeTag])

  return (
    <main className="min-h-screen bg-white dark:bg-black py-10">
      <Container>
        {/* Top row: heading + status */}
        <div className="flex flex-col gap-4 md:flex-row items-start md:justify-between">
          <PageHeading
            title="Cheatsheets"
            description="Quick syntax references for the tools you use every day. No fluff, just the commands and patterns you actually need."
          />
          <div className="text-left md:text-right md:shrink-0">
            <StatusBar
              items={cheatsheets}
              getName={(cheatsheet) => cheatsheet.title}
              itemLabel="cheatsheet"
            />
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-4">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search cheatsheets..."
            className="w-full"
          />      
          <TagFilter active={activeTag} onChange={setActiveTag} />
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {filtered.map((sheet) => (
              <ResourceCard
                key={sheet.slug}
                item={cheatsheetToResourceCard(sheet)}
              />
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
            <button
              onClick={() => { setSearch(""); setActiveTag("all"); }}
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