"use client";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Container } from "../shared/container";
import { ToolShowcase } from "./tool-showcase";
import Link from "next/link";
import { TechStrip } from "./tech-strip";
import { BuiltWithStrip } from "./built-with-strip";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-20 dark:bg-black">
      <Container>
        <div className="flex flex-col justify-between gap-x-4 lg:flex-row lg:items-stretch">
          <div className="flex flex-col lg:w-1/2">
            <div className="space-y-6">
              <div className="mb-6 inline-flex items-center rounded-full border border-purple-500/40 bg-purple-500/15 px-4 py-2 text-sm font-medium text-purple-600 shadow-[0_0_20px_-8px_rgba(147,51,234,0.35)] dark:border-purple-500/40 dark:bg-purple-500/15 dark:text-purple-300 dark:shadow-[0_0_20px_-8px_rgba(168,85,247,0.5)]">
                ⚡Built for Developers
              </div>

              <h1 className="text-5xl font-bold tracking-tight text-zinc-900 md:text-7xl dark:text-white">
                Build Faster.
                <span className="block bg-linear-to-r from-purple-600 via-purple-500 to-violet-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-violet-600">
                  Develop Smarter.
                </span>
              </h1>

              <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Everything developers need—tools, snippets, cheatsheets, templates, and curated
                resources—in one place.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/tools">
                  <Button
                    size="lg"
                    className="group cursor-pointer bg-linear-to-r from-purple-600 to-violet-600 text-white"
                  >
                    Get Started
                    <MdKeyboardDoubleArrowRight className="ml-2 h-6 w-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" />
                  </Button>
                </Link>

                <Button
                  size="lg"
                  variant="default"
                  className="cursor-pointer"
                  onClick={() => window.open("https://github.com/lazytech614/tool-stack")}
                >
                  <FaGithub className="mr-2 h-4 w-4" />
                  Star on GitHub
                </Button>
              </div>

              <div className="mb-8 flex gap-8">
                <div>
                  <p className="text-2xl font-bold text-purple-600">25+</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Developer Tools</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-600">500+</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Code Resources</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-600">100%</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Free to Use</p>
                </div>
              </div>
            </div>

            <BuiltWithStrip className="mt-auto" />
          </div>

          <ToolShowcase />
        </div>

        <TechStrip />
      </Container>
    </section>
  );
}
