"use client";

import { Container } from "@/components/shared/container";
import { PageHeading } from "@/components/shared/page-heading";
import { StatusBar } from "@/components/shared/satus-bar";
import { SearchBar } from "@/components/shared/search-bar";
import { CategoryFilter } from "@/components/shared/category-filter";
import { SecondaryHeading } from "@/components/shared/secondary-heading";

import { snippets, Language, Snippet } from "@/constants/learnings/snippets";
import { SnippetCard } from "@/components/learn/snippets/snippet-card";
import { useContentFilter } from "@/hooks/useContentFilters";

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
    isFiltering,
  } = useContentFilter({
    items: snippets,
    storageKey: "toolstack:learn:snippets:pinned",
    getId: (snippet) => snippet.id,
    getFilter: (snippet) => snippet.language,
    matchesSearch: (snippet, q) =>
      snippet.title.toLowerCase().includes(q) ||
      snippet.description.toLowerCase().includes(q) ||
      snippet.tags.some((tag) =>
        tag.toLowerCase().includes(q)
      ),
  });

  return (
    <main className="min-h-screen bg-white dark:bg-black py-10">
      <Container>
        {/* Header */}
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
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search snippets..."
            className="w-full lg:max-w-xs"
          />

          <CategoryFilter
            categories={[
              ...new Set(snippets.map((snippet) => snippet.language)),
            ]}
            selected={language}
            onChange={(value) =>
              setLanguage(value as Language | "All")
            }
          />
        </div>

        {isFiltering ? (
          <section className="mt-10">
            <SecondaryHeading
              title="Results"
              count={filtered.length}
              description={
                filtered.length === 0
                  ? "No snippets match your search."
                  : undefined
              }
            />

            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 mt-5">
              {filtered.map((snippet) => (
                <div
                  key={snippet.id}
                  className="mb-4 break-inside-avoid"
                >
                  <SnippetCard
                    snippet={snippet}
                    pin={{
                      pinned: pinnedSet.has(snippet.id),
                      onToggle: () => togglePin(snippet.id),
                    }}
                  />
                </div>
              ))}
            </div>
          </section>
        ) : (
          <>
            {pinned.length > 0 && (
              <section className="mt-10">
                <SecondaryHeading
                  title="Pinned Snippets"
                  description="Your saved snippets appear here first."
                  count={pinned.length}
                />

                <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 mt-5">
                  {pinned.map((snippet) => (
                    <div
                      key={snippet.id}
                      className="mb-4 break-inside-avoid"
                    >
                      <SnippetCard
                        snippet={snippet}
                        pin={{
                          pinned: pinnedSet.has(snippet.id),
                          onToggle: () => togglePin(snippet.id),
                        }}
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className={pinned.length > 0 ? "mt-12" : "mt-10"}>
              <SecondaryHeading
                title={
                  pinned.length
                    ? "All Other Snippets"
                    : "All Snippets"
                }
                description={
                  pinned.length
                    ? "Browse the remaining snippets below."
                    : "Hover a card and click the pin icon to save a snippet."
                }
                count={unpinned.length}
              />

              <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 mt-5">
                {unpinned.map((snippet) => (
                  <div
                    key={snippet.id}
                    className="mb-4 break-inside-avoid"
                  >
                    <SnippetCard
                      snippet={snippet}
                      pin={{
                        pinned: pinnedSet.has(snippet.id),
                        onToggle: () => togglePin(snippet.id),
                      }}
                    />
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </Container>
    </main>
  );
}