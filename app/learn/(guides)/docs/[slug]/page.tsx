import { notFound } from "next/navigation";
import Link from "next/link";
import {
  docs,
  getDocBySlug,
  getDocsByCategory,
  getHeadings,
  categoryLabels,
} from "@/constants/learnings/docs";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DocsSidebar } from "@/components/learn/docs/docs-sidebar";
import { DocRenderer } from "@/components/learn/docs/doc-renderer";
import { OnThisPage } from "@/components/learn/docs/on-this-page";

// ─── Static params & metadata ─────────────────────────────────────────────────

export function generateStaticParams() {
  return docs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) return {};
  return {
    title: `${doc.title} | Documentation | Tool Stack`,
    description: doc.description,

    keywords: [
      doc.title,
      `${doc.title} documentation`,
      `${doc.title} guide`,
      "developer documentation",
      "programming guide",
      "Tool Stack",
    ],

    alternates: {
      canonical: `https://tool-stack-kappa.vercel.app/docs/${doc.slug}`,
    },

    openGraph: {
      title: doc.title,
      description: doc.description,
      url: `https://tool-stack-kappa.vercel.app/docs/${doc.slug}`,
      type: "article",
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) notFound();

  const headings = getHeadings(doc);

  // Prev / next within the same category
  const siblings = getDocsByCategory(doc.category);
  const currentIndex = siblings.findIndex((d) => d.slug === doc.slug);
  const prev = siblings[currentIndex - 1] ?? null;
  const next = siblings[currentIndex + 1] ?? null;

  return (
    <div className="min-h-screen">
      <div className="flex">
        {/* Left sidebar */}
        <aside className="sticky top-20 hidden h-[calc(100vh-5rem)] w-56 shrink-0 overflow-y-auto border-r border-zinc-100 px-4 py-10 lg:block dark:border-zinc-800/60">
          <DocsSidebar />
        </aside>

        {/* Main content */}
        <main className="max-w-3xl min-w-0 flex-1 px-6 py-10 lg:px-12">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500">
            <Link
              href="/docs"
              className="transition-colors hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              Docs
            </Link>
            <span>/</span>
            <span className="capitalize">{categoryLabels[doc.category]}</span>
            <span>/</span>
            <span className="font-medium text-zinc-700 dark:text-zinc-300">{doc.title}</span>
          </div>

          {/* Page header */}
          <div className="mb-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              {doc.title}
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              {doc.description}
            </p>
          </div>

          {/* Content */}
          <DocRenderer blocks={doc.content} />

          {/* Prev / Next */}
          <div className="mt-12 flex items-center justify-between gap-4 border-t border-zinc-100 pt-6 dark:border-zinc-800">
            {prev ? (
              <Link
                href={`/docs/${prev.slug}`}
                className="group flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                <span>{prev.title}</span>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/docs/${next.slug}`}
                className="group flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                <span>{next.title}</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </main>

        {/* Right TOC */}
        <aside className="sticky top-20 hidden h-[calc(100vh-5rem)] w-52 shrink-0 overflow-y-auto px-4 py-10 xl:block">
          <OnThisPage headings={headings} />
        </aside>
      </div>
    </div>
  );
}
