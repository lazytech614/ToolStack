import { notFound } from "next/navigation";
import { cheatsheets } from "@/constants/learnings/cheatsheets";
import { Container } from "@/components/shared/container";
import { CheatsheetSidebar } from "@/components/cheatsheets/cheatsheet-sidebar";
import { SectionBlock } from "@/components/cheatsheets/section-block";
import { PageHeading } from "@/components/shared/page-heading";
import { StatusBar } from "@/components/shared/satus-bar";

// ─── Static Params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return cheatsheets.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const {slug} = await params;
  const sheet = cheatsheets.find((s) => s.slug === slug);
  if (!sheet) return {};
  return {
    title: `${sheet.title} Cheatsheet`,
    description: sheet.description,
  };
}

export default async function CheatsheetDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const {slug} = await params;
  const sheet = cheatsheets.find((s) => s.slug === slug);
  if (!sheet) notFound();

  console.log("Sheet: ", sheet);

  const totalSnippets = sheet.sections.reduce(
    (acc, s) => acc + s.snippets.length,
    0
  );

  return (
    <main className="min-h-screen bg-white dark:bg-black py-10">
      <Container>
        {/* Top row: heading + status */}
        <div className="flex flex-col gap-4 md:flex-row items-start md:justify-between">
          <PageHeading
            title={`${sheet.title} Cheatsheet`}
            description={`${sheet.description}`}
            secondaryDescription={`${totalSnippets} snippets across ${sheet.sections.length} sections`}
          />
          <div className="text-left md:text-right md:shrink-0">
            <StatusBar
              items={cheatsheets}
              getName={(cheatsheet) => cheatsheet.title}
              itemLabel="cheatsheet"
            />
          </div>
        </div>

        {/* Layout: sidebar + content */}
        <div className="flex gap-10 items-start mt-10">
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