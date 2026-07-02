import Link from "next/link";
import { FaGithub, FaHeart } from "react-icons/fa";

import { LEGAL } from "@/constants/configs/configs";
import { DiCodeigniter } from "react-icons/di";

const EXPLORE = [
  { name: "Developer Tools", href: "/tools" },
  { name: "Learn", href: "/learn" },
  { name: "Resources", href: "/resources" },
];

const COMMUNITY = [
  {
    name: "GitHub",
    href: "https://github.com/lazytech614/tool-stack",
    external: true,
  },
  {
    name: "Report Issue",
    href: "https://github.com/lazytech614/tool-stack/issues",
    external: true,
  },
  {
    name: "Contribute",
    href: "https://github.com/lazytech614/tool-stack",
    external: true,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-900 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <DiCodeigniter className="h-5 w-5" />
              <h1 className="text-2xl font-extrabold text-zinc-900 dark:text-white">
                Tool
                <span className="bg-linear-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-violet-500">
                  Stack
                </span>
              </h1>
            </Link>

            <p className="max-w-xs text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Your all-in-one developer hub with tools, snippets, cheatsheets, starter kits,
              templates, documentation, extensions, and curated learning resources.
            </p>

            <Link
              href="https://github.com/lazytech614/tool-stack"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition-colors hover:text-purple-600 dark:text-zinc-300 dark:hover:text-purple-400"
            >
              <FaGithub className="h-4 w-4" />
              Star on GitHub
            </Link>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wider text-zinc-900 uppercase dark:text-white">
              Explore
            </h3>

            <div className="space-y-3">
              {EXPLORE.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-zinc-600 transition-colors hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-400"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wider text-zinc-900 uppercase dark:text-white">
              Community
            </h3>

            <div className="space-y-3">
              {COMMUNITY.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-zinc-600 transition-colors hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-400"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wider text-zinc-900 uppercase dark:text-white">
              Legal
            </h3>

            <div className="space-y-3">
              {LEGAL.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-zinc-600 transition-colors hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-400"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-linear-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-800" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm capitalize sm:flex-row">
          <p className="text-zinc-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">ToolStack</span>. All
            rights reserved.
          </p>

          <p className="flex items-center gap-2 text-zinc-500">
            Built with
            <FaHeart className="h-3.5 w-3.5 text-red-500" />
            for developers.
          </p>
        </div>
      </div>
    </footer>
  );
}
