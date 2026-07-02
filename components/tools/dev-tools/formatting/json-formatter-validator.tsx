"use client";

import { useState, useCallback, useRef } from "react";
import { useCopy } from "@/hooks/useCopy";
import {
  Copy,
  Download,
  CheckCheck,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Minimize2,
  Maximize2,
  List,
  Hash,
  RefreshCw,
  FileJson,
} from "lucide-react";

import { EXAMPLE_JSON } from "@/constants/configs/examples";
import { ValidationState, ViewMode } from "@/types/dev-tools/json-formatter-validator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { highlight, parseJsonError } from "@/lib/dev-utils/json-formatter-validator";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ParseError {
  message: string;
  line: number | null;
  column: number | null;
}

// ─── Tree View Node ───────────────────────────────────────────────────────────

function TreeNode({
  keyName,
  value,
  depth,
}: {
  keyName: string | null;
  value: unknown;
  depth: number;
}) {
  const [open, setOpen] = useState(depth < 2);

  const isObject = value !== null && typeof value === "object";
  const isArray = Array.isArray(value);
  const entries = isObject
    ? isArray
      ? (value as unknown[]).map((v, i) => [String(i), v] as [string, unknown])
      : Object.entries(value as Record<string, unknown>)
    : [];

  const preview = isArray
    ? `[ ${(value as unknown[]).length} items ]`
    : `{ ${Object.keys(value as object).length} keys }`;

  const valueColor = () => {
    if (value === null) return "text-zinc-500";
    if (typeof value === "boolean") return "text-orange-400";
    if (typeof value === "number") return "text-blue-400";
    if (typeof value === "string") return "text-emerald-400";
    return "text-zinc-300";
  };

  return (
    <div className="font-mono text-xs leading-5" style={{ paddingLeft: depth > 0 ? "1rem" : 0 }}>
      <div className="group flex items-start gap-1">
        {isObject ? (
          <button
            onClick={() => setOpen((o) => !o)}
            className="mt-0.5 flex shrink-0 items-center gap-0.5 text-zinc-500 transition-colors hover:text-white"
          >
            {open ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
          </button>
        ) : (
          <span className="w-3.5 shrink-0" />
        )}

        {keyName !== null && (
          <span className="shrink-0 text-purple-400">
            "{keyName}"<span className="text-zinc-500">: </span>
          </span>
        )}

        {isObject ? (
          open ? (
            <span className="text-zinc-400">{isArray ? "[" : "{"}</span>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className="text-zinc-500 transition-colors hover:text-zinc-300"
            >
              {preview}
            </button>
          )
        ) : (
          <span className={valueColor()}>
            {typeof value === "string" ? `"${value}"` : String(value)}
          </span>
        )}
      </div>

      {isObject && open && (
        <>
          <div>
            {entries.map(([k, v]) => (
              <TreeNode key={k} keyName={isArray ? null : k} value={v} depth={depth + 1} />
            ))}
          </div>
          <div className="flex items-center" style={{ paddingLeft: "1rem" }}>
            <span className="text-zinc-400">{isArray ? "]" : "}"}</span>
          </div>
        </>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function JsonFormatterValidator() {
  const [input, setInput] = useState(EXAMPLE_JSON);
  const [output, setOutput] = useState("");
  const [view, setView] = useState<ViewMode>("formatted");
  const [validation, setValidation] = useState<ValidationState>("idle");
  const [error, setError] = useState<ParseError | null>(null);
  const [parsedJson, setParsedJson] = useState<unknown>(null);
  const [showLineNumbers, setShowLineNumbers] = useState(true);
  const { copied, copy: performCopy } = useCopy();
  const [indent, setIndent] = useState(2);
  const [errorLineHighlight, setErrorLineHighlight] = useState<number | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const tryParse = (text: string): { ok: true; val: unknown } | { ok: false; err: ParseError } => {
    try {
      return { ok: true, val: JSON.parse(text) };
    } catch (e) {
      return { ok: false, err: parseJsonError((e as Error).message, text) };
    }
  };

  const format = useCallback(() => {
    const result = tryParse(input);
    if (!result.ok) {
      setValidation("error");
      setError(result.err);
      setErrorLineHighlight(result.err.line);
      setOutput("");
      setParsedJson(null);
      return;
    }
    const formatted = JSON.stringify(result.val, null, indent);
    setOutput(formatted);
    setParsedJson(result.val);
    setValidation("valid");
    setError(null);
    setErrorLineHighlight(null);
  }, [input, indent]);

  const minify = useCallback(() => {
    const result = tryParse(input);
    if (!result.ok) {
      setValidation("error");
      setError(result.err);
      setErrorLineHighlight(result.err.line);
      setOutput("");
      setParsedJson(null);
      return;
    }
    const minified = JSON.stringify(result.val);
    setOutput(minified);
    setParsedJson(result.val);
    setValidation("valid");
    setError(null);
    setErrorLineHighlight(null);
  }, [input]);

  const validate = useCallback(() => {
    const result = tryParse(input);
    if (!result.ok) {
      setValidation("error");
      setError(result.err);
      setErrorLineHighlight(result.err.line);
    } else {
      setValidation("valid");
      setError(null);
      setErrorLineHighlight(null);
    }
    setOutput("");
  }, [input]);

  const reset = () => {
    setInput(EXAMPLE_JSON);
    setOutput("");
    setValidation("idle");
    setError(null);
    setParsedJson(null);
    setErrorLineHighlight(null);
  };

  const handleCopy = () => {
    const text = output || input;
    performCopy(text);
  };

  const download = () => {
    const text = output || input;
    const blob = new Blob([text], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "output.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const displayText = output || input;
  const lines = displayText.split("\n");

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-white">
      <div className="flex flex-col gap-4">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Action buttons */}
          <div className="flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-100 p-1 dark:border-zinc-800 dark:bg-zinc-900">
            <button
              onClick={format}
              className="flex items-center gap-1.5 rounded-md bg-purple-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-purple-500"
            >
              <Maximize2 className="h-3 w-3" /> Format
            </button>
            <button
              onClick={minify}
              className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              <Minimize2 className="h-3 w-3" /> Minify
            </button>
            {input && (
              <button
                onClick={validate}
                className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <CheckCircle2 className="h-3 w-3" /> Validate
              </button>
            )}
            {validation === "valid" && (
              <div className="flex items-center gap-1.5 self-end rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-500 dark:text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" /> Valid
              </div>
            )}
            {validation === "error" && (
              <div className="flex items-center gap-1.5 self-end rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-500 dark:text-red-400">
                <AlertTriangle className="h-3.5 w-3.5" /> Invalid
              </div>
            )}
          </div>

          {/* View toggle */}
          {parsedJson !== null && (
            <div className="flex items-center gap-1 rounded-lg border border-zinc-200 bg-zinc-100 p-1 dark:border-zinc-800 dark:bg-zinc-900">
              <button
                onClick={() => setView("formatted")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  view === "formatted"
                    ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white"
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                <List className="h-3 w-3" /> Formatted
              </button>
              <button
                onClick={() => setView("tree")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  view === "tree"
                    ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white"
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                <ChevronRight className="h-3 w-3" /> Tree
              </button>
            </div>
          )}

          {/* Right-side controls */}
          <div className="flex items-center gap-1.5 md:ml-auto">
            {/* Indent selector */}
            <Select value={String(indent)} onValueChange={(value) => setIndent(Number(value))}>
              <SelectTrigger className="h-auto w-27.5 border border-zinc-400 bg-transparent px-3 py-1.5 text-xs text-zinc-600 shadow-none focus:ring-0 focus:ring-offset-0 dark:border-zinc-800 dark:text-zinc-400">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="2">2 spaces</SelectItem>

                <SelectItem value="4">4 spaces</SelectItem>

                <SelectItem value="8">8 spaces</SelectItem>
              </SelectContent>
            </Select>

            {/* Line numbers toggle */}
            <button
              onClick={() => setShowLineNumbers((v) => !v)}
              title="Toggle line numbers"
              className={`rounded-lg border p-2 text-xs transition-colors ${
                showLineNumbers
                  ? "border-purple-500/30 bg-purple-500/10 text-purple-400"
                  : "border-zinc-200 bg-zinc-100 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900"
              }`}
            >
              <Hash className="h-3.5 w-3.5" />
            </button>

            {output && (
              <>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                >
                  {copied ? (
                    <CheckCheck className="h-3.5 w-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                  {copied ? "Copied" : "Copy"}
                </button>

                <button
                  onClick={download}
                  className="flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                >
                  <Download className="h-3.5 w-3.5" /> Download
                </button>
              </>
            )}

            <button
              onClick={reset}
              className="flex cursor-pointer items-center gap-1 text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              <RefreshCw className="h-3 w-3" />
              Reset
            </button>
          </div>
        </div>

        {/* Error banner */}
        {error && (
          <div className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-4">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-red-400">Syntax Error</p>
              <p className="mt-0.5 font-mono text-xs text-red-400/80">{error.message}</p>
              {error.line && (
                <p className="mt-1 text-xs text-red-400/60">
                  Line {error.line}
                  {error.column ? `, column ${error.column}` : ""}
                </p>
              )}
            </div>
            {/* Error JSON card */}
            <div className="hidden shrink-0 sm:block">
              <pre className="rounded-lg border border-red-500/10 bg-red-500/10 px-3 py-2 font-mono text-[10px] text-red-400/70">
                {`{
  "error": "${error.message.replace(/"/g, '\\"').slice(0, 40)}${error.message.length > 40 ? "..." : ""}",
  "line": ${error.line ?? "null"}
}`}
              </pre>
            </div>
          </div>
        )}

        {/* Editor area */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Input pane */}
          <div className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-purple-500/5">
            <div className="flex items-center justify-between border-b border-zinc-200 bg-white px-4 py-2.5 dark:border-zinc-800 dark:bg-zinc-900">
              <span className="text-xs font-medium text-zinc-500">Input</span>
              <div className="flex gap-1">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
              </div>
            </div>

            <div className="flex flex-1 overflow-hidden" style={{ minHeight: "420px" }}>
              {/* Line numbers */}
              {showLineNumbers && (
                <div
                  aria-hidden="true"
                  className="overflow-hidden border-r border-zinc-200 bg-zinc-100 px-3 pt-4 pb-4 text-right select-none dark:border-zinc-800 dark:bg-zinc-900/50"
                  style={{ minWidth: "2.75rem" }}
                >
                  {input.split("\n").map((_, i) => (
                    <div
                      key={i}
                      className={`font-mono text-xs leading-5 ${
                        errorLineHighlight === i + 1
                          ? "font-bold text-red-400"
                          : "text-zinc-400 dark:text-zinc-600"
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              )}

              <div className="relative flex-1 overflow-hidden">
                {/* Error line highlight overlay */}
                {errorLineHighlight && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-0 left-0 z-10 border-l-2 border-red-500 bg-red-500/10"
                    style={{
                      top: `${(errorLineHighlight - 1) * 20 + 16}px`,
                      height: "20px",
                    }}
                  />
                )}
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    setValidation("idle");
                    setError(null);
                    setErrorLineHighlight(null);
                    setOutput("");
                    setParsedJson(null);
                  }}
                  spellCheck={false}
                  className="h-full w-full resize-none bg-transparent p-4 font-mono text-xs leading-5 text-zinc-800 outline-none placeholder:text-zinc-400 dark:text-zinc-200"
                  placeholder="Paste your JSON here..."
                  style={{ minHeight: "420px" }}
                />
              </div>
            </div>
          </div>

          {/* Output pane */}
          <div className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-purple-500/5">
            <div className="flex items-center justify-between border-b border-zinc-200 bg-white px-4 py-2.5 dark:border-zinc-800 dark:bg-zinc-900">
              <span className="text-xs font-medium text-zinc-500">
                Output {view === "tree" ? "· Tree View" : "· Formatted"}
              </span>
              {output && <span className="text-xs text-zinc-500">{lines.length} lines</span>}
            </div>

            <div className="flex flex-1 overflow-hidden" style={{ minHeight: "420px" }}>
              {!output && !parsedJson ? (
                <div className="flex flex-1 items-center justify-center">
                  <div className="text-center">
                    <FileJson className="mx-auto mb-2 h-8 w-8 text-zinc-300 dark:text-zinc-700" />
                    <p className="text-xs text-zinc-400">
                      Click <strong className="text-purple-400">Format</strong> or{" "}
                      <strong className="text-purple-400">Validate</strong> to see output
                    </p>
                  </div>
                </div>
              ) : view === "tree" && parsedJson !== null ? (
                <div className="flex-1 overflow-auto p-4">
                  <TreeNode keyName={null} value={parsedJson} depth={0} />
                </div>
              ) : (
                <div className="flex flex-1 overflow-hidden">
                  {/* Line numbers */}
                  {showLineNumbers && output && (
                    <div
                      aria-hidden="true"
                      className="shrink-0 overflow-hidden border-r border-zinc-200 bg-zinc-100 px-3 pt-4 pb-4 text-right select-none dark:border-zinc-800 dark:bg-zinc-900/50"
                      style={{ minWidth: "2.75rem" }}
                    >
                      {lines.map((_, i) => (
                        <div
                          key={i}
                          className="font-mono text-xs leading-5 text-zinc-400 dark:text-zinc-600"
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex-1 overflow-auto p-4">
                    <pre
                      className="font-mono text-xs leading-5 whitespace-pre"
                      dangerouslySetInnerHTML={{ __html: highlight(output) }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats footer */}
        {output && (
          <div className="flex items-center gap-4 px-1">
            <span className="text-xs text-zinc-500">
              <span className="font-medium text-zinc-400">{output.length.toLocaleString()}</span>{" "}
              chars
            </span>
            <span className="text-xs text-zinc-500">
              <span className="font-medium text-zinc-400">{lines.length.toLocaleString()}</span>{" "}
              lines
            </span>
            <span className="text-xs text-zinc-500">
              <span className="font-medium text-zinc-400">
                {new Blob([output]).size.toLocaleString()}
              </span>{" "}
              bytes
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
