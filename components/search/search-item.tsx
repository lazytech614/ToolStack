"use client";

import { SearchItem as SearchItemType } from "@/types/search-types";

import { CommandItem } from "@/components/ui/command";

interface Props {
  item: SearchItemType;

  onSelect: (href: string) => void;
}

export function SearchItem({ item, onSelect }: Props) {
  return (
    <CommandItem
      value={`${item.title} ${item.description}`}
      onSelect={() => onSelect(item.href)}
      className="cursor-pointer py-3"
    >
      <div className="flex w-full items-start justify-between gap-4">
        <div className="space-y-1">
          <p className="font-medium">{item.title}</p>

          <p className="text-muted-foreground line-clamp-1 text-xs">{item.description}</p>
        </div>

        <span className="text-muted-foreground rounded-full border px-2 py-1 text-[10px] uppercase">
          {item.category}
        </span>
      </div>
    </CommandItem>
  );
}
