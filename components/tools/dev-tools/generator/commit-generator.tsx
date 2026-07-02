"use client";

import { useState } from "react";
import { AlertCircle, Check, Copy, Loader2, RefreshCw } from "lucide-react";

import { EXAMPLE_DIFF } from "@/constants/configs/examples";
import { cn } from "@/lib/utils";
import { useCopy } from "@/hooks/useCopy";

const STYLES = [
  { value: "conventional", label: "Conventional" },
  { value: "simple", label: "Simple" },
  { value: "detailed", label: "Detailed" },
  { value: "enterprise", label: "Enterprise" },
  { value: "funny", label: "Funny" },
] as const;

type CommitStyle = (typeof STYLES)[number]["value"];

const MAX_CHARS = 15_000;
const MIN_CHARS = 10;

export function CommitGenerator() {
  const [diff, setDiff] = useState(EXAMPLE_DIFF);
  const [style, setStyle] = useState<CommitStyle>("conventional");
  const [commit, setCommit] = useState("");
  const [loading, setLoading] = useState(false);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [error, setError] = useState("");

  const charCount = diff.length;
  const isOverLimit = charCount > MAX_CHARS;
  const isUnderMinimum = charCount < MIN_CHARS;
  const isDisabled = loading || isOverLimit || isUnderMinimum;

  const { copied, copy } = useCopy();

  async function handleGenerate() {
    try {
      setLoading(true);
      setError("");
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ diff, style }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setCommit(data.commit);
      setRemaining(data.remaining);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Style selector */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold tracking-widest text-zinc-900 uppercase dark:text-zinc-500">
          Commit Style
        </label>
        <div className="flex flex-wrap gap-2">
          {STYLES.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setStyle(value)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all",
                style === value
                  ? "border-transparent bg-linear-to-r from-purple-600 to-violet-600 text-white"
                  : "border-zinc-200 text-zinc-600 hover:border-purple-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-purple-500/40 dark:hover:text-white",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Diff input */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold tracking-widest text-zinc-900 uppercase dark:text-zinc-500">
            Git Diff
          </label>
          <div className="flex items-center gap-2">
            {diff && (
              <button
                onClick={() => setDiff(EXAMPLE_DIFF)}
                className="flex cursor-pointer items-center gap-1 text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
              >
                <RefreshCw className="h-3 w-3" />
                Reset
              </button>
            )}
          </div>
        </div>
        <textarea
          value={diff}
          onChange={(e) => setDiff(e.target.value)}
          placeholder="Paste your git diff here (e.g., output from `git diff`)"
          rows={14}
          className="w-full resize-y rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs text-zinc-900 transition-colors placeholder:text-zinc-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-purple-500/60"
        />
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "text-xs tabular-nums transition-colors",
              isOverLimit
                ? "font-medium text-red-500 dark:text-red-400"
                : "text-zinc-400 dark:text-zinc-600",
            )}
          >
            {charCount.toLocaleString()} / {MAX_CHARS.toLocaleString()} chars
          </span>
          <span className="text-xs text-zinc-400 dark:text-zinc-600">
            {(charCount / 1024).toFixed(1)} KB
          </span>
        </div>
      </div>

      {/* Error */}
      {(isOverLimit || error) && (
        <div className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 dark:border-red-500/20 dark:bg-red-500/10">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500 dark:text-red-400" />
          <p className="text-xs text-red-600 dark:text-red-400">
            {isOverLimit ? `Diff exceeds ${MAX_CHARS.toLocaleString()} character limit.` : error}
          </p>
        </div>
      )}

      {/* Generate button */}
      <button
        onClick={handleGenerate}
        disabled={isDisabled}
        className={cn(
          "w-full rounded-xl py-3 text-sm font-semibold transition-all",
          "cursor-pointer bg-linear-to-r from-purple-600 to-violet-600 text-white",
          "disabled:cursor-not-allowed disabled:opacity-40",
          "focus:ring-2 focus:ring-purple-500/40 focus:outline-none",
        )}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Generating...
          </span>
        ) : (
          "Generate Commit"
        )}
      </button>

      {/* Output */}
      {commit && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold tracking-widest text-zinc-500 uppercase dark:text-zinc-500">
              Generated Commit
            </label>
            <button
              onClick={() => copy(commit)}
              className={cn(
                "flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors",
                copied
                  ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                  : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white",
              )}
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" /> Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" /> Copy
                </>
              )}
            </button>
          </div>

          <pre className="overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm break-all whitespace-pre-wrap text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
            {commit}
          </pre>

          {remaining != null && (
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-zinc-500 dark:text-zinc-500">
                {remaining} {remaining === 1 ? "request" : "requests"} remaining
              </span>
              {remaining < 5 && (
                <span className="text-xs font-medium text-yellow-600 dark:text-yellow-400">
                  Running low
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
