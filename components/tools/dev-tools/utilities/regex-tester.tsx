"use client";

import { useMemo, useState } from "react";
import { AlertCircle, Copy, Check, RefreshCw, ChevronDown } from "lucide-react";

import { EXAMPLE_REGEX_TEMPLATES } from "@/constants/configs/examples";
import { Flag } from "@/types/dev-tools/regex-tester";
import { useCopy } from "@/hooks/useCopy";
import { cn } from "@/lib/utils";
import { buildRegex, getMatches, getSegments } from "@/lib/dev-utils/regex-tester";

// ── types ──────────────────────────────────────────────────────────────────

export interface RegexTemplate {
  id: string;
  name: string;
  description: string;
  pattern: string;
  flags: Flag[];
  category: string;
  example: string;
}

// ── MatchItem ──────────────────────────────────────────────────────────────

interface MatchItemProps {
  match: { value: string; index: number; groups: (string | undefined)[] };
  i: number;
}

function MatchItem({ match, i }: MatchItemProps) {
  const { copied, copy } = useCopy(2000);

  const handleCopy = () => {
    copy(match.value);
  };

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-3 transition-colors hover:border-purple-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-purple-700">
      <div className="flex flex-wrap items-center gap-3">
        <span className="w-6 text-xs font-semibold text-zinc-400 tabular-nums dark:text-zinc-600">
          #{i + 1}
        </span>
        <code className="rounded bg-zinc-100 px-2 py-0.5 font-mono text-xs break-all text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
          {match.value || <em className="text-zinc-400">empty</em>}
        </code>
        <span className="ml-auto text-xs text-zinc-400 tabular-nums dark:text-zinc-600">
          index {match.index}
        </span>
        <button
          onClick={handleCopy}
          className="rounded p-1 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
          title="Copy match"
        >
          {copied ? (
            <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          ) : (
            <Copy className="h-4 w-4 text-zinc-400 hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400" />
          )}
        </button>
      </div>

      {match.groups.length > 0 && (
        <div className="flex flex-wrap gap-2 pl-9">
          {match.groups.map((g, gi) => (
            <span
              key={gi}
              className="flex items-center gap-1.5 rounded bg-zinc-50 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800/50 dark:text-zinc-400"
            >
              <span className="font-medium text-purple-600 dark:text-purple-400">${gi + 1}</span>
              <code className="font-mono text-zinc-900 dark:text-zinc-100">
                {g ?? <em className="text-zinc-400">undefined</em>}
              </code>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// ── component ───────────────────────────────────────────────────────────────

export function RegexTesterTool() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState<Set<Flag>>(new Set(["g"]));
  const [input, setInput] = useState("");
  const [replaceText, setReplaceText] = useState("");
  const [showReplace, setShowReplace] = useState(false);
  const [showTemplates, setShowTemplates] = useState(true);
  const [searchTemplate, setSearchTemplate] = useState("");

  function toggleFlag(flag: Flag) {
    setFlags((prev) => {
      const next = new Set(prev);
      next.has(flag) ? next.delete(flag) : next.add(flag);
      return next;
    });
  }

  function loadTemplate(template: RegexTemplate) {
    setPattern(template.pattern);
    setFlags(new Set(template.flags as Flag[]));
    setInput(template.example);
    setShowTemplates(false);
  }

  function resetForm() {
    setPattern("");
    setFlags(new Set(["g"]));
    setInput("");
    setReplaceText("");
  }

  const { regex, error } = useMemo(
    () => (pattern ? buildRegex(pattern, flags) : { regex: undefined, error: undefined }),
    [pattern, flags],
  );

  const matches = useMemo(
    () => (regex && input ? getMatches(regex, input) : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pattern, flags, input],
  );

  const segments = useMemo(() => getSegments(input, matches), [input, matches]);

  const replacedText = useMemo(() => {
    if (!regex || !input || !showReplace) return null;
    try {
      return input.replace(regex, replaceText);
    } catch {
      return null;
    }
  }, [regex, input, replaceText, showReplace]);

  const filteredTemplates = useMemo(() => {
    return EXAMPLE_REGEX_TEMPLATES.filter(
      (t) =>
        t.name.toLowerCase().includes(searchTemplate.toLowerCase()) ||
        t.description.toLowerCase().includes(searchTemplate.toLowerCase()) ||
        t.category.toLowerCase().includes(searchTemplate.toLowerCase()),
    );
  }, [searchTemplate]);

  const groupedTemplates = useMemo(() => {
    const groups: Record<string, RegexTemplate[]> = {};
    filteredTemplates.forEach((t) => {
      if (!groups[t.category]) groups[t.category] = [];
      groups[t.category].push(t);
    });
    return groups;
  }, [filteredTemplates]);

  const hasPattern = pattern.trim().length > 0;
  const hasInput = input.trim().length > 0;

  return (
    <div className="flex w-full flex-col gap-8">
      {/* Pattern Input */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold tracking-widest text-zinc-900 uppercase dark:text-zinc-500">
            Pattern
          </label>
          {input && (
            <button
              onClick={resetForm}
              className="flex cursor-pointer items-center gap-1 text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              <RefreshCw className="h-3 w-3" />
              Reset
            </button>
          )}
        </div>

        <div className="flex items-stretch overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 transition-colors focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-500/40 dark:border-zinc-800 dark:bg-zinc-900 dark:focus-within:border-purple-500/60">
          <span className="flex items-center pr-1 pl-4 font-mono text-sm text-zinc-400 select-none dark:text-zinc-600">
            /
          </span>
          <input
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder="(\\w+)@(\\w+\\.\\w+)"
            className="flex-1 bg-zinc-50 px-2 py-3 font-mono text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-600"
            spellCheck={false}
          />
          <span className="flex items-center pr-1 font-mono text-sm text-zinc-400 select-none dark:text-zinc-600">
            /
          </span>

          {/* Flags */}
          <div className="flex items-center gap-0.5 border-l border-zinc-200 bg-zinc-50 px-2 dark:border-zinc-800 dark:bg-zinc-900">
            {(["g", "i", "m", "s"] as const).map((flag) => (
              <button
                key={flag}
                onClick={() => toggleFlag(flag)}
                title={`Flag: ${flag}`}
                className={cn(
                  "h-6 w-6 rounded font-mono text-xs font-semibold transition-colors",
                  flags.has(flag)
                    ? "bg-purple-600 text-white dark:bg-purple-500"
                    : "text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",
                )}
              >
                {flag}
              </button>
            ))}
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 dark:border-red-500/20 dark:bg-red-500/10">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500 dark:text-red-400" />
            <p className="font-mono text-xs text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}
      </div>

      {/* Template Library */}
      {showTemplates && (
        <div className="rounded-xl border border-zinc-200 bg-linear-to-br from-purple-50 to-blue-50 p-4 dark:border-zinc-800 dark:from-zinc-900/50 dark:to-zinc-900/30">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Regex Templates
            </h3>
            <button
              onClick={() => setShowTemplates(false)}
              className="cursor-pointer text-xs text-zinc-500 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300"
            >
              Hide
            </button>
          </div>

          <input
            type="text"
            placeholder="Search templates..."
            value={searchTemplate}
            onChange={(e) => setSearchTemplate(e.target.value)}
            className="mb-4 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-purple-500/40 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-600"
          />

          <div className="grid max-h-96 grid-cols-1 gap-3 overflow-y-auto md:grid-cols-2">
            {Object.entries(groupedTemplates).map(([category, templates]) => (
              <div key={category} className="col-span-full">
                <h4 className="mb-2 text-xs font-semibold tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
                  {category}
                </h4>
                <div className="mb-4 grid grid-cols-1 gap-2 md:grid-cols-2">
                  {templates.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => loadTemplate(t)}
                      className="rounded-lg border border-zinc-200 bg-white p-3 text-left transition-colors hover:border-purple-400 hover:bg-purple-50 dark:border-zinc-700 dark:bg-zinc-900/60 dark:hover:border-purple-500 dark:hover:bg-zinc-900"
                    >
                      <div className="mb-1 text-xs font-medium text-zinc-900 dark:text-zinc-100">
                        {t.name}
                      </div>
                      <div className="text-xs text-zinc-600 dark:text-zinc-400">
                        {t.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <p className="py-4 text-center text-xs text-zinc-500 dark:text-zinc-500">
              No templates found
            </p>
          )}
        </div>
      )}

      {!showTemplates && (
        <button
          onClick={() => setShowTemplates(true)}
          className="flex cursor-pointer items-center gap-1 text-xs font-medium text-purple-600 transition-colors hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
        >
          <ChevronDown className="h-3 w-3" />
          Show templates
        </button>
      )}

      {/* Test String */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold tracking-widest text-zinc-900 uppercase dark:text-zinc-500">
          Test String
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to test your pattern against..."
          rows={5}
          className="w-full resize-y rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm text-zinc-900 transition-colors placeholder:text-zinc-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-purple-500/60"
          spellCheck={false}
        />
      </div>

      {/* Replace Mode Toggle */}
      {hasPattern && hasInput && !error && (
        <button
          onClick={() => setShowReplace(!showReplace)}
          className="flex cursor-pointer items-center gap-2 text-xs font-medium text-purple-600 transition-colors hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
        >
          <ChevronDown
            className={cn("h-4 w-4 transition-transform", showReplace && "rotate-180")}
          />
          Replace (Test Replacement)
        </button>
      )}

      {/* Replace Input */}
      {showReplace && hasPattern && hasInput && !error && (
        <div className="flex flex-col gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-500/20 dark:bg-emerald-500/10">
          <label className="text-xs font-semibold tracking-widest text-emerald-700 uppercase dark:text-emerald-400">
            Replacement Text
          </label>
          <input
            type="text"
            value={replaceText}
            onChange={(e) => setReplaceText(e.target.value)}
            placeholder="Use $1, $2, etc. for capture groups"
            className="w-full rounded-lg border border-emerald-300 bg-white px-3 py-2 font-mono text-sm text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-emerald-500/40 focus:outline-none dark:border-emerald-600 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-600"
          />

          {replacedText && (
            <div className="mt-3 rounded-lg border border-emerald-300 bg-white p-3 dark:border-emerald-600 dark:bg-zinc-900/60">
              <p className="mb-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                Preview
              </p>
              <p className="font-mono text-sm break-all whitespace-pre-wrap text-zinc-900 dark:text-zinc-100">
                {replacedText}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Results */}
      {hasPattern && hasInput && !error && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold tracking-widest text-zinc-500 uppercase dark:text-zinc-500">
              Matches
            </label>
            <span
              className={cn(
                "rounded-full px-2 py-1 text-xs font-medium tabular-nums",
                matches.length > 0
                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400"
                  : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
              )}
            >
              {matches.length} {matches.length === 1 ? "match" : "matches"}
            </span>
          </div>

          {/* Highlighted text */}
          {matches.length > 0 && (
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm leading-relaxed break-all whitespace-pre-wrap dark:border-zinc-800 dark:bg-zinc-900">
              {segments.map((seg, i) =>
                seg.isMatch ? (
                  <mark
                    key={i}
                    className="rounded bg-yellow-200 px-0.5 font-semibold text-yellow-900 dark:bg-yellow-400/30 dark:text-yellow-200"
                  >
                    {seg.text}
                  </mark>
                ) : (
                  <span key={i} className="text-zinc-700 dark:text-zinc-300">
                    {seg.text}
                  </span>
                ),
              )}
            </div>
          )}

          {matches.length === 0 && (
            <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-900/50">
              <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
                No matches found
              </p>
            </div>
          )}

          {/* Match Details */}
          {matches.length > 0 && (
            <div className="mt-2 flex flex-col gap-2">
              <div className="grid gap-2">
                {matches.map((m, i) => (
                  <MatchItem key={i} match={m} i={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
