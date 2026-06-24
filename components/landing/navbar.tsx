"use client";

import Link from "next/link";
import { GitFork, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "../shared/container";
import { ModeToggle } from "../providers/mode-toggle";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { MobileSidebar } from "./mobile-sidebar";

const navLinks = [
  {
    label: "Tools",
    href: "#tools",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur-xl dark:border-zinc-800/50 dark:bg-black/80">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-xl font-bold">
              Github
              <span className="bg-linear-to-r from-purple-600 to-violet-600 dark:from-purple-400 dark:to-violet-500 bg-clip-text text-transparent">
                Helper
              </span>
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <ModeToggle />

            <Button
              variant="default"
              className="hidden md:flex"
            >
              <GitFork className="mr-2 h-4 w-4" />
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