"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";

import { Button } from "@/components/ui/button";
import { Container } from "../shared/container";
import { ModeToggle } from "../providers/mode-toggle";

import { MobileSidebar } from "./mobile-sidebar";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants/configs/configs";
import { MegaMenu } from "../shared/mega-menu";
import { learningSections } from "@/constants/navigation/learning-menu";
import { resourceSections } from "@/constants/navigation/resource-menu";
import { SearchTrigger } from "../search/search-trigger";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/50 bg-white backdrop-blur-xl dark:border-zinc-900/60 dark:bg-black/80">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <DiCodeigniter className="h-5 w-5" />
              <h1 className="text-2xl font-extrabold text-zinc-900 dark:text-white">
                Tool
                <span className="bg-linear-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-violet-500">
                  Stack
                </span>
              </h1>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-2 md:flex">
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`group relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-zinc-900 dark:text-white"
                        : "rounded-lg text-zinc-500 hover:bg-zinc-100/80 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900/70 dark:hover:text-white"
                    }`}
                  >
                    {link.label}

                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-linear-to-r from-purple-500 via-fuchsia-500 to-violet-500 transition-all duration-300 ${
                        isActive
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                );
              })}

              {/* Learning Mega Menu */}
              <MegaMenu label="Learn" sections={learningSections} width="600px" align="left" />

              {/* Resources Mega Menu */}
              <MegaMenu label="Resources" sections={resourceSections} align="left" />
            </nav>

            <SearchTrigger className="hidden lg:flex" />
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <ModeToggle />

            <Button
              variant="default"
              className="hidden cursor-pointer py-2 md:flex"
              onClick={() => window.open("https://github.com/lazytech614/tool-stack")}
            >
              <FaGithub className="mr-2 h-4 w-4" />
              Star on GitHub
            </Button>

            {/* Mobile Menu */}
            <MobileSidebar />
          </div>
        </div>
      </Container>
    </header>
  );
}
