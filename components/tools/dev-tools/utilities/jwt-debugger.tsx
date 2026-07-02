"use client";

import { useMemo, useState } from "react";
import { AlertCircle, Check, Copy, RefreshCw, ShieldCheck, ShieldX } from "lucide-react";

import { EXAMPLE_JWT } from "@/constants/configs/examples";
import { useCopy } from "@/hooks/useCopy";
import { cn } from "@/lib/utils";
import { formatJson, getExpiry, parseJwt } from "@/lib/dev-utils/jwt-debugger";

// ── sub-components ─────────────────────────────────────────────────────────

function JsonPanel({ label, value, accent }: { label: string; value: string; accent: string }) {
  const { copied, copy } = useCopy(1500);

  function handleCopy() {
    copy(value);
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className={cn("text-xs font-semibold tracking-widest uppercase", accent)}>
          {label}
        </span>
        <button
          onClick={handleCopy}
          className={cn(
            "flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors",
            copied
              ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
              : "cursor-pointer text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",
          )}
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="min-h-30 overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs whitespace-pre-wrap text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
        {value}
      </pre>
    </div>
  );
}

// ── main component ─────────────────────────────────────────────────────────

export function JwtDebuggerTool() {
  const [token, setToken] = useState(EXAMPLE_JWT);

  const result = useMemo(() => (token.trim() ? parseJwt(token) : null), [token]);

  const expiry = result && !result.error ? getExpiry(result.payload) : null;
  const hasResult = result && !result.error;

  return (
    <div className="flex flex-col gap-8">
      {/* Token input */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold tracking-widest text-zinc-900 uppercase dark:text-zinc-500">
            JSON Web Token
          </label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setToken(EXAMPLE_JWT)}
              className="flex cursor-pointer items-center gap-1 px-2.5 text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              <RefreshCw className="h-3 w-3" />
              Reset
            </button>
          </div>
        </div>
        <textarea
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Paste your JWT here — eyJhbGci..."
          rows={4}
          className="w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs text-zinc-900 transition-colors placeholder:text-zinc-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-purple-500/60"
        />
      </div>

      {/* Error */}
      {result?.error && (
        <div className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 dark:border-red-500/20 dark:bg-red-500/10">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500 dark:text-red-400" />
          <p className="text-xs text-red-600 dark:text-red-400">{result.error}</p>
        </div>
      )}

      {/* Decoded panels */}
      {hasResult && (
        <>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <JsonPanel
              label="Header"
              value={formatJson(result.header)}
              accent="text-purple-600 dark:text-purple-400"
            />
            <JsonPanel
              label="Payload"
              value={formatJson(result.payload)}
              accent="text-blue-600 dark:text-blue-400"
            />
          </div>

          {/* Signature + expiry row */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Signature notice */}
            <div className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900">
              <ShieldX className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500 dark:text-yellow-400" />
              <div>
                <p className="text-xs font-semibold text-zinc-900 dark:text-white">
                  Signature not verified
                </p>
                <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-500">
                  Paste your secret below to verify, or use this tool for decoding only.
                </p>
              </div>
            </div>

            {/* Expiry */}
            {expiry ? (
              <div
                className={cn(
                  "flex items-start gap-3 rounded-xl border px-4 py-3",
                  expiry.expired
                    ? "border-red-200 bg-red-50 dark:border-red-500/20 dark:bg-red-500/10"
                    : "border-emerald-200 bg-emerald-50 dark:border-emerald-500/20 dark:bg-emerald-500/10",
                )}
              >
                <ShieldCheck
                  className={cn(
                    "mt-0.5 h-4 w-4 shrink-0",
                    expiry.expired
                      ? "text-red-500 dark:text-red-400"
                      : "text-emerald-600 dark:text-emerald-400",
                  )}
                />
                <div>
                  <p
                    className={cn(
                      "text-xs font-semibold",
                      expiry.expired
                        ? "text-red-600 dark:text-red-400"
                        : "text-emerald-700 dark:text-emerald-400",
                    )}
                  >
                    {expiry.expired ? "Token expired" : "Token valid"}
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-500">
                    Expires {expiry.label}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400 dark:text-zinc-600" />
                <div>
                  <p className="text-xs font-semibold text-zinc-900 dark:text-white">
                    No expiry claim
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-500">
                    This token has no <code className="font-mono">exp</code> field.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Signature input */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold tracking-widest text-zinc-900 uppercase dark:text-zinc-500">
              Signature
            </label>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs break-all text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-500">
              {result.signature}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
