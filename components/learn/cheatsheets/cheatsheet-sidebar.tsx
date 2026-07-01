"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheatsheetSection } from "@/content/cheatsheets";

export function CheatsheetSidebar({ sections }: { sections: CheatsheetSection[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const ids = sections.map((s) => s.title.toLowerCase().replace(/\s+/g, "-"));

    const observer = new IntersectionObserver(
      (entries) => {
        // If we're at the bottom of the page, always highlight the last section
        const isAtBottom =
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5;

        if (isAtBottom) {
          setActiveId(ids[ids.length - 1]);
          return;
        }

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5;

      if (isAtBottom) {
        setActiveId(ids[ids.length - 1]);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <nav className="space-y-0.5">
      <p className="mb-3 px-3 text-[11px] font-semibold tracking-wider text-zinc-400 uppercase dark:text-zinc-500">
        Sections
      </p>
      {sections.map((section) => {
        const id = section.title.toLowerCase().replace(/\s+/g, "-");
        const isActive = activeId === id;

        return (
          <Link
            key={id}
            href={`#${id}`}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-all duration-150 ${
              isActive
                ? "bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300"
                : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-white"
            }`}
          >
            {isActive && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />}
            {section.title}
          </Link>
        );
      })}
    </nav>
  );
}
