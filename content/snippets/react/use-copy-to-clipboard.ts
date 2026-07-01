import { Snippet } from "../types";

export const useCopyToClipboardSnippet: Snippet = {
  id: "react-use-copy-to-clipboard",
  title: "useCopyToClipboard",
  description:
    "Copies text to the clipboard and tracks whether the copy succeeded, with an optional reset timeout.",
  language: "typescript",
  tags: ["hooks", "clipboard"],
  difficulty: "Beginner",
  category: "React Hooks",

  code: `import { useCallback, useState } from "react";

function useCopyToClipboard(resetAfterMs = 2000) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), resetAfterMs);
        return true;
      } catch {
        setIsCopied(false);
        return false;
      }
    },
    [resetAfterMs]
  );

  return { isCopied, copy };
}

// Usage
function ShareLink({ url }: { url: string }) {
  const { isCopied, copy } = useCopyToClipboard();

  return (
    <button onClick={() => copy(url)}>
      {isCopied ? "Copied!" : "Copy link"}
    </button>
  );
}`,
};
