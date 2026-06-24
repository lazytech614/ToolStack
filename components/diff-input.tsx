"use client";

import { useState } from "react";
import CommitOutput from "./commit-output";

export default function DiffInput() {
  const [diff, setDiff] = useState("");
  const [style, setStyle] = useState("conventional");
  const [commit, setCommit] = useState("");
  const [loading, setLoading] = useState(false);
  const [remaining, setRemaining] = useState<number | null>(null)

  async function generateCommit() {
    try {
      setLoading(true);

      const response = await fetch(
        "/api/generate",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            diff,
            style,
          }),
        }
      );

      const data = await response.json();

      setCommit(data.commit);
      setRemaining(data.remaining);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <select
        value={style}
        onChange={(e) =>
          setStyle(e.target.value)
        }
        className="border p-2 rounded"
      >
        <option value="conventional">
          Conventional
        </option>
        <option value="simple">
          Simple
        </option>
        <option value="detailed">
          Detailed
        </option>
        <option value="enterprise">
          Enterprise
        </option>
        <option value="funny">
          Funny
        </option>
      </select>

      <textarea
        value={diff}
        onChange={(e) =>
          setDiff(e.target.value)
        }
        placeholder="Paste git diff..."
        className="w-full h-80 border rounded p-4"
      />

      <button
        onClick={generateCommit}
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded"
      >
        {loading
          ? "Generating..."
          : "Generate Commit"}
      </button>

      <CommitOutput
        commit={commit}
        remaining={remaining}
      />
    </div>
  );
}