"use client";

import { CommandGroup, CommandList } from "@/components/ui/command";

import { SearchItem as SearchItemType } from "@/types/search-types";
import { SearchItem } from "./search-item";
import { groupResults } from "@/lib/search-engine";

interface Props {
  results: SearchItemType[];

  onSelect: (href: string) => void;
}

export function SearchResults({ results, onSelect }: Props) {
  const grouped = groupResults(results);

  return (
    <CommandList>
      {Object.entries(grouped).map(([category, items]) => {
        if (!items.length) return null;

        return (
          <CommandGroup key={category} heading={category}>
            {items.map((item) => (
              <SearchItem key={item.id} item={item} onSelect={onSelect} />
            ))}
          </CommandGroup>
        );
      })}
    </CommandList>
  );
}
