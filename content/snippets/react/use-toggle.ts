import { Snippet } from "../types";

export const useToggleSnippet: Snippet = {
  id: "react-use-toggle",
  title: "useToggle",
  description:
    "Provides a simple boolean state with a toggle function, useful for modals, menus, and switches.",
  language: "typescript",
  tags: ["hooks", "state"],
  difficulty: "Beginner",
  category: "React Hooks",

  code: `import { useCallback, useState } from "react";

function useToggle(initialValue = false): [boolean, () => void] {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue((v) => !v), []);

  return [value, toggle];
}

// Usage
function Accordion() {
  const [isOpen, toggleOpen] = useToggle();

  return (
    <div>
      <button onClick={toggleOpen}>{isOpen ? "Collapse" : "Expand"}</button>
      {isOpen && <p>Accordion content</p>}
    </div>
  );
}`,
};
