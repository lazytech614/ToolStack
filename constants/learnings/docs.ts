// ─── Content Block Types ──────────────────────────────────────────────────────

export type HeadingBlock = {
  type: "heading";
  level: 2 | 3;
  text: string;
};

export type ParagraphBlock = {
  type: "paragraph";
  text: string;
};

export type CodeBlock = {
  type: "code";
  language: string;
  code: string;
  filename?: string;
};

export type CalloutBlock = {
  type: "callout";
  variant: "info" | "warning" | "tip" | "danger";
  title: string;
  text: string;
};

export type ListBlock = {
  type: "list";
  ordered?: boolean;
  items: string[];
};

export type TableBlock = {
  type: "table";
  headers: string[];
  rows: string[][];
};

export type DividerBlock = {
  type: "divider";
};

export type ContentBlock =
  | HeadingBlock
  | ParagraphBlock
  | CodeBlock
  | CalloutBlock
  | ListBlock
  | TableBlock
  | DividerBlock;

// ─── Doc Type ─────────────────────────────────────────────────────────────────

export type Doc = {
  slug: string;
  title: string;
  description: string;
  category: "getting-started" | "core-concepts" | "api-reference";
  order: number;
  content: ContentBlock[];
};

// ─── Docs Data ────────────────────────────────────────────────────────────────

export const docs: Doc[] = [
  // ── Getting Started ─────────────────────────────────────────────────────────
  {
    slug: "introduction",
    title: "Introduction",
    description: "What ToolStack is, who it's for, and how it's organised.",
    category: "getting-started",
    order: 1,
    content: [
      {
        type: "paragraph",
        text: "ToolStack is a developer reference platform — a single place for the snippets, cheatsheets, glossary terms, and guides you reach for every day. No ads, no clutter, just the information you need to keep moving.",
      },
      {
        type: "callout",
        variant: "tip",
        title: "Just getting started?",
        text: "Head to the Quick Start guide to have your first snippet copied and your first cheatsheet open in under two minutes.",
      },
      {
        type: "heading",
        level: 2,
        text: "What's included",
      },
      {
        type: "list",
        items: [
          "Snippets — copy-paste TypeScript, React, and CSS patterns",
          "Cheatsheets — grouped syntax references for Git, CSS, and more",
          "Glossary — plain-English definitions for common dev terms",
          "Docs — the guide you're reading right now",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Who it's for",
      },
      {
        type: "paragraph",
        text: "ToolStack is built for working developers who want reference material that is fast to search, easy to read, and impossible to get lost in. Whether you're a solo developer or part of a larger team, the tools here are designed to fit into your existing workflow.",
      },
      {
        type: "heading",
        level: 2,
        text: "How the docs are organised",
      },
      {
        type: "table",
        headers: ["Section", "What you'll find"],
        rows: [
          ["Getting Started", "Orientation and setup — start here"],
          ["Core Concepts", "How ToolStack works under the hood"],
          ["API Reference", "Endpoints, parameters, and rate limits"],
        ],
      },
    ],
  },
  {
    slug: "quick-start",
    title: "Quick Start",
    description: "Get up and running with ToolStack in under two minutes.",
    category: "getting-started",
    order: 2,
    content: [
      {
        type: "paragraph",
        text: "This guide walks you through the three most common things developers do on ToolStack: finding a snippet, opening a cheatsheet, and looking up a term.",
      },
      {
        type: "heading",
        level: 2,
        text: "1. Find a snippet",
      },
      {
        type: "paragraph",
        text: "Navigate to /snippets and type what you're looking for into the search bar. You can filter by language using the pills below the search input.",
      },
      {
        type: "code",
        language: "bash",
        filename: "example search",
        code: `# What you type into the search bar
debounce
useLocalStorage
truncate text`,
      },
      {
        type: "callout",
        variant: "info",
        title: "Search tip",
        text: "Search matches against title, description, and tags — so 'async' will surface snippets tagged with async even if the word isn't in the title.",
      },
      {
        type: "heading",
        level: 2,
        text: "2. Open a cheatsheet",
      },
      {
        type: "paragraph",
        text: "Go to /cheatsheets and pick a language or tool. Each cheatsheet is split into sections — use the sticky sidebar on the left to jump directly to the section you need.",
      },
      {
        type: "heading",
        level: 2,
        text: "3. Look up a term",
      },
      {
        type: "paragraph",
        text: "Visit /glossary and either search for a term or use the A–Z jump bar to browse. Each definition includes related terms so you can explore connected concepts.",
      },
      {
        type: "callout",
        variant: "tip",
        title: "Keyboard shortcut",
        text: "Press Cmd+K (Mac) or Ctrl+K (Windows) anywhere on the site to open the command palette and jump directly to any page.",
      },
    ],
  },

  // ── Core Concepts ────────────────────────────────────────────────────────────
  {
    slug: "how-tools-work",
    title: "How Tools Work",
    description: "Understand how ToolStack organises and serves its content.",
    category: "core-concepts",
    order: 1,
    content: [
      {
        type: "paragraph",
        text: "Every piece of content on ToolStack — snippets, cheatsheets, glossary terms, and docs — is stored as structured TypeScript data and rendered at build time. There is no CMS, no database, and no API call required to display content.",
      },
      {
        type: "heading",
        level: 2,
        text: "Static generation",
      },
      {
        type: "paragraph",
        text: "All pages are statically generated using Next.js generateStaticParams. This means every route is pre-rendered at build time and served as plain HTML, making the site extremely fast and resilient.",
      },
      {
        type: "code",
        language: "typescript",
        filename: "app/cheatsheets/[slug]/page.tsx",
        code: `export function generateStaticParams() {
  return cheatsheets.map((s) => ({ slug: s.slug }));
}`,
      },
      {
        type: "heading",
        level: 2,
        text: "Content structure",
      },
      {
        type: "paragraph",
        text: "Each content type follows a strict TypeScript schema defined in the constants directory. Adding new content is as simple as adding a new object to the relevant array — the UI picks it up automatically.",
      },
      {
        type: "table",
        headers: ["File", "Content type"],
        rows: [
          ["constants/snippets.ts", "Code snippets"],
          ["constants/cheatsheets.ts", "Cheatsheet sections and snippets"],
          ["constants/glossary.ts", "Glossary terms and definitions"],
          ["constants/docs.ts", "Documentation pages"],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Adding content",
        text: "To add a new snippet, open constants/snippets.ts and append a new object to the snippets array. The listing page, search, and filters update automatically.",
      },
      {
        type: "heading",
        level: 2,
        text: "Rendering pipeline",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Content is defined as TypeScript objects in constants/",
          "Next.js reads the data at build time via generateStaticParams",
          "Each page receives its data as a plain prop — no fetch needed",
          "Components render the typed content blocks into HTML",
        ],
      },
    ],
  },
  {
    slug: "authentication",
    title: "Authentication",
    description: "How auth works and how to protect pages in ToolStack.",
    category: "core-concepts",
    order: 2,
    content: [
      {
        type: "paragraph",
        text: "ToolStack uses NextAuth.js for authentication. Sessions are stored server-side and accessed via the useSession hook on the client or getServerSession in server components and API routes.",
      },
      {
        type: "heading",
        level: 2,
        text: "Protecting a page",
      },
      {
        type: "paragraph",
        text: "Use the withAuth middleware or check the session directly in a server component to gate access to a route.",
      },
      {
        type: "code",
        language: "typescript",
        filename: "app/dashboard/page.tsx",
        code: `import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  return <div>Welcome, {session.user.name}</div>;
}`,
      },
      {
        type: "heading",
        level: 2,
        text: "Protecting an API route",
      },
      {
        type: "code",
        language: "typescript",
        filename: "app/api/protected/route.ts",
        code: `import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }
  return NextResponse.json({ data: "secret" });
}`,
      },
      {
        type: "callout",
        variant: "warning",
        title: "Never trust the client",
        text: "Always validate the session on the server. Client-side checks are for UX only — a determined user can bypass them.",
      },
      {
        type: "heading",
        level: 2,
        text: "Session shape",
      },
      {
        type: "table",
        headers: ["Field", "Type", "Description"],
        rows: [
          ["session.user.name", "string", "Display name from the provider"],
          ["session.user.email", "string", "Email address"],
          ["session.user.image", "string | null", "Avatar URL"],
          ["session.expires", "string", "ISO date string of session expiry"],
        ],
      },
    ],
  },

  // ── API Reference ────────────────────────────────────────────────────────────
  {
    slug: "rest-endpoints",
    title: "REST Endpoints",
    description: "All available API endpoints, their parameters, and example responses.",
    category: "api-reference",
    order: 1,
    content: [
      {
        type: "paragraph",
        text: "ToolStack exposes a read-only REST API for accessing content programmatically. All endpoints return JSON and require no authentication for public content.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Base URL",
        text: "All endpoints are relative to https://toolstack.dev/api/v1",
      },
      {
        type: "heading",
        level: 2,
        text: "Snippets",
      },
      {
        type: "table",
        headers: ["Method", "Endpoint", "Description"],
        rows: [
          ["GET", "/snippets", "List all snippets"],
          ["GET", "/snippets/:id", "Get a single snippet by ID"],
        ],
      },
      {
        type: "code",
        language: "bash",
        filename: "GET /snippets",
        code: `curl https://toolstack.dev/api/v1/snippets`,
      },
      {
        type: "code",
        language: "json",
        filename: "Response",
        code: `{
  "data": [
    {
      "id": "ts-debounce",
      "title": "debounce",
      "language": "typescript",
      "tags": ["performance", "utils"]
    }
  ],
  "total": 15
}`,
      },
      {
        type: "heading",
        level: 2,
        text: "Cheatsheets",
      },
      {
        type: "table",
        headers: ["Method", "Endpoint", "Description"],
        rows: [
          ["GET", "/cheatsheets", "List all cheatsheets"],
          ["GET", "/cheatsheets/:slug", "Get a cheatsheet with all sections"],
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Glossary",
      },
      {
        type: "table",
        headers: ["Method", "Endpoint", "Description"],
        rows: [
          ["GET", "/glossary", "List all terms"],
          ["GET", "/glossary/:id", "Get a single term by ID"],
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Filtering",
        text: "All list endpoints support ?category= and ?q= query parameters for filtering. Example: /snippets?language=typescript&q=debounce",
      },
    ],
  },
  {
    slug: "rate-limits",
    title: "Rate Limits",
    description: "Understand the API rate limits and how to handle 429 responses.",
    category: "api-reference",
    order: 2,
    content: [
      {
        type: "paragraph",
        text: "The ToolStack API enforces rate limits to ensure fair usage and maintain performance for all users. Limits are applied per IP address on a sliding window.",
      },
      {
        type: "heading",
        level: 2,
        text: "Limits by tier",
      },
      {
        type: "table",
        headers: ["Tier", "Requests / minute", "Requests / day"],
        rows: [
          ["Unauthenticated", "30", "500"],
          ["Authenticated (free)", "120", "5,000"],
          ["Authenticated (pro)", "600", "Unlimited"],
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Rate limit headers",
      },
      {
        type: "paragraph",
        text: "Every response includes headers so you can track your current usage and avoid hitting the limit.",
      },
      {
        type: "table",
        headers: ["Header", "Description"],
        rows: [
          ["X-RateLimit-Limit", "Maximum requests allowed in the window"],
          ["X-RateLimit-Remaining", "Requests remaining in the current window"],
          ["X-RateLimit-Reset", "Unix timestamp when the window resets"],
          ["Retry-After", "Seconds to wait (only present on 429 responses)"],
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Handling a 429",
      },
      {
        type: "callout",
        variant: "warning",
        title: "Do not retry immediately",
        text: "Retrying instantly after a 429 will not succeed and may result in a temporary ban. Always respect the Retry-After header.",
      },
      {
        type: "code",
        language: "typescript",
        filename: "lib/api.ts",
        code: `async function fetchWithRetry(url: string, retries = 3): Promise<Response> {
  const res = await fetch(url);

  if (res.status === 429 && retries > 0) {
    const retryAfter = Number(res.headers.get("Retry-After") ?? 1);
    await new Promise((r) => setTimeout(r, retryAfter * 1000));
    return fetchWithRetry(url, retries - 1);
  }

  return res;
}`,
      },
      {
        type: "callout",
        variant: "danger",
        title: "Exceeding limits repeatedly",
        text: "Consistently exceeding rate limits may result in your IP being blocked. If you need higher limits, consider upgrading to the pro tier.",
      },
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export const docCategories = [
  "getting-started",
  "core-concepts",
  "api-reference",
] as const;

export type DocCategory = (typeof docCategories)[number];

export const categoryLabels: Record<DocCategory, string> = {
  "getting-started": "Getting Started",
  "core-concepts": "Core Concepts",
  "api-reference": "API Reference",
};

export function getDocBySlug(slug: string) {
  return docs.find((d) => d.slug === slug);
}

export function getDocsByCategory(category: DocCategory) {
  return docs
    .filter((d) => d.category === category)
    .sort((a, b) => a.order - b.order);
}

// Headings extracted for the on-this-page TOC
export function getHeadings(doc: Doc) {
  return doc.content.filter(
    (block): block is HeadingBlock => block.type === "heading"
  );
}