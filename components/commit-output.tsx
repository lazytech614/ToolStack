"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Copy } from "lucide-react";

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
    <Card className="border-slate-700 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-300">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
        <CardTitle className="text-xl sm:text-2xl">
          Generated Commit
        </CardTitle>
        <Button
          onClick={handleCopy}
          variant={copied ? "default" : "outline"}
          size="sm"
          className={`w-full sm:w-auto gap-2 ${
            copied
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "border-slate-600 text-slate-50 hover:bg-slate-800"
          }`}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy
            </>
          )}
        </Button>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Code Block */}
        <div className="overflow-x-auto rounded-lg bg-slate-950 border border-slate-700 p-4">
          <pre className="text-sm sm:text-base text-slate-50 font-mono whitespace-pre-wrap wrap-break-word">
            {commit}
          </pre>
        </div>

        {/* Stats Footer */}
        {remaining !== undefined && remaining !== null && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-700">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-slate-400">
                Requests Remaining:
              </span>
              <Badge className="bg-slate-800 border border-slate-600 text-slate-200">
                {remaining}
              </Badge>
            </div>
            {remaining < 5 && (
              <span className="text-xs text-yellow-400">
                Getting low on requests
              </span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}