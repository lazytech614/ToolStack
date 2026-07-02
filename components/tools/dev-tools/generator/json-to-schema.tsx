"use client";

import { useState, useMemo, useCallback, useRef } from "react";
import { Copy, Check, Download, RefreshCw, Upload, ChevronDown } from "lucide-react";

import { EXAMPLE_JSON } from "@/constants/configs/examples";
import { SchemaDraft } from "@/types/dev-tools/json-to-schema";
import { cn } from "@/lib/utils";
import {
  collectStats,
  highlightJSON,
  inferSchema,
  validateJSON,
  wrapWithDraft,
} from "@/lib/dev-utils/json-to-schema";
import { useCopy } from "@/hooks/useCopy";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface InferOptions {
  required: boolean;
  inferFormats: boolean;
  inferEnums: boolean;
  nullable: boolean;
  draft: SchemaDraft;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
function StatItem({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[10px] font-semibold tracking-widest text-zinc-400 uppercase dark:text-zinc-600">
        {label}
      </span>
      <span className="text-sm font-semibold text-zinc-800 tabular-nums dark:text-zinc-200">
        {value}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export function JsonToSchema() {
  const [input, setInput] = useState("");
  const [opts, setOpts] = useState<InferOptions>({
    required: true,
    inferFormats: true,
    inferEnums: false,
    nullable: true,
    draft: "draft-07",
  });
  const [minify, setMinify] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  const { copied, copy } = useCopy();

  const set = <K extends keyof InferOptions>(k: K, v: InferOptions[K]) =>
    setOpts((prev) => ({ ...prev, [k]: v }));

  // Validate + parse
  const validation = useMemo(() => {
    if (!input.trim()) return null;
    return validateJSON(input);
  }, [input]);

  // Infer schema
  const schema = useMemo(() => {
    if (!input.trim() || !validation?.valid) return null;
    try {
      const parsed = JSON.parse(input);
      const raw = inferSchema(parsed, opts);
      return wrapWithDraft(raw, opts.draft);
    } catch {
      return null;
    }
  }, [input, opts, validation]);

  const schemaString = useMemo(() => {
    if (!schema) return "";
    return minify ? JSON.stringify(schema) : JSON.stringify(schema, null, 2);
  }, [schema, minify]);

  const stats = useMemo(() => {
    if (!schema) return null;
    return collectStats(schema, opts.draft);
  }, [schema, opts.draft]);

  const handleDownload = useCallback(() => {
    if (!schemaString) return;
    const blob = new Blob([schemaString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "schema.json";
    a.click();
    URL.revokeObjectURL(url);
  }, [schemaString]);

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => setInput(e.target?.result as string);
    reader.readAsText(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const errorLines = useMemo(() => {
    if (!validation || validation.valid || !validation.line) return new Set<number>();
    return new Set([validation.line]);
  }, [validation]);

  // Render input with line numbers + error highlight
  const inputLines = input.split("\n");

  return (
    <div className="flex flex-col gap-6">
      {/* ── Options bar ── */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Draft */}
        <div className="relative">
          <select
            value={opts.draft}
            onChange={(e) => set("draft", e.target.value as SchemaDraft)}
            className="cursor-pointer appearance-none rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 pr-8 text-xs font-medium text-zinc-700 focus:ring-2 focus:ring-purple-500/40 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
          >
            <option value="draft-07">Draft-07</option>
            <option value="draft-2019-09">Draft 2019-09</option>
            <option value="draft-2020-12">Draft 2020-12</option>
          </select>
          <ChevronDown className="pointer-events-none absolute top-1/2 right-2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
        </div>

        <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />

        {/* Toggles */}
        {(
          [
            ["required", "Required fields"],
            ["inferFormats", "Infer formats"],
            ["inferEnums", "Infer enums"],
            ["nullable", "Nullable"],
          ] as [keyof InferOptions, string][]
        ).map(([key, label]) => (
          <label key={key} className="flex cursor-pointer items-center gap-1.5 select-none">
            <input
              type="checkbox"
              checked={opts[key] as boolean}
              onChange={(e) => set(key, e.target.checked)}
              className="h-3.5 w-3.5 accent-purple-600"
            />
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{label}</span>
          </label>
        ))}

        <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />

        {/* Output mode */}
        <div className="flex gap-1 rounded-lg border border-zinc-200 p-1 dark:border-zinc-800">
          {(["pretty", "minify"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setMinify(v === "minify")}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-medium capitalize transition-colors",
                (v === "minify") === minify
                  ? "bg-purple-600 text-white"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",
              )}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* ── Action bar ── */}
      <div className="flex flex-col flex-wrap items-start gap-2 gap-y-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setInput(EXAMPLE_JSON)}
            className="text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            Try example
          </button>
          <button
            onClick={() => setInput("")}
            className="flex items-center gap-1 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            <RefreshCw className="h-3 w-3" /> Clear
          </button>
          <button
            onClick={() => fileRef.current?.click()}
            className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            <Upload className="h-3 w-3" /> Import file
          </button>
          <input
            ref={fileRef}
            type="file"
            accept=".json,application/json"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
            }}
          />
        </div>

        {schemaString && (
          <div className="flex items-center gap-2 sm:ml-auto">
            <button
              onClick={() => copy(schemaString)}
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
              <Download className="h-3 w-3" /> Download
            </button>
          </div>
        )}
      </div>

      {/* ── Panes ── */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Input pane */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold tracking-widest text-zinc-900 uppercase dark:text-zinc-500">
              JSON Input
            </label>
            {validation?.valid && (
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                ✓ Valid JSON
              </span>
            )}
          </div>

          {/* Line-numbered editor */}
          <div
            className={cn(
              "relative overflow-hidden rounded-lg border",
              dragOver
                ? "border-purple-400 bg-purple-50 dark:border-purple-500 dark:bg-purple-900/10"
                : validation && !validation.valid && input.trim()
                  ? "border-red-300 dark:border-red-800"
                  : "border-zinc-200 dark:border-zinc-800",
            )}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
          >
            {dragOver && (
              <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                  Drop JSON file here
                </span>
              </div>
            )}

            <div className="flex max-h-120 min-h-64 font-mono text-xs">
              {/* Line numbers */}
              <div className="sticky left-0 flex min-w-10 flex-col border-r border-zinc-200 bg-zinc-100 px-2 py-3 text-right leading-5 text-zinc-400 select-none dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-600">
                {(input || " ").split("\n").map((_, i) => (
                  <span
                    key={i}
                    className={cn(
                      "text-[11px] leading-5",
                      errorLines.has(i + 1) && "font-bold text-red-500",
                    )}
                  >
                    {i + 1}
                  </span>
                ))}
              </div>

              {/* Textarea overlaid with highlight layer */}
              <div className="relative flex-1">
                {/* Highlight error line */}
                {validation && !validation.valid && validation.line && input && (
                  <div
                    className="pointer-events-none absolute right-0 left-0 bg-red-50 dark:bg-red-900/20"
                    style={{
                      top: `${(validation.line - 1) * 20 + 12}px`,
                      height: "20px",
                    }}
                  />
                )}
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={`Paste JSON here…\n\nOr drag and drop a .json file`}
                  spellCheck={false}
                  className="absolute inset-0 h-full min-h-64 w-full resize-none bg-zinc-50 p-3 leading-5 text-zinc-900 placeholder:text-zinc-300 focus:ring-0 focus:outline-none dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-700"
                  style={{ fontFamily: "ui-monospace, monospace", fontSize: "12px" }}
                />
              </div>
            </div>

            {/* Error message */}
            {validation && !validation.valid && input.trim() && (
              <div className="border-t border-red-200 bg-red-50 px-3 py-2 dark:border-red-900 dark:bg-red-900/20">
                <p className="font-mono text-xs text-red-600 dark:text-red-400">
                  {validation.error}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Output pane */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-widest text-zinc-900 uppercase dark:text-zinc-500">
            JSON Schema
          </label>

          <div className="max-h-120 min-h-64 overflow-auto rounded-lg border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
            {schemaString ? (
              <>
                <style>{`
                  .jk { color: #7c3aed; font-weight: 600; }
                  .dark .jk { color: #a78bfa; }
                  .js { color: #16a34a; }
                  .dark .js { color: #4ade80; }
                  .jb { color: #2563eb; font-weight: 600; }
                  .dark .jb { color: #60a5fa; }
                  .jn { color: #d97706; }
                  .dark .jn { color: #fbbf24; }
                `}</style>
                <pre
                  className="p-3 font-mono text-xs leading-5 break-all whitespace-pre-wrap text-zinc-700 dark:text-zinc-300"
                  dangerouslySetInnerHTML={{ __html: highlightJSON(schemaString) }}
                />
              </>
            ) : (
              <div className="flex h-full min-h-64 items-center justify-center">
                <p className="px-4 text-center text-xs text-zinc-400 dark:text-zinc-600">
                  {input.trim()
                    ? validation && !validation.valid
                      ? "Fix the JSON error to generate a schema"
                      : "Generating…"
                    : "Paste valid JSON on the left to generate a schema"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      {stats && (
        <div className="grid grid-cols-2 gap-4 rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-4 sm:grid-cols-3 lg:grid-cols-6 dark:border-zinc-800 dark:bg-zinc-900/50">
          <StatItem label="Objects" value={stats.objects} />
          <StatItem label="Arrays" value={stats.arrays} />
          <StatItem label="Properties" value={stats.properties} />
          <StatItem label="Max depth" value={stats.maxDepth} />
          <StatItem label="Schema size" value={`${(stats.schemaSize / 1024).toFixed(1)} KB`} />
          <StatItem label="Draft" value={stats.draft} />
        </div>
      )}
    </div>
  );
}
