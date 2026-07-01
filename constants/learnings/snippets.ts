import { BundledLanguage } from "shiki";

export type Snippet = {
  id: string;
  title: string;
  description: string;
  code: string;
  language: BundledLanguage;
  tags: string[];
};

export const snippets: Snippet[] = [
  // ─── TypeScript ─────────────────────────────────────────────────────────────
  {
    id: "ts-debounce",
    title: "debounce",
    description:
      "Delays invoking a function until after a wait period has elapsed since the last call.",
    language: "typescript",
    tags: ["performance", "utils"],
    code: `function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

// Usage
const onSearch = debounce((query: string) => {
  console.log("Searching:", query);
}, 300);`,
  },
  {
    id: "ts-deep-clone",
    title: "deepClone",
    description: "Deeply clones any serializable value using the structured clone algorithm.",
    language: "typescript",
    tags: ["utils", "objects"],
    code: `function deepClone<T>(value: T): T {
  return structuredClone(value);
}

// Usage
const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
clone.b.c = 99;
console.log(original.b.c); // 2 — untouched`,
  },
  {
    id: "ts-group-by",
    title: "groupBy",
    description: "Groups an array of objects by a given key.",
    language: "typescript",
    tags: ["arrays", "utils"],
    code: `function groupBy<T>(
  arr: T[],
  key: keyof T
): Record<string, T[]> {
  return arr.reduce((acc, item) => {
    const group = String(item[key]);
    (acc[group] ??= []).push(item);
    return acc;
  }, {} as Record<string, T[]>);
}

// Usage
const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Carol", role: "admin" },
];
groupBy(users, "role");
// { admin: [Alice, Carol], user: [Bob] }`,
  },
  {
    id: "ts-sleep",
    title: "sleep",
    description: "Pauses execution for a given number of milliseconds.",
    language: "typescript",
    tags: ["async", "utils"],
    code: `const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

// Usage
async function run() {
  console.log("start");
  await sleep(1000);
  console.log("after 1 second");
}`,
  },
  {
    id: "ts-format-date",
    title: "formatDate",
    description: "Formats a Date object into a readable string using Intl.DateTimeFormat.",
    language: "typescript",
    tags: ["dates", "utils"],
    code: `function formatDate(
  date: Date,
  locale = "en-US",
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  }
): string {
  return new Intl.DateTimeFormat(locale, options).format(date);
}

// Usage
formatDate(new Date()); // "Jun 27, 2026"
formatDate(new Date(), "en-GB"); // "27 Jun 2026"`,
  },
  {
    id: "ts-omit",
    title: "omit",
    description: "Returns a copy of an object with specified keys removed.",
    language: "typescript",
    tags: ["objects", "utils"],
    code: `function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...obj };
  keys.forEach((key) => delete result[key]);
  return result as Omit<T, K>;
}

// Usage
const user = { id: 1, name: "Alice", password: "secret" };
omit(user, ["password"]);
// { id: 1, name: "Alice" }`,
  },

  // ─── React ──────────────────────────────────────────────────────────────────
  {
    id: "react-use-local-storage",
    title: "useLocalStorage",
    description: "Syncs state with localStorage, with SSR safety and JSON serialization.",
    language: "tsx",
    tags: ["hooks", "storage"],
    code: `import { useState, useEffect } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? (JSON.parse(stored) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

// Usage
const [theme, setTheme] = useLocalStorage("theme", "dark");`,
  },
  {
    id: "react-use-debounce",
    title: "useDebounce",
    description: "Returns a debounced version of a value, updated after a delay.",
    language: "tsx",
    tags: ["hooks", "performance"],
    code: `import { useState, useEffect } from "react";

function useDebounce<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

// Usage
const [query, setQuery] = useState("");
const debouncedQuery = useDebounce(query, 400);

useEffect(() => {
  if (debouncedQuery) fetchResults(debouncedQuery);
}, [debouncedQuery]);`,
  },
  {
    id: "react-use-click-outside",
    title: "useOnClickOutside",
    description: "Calls a handler when a click occurs outside a referenced element.",
    language: "tsx",
    tags: ["hooks", "events"],
    code: `import { useEffect, type RefObject } from "react";

function useOnClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (e: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      handler(e);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

// Usage
const ref = useRef<HTMLDivElement>(null);
useOnClickOutside(ref, () => setOpen(false));`,
  },
  {
    id: "react-use-previous",
    title: "usePrevious",
    description: "Returns the previous value of a variable across renders.",
    language: "tsx",
    tags: ["hooks", "state"],
    code: `import { useRef, useEffect } from "react";

function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>(undefined);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// Usage
const [count, setCount] = useState(0);
const prevCount = usePrevious(count);
// prevCount holds the value from the last render`,
  },
  {
    id: "react-use-toggle",
    title: "useToggle",
    description: "Boolean state with a stable toggle function.",
    language: "tsx",
    tags: ["hooks", "state"],
    code: `import { useState, useCallback } from "react";

function useToggle(initial = false): [boolean, () => void] {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue((v) => !v), []);
  return [value, toggle];
}

// Usage
const [isOpen, toggleOpen] = useToggle();
<button onClick={toggleOpen}>{isOpen ? "Close" : "Open"}</button>`,
  },

  // ─── CSS ────────────────────────────────────────────────────────────────────
  {
    id: "css-center-absolute",
    title: "Center Absolute",
    description: "Perfectly centers an absolutely positioned element in its container.",
    language: "css",
    tags: ["layout", "positioning"],
    code: `.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Modern alternative */
.centered-modern {
  position: absolute;
  inset: 0;
  margin: auto;
  width: fit-content;
  height: fit-content;
}`,
  },
  {
    id: "css-truncate",
    title: "Truncate Text",
    description: "Clips overflowing text with an ellipsis. Works on single and multiple lines.",
    language: "css",
    tags: ["typography", "utils"],
    code: `/* Single line */
.truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* Multi-line (2 lines) */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}`,
  },
  {
    id: "css-hide-scrollbar",
    title: "Hide Scrollbar",
    description: "Hides the scrollbar while keeping the element scrollable.",
    language: "css",
    tags: ["scrolling", "utils"],
    code: `.no-scrollbar {
  scrollbar-width: none;        /* Firefox */
  -ms-overflow-style: none;     /* IE / Edge */
}

.no-scrollbar::-webkit-scrollbar {
  display: none;                /* Chrome / Safari */
}`,
  },
  {
    id: "css-glassmorphism",
    title: "Glassmorphism",
    description: "Frosted glass card effect using backdrop-filter.",
    language: "css",
    tags: ["effects", "visual"],
    code: `.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
}`,
  },
  {
    id: "css-fluid-type",
    title: "Fluid Typography",
    description: "Scales font size smoothly between two viewport widths using clamp.",
    language: "css",
    tags: ["typography", "responsive"],
    code: `/* clamp(min, preferred, max) */
.fluid-heading {
  font-size: clamp(1.5rem, 4vw, 3rem);
}

.fluid-body {
  font-size: clamp(0.875rem, 1.5vw, 1.125rem);
}`,
  },
];

export const languages = ["all", "typescript", "react", "css"] as const;
export type Language = (typeof languages)[number];

export const allTags = [...new Set(snippets.flatMap((s) => s.tags))].sort();
