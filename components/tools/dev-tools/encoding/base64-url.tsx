"use client";

import { useState } from "react";
import { Copy, Check, RefreshCw } from "lucide-react";

import { Mode } from "@/types/dev-tools/base64-url";
import { useCopy } from "@/hooks/useCopy";
import { cn } from "@/lib/utils";
import { transform } from "@/lib/dev-utils/base64-url";

import { EXAMPLE_URL } from "@/constants/configs/examples";

const MODES: { value: Mode; label: string }[] = [
  { value: "base64-encode", label: "Base64 Encode" },
  { value: "base64-decode", label: "Base64 Decode" },
  { value: "url-encode", label: "URL Encode" },
  { value: "url-decode", label: "URL Decode" },
];

export function Base64UrlTool() {
  const [mode, setMode] = useState<Mode>("base64-encode");
  const [input, setInput] = useState(EXAMPLE_URL);
  const { copied, copy } = useCopy(1500);

  const { output, error } = transform(input, mode);

  const resetInput = () => {
    setInput(EXAMPLE_URL);
  };

  const handleCopy = () => {
    if (!output) return;
    copy(output);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Mode selector */}
      <div className="flex flex-wrap gap-2">
        {MODES.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setMode(value)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all",
              mode === value
                ? "border-transparent bg-linear-to-r from-purple-600 to-violet-600 text-white"
                : "border-zinc-200 text-zinc-600 hover:border-purple-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-purple-500/40 dark:hover:text-white",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold tracking-widest text-zinc-900 uppercase dark:text-zinc-500">
            Input
          </label>

          <div className="flex items-center gap-2">
            <button
              onClick={resetInput}
              className="flex cursor-pointer items-center gap-1 text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              <RefreshCw className="h-3 w-3" />
              Reset
            </button>
          </div>
        </div>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your text here..."
          rows={8}
          className="w-full resize-y rounded-lg border border-zinc-200 bg-zinc-50 p-3 font-mono text-xs text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-purple-500/40 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-600"
        />
      </div>

      {/* Output */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold tracking-widest text-zinc-900 uppercase dark:text-zinc-500">
            Output
          </label>
          <button
            onClick={handleCopy}
            disabled={!output}
            className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 disabled:cursor-not-allowed disabled:opacity-40 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-500" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        {error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-500/20 dark:bg-red-500/10">
            <p className="text-xs text-red-600 dark:text-red-400">{error}</p>
          </div>
        ) : (
          <div className="min-h-30 rounded-lg border border-zinc-200 bg-zinc-50 p-3 font-mono text-xs break-all whitespace-pre-wrap text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
            {output || (
              <span className="text-zinc-400 dark:text-zinc-600">Output will appear here...</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
