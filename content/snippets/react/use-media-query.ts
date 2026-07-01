import { Snippet } from "../types";

export const useMediaQuerySnippet: Snippet = {
  id: "react-use-media-query",
  title: "useMediaQuery",
  description:
    "Tracks whether a CSS media query currently matches, useful for responsive behavior in JS.",
  language: "typescript",
  tags: ["hooks", "responsive"],
  difficulty: "Intermediate",
  category: "React Hooks",

  code: `import { useEffect, useState } from "react";

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

    mediaQueryList.addEventListener("change", listener);
    setMatches(mediaQueryList.matches);

    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

// Usage
function ResponsiveNav() {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return isMobile ? <MobileNav /> : <DesktopNav />;
}`,
};
