"use client";

import { useState } from "react";
import CommitOutput from "./commit-output";
import { SAMPLE_DIFF } from "@/constants/examples";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Alert, AlertDescription } from "./ui/alert";

export default function DiffInput() {
  const [diff, setDiff] = useState("");
  const [style, setStyle] = useState("conventional");
  const [commit, setCommit] = useState("");
  const [loading, setLoading] = useState(false);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [error, setError] = useState("");

  const diffSize = diff.length;
  const diffKB = (diffSize / 1024).toFixed(1);
  const isOverLimit = diffSize > 15000;
  const isUnderMinimum = diffSize < 10;
  const isDisabled = loading || isOverLimit || isUnderMinimum;

  async function generateCommit() {
    try {
      setLoading(true);
      setError("");
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          diff,
          style,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      setCommit(data.commit);
      setRemaining(data.remaining);
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unexpected Error");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-3xl space-y-6">
        {/* Main Card */}
        <Card className="border-slate-700 bg-slate-900/50 backdrop-blur-sm">
          <CardHeader className="space-y-4">
            {/* Style Selection */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-200">
                Commit Style
              </label>
              <Select value={style} onValueChange={setStyle}>
                <SelectTrigger className="border-slate-700 bg-slate-800 text-slate-50 hover:bg-slate-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="border-slate-700 bg-slate-800">
                  <SelectItem value="conventional">Conventional</SelectItem>
                  <SelectItem value="simple">Simple</SelectItem>
                  <SelectItem value="detailed">Detailed</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                  <SelectItem value="funny">Funny</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                variant="outline"
                onClick={() => setDiff(SAMPLE_DIFF)}
                className="border-slate-600 text-slate-50 hover:bg-slate-800 flex-1 sm:flex-none"
              >
                Try Example
              </Button>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Diff Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-200">
                Git Diff
              </label>
              <Textarea
                value={diff}
                onChange={(e) => setDiff(e.target.value)}
                placeholder="Paste your git diff here (e.g., output from `git diff`)"
                className="min-h-80 w-full resize-vertical border-slate-700 bg-slate-800 text-slate-50 placeholder:text-slate-500 focus:border-slate-600 focus:ring-slate-500"
              />
            </div>

            {/* Stats and Warnings */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="border-slate-600 bg-slate-800">
                    {diffSize.toLocaleString()} chars
                  </Badge>
                  <Badge variant="outline" className="border-slate-600 bg-slate-800">
                    {diffKB} KB
                  </Badge>
                </div>
                <div className="text-xs sm:text-sm text-slate-400">
                  Max: 15,000 characters
                </div>
              </div>

              {isOverLimit && (
                <Alert className="border-red-900/50 bg-red-950/30">
                  <AlertDescription className="text-red-400">
                    Diff is too large. Maximum 15,000 characters.
                  </AlertDescription>
                </Alert>
              )}

              {error && (
                <Alert className="border-red-900/50 bg-red-950/30">
                  <AlertDescription className="text-red-400">
                    {error}
                  </AlertDescription>
                </Alert>
              )}
            </div>

            {/* Generate Button */}
            <Button
              onClick={generateCommit}
              disabled={isDisabled}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed h-10 sm:h-11 text-base font-medium"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-r-transparent" />
                  Generating...
                </span>
              ) : (
                "Generate Commit"
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Output Card */}
        {commit && (
          <CommitOutput commit={commit} remaining={remaining} />
        )}
      </div>
    </div>
  );
}