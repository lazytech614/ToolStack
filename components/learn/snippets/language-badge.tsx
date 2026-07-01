const languageColors: Record<string, string> = {
  typescript: "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",
  react: "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400",
  css: "bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400",
};

export function LanguageBadge({ language }: { language: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold capitalize ${
        languageColors[language] ?? "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
      }`}
    >
      {language}
    </span>
  );
}
