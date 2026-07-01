import { notFound } from "next/navigation";
import { Container } from "@/components/shared/container";
import { PageHeading } from "@/components/shared/page-heading";
import { StatusBar } from "@/components/shared/satus-bar";
import { CheatsheetSidebar } from "@/components/learn/cheatsheets/cheatsheet-sidebar";
import { SectionBlock } from "@/components/learn/cheatsheets/section-block";
import { Metadata } from "next";
import { cheatsheets } from "@/content/cheatsheets";
import { getCheatsheet } from "@/content/cheatsheets/helpers";

// ─── Static Params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return cheatsheets.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const sheet = cheatsheets.find((s) => s.slug === slug);

  if (!sheet) {
    return {};
  }

  return {
    title: `${sheet.title} Cheatsheet | Tool Stack`,
    description: sheet.description,

    keywords: [
      sheet.title,
      `${sheet.title} cheatsheet`,
      `${sheet.title} reference`,
      `${sheet.title} syntax`,
      "developer cheatsheet",
      "Tool Stack",
    ],

    alternates: {
      canonical: `https://tool-stack-kappa.vercel.app/cheatsheets/${sheet.slug}`,
    },

    openGraph: {
      title: `${sheet.title} Cheatsheet`,
      description: sheet.description,
      url: `https://tool-stack-kappa.vercel.app/cheatsheets/${sheet.slug}`,
      type: "article",
    },
  };
}

export default async function CheatsheetDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const sheet = getCheatsheet(slug);
  if (!sheet) notFound();

  const totalSnippets = sheet.sections.reduce((acc, s) => acc + s.snippets.length, 0);

  return (
    <main className="min-h-screen bg-white py-10 dark:bg-black">
      <Container>
        {/* Top row: heading + status */}
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
          <PageHeading
            title={`${sheet.title} Cheatsheet`}
            description={`${sheet.description}`}
            secondaryDescription={`${totalSnippets} snippets across ${sheet.sections.length} sections`}
          />
          <div className="text-left md:shrink-0 md:text-right">
            <StatusBar
              items={cheatsheets}
              getName={(cheatsheet) => cheatsheet.title}
              itemLabel="cheatsheet"
            />
          </div>
        </div>

        {/* Layout: sidebar + content */}
        <div className="mt-10 flex items-start gap-10">
          {/* Sticky sidebar */}
          <aside className="sticky top-24 hidden w-52 shrink-0 lg:block">
            <CheatsheetSidebar sections={sheet.sections} />
          </aside>

          {/* Sections */}
          <div className="min-w-0 flex-1 space-y-10">
            {sheet.sections.map((section) => (
              <SectionBlock key={section.title} language={section.language} section={section} />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
