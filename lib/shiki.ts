import { createHighlighter, type BundledLanguage, type BundledTheme } from "shiki";

export function getShikiTheme(theme: string | undefined): BundledTheme {
  return theme === "dark" ? "dark-plus" : "light-plus";
}

const highlighterPromise = createHighlighter({
  themes: ["dark-plus", "light-plus"],
  langs: [
    "javascript",
    "typescript",
    "tsx",
    "jsx",
    "html",
    "css",
    "json",
    "bash",
    "python",
    "java",
    "cpp",
    "go",
    "rust",
    "sql",
    "yaml",
    "markdown",
  ],
});

export async function highlightCode(
  code: string,
  language: BundledLanguage,
  theme: BundledTheme = "dark-plus",
) {
  const highlighter = await highlighterPromise;

  return highlighter.codeToHtml(code, {
    lang: language,
    theme,
  });
}

export async function highlightMarkdown(md: string, theme: BundledTheme = "dark-plus") {
  const highlighter = await highlighterPromise;
  return highlighter.codeToHtml(md, { lang: "markdown", theme });
}

export async function highlightJson(json: string, theme: BundledTheme = "dark-plus") {
  const highlighter = await highlighterPromise;
  return highlighter.codeToHtml(json, { lang: "json", theme });
}

export async function highlightYaml(yaml: string, theme: BundledTheme = "dark-plus") {
  const highlighter = await highlighterPromise;
  return highlighter.codeToHtml(yaml, { lang: "yaml", theme });
}

export async function highlightSql(sql: string, theme: BundledTheme = "dark-plus") {
  const highlighter = await highlighterPromise;
  return highlighter.codeToHtml(sql, { lang: "sql", theme });
}

export async function highlightBash(bash: string, theme: BundledTheme = "dark-plus") {
  const highlighter = await highlighterPromise;
  return highlighter.codeToHtml(bash, { lang: "bash", theme });
}
