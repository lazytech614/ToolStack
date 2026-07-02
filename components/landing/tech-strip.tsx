"use client";

const whatWeOffer = [
  "Developer Tools",
  "Snippets",
  "Cheatsheets",
  "Starter Kits",
  "Boilerplates",
  "Templates",
  "VS Code Extensions",
  "Browser Extensions",
  "CLI Tools",
  "Documentation",
  "Learning Resources",
  "Glossary",
];

const items = [...whatWeOffer, ...whatWeOffer];

export function TechStrip() {
  return (
    <div className="relative mt-14 hidden overflow-hidden border-y border-zinc-200/60 py-4 sm:block dark:border-zinc-800/60">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-linear-to-r from-white via-white to-transparent dark:from-black dark:via-black" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-linear-to-l from-white via-white to-transparent dark:from-black dark:via-black" />

      <div className="flex w-max animate-[marquee_60s_linear_infinite] items-center">
        {items.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center text-sm whitespace-nowrap">
            <span className="font-medium text-zinc-600 transition-colors duration-300 hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-300">
              {item}
            </span>

            <span className="mx-6 text-purple-500/50">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
