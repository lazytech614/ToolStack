"use client"

import { useState, useMemo, useCallback } from "react"
import { cn } from "@/lib/utils"
import { 
    Copy, 
    Check, 
    RefreshCw, 
    ChevronDown 
} from "lucide-react"
import { 
    CapMode,
    DownloadFormat, 
    GenerateMode, 
    Preset, 
    SentenceLength 
} from "@/types/dev-tools/loremipsum"

// ---------------------------------------------------------------------------
// Word banks per preset
// ---------------------------------------------------------------------------

const LOREM_WORDS = [
  "lorem","ipsum","dolor","sit","amet","consectetur","adipiscing","elit",
  "sed","do","eiusmod","tempor","incididunt","ut","labore","et","dolore",
  "magna","aliqua","enim","ad","minim","veniam","quis","nostrud","exercitation",
  "ullamco","laboris","nisi","aliquip","ex","ea","commodo","consequat","duis",
  "aute","irure","in","reprehenderit","voluptate","velit","esse","cillum",
  "fugiat","nulla","pariatur","excepteur","sint","occaecat","cupidatat","non",
  "proident","sunt","culpa","qui","officia","deserunt","mollit","anim","id",
  "est","laborum","perspiciatis","unde","omnis","iste","natus","error","accusantium",
  "doloremque","laudantium","totam","rem","aperiam","eaque","ipsa","quae","ab",
  "inventore","veritatis","quasi","architecto","beatae","vitae","dicta","explicabo",
]

const DEVELOPER_WORDS = [
  "function","component","render","state","effect","hook","async","await",
  "promise","callback","event","listener","handler","dispatch","reducer",
  "context","provider","consumer","ref","memo","lazy","suspense","fallback",
  "router","middleware","interceptor","schema","model","migration","seed",
  "endpoint","payload","request","response","status","header","token","auth",
  "cache","queue","worker","thread","process","stream","buffer","chunk",
  "deploy","build","bundle","minify","transpile","compile","lint","test",
  "mock","stub","fixture","snapshot","coverage","pipeline","CI","CD",
  "container","image","volume","network","service","pod","cluster","node",
]

const API_WORDS = [
  "endpoint","resource","method","GET","POST","PUT","DELETE","PATCH",
  "authentication","authorization","bearer","token","API","key","rate","limit",
  "pagination","cursor","offset","filter","sort","query","parameter","payload",
  "request","response","status","code","error","message","schema","validation",
  "webhook","callback","event","retry","timeout","idempotent","versioning",
  "deprecation","migration","breaking","change","changelog","spec","swagger",
  "OpenAPI","REST","GraphQL","grpc","JSON","XML","serialization","deserialization",
]

const BLOG_WORDS = [
  "readers","explore","discover","insight","guide","tips","tricks","best",
  "practices","tutorial","walkthrough","overview","introduction","deep","dive",
  "comprehensive","ultimate","definitive","essential","practical","actionable",
  "strategies","lessons","experience","journey","growth","learning","community",
  "content","audience","engagement","traffic","SEO","keywords","publish","draft",
  "editor","newsletter","subscribe","comment","share","social","media","viral",
  "trending","niche","authority","credibility","voice","tone","style",
]

const ECOMMERCE_WORDS = [
  "product","price","discount","offer","sale","limited","stock","available",
  "shipping","delivery","returns","refund","warranty","quality","premium",
  "bestseller","featured","new","arrival","collection","category","brand",
  "review","rating","verified","purchase","checkout","cart","wishlist","order",
  "tracking","invoice","receipt","customer","support","satisfaction","guarantee",
  "secure","payment","subscription","bundle","savings","exclusive","deal",
]

const SOCIAL_WORDS = [
  "follow","like","share","comment","repost","trending","viral","hashtag",
  "story","reel","feed","profile","bio","mention","tag","thread","reply",
  "community","engagement","reach","impressions","analytics","growth","niche",
  "creator","influencer","audience","followers","subscribers","content","post",
  "caption","filter","aesthetic","vibe","moment","behind","scenes","collab",
  "partnership","sponsored","authentic","organic","algorithm","boost",
]

const PRODUCT_WORDS = [
  "innovative","seamless","intuitive","powerful","lightweight","efficient",
  "scalable","robust","flexible","customizable","feature-rich","user-friendly",
  "cutting-edge","state-of-the-art","next-generation","best-in-class","enterprise",
  "solution","platform","ecosystem","workflow","productivity","collaboration",
  "integration","automation","intelligence","insights","analytics","performance",
  "reliability","security","compliance","support","onboarding","experience",
]

const ERROR_WORDS = [
  "unexpected","error","occurred","failed","unable","process","request","invalid",
  "missing","required","field","permission","denied","unauthorized","forbidden",
  "not","found","timeout","exceeded","limit","reached","quota","exhausted",
  "connection","refused","unavailable","retry","later","conflict","duplicate",
  "already","exists","validation","constraint","violation","integrity","check",
  "failed","malformed","corrupted","deprecated","unsupported","version",
]

const RELEASE_WORDS = [
  "fixed","improved","updated","added","removed","deprecated","breaking","change",
  "enhancement","feature","bug","patch","hotfix","release","version","migration",
  "performance","security","vulnerability","compatibility","regression","refactor",
  "optimization","stability","reliability","accessibility","documentation","changelog",
  "upgrade","downgrade","rollback","backport","cherry-pick","merge","commit","tag",
]

const PRESET_WORDS: Record<Preset, string[]> = {
  lorem: LOREM_WORDS,
  developer: DEVELOPER_WORDS,
  api: API_WORDS,
  blog: BLOG_WORDS,
  ecommerce: ECOMMERCE_WORDS,
  social: SOCIAL_WORDS,
  product: PRODUCT_WORDS,
  errors: ERROR_WORDS,
  release: RELEASE_WORDS,
}

const PRESET_OPTIONS: { value: Preset; label: string }[] = [
  { value: "lorem", label: "Lorem Ipsum" },
  { value: "developer", label: "Developer Text" },
  { value: "api", label: "API Documentation" },
  { value: "blog", label: "Blog Content" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "social", label: "Social Media" },
  { value: "product", label: "Product Description" },
  { value: "errors", label: "Error Messages" },
  { value: "release", label: "Release Notes" },
]

const SENTENCE_LENGTH_RANGE: Record<SentenceLength, [number, number]> = {
  short: [4, 8],
  medium: [8, 15],
  long: [15, 25],
}

// ---------------------------------------------------------------------------
// Generator
// ---------------------------------------------------------------------------

let seed = Date.now()
function rand(min: number, max: number): number {
  seed = (seed * 1664525 + 1013904223) & 0xffffffff
  return min + (Math.abs(seed) % (max - min + 1))
}

function pickWord(words: string[]): string {
  return words[rand(0, words.length - 1)]
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function applyCapMode(text: string, mode: CapMode): string {
  if (mode === "upper") return text.toUpperCase()
  if (mode === "lower") return text.toLowerCase()
  if (mode === "title")
    return text.replace(/\b\w/g, (c) => c.toUpperCase())
  return text // sentence case already applied during generation
}

function makeSentence(words: string[], len: SentenceLength, startWithLorem: boolean, isFirst: boolean): string {
  const [min, max] = SENTENCE_LENGTH_RANGE[len]
  const count = rand(min, max)
  const parts: string[] = []

  for (let i = 0; i < count; i++) {
    if (i === 0 && isFirst && startWithLorem && words === LOREM_WORDS) {
      parts.push("Lorem")
    } else if (i === 1 && isFirst && startWithLorem && words === LOREM_WORDS) {
      parts.push("ipsum")
    } else {
      parts.push(pickWord(words))
    }
  }

  return capitalize(parts.join(" ")) + "."
}

function makeParagraph(
  words: string[],
  len: SentenceLength,
  startWithLorem: boolean,
  isFirst: boolean
): string {
  const sentCount = rand(3, 6)
  const sentences: string[] = []
  for (let i = 0; i < sentCount; i++) {
    sentences.push(makeSentence(words, len, startWithLorem, isFirst && i === 0))
  }
  return sentences.join(" ")
}

interface GenerateOptions {
  mode: GenerateMode
  count: number
  startWithLorem: boolean
  sentenceLength: SentenceLength
  capMode: CapMode
  preset: Preset
}

function generate(opts: GenerateOptions): string {
  seed = Date.now() ^ (Math.random() * 0xffffffff)
  const words = PRESET_WORDS[opts.preset]
  const { mode, count, startWithLorem, sentenceLength, capMode } = opts

  let result = ""

  if (mode === "words") {
    const parts: string[] = []
    for (let i = 0; i < count; i++) {
      if (i === 0 && startWithLorem && words === LOREM_WORDS) parts.push("Lorem")
      else if (i === 1 && startWithLorem && words === LOREM_WORDS) parts.push("ipsum")
      else parts.push(pickWord(words))
    }
    result = capitalize(parts.join(" ")) + "."
  } else if (mode === "sentences") {
    const sentences: string[] = []
    for (let i = 0; i < count; i++) {
      sentences.push(makeSentence(words, sentenceLength, startWithLorem, i === 0))
    }
    result = sentences.join(" ")
  } else {
    const paras: string[] = []
    for (let i = 0; i < count; i++) {
      paras.push(makeParagraph(words, sentenceLength, startWithLorem, i === 0))
    }
    result = paras.join("\n\n")
  }

  return applyCapMode(result, capMode)
}

// ---------------------------------------------------------------------------
// Stats
// ---------------------------------------------------------------------------
function computeStats(text: string) {
  if (!text.trim()) return null
  const words = text.trim().split(/\s+/).length
  const chars = text.length
  const sentences = (text.match(/[.!?]+/g) ?? []).length
  const paragraphs = text.split(/\n\n+/).filter(Boolean).length
  const avgWordsSentence = sentences ? Math.round(words / sentences) : 0
  const avgSentencesPara = paragraphs ? Math.round(sentences / paragraphs) : 0
  const readingTime = Math.max(1, Math.round(words / 200))
  return { words, chars, sentences, paragraphs, avgWordsSentence, avgSentencesPara, readingTime }
}

// ---------------------------------------------------------------------------
// Download
// ---------------------------------------------------------------------------
function downloadText(text: string, format: DownloadFormat) {
  let content = text
  let mime = "text/plain"
  let ext = format

  if (format === "md") {
    content = text
      .split("\n\n")
      .map((p) => p.trim())
      .join("\n\n")
    mime = "text/markdown"
  } else if (format === "html") {
    const paras = text
      .split("\n\n")
      .map((p) => `<p>${p.trim().replace(/\n/g, "<br>")}</p>`)
      .join("\n")
    content = `<!DOCTYPE html>\n<html lang="en">\n<head><meta charset="UTF-8"><title>Lorem Ipsum</title></head>\n<body>\n${paras}\n</body>\n</html>`
    mime = "text/html"
  }

  const blob = new Blob([content], { type: mime })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `lorem.${ext}`
  a.click()
  URL.revokeObjectURL(url)
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
function StatItem({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[10px] uppercase tracking-widest font-semibold text-zinc-400 dark:text-zinc-600">
        {label}
      </span>
      <span className="text-sm font-semibold tabular-nums text-zinc-800 dark:text-zinc-200">
        {value}
      </span>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export function LoremIpsum() {
  const [mode, setMode] = useState<GenerateMode>("paragraphs")
  const [count, setCount] = useState(3)
  const [startWithLorem, setStartWithLorem] = useState(true)
  const [sentenceLength, setSentenceLength] = useState<SentenceLength>("medium")
  const [capMode, setCapMode] = useState<CapMode>("sentence")
  const [preset, setPreset] = useState<Preset>("lorem")
  const [downloadFormat, setDownloadFormat] = useState<DownloadFormat>("txt")
  const [copied, setCopied] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  const MODE_MAX: Record<GenerateMode, number> = { paragraphs: 20, sentences: 50, words: 500 }

  const text = useMemo(
    () => generate({ mode, count, startWithLorem, sentenceLength, capMode, preset }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mode, count, startWithLorem, sentenceLength, capMode, preset, refreshKey]
  )

  const stats = useMemo(() => computeStats(text), [text])

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [text])

  const handleModeChange = (m: GenerateMode) => {
    setMode(m)
    const defaults: Record<GenerateMode, number> = { paragraphs: 3, sentences: 10, words: 100 }
    setCount(defaults[m])
  }

  return (
    <div className="flex flex-col gap-6">

      {/* ── Controls row ── */}
      <div className="flex flex-wrap items-end gap-4">

        {/* Mode */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-widest text-zinc-900 dark:text-zinc-500">
            Generate by
          </label>
          <div className="flex gap-1 rounded-lg border border-zinc-200 dark:border-zinc-800 p-1">
            {(["paragraphs", "sentences", "words"] as GenerateMode[]).map((m) => (
              <button
                key={m}
                onClick={() => handleModeChange(m)}
                className={cn(
                  "rounded-md px-3 py-1.5 text-xs font-medium capitalize transition-colors",
                  mode === m
                    ? "bg-purple-600 text-white"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                )}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-widest text-zinc-900 dark:text-zinc-500">
            Count
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1}
              max={MODE_MAX[mode]}
              value={count}
              onChange={(e) => setCount(Math.min(MODE_MAX[mode], Math.max(1, Number(e.target.value))))}
              className="w-20 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-purple-500/40 tabular-nums"
            />
            <input
              type="range"
              min={1}
              max={MODE_MAX[mode]}
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="w-28 accent-purple-600"
            />
            <span className="text-xs text-zinc-400 dark:text-zinc-600 w-8">/{MODE_MAX[mode]}</span>
          </div>
        </div>

        {/* Sentence length */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-widest text-zinc-900 dark:text-zinc-500">
            Sentence length
          </label>
          <div className="flex gap-1 rounded-lg border border-zinc-200 dark:border-zinc-800 p-1">
            {(["short", "medium", "long"] as SentenceLength[]).map((s) => (
              <button
                key={s}
                onClick={() => setSentenceLength(s)}
                className={cn(
                  "rounded-md px-3 py-1.5 text-xs font-medium capitalize transition-colors",
                  sentenceLength === s
                    ? "bg-purple-600 text-white"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Capitalization */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-widest text-zinc-900 dark:text-zinc-500">
            Case
          </label>
          <div className="relative">
            <select
              value={capMode}
              onChange={(e) => setCapMode(e.target.value as CapMode)}
              className="appearance-none rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-3 py-1.5 pr-8 text-xs font-medium text-zinc-700 dark:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-purple-500/40 cursor-pointer"
            >
              <option value="sentence">Sentence case</option>
              <option value="title">Title Case</option>
              <option value="upper">UPPERCASE</option>
              <option value="lower">lowercase</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
          </div>
        </div>

        {/* Preset */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-widest text-zinc-900 dark:text-zinc-500">
            Preset
          </label>
          <div className="relative">
            <select
              value={preset}
              onChange={(e) => setPreset(e.target.value as Preset)}
              className="appearance-none rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-3 py-1.5 pr-8 text-xs font-medium text-zinc-700 dark:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-purple-500/40 cursor-pointer"
            >
              {PRESET_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
          </div>
        </div>
      </div>

      {/* ── Checkbox row ── */}
      <div className="flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-1.5 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={startWithLorem}
            onChange={(e) => setStartWithLorem(e.target.checked)}
            className="accent-purple-600 w-3.5 h-3.5"
            disabled={preset !== "lorem"}
          />
          <span className={cn(
            "text-xs font-medium",
            preset !== "lorem"
              ? "text-zinc-300 dark:text-zinc-700"
              : "text-zinc-500 dark:text-zinc-400"
          )}>
            Start with "Lorem ipsum…"
          </span>
        </label>
      </div>

      {/* ── Action bar ── */}
      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={() => setRefreshKey((k) => k + 1)}
          className="flex items-center gap-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
        >
          <RefreshCw className="w-3 h-3" /> Regenerate
        </button>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
          {copied ? "Copied!" : "Copy"}
        </button>

        <div className="flex items-center gap-1">
          <div className="relative">
            <select
              value={downloadFormat}
              onChange={(e) => setDownloadFormat(e.target.value as DownloadFormat)}
              className="appearance-none rounded-l-md border border-r-0 border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-2 py-1.5 pr-6 text-xs font-medium text-zinc-700 dark:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-purple-500/40 cursor-pointer"
            >
              <option value="txt">.txt</option>
              <option value="md">.md</option>
              <option value="html">.html</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 text-zinc-400" />
          </div>
          <button
            onClick={() => downloadText(text, downloadFormat)}
            className="rounded-r-md border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors bg-zinc-50 dark:bg-zinc-900"
          >
            Download
          </button>
        </div>
      </div>

      {/* ── Output ── */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-widest text-zinc-900 dark:text-zinc-500">
          Output
        </label>
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-4 min-h-45 max-h-120 overflow-y-auto">
          {mode === "paragraphs"
            ? text.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 mb-4 last:mb-0"
                >
                  {para}
                </p>
              ))
            : (
                <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {text}
                </p>
              )}
        </div>
      </div>

      {/* ── Stats ── */}
      {stats && (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 px-5 py-4">
          <StatItem label="Words" value={stats.words.toLocaleString()} />
          <StatItem label="Characters" value={stats.chars.toLocaleString()} />
          <StatItem label="Sentences" value={stats.sentences} />
          <StatItem label="Paragraphs" value={stats.paragraphs} />
          <StatItem label="Avg words/sentence" value={stats.avgWordsSentence} />
          <StatItem label="Avg sentences/para" value={stats.avgSentencesPara} />
          <StatItem label="Reading time" value={`${stats.readingTime} min`} />
        </div>
      )}
    </div>
  )
}