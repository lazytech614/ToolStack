"use client";

import { useRouter } from "next/navigation";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { useGlobalSearch } from "@/hooks/useGlobalSearch";

export function GlobalSearch() {
  const router = useRouter();

  const { open, setOpen, query, setQuery, results, closeSearch } = useGlobalSearch();

  function handleSelect(href: string) {
    router.push(href);
    closeSearch();
  }

  const grouped = results.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }

      acc[item.category].push(item);

      return acc;
    },
    {} as Record<string, typeof results>,
  );

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      className="max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 p-0 shadow-2xl dark:border-zinc-800"
    >
      <Command shouldFilter={false}>
        <CommandInput
          value={query}
          onValueChange={setQuery}
          placeholder="Search tools, snippets, cheatsheets, templates..."
        />

        <CommandList>
          <CommandEmpty>
            <div className="py-10 text-center">
              <p className="text-sm font-medium">No results found.</p>

              <p className="mt-1 text-xs text-zinc-500">
                Try searching for React, Prisma, JWT, Markdown...
              </p>
            </div>
          </CommandEmpty>

          {Object.entries(grouped).map(([category, items]) => (
            <CommandGroup key={category} heading={category}>
              {items.map((item) => (
                <CommandItem
                  key={item.href}
                  value={item.title}
                  onSelect={() => handleSelect(item.href)}
                  className="cursor-pointer"
                >
                  <div className="flex w-full items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="truncate font-medium">{item.title}</p>

                      <p className="line-clamp-1 text-xs text-zinc-500 dark:text-zinc-400">
                        {item.description}
                      </p>
                    </div>

                    <span className="shrink-0 rounded-md bg-purple-500/10 px-2 py-1 text-[10px] font-semibold text-purple-500 uppercase">
                      {category}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
