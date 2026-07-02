"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Home, Search, ArrowRight, TerminalSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { tools } from "@/content/tools";

export default function NotFound() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return tools
      .filter(
        (tool) => tool.name.toLowerCase().includes(q) || tool.description.toLowerCase().includes(q),
      )
      .slice(0, 5);
  }, [query]);

  return (
    <main className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-white px-6 dark:bg-black">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/10" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e720_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e720_1px,transparent_1px)] bg-size-[48px_48px] opacity-40 dark:bg-[linear-gradient(to_right,#27272a40_1px,transparent_1px),linear-gradient(to_bottom,#27272a40_1px,transparent_1px)]" />

      {/* Floating tool glyphs */}
      <div className="pointer-events-none absolute inset-0 select-none">
        {["</>", "{}", "$", "#!", "[]", "=>"].map((glyph, i) => (
          <span
            key={glyph}
            className="animate-float absolute font-mono text-2xl font-bold text-purple-500/10 dark:text-purple-400/10"
            style={{
              top: `${((i * 37) % 80) + 10}%`,
              left: `${((i * 53) % 80) + 5}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          >
            {glyph}
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        {/* Status Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 dark:border-purple-500/20 dark:bg-purple-500/10 dark:text-purple-400">
          <TerminalSquare className="h-4 w-4" />
          Route not found
        </div>

        {/* Terminal card */}
        <div className="mx-auto overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 text-left shadow-2xl shadow-purple-500/10 dark:border-zinc-800">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-2 font-mono text-xs text-zinc-500">zsh — 80×24</span>
          </div>

          {/* Terminal body */}
          <div className="space-y-2 p-6 font-mono text-sm">
            <p className="text-zinc-500">
              $ cd {typeof window !== "undefined" ? window.location.pathname : "/unknown"}
            </p>
            <p className="text-red-400">
              zsh: no such route:{" "}
              <span className="text-red-300">
                {typeof window !== "undefined" ? window.location.pathname : "/unknown"}
              </span>
            </p>
            <p className="text-zinc-500">
              $ <span className="animate-pulse text-purple-400">▍</span>
            </p>
          </div>
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl dark:text-white">
          <span className="bg-linear-to-r from-purple-600 via-purple-500 to-violet-600 bg-clip-text text-transparent">
            404
          </span>{" "}
          — this page doesn&apos;t exist
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          It may have moved, been renamed, or never existed. Search the tools directory below, or
          head back home.
        </p>

        {/* Live tool search */}
        <div className="relative mx-auto mt-8 max-w-md">
          <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tools… e.g. json, regex, uuid"
            className="h-12 rounded-full border-zinc-200 bg-white pl-11 text-sm shadow-sm focus-visible:ring-purple-500 dark:border-zinc-800 dark:bg-zinc-900"
          />

          {results.length > 0 && (
            <div className="absolute top-full right-0 left-0 z-20 mt-2 overflow-hidden rounded-2xl border border-zinc-200 bg-white text-left shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
              {results.map((tool) => (
                <Link
                  key={tool.id}
                  href={tool.href}
                  className="group flex items-center justify-between gap-3 border-b border-zinc-100 px-4 py-3 last:border-b-0 hover:bg-purple-50 dark:border-zinc-800 dark:hover:bg-purple-500/10"
                >
                  <div className="flex items-center gap-3">
                    <tool.icon className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    <div>
                      <p className="text-sm font-medium text-zinc-900 dark:text-white">
                        {tool.name}
                      </p>
                      <p className="line-clamp-1 text-xs text-zinc-500">{tool.description}</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-zinc-300 transition group-hover:translate-x-0.5 group-hover:text-purple-500" />
                </Link>
              ))}
            </div>
          )}

          {query.trim() && results.length === 0 && (
            <div className="absolute top-full right-0 left-0 z-20 mt-2 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-left text-sm text-zinc-500 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
              No tools match &quot;{query}&quot; — try a different keyword.
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-linear-to-r from-purple-600 to-violet-600 text-white hover:opacity-90"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back Home
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-zinc-200 bg-white hover:border-purple-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-purple-500/30"
          >
            <Link href="/tools">
              <ArrowRight className="mr-2 h-4 w-4" />
              Browse All Tools
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
