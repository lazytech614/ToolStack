import { notFound } from "next/navigation";
import Link from "next/link";
import { cheatsheets } from "@/constants/cheatsheets";
import { Container } from "@/components/shared/container";
import { ArrowLeft } from "lucide-react";
import { CheatsheetSidebar } from "@/components/cheatsheets/cheatsheet-sidebar";
import { SectionBlock } from "@/components/cheatsheets/section-block";

// ─── Static Params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return cheatsheets.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const sheet = cheatsheets.find((s) => s.slug === params.slug);
  if (!sheet) return {};
  return {
    title: `${sheet.title} Cheatsheet — ToolStack`,
    description: sheet.description,
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function CheatsheetDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const {slug} = await params;
  const sheet = cheatsheets.find((s) => s.slug === slug);
  if (!sheet) notFound();

  const totalSnippets = sheet.sections.reduce(
    (acc, s) => acc + s.snippets.length,
    0
  );

  return (
    <main className="min-h-screen py-16">
      <Container>
        {/* Back */}
        <Link
          href="/cheatsheets"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All cheatsheets
        </Link>

        {/* Page header */}
        <div className="flex items-start gap-4 mb-10">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-800">
            <span className="text-sm font-bold text-zinc-700 dark:text-zinc-200">
              {sheet.icon}
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                {sheet.title}
              </h1>
              <span className="inline-flex items-center rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-[11px] font-medium capitalize text-zinc-500 dark:text-zinc-400">
                {sheet.tag}
              </span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {sheet.description}
            </p>
            <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
              {totalSnippets} snippets across {sheet.sections.length} sections
            </p>
          </div>
        </div>

        {/* Layout: sidebar + content */}
        <div className="flex gap-10 items-start">
          {/* Sticky sidebar */}
          <aside className="hidden lg:block w-52 shrink-0 sticky top-24">
            <CheatsheetSidebar sections={sheet.sections} />
          </aside>

          {/* Sections */}
          <div className="flex-1 space-y-10 min-w-0">
            {sheet.sections.map((section) => (
              <SectionBlock key={section.title} section={section} />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}