"use client";

import Link from "next/link";
import { useState } from "react";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Menu, ArrowUpRight, ChevronRight, ChevronDown, Zap } from "lucide-react";
import { DiCodeigniter } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import {
  NAV_LINKS,
  LEARNING,
  LEARNING_CATEGORIES,
  RESOURCES,
  RESOURCE_CATEGORIES,
} from "@/constants/configs/configs";
import { SearchTrigger } from "../search/search-trigger";

export function MobileSidebar() {
  const [learningOpen, setLearningOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const groupedLearning = LEARNING.reduce(
    (acc, link) => {
      (acc[link.category as keyof typeof acc] ??= []).push(link);
      return acc;
    },
    {} as Record<string, typeof LEARNING>,
  );

  const groupedResources = RESOURCES.reduce(
    (acc, link) => {
      (acc[link.category as keyof typeof acc] ??= []).push(link);
      return acc;
    },
    {} as Record<string, typeof RESOURCES>,
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[92%] border-zinc-200 bg-white/95 p-0 backdrop-blur-2xl dark:border-zinc-800 dark:bg-black/95"
      >
        <div className="flex h-full flex-col overflow-y-auto">
          {/* Header */}
          <div className="p-6">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="flex items-center">
              <DiCodeigniter className="h-5 w-5" />
              <div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Tool
                  <span className="text-purple-600 dark:text-purple-400">Stack</span>
                </h2>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="px-6 pb-3">
            <SearchTrigger variant="full" className="w-full" />
          </div>

          {/* Navigation */}
          <div className="px-6">
            <div className="space-y-3">
              {/* Regular nav links */}
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-white p-4 transition-all hover:border-purple-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-purple-500/30 dark:hover:bg-zinc-900"
                >
                  <p className="font-medium text-zinc-900 dark:text-white">{item.label}</p>
                  <ChevronRight className="h-5 w-5 text-zinc-400 transition-transform group-hover:translate-x-1 dark:text-zinc-500" />
                </Link>
              ))}

              {/* Learning accordion */}
              <div
                className={`overflow-hidden rounded-2xl border transition-all ${
                  learningOpen
                    ? "border-purple-300 bg-zinc-50 dark:border-purple-500/30 dark:bg-zinc-900"
                    : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/40"
                }`}
              >
                <button
                  onClick={() => setLearningOpen((v) => !v)}
                  className="flex w-full items-center justify-between p-4"
                >
                  <p className="font-medium text-zinc-900 dark:text-white">Learn</p>

                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      learningOpen
                        ? "rotate-180 text-purple-500"
                        : "text-zinc-400 dark:text-zinc-500"
                    }`}
                  />
                </button>

                {learningOpen && (
                  <div className="space-y-4 px-3 pb-3">
                    {LEARNING_CATEGORIES.map(({ key, title, icon: CatIcon }) => (
                      <div key={key}>
                        <div className="mb-1.5 flex items-center gap-1.5 px-2">
                          <CatIcon className="h-3.5 w-3.5 text-purple-500" />
                          <span className="text-[11px] font-semibold tracking-wider text-zinc-400 uppercase dark:text-zinc-500">
                            {title}
                          </span>
                        </div>

                        <div className="space-y-1">
                          {groupedLearning[key]?.map((link) => {
                            const Icon = link.icon;

                            return (
                              <Link
                                key={link.href}
                                href={link.href}
                                className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all hover:bg-white dark:hover:bg-zinc-800/60"
                              >
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 transition-colors group-hover/item:bg-purple-100 dark:bg-zinc-800 dark:group-hover/item:bg-purple-900/40">
                                  <Icon className="h-4 w-4 text-zinc-500 group-hover/item:text-purple-600 dark:text-zinc-400 dark:group-hover/item:text-purple-400" />
                                </span>

                                <span className="flex flex-col">
                                  <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                    {link.label}
                                  </span>

                                  <span className="text-xs text-zinc-400 dark:text-zinc-500">
                                    {link.description}
                                  </span>
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources accordion */}
              <div
                className={`overflow-hidden rounded-2xl border transition-all ${
                  resourcesOpen
                    ? "border-purple-300 bg-zinc-50 dark:border-purple-500/30 dark:bg-zinc-900"
                    : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/40"
                }`}
              >
                <button
                  onClick={() => setResourcesOpen((v) => !v)}
                  className="flex w-full items-center justify-between p-4"
                >
                  <p className="font-medium text-zinc-900 dark:text-white">Resources</p>

                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      resourcesOpen
                        ? "rotate-180 text-purple-500"
                        : "text-zinc-400 dark:text-zinc-500"
                    }`}
                  />
                </button>

                {resourcesOpen && (
                  <div className="space-y-4 px-3 pb-3">
                    {RESOURCE_CATEGORIES.map(({ key, title, icon: CatIcon }) => (
                      <div key={key}>
                        <div className="mb-1.5 flex items-center gap-1.5 px-2">
                          <CatIcon className="h-3.5 w-3.5 text-purple-500" />
                          <span className="text-[11px] font-semibold tracking-wider text-zinc-400 uppercase dark:text-zinc-500">
                            {title}
                          </span>
                        </div>

                        <div className="space-y-1">
                          {groupedResources[key]?.map((link) => {
                            const Icon = link.icon;

                            return (
                              <Link
                                key={link.href}
                                href={link.href}
                                className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all hover:bg-white dark:hover:bg-zinc-800/60"
                              >
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 transition-colors group-hover/item:bg-purple-100 dark:bg-zinc-800 dark:group-hover/item:bg-purple-900/40">
                                  <Icon className="h-4 w-4 text-zinc-500 group-hover/item:text-purple-600 dark:text-zinc-400 dark:group-hover/item:text-purple-400" />
                                </span>

                                <span className="flex flex-col">
                                  <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                    {link.label}
                                  </span>

                                  <span className="text-xs text-zinc-400 dark:text-zinc-500">
                                    {link.description}
                                  </span>
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="px-6 py-8">
            <Separator />
          </div>

          {/* GitHub CTA */}
          <div className="px-6">
            <Button className="h-16 w-full justify-between rounded-2xl border border-purple-200 bg-purple-50 text-zinc-900 hover:bg-purple-100 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-white dark:hover:bg-purple-500/15">
              <div className="flex items-center gap-3">
                <FaGithub className="h-5 w-5" />
                <span className="font-medium">Star on GitHub</span>
              </div>
              <ArrowUpRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1" />

          {/* Bottom Card */}
          <div className="p-6">
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-500/15">
                  <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white">Boost your workflow</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    AI-powered developer tools
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
              Build faster with GitHub Helper
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
