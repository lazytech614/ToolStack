import { Snippet } from "../types";

export const useOnClickOutsideSnippet: Snippet = {
  id: "react-use-on-click-outside",
  title: "useOnClickOutside",
  description:
    "Detects clicks outside a referenced element and triggers a callback, useful for closing dropdowns and modals.",
  language: "typescript",
  tags: ["hooks", "dom"],
  difficulty: "Intermediate",
  category: "React Hooks",

  code: `import { useEffect, RefObject } from "react";

function useOnClickOutside(
  ref: RefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent) => void
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) return;
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

// Usage
function Dropdown({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, onClose);

  return <div ref={ref}>Dropdown content</div>;
}`,
};
