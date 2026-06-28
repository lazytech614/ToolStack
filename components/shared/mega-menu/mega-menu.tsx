"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import { MegaMenuPanel } from "./mega-menu-panel";
import { MegaMenuProps } from "@/types/mega-menu.types";
import { useMegaMenu } from "@/hooks/useMegaMenu";

export function MegaMenu({
  label,
  sections,
  footer,
  className,
  columns,
  width,
  align,
}: MegaMenuProps) {
  const {
    pathname,
    open,
    setOpen,
    ref,
  } = useMegaMenu();

  const isActive = sections.some((section) =>
    section.items.some(
      (item) =>
        pathname === item.href ||
        pathname.startsWith(item.href + "/")
    )
  );

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
    >
      {/* Trigger */}

      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "group relative flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300",
          isActive || open
            ? "text-zinc-900 dark:text-white"
            : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100/80 hover:text-zinc-900 dark:hover:bg-zinc-900/70 dark:hover:text-white"
        )}
      >
        {label}

        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
        />

        <span
          className={cn(
            "absolute left-0 -bottom-1 h-0.5 rounded-full bg-linear-to-r from-purple-500 via-fuchsia-500 to-violet-500 transition-all duration-300",
            isActive
              ? "w-full opacity-100"
              : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
          )}
        />
      </button>

      {open && (
        <MegaMenuPanel
            sections={sections}
            footer={footer}
            columns={columns}
            width={width}
            align={align}
        />
      )}
    </div>
  );
}