"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import type {
  MegaMenuFooter,
  MegaMenuSection as Section,
  MegaMenuItem as MenuItem,
  MegaMenuProps,
} from "@/types/mega-menu.types";
import { cn } from "@/lib/utils";
import { useMegaMenu } from "@/hooks/useMegaMenu";

interface MegaMenuPanelProps {
  sections: Section[];
  footer?: MegaMenuFooter;
  columns?: number;
  width?: string;
  align?: "left" | "center" | "right";
}

interface MegaMenuItemProps {
  item: MenuItem;
}

interface MegaMenuSectionProps {
  section: Section;
}

function MegaMenuPanel({ sections, footer, columns, width, align }: MegaMenuPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  const maxWidth = width ?? "1200px";

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const PADDING = 12; // minimum gap from screen edge

    if (rect.right > viewportWidth - PADDING) {
      // Overflows right edge
      setOffset(-(rect.right - viewportWidth + PADDING));
    } else if (rect.left < PADDING) {
      // Overflows left edge
      setOffset(PADDING - rect.left);
    }
  }, []);

  const alignmentClass =
    align === "left" ? "left-0" : align === "right" ? "right-0" : "left-1/2 -translate-x-1/2";

  const totalColumns = columns ?? sections.length;

  const gridClass =
    totalColumns <= 1
      ? "grid-cols-1"
      : totalColumns === 2
        ? "grid-cols-1 md:grid-cols-2"
        : totalColumns === 3
          ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
          : totalColumns === 4
            ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
            : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5";

  return (
    <div
      ref={panelRef}
      className={`animate-in fade-in slide-in-from-top-2 absolute top-full z-50 mt-3 rounded-2xl border border-zinc-200/60 bg-white/95 pr-2 shadow-xl shadow-zinc-200/50 backdrop-blur-xl duration-200 dark:border-zinc-800/60 dark:bg-zinc-950/95 dark:shadow-black/40 ${alignmentClass} `}
      style={{
        width: `min(${maxWidth}, calc(100vw - 8rem))`,
        maxWidth: "calc(100vw - 8rem)",
        transform:
          align === "center" ? `translateX(calc(-50% + ${offset}px))` : `translateX(${offset}px)`,
      }}
    >
      {/* Arrow */}
      <div
        className={`absolute -top-1.5 h-3 w-3 rotate-45 rounded-sm border-t border-l border-zinc-200/60 bg-white dark:border-zinc-800/60 dark:bg-zinc-950 ${align === "left" ? "left-8" : align === "right" ? "right-8" : "left-1/2 -translate-x-1/2"} `}
      />

      {/* Sections */}
      <div className={cn("grid gap-4 p-4", gridClass)}>
        {sections.map((section) => (
          <MegaMenuSection key={section.id} section={section} />
        ))}
      </div>

      {/* Footer */}
      {footer && (
        <div className="flex items-center justify-between border-t border-zinc-100 px-5 py-3 dark:border-zinc-800/60">
          <p className="text-xs text-zinc-400 dark:text-zinc-500">{footer.text}</p>
          <Link
            href={footer.href}
            className="text-xs font-medium text-purple-600 transition-colors hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
          >
            {footer.label} →
          </Link>
        </div>
      )}
    </div>
  );
}

function MegaMenuItem({ item }: MegaMenuItemProps) {
  const pathname = usePathname();

  const Icon = item.icon;

  const active = pathname === item.href || pathname.startsWith(item.href + "/");

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
            : "bg-zinc-100 group-hover/item:bg-purple-100 dark:bg-zinc-800 dark:group-hover/item:bg-purple-900/40"
        }`}
      >
        <Icon
          className={`h-3.5 w-3.5 ${
            active
              ? "text-purple-600 dark:text-purple-400"
              : "text-zinc-500 group-hover/item:text-purple-600 dark:text-zinc-400 dark:group-hover/item:text-purple-400"
          }`}
        />
      </span>

      <span className="flex flex-col">
        <span
          className={`text-sm leading-tight font-medium ${
            active ? "text-purple-700 dark:text-purple-300" : "text-zinc-800 dark:text-zinc-200"
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

function MegaMenuSection({ section }: MegaMenuSectionProps) {
  const Icon = section.icon;

  return (
    <div className="p-2">
      <div className="mb-2 flex items-center gap-1.5 px-2">
        <Icon className="h-3.5 w-3.5 text-purple-500" />

        <span className="text-[11px] font-semibold tracking-wider text-zinc-400 uppercase dark:text-zinc-500">
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

export function MegaMenu({
  label,
  sections,
  footer,
  className,
  columns,
  width,
  align,
}: MegaMenuProps) {
  const { pathname, open, setOpen, ref } = useMegaMenu();

  const isActive = sections.some((section) =>
    section.items.some((item) => pathname === item.href || pathname.startsWith(item.href + "/")),
  );

  return (
    <div ref={ref} className={cn("relative", className)}>
      {/* Trigger */}

      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "group relative flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300",
          isActive || open
            ? "text-zinc-900 dark:text-white"
            : "text-zinc-500 hover:bg-zinc-100/80 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900/70 dark:hover:text-white",
        )}
      >
        {label}

        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180")}
        />

        <span
          className={cn(
            "absolute -bottom-1 left-0 h-0.5 rounded-full bg-linear-to-r from-purple-500 via-fuchsia-500 to-violet-500 transition-all duration-300",
            isActive
              ? "w-full opacity-100"
              : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100",
          )}
        />
      </button>

      {open && (
        <MegaMenuPanel
          sections={sections}
          footer={footer}
          columns={columns}
          width={width ?? "1200px"}
          align={align}
        />
      )}
    </div>
  );
}
