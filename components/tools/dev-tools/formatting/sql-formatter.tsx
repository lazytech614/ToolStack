"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { Copy, Download, RefreshCw, Check, ChevronDown } from "lucide-react";

import { EXAMPLE_DIALECTS, EXAMPLE_SQL } from "@/constants/configs/examples";
import {
  CommaStyle,
  Dialect,
  IdentifierCase,
  IndentStyle,
  KeywordCase,
  OutputMode,
} from "@/types/dev-tools/sql-formatter";
import { useCopy } from "@/hooks/useCopy";
import { cn } from "@/lib/utils";
import { formatSQL, highlightSQL } from "@/lib/dev-utils/sql-formatter";

export interface FormatOptions {
  dialect: Dialect;
  indentStyle: IndentStyle;
  keywordCase: KeywordCase;
  identifierCase: IdentifierCase;
  commaStyle: CommaStyle;
  outputMode: OutputMode;
  formatOnType: boolean;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function Select<T extends string>({
  value,
  onChange,
  options,
  className,
}: {
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="w-full cursor-pointer appearance-none rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 pr-8 text-xs font-medium text-zinc-700 focus:ring-2 focus:ring-purple-500/40 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute top-1/2 right-2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
    </div>
  );
}

function ToggleGroup<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <div className="flex gap-1 rounded-lg border border-zinc-200 p-1 dark:border-zinc-800">
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => onChange(o.value)}
          className={cn(
            "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
            value === o.value
              ? "bg-purple-600 text-white"
              : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Highlighted code pane
// ---------------------------------------------------------------------------

function HighlightedCode({ code }: { code: string }) {
  return (
    <>
      <style>{`
        .sql-keyword { color: #a855f7; font-weight: 600; }
        .dark .sql-keyword { color: #c084fc; }
        .sql-string  { color: #16a34a; }
        .dark .sql-string  { color: #4ade80; }
        .sql-number  { color: #2563eb; }
        .dark .sql-number  { color: #60a5fa; }
        .sql-comment { color: #6b7280; font-style: italic; }
        .dark .sql-comment { color: #4b5563; }
        .sql-operator{ color: #d97706; }
        .dark .sql-operator{ color: #fbbf24; }
        .sql-punct   { color: #71717a; }
        .dark .sql-punct   { color: #52525b; }
        .sql-ident   { color: #0f172a; }
        .dark .sql-ident   { color: #e2e8f0; }
      `}</style>
      <pre
        className="font-mono text-xs leading-relaxed break-all whitespace-pre-wrap text-zinc-900 dark:text-zinc-100"
        dangerouslySetInnerHTML={{ __html: highlightSQL(code) }}
      />
    </>
  );
}

// ---------------------------------------------------------------------------
// Stats bar
// ---------------------------------------------------------------------------

function QueryStats({ sql }: { sql: string }) {
  const stats = useMemo(() => {
    if (!sql.trim()) return null;
    const up = sql.toUpperCase();
    const tables = [...sql.matchAll(/\bFROM\s+(\w+)|\bJOIN\s+(\w+)/gi)].length;
    const joins = [...sql.matchAll(/\bJOIN\b/gi)].length;
    const selectMatch = sql.match(/SELECT\s+([\s\S]+?)\s+FROM/i);
    const cols = selectMatch ? selectMatch[1].split(",").filter((c) => c.trim() !== "*").length : 0;
    const stmts = sql.split(";").filter((s) => s.trim()).length;
    const lines = sql.split("\n").length;
    const chars = sql.length;

    // Complexity
    const score =
      joins * 2 +
      (up.includes("HAVING") ? 1 : 0) +
      (up.includes("UNION") ? 2 : 0) +
      ([...sql.matchAll(/SELECT/gi)].length - 1) * 2;
    const complexity = score >= 5 ? "High" : score >= 2 ? "Medium" : "Low";
    const complexityColor =
      score >= 5
        ? "text-red-500 dark:text-red-400"
        : score >= 2
          ? "text-amber-500 dark:text-amber-400"
          : "text-emerald-600 dark:text-emerald-400";

    return { tables, joins, cols, stmts, lines, chars, complexity, complexityColor };
  }, [sql]);

  if (!stats) return null;

  const items = [
    { label: "Statements", value: stats.stmts },
    { label: "Tables", value: stats.tables },
    { label: "JOINs", value: stats.joins },
    { label: "Columns", value: stats.cols || "—" },
    { label: "Lines", value: stats.lines },
    { label: "Chars", value: stats.chars },
  ];

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 dark:border-zinc-800 dark:bg-zinc-900/50">
      {items.map(({ label, value }) => (
        <div key={label} className="flex items-center gap-1.5">
          <span className="text-xs text-zinc-400 dark:text-zinc-500">{label}</span>
          <span className="text-xs font-semibold text-zinc-700 tabular-nums dark:text-zinc-200">
            {value}
          </span>
        </div>
      ))}
      <div className="ml-auto flex items-center gap-1.5">
        <span className="text-xs text-zinc-400 dark:text-zinc-500">Complexity</span>
        <span className={cn("text-xs font-semibold", stats.complexityColor)}>
          {stats.complexity}
        </span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function SqlFormatter() {
  const [input, setInput] = useState(EXAMPLE_SQL);
  const { copied, copy } = useCopy();
  const [opts, setOpts] = useState<FormatOptions>({
    dialect: "sql",
    indentStyle: "2",
    keywordCase: "upper",
    identifierCase: "lower",
    commaStyle: "trailing",
    outputMode: "format",
    formatOnType: false,
  });

  const set = <K extends keyof FormatOptions>(key: K, val: FormatOptions[K]) =>
    setOpts((prev) => ({ ...prev, [key]: val }));

  const formatted = useMemo(() => {
    const src = input.trim();
    if (!src) return "";
    try {
      return formatSQL(src, opts);
    } catch {
      return src;
    }
  }, [input, opts]);

  // If formatOnType is off, we gate output behind a manual trigger
  const [manualOutput, setManualOutput] = useState("");
  const output = opts.formatOnType ? formatted : manualOutput;

  const handleFormat = useCallback(() => {
    setManualOutput(formatted);
  }, [formatted]);

  // Keyboard shortcut: Ctrl/Cmd + Shift + F
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "f") {
        e.preventDefault();
        handleFormat();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleFormat]);

  const handleCopy = useCallback(() => {
    if (!output) return;
    copy(output);
  }, [output, copy]);

  const handleDownload = useCallback(() => {
    if (!output) return;
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "formatted.sql";
    a.click();
    URL.revokeObjectURL(url);
  }, [output]);

  const handleReset = () => {
    setInput(EXAMPLE_SQL);
    setManualOutput("");
  };

  const hasOutput = output.trim().length > 0;

  return (
    <div className="flex flex-col gap-6">
      {/* ── Top toolbar ── */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Output mode */}
        <ToggleGroup
          value={opts.outputMode}
          onChange={(v) => set("outputMode", v)}
          options={[
            { value: "format", label: "Format" },
            { value: "minify", label: "Minify" },
          ]}
        />

        {/* Dialect */}
        <Select
          value={opts.dialect}
          onChange={(v) => set("dialect", v)}
          options={EXAMPLE_DIALECTS}
          className="w-36"
        />

        {/* Indent */}
        <Select
          value={opts.indentStyle}
          onChange={(v) => set("indentStyle", v)}
          options={[
            { value: "2", label: "2 Spaces" },
            { value: "4", label: "4 Spaces" },
            { value: "tab", label: "Tabs" },
          ]}
          className="w-28"
        />

        {/* Keyword case */}
        <Select
          value={opts.keywordCase}
          onChange={(v) => set("keywordCase", v)}
          options={[
            { value: "upper", label: "UPPERCASE" },
            { value: "lower", label: "lowercase" },
            { value: "preserve", label: "Preserve" },
          ]}
          className="w-32"
        />

        {/* Identifier case */}
        <Select
          value={opts.identifierCase}
          onChange={(v) => set("identifierCase", v)}
          options={[
            { value: "lower", label: "ident lower" },
            { value: "upper", label: "IDENT UPPER" },
            { value: "preserve", label: "Ident Preserve" },
          ]}
          className="w-36"
        />

        {/* Comma style */}
        <Select
          value={opts.commaStyle}
          onChange={(v) => set("commaStyle", v)}
          options={[
            { value: "trailing", label: "Trailing ," },
            { value: "leading", label: "Leading ," },
          ]}
          className="w-28"
        />

        {/* Format-on-type toggle */}
        <label className="flex cursor-pointer items-center gap-1.5 select-none">
          <input
            type="checkbox"
            checked={opts.formatOnType}
            onChange={(e) => set("formatOnType", e.target.checked)}
            className="h-3.5 w-3.5 accent-purple-600"
          />
          <span className="text-xs font-medium whitespace-nowrap text-zinc-500 dark:text-zinc-400">
            Auto-format
          </span>
        </label>
      </div>

      {/* ── Action bar ── */}
      <div className="flex flex-wrap items-center gap-2">
        {!opts.formatOnType && (
          <button
            onClick={handleFormat}
            disabled={!input.trim()}
            className="cursor-pointer rounded-md bg-purple-600 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Format SQL
            <span className="ml-1.5 hidden opacity-60 sm:inline">⌘⇧F</span>
          </button>
        )}

        <button
          onClick={handleReset}
          className="flex cursor-pointer items-center gap-1 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          <RefreshCw className="h-3 w-3" />
          Reset
        </button>

        {hasOutput && (
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-md border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              {copied ? (
                <Check className="h-3 w-3 text-emerald-500" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
              {copied ? "Copied!" : "Copy"}
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 rounded-md border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              <Download className="h-3 w-3" />
              Download
            </button>
          </div>
        )}
      </div>

      {/* ── Panes ── */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Input */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-widest text-zinc-900 uppercase dark:text-zinc-500">
            Input SQL
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your SQL here..."
            rows={14}
            spellCheck={false}
            className="w-full resize-y rounded-lg border border-zinc-200 bg-zinc-50 p-3 font-mono text-xs text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-purple-500/40 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-600"
          />
        </div>

        {/* Output */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-widest text-zinc-900 uppercase dark:text-zinc-500">
            {opts.outputMode === "minify" ? "Minified SQL" : "Formatted SQL"}
          </label>
          <div
            className={cn(
              "min-h-56 w-full overflow-auto rounded-lg border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900",
              !hasOutput && "flex items-center justify-center",
            )}
          >
            {hasOutput ? (
              <HighlightedCode code={output} />
            ) : (
              <p className="text-center text-xs text-zinc-400 dark:text-zinc-600">
                {opts.formatOnType
                  ? "Start typing to see formatted output"
                  : `Click Format SQL to see output`}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      {hasOutput && <QueryStats sql={output} />}
    </div>
  );
}
