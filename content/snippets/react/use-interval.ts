import { Snippet } from "../types";

export const useIntervalSnippet: Snippet = {
  id: "react-use-interval",
  title: "useInterval",
  description:
    "A declarative setInterval hook that always calls the latest callback and cleans up automatically.",
  language: "typescript",
  tags: ["hooks", "timers"],
  difficulty: "Intermediate",
  category: "React Hooks",

  code: `import { useEffect, useRef } from "react";

function useInterval(callback: () => void, delay: number | null): void {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

// Usage
function Clock() {
  const [time, setTime] = useState(new Date());

  useInterval(() => setTime(new Date()), 1000);

  return <p>{time.toLocaleTimeString()}</p>;
}`,
};
