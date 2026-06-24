"use client";

import { useState } from "react";

interface CommitOutputProps {
  commit: string;
  remaining?: number | null;
}

export default function CommitOutput({
  commit,
  remaining,
}: CommitOutputProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(commit);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  }

  if (!commit) return null;

  return (
    <div className="mt-6 rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Generated Commit
        </h2>

        <button
          onClick={handleCopy}
          className="rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-gray-100"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg bg-gray-100 p-4 text-sm">
        {commit}
      </pre>

      {remaining !== undefined &&
        remaining !== null && (
          <p className="mt-4 text-sm text-gray-500">
            Remaining Requests: {remaining}
          </p>
        )}
    </div>
  );
}