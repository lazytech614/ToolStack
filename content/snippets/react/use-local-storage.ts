import { Snippet } from "../types";

export const useLocalStorageSnippet: Snippet = {
  id: "react-use-local-storage",
  title: "useLocalStorage",
  description: "Syncs component state with localStorage, persisting values across page reloads.",
  language: "typescript",
  tags: ["hooks", "storage"],
  difficulty: "Intermediate",
  category: "React Hooks",

  code: `import { useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setStoredValue = (newValue: T) => {
    setValue(newValue);
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch {
      // ignore write errors
    }
  };

  return [value, setStoredValue] as const;
}

// Usage
function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Current theme: {theme}
    </button>
  );
}`,
};
