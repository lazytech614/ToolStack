import { Metadata } from "next";
import { notFound } from "next/navigation";

import { tools } from "@/content/tools";

import { Container } from "@/components/shared/container";
import { PageHeading } from "@/components/shared/page-heading";
import { ToolView } from "@/components/tools/tool-view";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ toolId: string }>;
}): Promise<Metadata> {
  const { toolId } = await params;

  const tool = tools.find((t) => t.id === toolId);

  if (!tool) {
    return {
      title: "Tool Not Found",
    };
  }

  return {
    title: tool.seo.title,
    description: tool.seo.description,
    keywords: tool.seo.keywords,

    alternates: {
      canonical: `https://tool-stack-kappa.vercel.app${tool.href}`,
    },

    openGraph: {
      title: tool.seo.title,
      description: tool.seo.description,
      url: `https://tool-stack-kappa.vercel.app${tool.href}`,
      siteName: "Tool Stack",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: tool.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: tool.seo.title,
      description: tool.seo.description,
      images: ["/og-image.png"],
    },
  };
}

interface ToolPageProps {
  params: Promise<{
    toolId: string;
  }>;
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { toolId } = await params;

  const tool = tools.find((t) => t.id === toolId);

  if (!tool) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white py-10 dark:bg-black">
      <Container>
        <PageHeading title={tool.name} description={tool.description} />

        <div className="mt-10">
          <ToolView toolId={tool.id} />
        </div>
      </Container>
    </main>
  );
}
