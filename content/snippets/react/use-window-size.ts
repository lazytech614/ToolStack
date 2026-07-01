import { Snippet } from "../types";

export const useWindowSizeSnippet: Snippet = {
  id: "react-use-window-size",
  title: "useWindowSize",
  description: "Tracks the current window width and height, updating on resize.",
  language: "typescript",
  tags: ["hooks", "responsive", "dom"],
  difficulty: "Beginner",
  category: "React Hooks",

  code: `import { useEffect, useState } from "react";

interface WindowSize {
  width: number;
  height: number;
}

function useWindowSize(): WindowSize {
  const [size, setSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

// Usage
function Layout() {
  const { width } = useWindowSize();

  return <div>{width < 768 ? <MobileLayout /> : <DesktopLayout />}</div>;
}`,
};
