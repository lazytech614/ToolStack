"use client";

import { useMemo, useState } from "react";
import { Copy, Check, Info, RefreshCcw } from "lucide-react";

import { ConversionMode } from "@/types/dev-tools/binary-converter";
import { EXAMPLE_BINARY, EXAMPLE_TEXT } from "@/constants/configs/examples";
import { useCopy } from "@/hooks/useCopy";
import { cn } from "@/lib/utils";
import { binaryToText, textToBinary } from "@/lib/dev-utils/binary-converter";

export function BinaryConverter() {
  const [mode, setMode] = useState<ConversionMode>("encode");
  const [input, setInput] = useState(EXAMPLE_TEXT);
  const { copied, copy } = useCopy();

  // Convert based on mode
  const result = useMemo(() => {
    if (mode === "encode") {
      return textToBinary(input);
    } else {
      return binaryToText(input);
    }
  }, [input, mode]);

  const resetForm = () => {
    setInput(mode === "decode" ? EXAMPLE_BINARY : EXAMPLE_TEXT);
  };

  const hasInput = input.trim().length > 0;
  const hasError = !!result.error;

  return (
    <div className="flex w-full flex-col gap-8">
      {/* Header */}
      <div className="border-b border-zinc-200 pb-6 dark:border-zinc-800">
        <h1 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Binary Converter
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Convert text to binary and binary back to text instantly
        </p>
      </div>

      {/* Mode Selector */}
      <div className="flex gap-3">
        <button
          onClick={() => {
            setMode("encode");
            setInput(EXAMPLE_TEXT);
          }}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
            mode === "encode"
              ? "bg-purple-600 text-white dark:bg-purple-600"
              : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700",
          )}
        >
          Text → Binary
        </button>
        <button
          onClick={() => {
            setMode("decode");
            setInput(EXAMPLE_BINARY);
          }}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
            mode === "decode"
              ? "bg-purple-600 text-white dark:bg-purple-600"
              : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700",
          )}
        >
          Binary → Text
        </button>
      </div>

      <div className="flex w-full flex-col items-start gap-4 lg:flex-row">
        {/* Input Section */}
        <div className="flex w-full flex-col gap-2 lg:w-1/2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold tracking-widest text-zinc-500 uppercase dark:text-zinc-500">
              {mode === "encode" ? "Text Input" : "Binary Input"}
            </label>
            <div className="flex items-center gap-2">
              <button
                onClick={resetForm}
                className="flex cursor-pointer items-center gap-1 text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
              >
                <RefreshCcw className="h-3 w-3" />
                Reset
              </button>
            </div>
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              mode === "encode"
                ? "Enter text to convert to binary..."
                : "Enter binary (with or without spaces)...\nExample: 01001000 01100101 01101100 01101100 01101111"
            }
            rows={5}
            className="w-full resize-y rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm text-zinc-900 transition-colors placeholder:text-zinc-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-purple-500/60"
            spellCheck={false}
          />

          {/* Info Box */}
          <div className="flex gap-2 text-xs text-zinc-600 dark:text-zinc-400">
            <Info className="mt-0.5 h-4 w-4 shrink-0" />
            <p>
              {mode === "encode"
                ? "Each character is converted to its 8-bit binary representation"
                : "Separate binary groups with spaces or newlines. Supports 8-16 bit binaries"}
            </p>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="flex w-full flex-col gap-2 lg:w-1/2">
          <h3 className="text-xs font-semibold text-blue-900 uppercase dark:text-blue-400">
            Quick Reference
          </h3>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-500/20 dark:bg-blue-500/10">
            <div className="grid grid-cols-2 gap-4 text-xs text-blue-800 dark:text-blue-300">
              <div>
                <p className="mb-1 font-mono font-semibold">Common Characters:</p>
                <ul className="space-y-1 font-mono text-xs">
                  <li>A: 01000001</li>
                  <li>a: 01100001</li>
                  <li>0: 00110000</li>
                  <li>Space: 00100000</li>
                </ul>
              </div>
              <div>
                <p className="mb-1 font-mono font-semibold">Binary Info:</p>
                <ul className="space-y-1 text-xs">
                  <li>8-bit = 1 byte (0-255)</li>
                  <li>16-bit = Extended (0-65535)</li>
                  <li>Padded with leading zeros</li>
                  <li>Space-separated for clarity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Output Section */}
      {hasInput && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold tracking-widest text-zinc-500 uppercase dark:text-zinc-500">
              {mode === "encode" ? "Binary Output" : "Text Output"}
            </label>
            <button
              onClick={() => copy(result.output)}
              className="flex cursor-pointer items-center gap-1 text-xs font-medium"
            >
              {copied ? (
                <>
                  <Check className="h-3 w-3" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" /> Copy
                </>
              )}
            </button>
          </div>

          {/* Error State */}
          {hasError && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-500/20 dark:bg-red-500/10">
              <p className="mb-1 text-xs font-semibold text-red-700 dark:text-red-400">Error</p>
              <p className="font-mono text-xs text-red-600 dark:text-red-400">{result.error}</p>
            </div>
          )}

          {/* Output */}
          {!hasError && result.output && (
            <>
              <div className="wrap-break-words rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm whitespace-pre-wrap dark:border-zinc-800 dark:bg-zinc-900">
                {result.output}
              </div>

              {/* Statistics */}
              {result.details && (
                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900/60">
                    <p className="mb-1 text-xs text-zinc-500 dark:text-zinc-400">Characters</p>
                    <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {result.details.characterCount ?? result.details.bytes}
                    </p>
                  </div>

                  <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900/60">
                    <p className="mb-1 text-xs text-zinc-500 dark:text-zinc-400">Bytes</p>
                    <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {result.details.bytes}
                    </p>
                  </div>

                  <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900/60">
                    <p className="mb-1 text-xs text-zinc-500 dark:text-zinc-400">Bits</p>
                    <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {result.details.bits}
                    </p>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Empty State */}
          {!hasError && !result.output && (
            <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center dark:border-zinc-700 dark:bg-zinc-900/50">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {mode === "encode"
                  ? "Enter text to see binary output"
                  : "Enter binary to see text output"}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Character Map */}
      {hasInput && mode === "encode" && !hasError && (
        <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
          <h3 className="mb-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Character Breakdown
          </h3>
          <div className="max-h-48 space-y-2 overflow-y-auto">
            {input.split("").map((char, i) => {
              const code = char.charCodeAt(0);
              const binary = code.toString(2).padStart(8, "0");
              const display = char === " " ? "SPACE" : char === "\n" ? "NEWLINE" : char;

              return (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-2 text-xs dark:border-zinc-700 dark:bg-zinc-900/60"
                >
                  <span className="font-mono font-semibold text-zinc-900 dark:text-zinc-100">
                    {display}
                  </span>
                  <span className="text-zinc-600 dark:text-zinc-400">Code: {code}</span>
                  <span className="rounded bg-zinc-100 px-2 py-1 font-mono text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
                    {binary}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
