"use client";

import { MegaMenuSection as Section } from "@/types/mega-menu.types";
import { MegaMenuItem } from "./mega-menu-item";

interface Props {
  section: Section;
}

export function MegaMenuSection({
  section,
}: Props) {
  const Icon = section.icon;

  return (
    <div className="p-2">
      <div className="mb-2 flex items-center gap-1.5 px-2">
        <Icon className="h-3.5 w-3.5 text-purple-500" />

        <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
          {section.title}
        </span>
      </div>

      <ul className="space-y-0.5">
        {section.items.map((item) => (
          <li key={item.href}>
            <MegaMenuItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}