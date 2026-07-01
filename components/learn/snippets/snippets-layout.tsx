interface Props {
  sidebar: React.ReactNode;
  detail: React.ReactNode;
}

export function SnippetLayout({ sidebar, detail }: Props) {
  return (
    <div className="mt-8 grid grid-cols-1 items-start gap-6 xl:grid-cols-[340px_1fr]">
      <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
        {sidebar}
      </div>

      <div>{detail}</div>
    </div>
  );
}
