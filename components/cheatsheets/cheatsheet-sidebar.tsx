"use client";

import { useEffect, useState } from "react";
import { type Section } from "@/constants/cheatsheets";

export function CheatsheetSidebar({ sections }: { sections: Section[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const ids = sections.map((s) =>
      s.title.toLowerCase().replace(/\s+/g, "-")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="space-y-0.5">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 px-3 mb-3">
        Sections
      </p>
      {sections.map((section) => {
        const id = section.title.toLowerCase().replace(/\s+/g, "-");
        const isActive = activeId === id;

        return (
          <a
            key={id}
            href={`#${id}`}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-all duration-150 ${
              isActive
                ? "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300"
                : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            {isActive && (
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0" />
            )}
            {section.title}
          </a>
        );
      })}
    </nav>
  );
}