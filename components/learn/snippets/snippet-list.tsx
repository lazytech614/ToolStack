interface Section<T> {
  title: string;
  count?: number;
  items: T[];
}

interface Props<T> {
  sections: Section<T>[];
  selectedId: string | null;
  getId: (item: T) => string;
  renderItem: (item: T, active: boolean) => React.ReactNode;
}

export function SnippetList<T>({ sections, selectedId, getId, renderItem }: Props<T>) {
  return (
    <div className="h-full overflow-y-auto">
      {sections.map((section) => (
        <div key={section.title}>
          {/* Section Header */}
          <div className="sticky top-0 z-10 border-y border-zinc-200 bg-zinc-50 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                {section.title}
              </h3>

              <span className="text-xs text-zinc-400">{section.count ?? section.items.length}</span>
            </div>
          </div>

          {section.items.map((item) => renderItem(item, selectedId === getId(item)))}
        </div>
      ))}
    </div>
  );
}
