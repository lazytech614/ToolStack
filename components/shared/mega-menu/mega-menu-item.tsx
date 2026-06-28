"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MegaMenuItem as MenuItem } from "@/types/mega-menu.types";

interface Props {
  item: MenuItem;
}

export function MegaMenuItem({ item }: Props) {
  const pathname = usePathname();

  const Icon = item.icon;

  const active =
    pathname === item.href ||
    pathname.startsWith(item.href + "/");

  return (
    <Link
      href={item.href}
      className={`group/item flex items-start gap-3 rounded-xl px-3 py-2.5 transition-all duration-150 ${
        active
          ? "bg-purple-50 dark:bg-purple-950/40"
          : "hover:bg-zinc-100/80 dark:hover:bg-zinc-900/60"
      }`}
    >
      <span
        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors ${
          active
            ? "bg-purple-100 dark:bg-purple-900/50"
            : "bg-zinc-100 dark:bg-zinc-800 group-hover/item:bg-purple-100 dark:group-hover/item:bg-purple-900/40"
        }`}
      >
        <Icon
          className={`h-3.5 w-3.5 ${
            active
              ? "text-purple-600 dark:text-purple-400"
              : "text-zinc-500 dark:text-zinc-400 group-hover/item:text-purple-600 dark:group-hover/item:text-purple-400"
          }`}
        />
      </span>

      <span className="flex flex-col">
        <span
          className={`text-sm font-medium leading-tight ${
            active
              ? "text-purple-700 dark:text-purple-300"
              : "text-zinc-800 dark:text-zinc-200"
          }`}
        >
          {item.label}
        </span>

        <span className="mt-0.5 text-xs leading-snug text-zinc-400 dark:text-zinc-500">
          {item.description}
        </span>
      </span>
    </Link>
  );
}