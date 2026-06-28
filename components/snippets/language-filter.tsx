import { Language, languages } from "@/constants/learnings/snippets";

export function LanguageFilter({
  active,
  onChange,
}: {
  active: Language;
  onChange: (l: Language) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 shrink-0">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => onChange(lang)}
          className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-150 ${
            active === lang
              ? "border-transparent bg-linear-to-r from-purple-600 to-violet-600 text-white shadow-sm"
              : "border-zinc-200 bg-transparent text-zinc-600 hover:border-purple-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-purple-500/40 dark:hover:text-white"
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}