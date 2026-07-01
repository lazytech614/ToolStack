"use client";

import { BundledLanguage } from "shiki";

import { Container } from "@/components/shared/container";
import { PageHeading } from "@/components/shared/page-heading";
import { SearchBar } from "@/components/shared/search-bar";
import { CategoryFilter } from "@/components/shared/category-filter";
import { StatusBar } from "@/components/shared/satus-bar";

import { snippets } from "@/content/snippets";
import { snippetLanguages } from "@/content/snippets/languages";
import { getSnippetsByTag } from "@/content/snippets/helpers";
import { useContentFilter } from "@/hooks/useContentFilters";
import { useSelectedContent } from "@/hooks/useSelectedContent";

import { SnippetSidebar } from "@/components/learn/snippets/snippet-sidebar";
import { SnippetList } from "@/components/learn/snippets/snippet-list";
import { SnippetListItem } from "@/components/learn/snippets/snippet-list-item";
import { SnippetDetail } from "@/components/learn/snippets/snippet-detail";
import { SnippetLayout } from "@/components/learn/snippets/snippets-layout";

export default function SnippetsPage() {
  const {
    search,
    setSearch,
    filter: language,
    setFilter: setLanguage,
    filtered,
    pinned,
    unpinned,
    pinnedSet,
    togglePin,
  } = useContentFilter({
    items: snippets,
    storageKey: "toolstack:learn:snippets:pinned",
    getId: (snippet) => snippet.id,
    getFilter: (snippet) => snippet.language,
    matchesSearch: (snippet, q) =>
      snippet.title.toLowerCase().includes(q) ||
      snippet.description.toLowerCase().includes(q) ||
      snippet.tags.some((tag) => tag.toLowerCase().includes(q)),
  });

  const sections = [];

  if (pinned.length > 0) {
    sections.push({
      title: "📌 Pinned",
      items: pinned,
      count: pinned.length,
    });
  }

  sections.push({
    title: pinned.length ? "All Snippets" : "Snippets",
    items: unpinned,
    count: unpinned.length,
  });

  const { selected, selectedId, setSelectedId } = useSelectedContent({
    items: filtered,
    getId: (snippet) => snippet.id,
  });

  // Related snippets: same primary tag, excluding the selected one
  const related = selected
    ? getSnippetsByTag(selected.tags[0])
        .filter((s) => s.id !== selected.id)
        .slice(0, 4)
    : [];

  return (
    <main className="min-h-screen bg-white py-10 dark:bg-black">
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <PageHeading
            title="Snippets"
            description="Copy-paste code patterns for everyday tasks."
          />

          <div className="text-left md:shrink-0 md:text-right">
            <StatusBar items={snippets} getName={(snippet) => snippet.title} itemLabel="snippet" />
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-4">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search snippets..."
            className="w-full lg:max-w-md"
          />

          <CategoryFilter
            categories={snippetLanguages}
            selected={language}
            onChange={(value) => setLanguage(value as BundledLanguage | "All")}
          />
        </div>

        <SnippetLayout
          sidebar={
            <SnippetSidebar>
              <SnippetList
                sections={sections}
                selectedId={selectedId}
                getId={(snippet) => snippet.id}
                renderItem={(snippet, active) => (
                  <SnippetListItem
                    key={snippet.id}
                    snippet={snippet}
                    selected={active}
                    pinned={pinnedSet.has(snippet.id)}
                    onSelect={() => setSelectedId(snippet.id)}
                    onTogglePin={() => togglePin(snippet.id)}
                  />
                )}
              />
            </SnippetSidebar>
          }
          detail={
            <SnippetDetail
              snippet={selected}
              pinned={selected ? pinnedSet.has(selected.id) : false}
              onTogglePin={() => {
                if (selected) {
                  togglePin(selected.id);
                }
              }}
              related={related}
              onSelectRelated={(id) => setSelectedId(id)}
            />
          }
        />
      </Container>
    </main>
  );
}
