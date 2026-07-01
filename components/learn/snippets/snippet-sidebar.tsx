interface Props {
  children: React.ReactNode;
}

export function SnippetSidebar({ children }: Props) {
  return <aside className="h-[calc(100vh-12rem)] overflow-hidden">{children}</aside>;
}
