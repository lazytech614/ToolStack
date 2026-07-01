import { type Section } from "@/constants/learnings/cheatsheets";
import { CodeBlock } from "../../shared/code-block";
import { BundledLanguage } from "shiki";

export function SectionBlock({
  section,
  language,
}: {
  section: Section;
  language: BundledLanguage;
}) {
  const id = section.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="mb-3 text-sm font-semibold text-zinc-900 dark:text-white">{section.title}</h2>
      <div className="space-y-2">
        {section.snippets.map((snippet, i) => (
          <CodeBlock
            key={i}
            code={snippet.code}
            language={language}
            description={snippet.description}
          />
        ))}
      </div>
    </div>
  );
}
