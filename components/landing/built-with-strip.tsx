"use client";

import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import { TbBrandRadixUi } from "react-icons/tb";

import { cn } from "@/lib/utils";

const stack = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "shadcn/ui", icon: TbBrandRadixUi },
];

interface BuiltWithStripProps {
  className?: string;
}

export function BuiltWithStrip({ className }: BuiltWithStripProps) {
  return (
    <div className={cn("w-full border-t border-zinc-200 pt-5 dark:border-zinc-800", className)}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        <span className="text-xs font-medium tracking-wider whitespace-nowrap text-zinc-500 uppercase dark:text-zinc-500">
          Built with
        </span>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {stack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-400"
            >
              <tech.icon className="h-4 w-4" />
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
