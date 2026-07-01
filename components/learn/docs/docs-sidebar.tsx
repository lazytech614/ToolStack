"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Layers, Code2 } from "lucide-react";
import { categoryLabels, docCategories, getDocsByCategory } from "@/content/docs";

const categoryIcons = {
  "getting-started": BookOpen,
  "core-concepts": Layers,
  "api-reference": Code2,
};

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav className="space-y-6">
      {docCategories.map((category) => {
        const Icon = categoryIcons[category];
        const categoryDocs = getDocsByCategory(category);

        return (
          <div key={category}>
            {/* Category label */}
            <div className="mb-2 flex items-center gap-1.5 px-3">
              <Icon className="h-3.5 w-3.5 text-purple-500" />
              <span className="text-[11px] font-semibold tracking-wider text-zinc-400 uppercase dark:text-zinc-500">
                {categoryLabels[category]}
              </span>
            </div>

            {/* Doc links */}
            <ul className="space-y-0.5">
              {categoryDocs.map((doc) => {
                const href = `/learn/docs/${doc.slug}`;
                const isActive = pathname === href;

                return (
                  <li key={doc.slug}>
                    <Link
                      href={href}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-all duration-150 ${
                        isActive
                          ? "bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300"
                          : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                      )}
                      {doc.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}
