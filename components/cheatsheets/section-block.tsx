import { type Section } from "@/constants/learnings/cheatsheets";
import { CodeBlock } from "./code-block";

export function SectionBlock({ section }: { section: Section }) {
  const id = section.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3">
        {section.title}
      </h2>
      <div className="space-y-2">
        {section.snippets.map((snippet, i) => (
          <CodeBlock
            key={i}
            code={snippet.code}
            description={snippet.description}
          />
        ))}
      </div>
    </div>
  );
}