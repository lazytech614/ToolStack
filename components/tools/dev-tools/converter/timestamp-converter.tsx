"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { Copy, Check, Download, Clock, RotateCw, Calendar, ChevronDown, Zap } from "lucide-react";

import { TimestampUnit } from "@/types/dev-tools/timestamp-converter";
import { useCopy } from "@/hooks/useCopy";
import { cn } from "@/lib/utils";
import {
  getCurrentTimestamp,
  detectInputType,
  parseTimestampInput,
  getAllFormats,
  getDateInfo,
  getRelativeTime,
  calculateTimeDifference,
  getStartOfDay,
  getEndOfDay,
  getStartOfMonth,
  getEndOfMonth,
  getStartOfYear,
  getEndOfYear,
  getTomorrowTimestamp,
  getYesterdayTimestamp,
  getTimezoneAbbr,
  TIMEZONES,
  dateToTimestamp,
  exportToJSON,
  exportToCSV,
  exportToText,
} from "@/lib/dev-utils/timestamp-converter-utils";

// ── Component ───────────────────────────────────────────────────────────────

export function UnixTimestampConverter() {
  const [inputValue, setInputValue] = useState("");
  const [selectedTimezone, setSelectedTimezone] = useState("UTC");
  const [unit, setUnit] = useState<TimestampUnit>("seconds");
  const { copied: currentCopied, copy: currentCopy } = useCopy();
  const [currentTime, setCurrentTime] = useState(getCurrentTimestamp());
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("00:00:00");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [timestamp1, setTimestamp1] = useState("");
  const [timestamp2, setTimestamp2] = useState("");

  // Update current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTimestamp());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Parse input
  const parsedTimestamp = useMemo(() => {
    if (!inputValue.trim()) return null;
    const parsed = parseTimestampInput(inputValue);
    return parsed;
  }, [inputValue]);

  // Get formats
  const formats = useMemo(() => {
    if (parsedTimestamp === null) return null;
    return getAllFormats(parsedTimestamp, selectedTimezone);
  }, [parsedTimestamp, selectedTimezone]);

  // Get date info
  const dateInfo = useMemo(() => {
    if (parsedTimestamp === null) return null;
    return getDateInfo(parsedTimestamp, selectedTimezone);
  }, [parsedTimestamp, selectedTimezone]);

  // Get relative time
  const relativeTime = useMemo(() => {
    if (parsedTimestamp === null) return null;
    return getRelativeTime(parsedTimestamp);
  }, [parsedTimestamp]);

  // Load current time
  const useCurrentTime = useCallback(() => {
    setInputValue(String(currentTime.seconds));
  }, [currentTime]);

  // Checking if can calculate the time difference
  const canCalculate =
    parseTimestampInput(timestamp1) !== null && parseTimestampInput(timestamp2) !== null;

  // Reset
  const resetAll = () => {
    setInputValue("");
    setDateInput("");
    setTimeInput("00:00:00");
    setSelectedTimezone("UTC");
    setUnit("seconds");
  };

  // Convert from date/time
  const convertFromDateTime = useCallback(() => {
    if (!dateInput) return;

    try {
      const dateStr = dateInput;
      const timeStr = timeInput || "00:00:00";

      const [hours, minutes, seconds] = timeStr.split(":").map(Number);
      const dateObj = new Date(dateStr);

      dateObj.setUTCHours(hours || 0, minutes || 0, seconds || 0, 0);

      if (isNaN(dateObj.getTime())) return;

      const timestamp = dateToTimestamp(dateObj);
      setInputValue(String(timestamp));
    } catch {
      // Invalid date
    }
  }, [dateInput, timeInput]);

  // Quick buttons
  const quickButtons = [
    { label: "Now", action: useCurrentTime },
    {
      label: "Start of Today",
      action: () => setInputValue(String(getStartOfDay())),
    },
    {
      label: "End of Today",
      action: () => setInputValue(String(getEndOfDay())),
    },
    {
      label: "Start of Month",
      action: () => setInputValue(String(getStartOfMonth())),
    },
    {
      label: "End of Month",
      action: () => setInputValue(String(getEndOfMonth())),
    },
    {
      label: "Start of Year",
      action: () => setInputValue(String(getStartOfYear())),
    },
    {
      label: "End of Year",
      action: () => setInputValue(String(getEndOfYear())),
    },
    {
      label: "Tomorrow",
      action: () => setInputValue(String(getTomorrowTimestamp())),
    },
    {
      label: "Yesterday",
      action: () => setInputValue(String(getYesterdayTimestamp())),
    },
  ];

  // Download
  const downloadExport = (format: "json" | "csv" | "txt") => {
    if (!formats) return;

    const date = new Date();
    const dateStr = date.toISOString().split("T")[0];
    let content = "";
    let filename = "";
    let mimeType = "text/plain";

    if (format === "json") {
      content = exportToJSON(parsedTimestamp!, formats);
      filename = `timestamp-${dateStr}.json`;
      mimeType = "application/json";
    } else if (format === "csv") {
      content = exportToCSV(parsedTimestamp!, formats);
      filename = `timestamp-${dateStr}.csv`;
      mimeType = "text/csv";
    } else {
      content = exportToText(parsedTimestamp!, formats);
      filename = `timestamp-${dateStr}.txt`;
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const inputType = detectInputType(inputValue);

  return (
    <div>
      {/* Current Time Card */}
      <div className="mb-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-center justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-widest text-zinc-600 uppercase dark:text-zinc-400">
              <Clock className="mr-2 inline h-4 w-4" />
              Current Unix Time
            </p>
            <p className="font-mono text-2xl font-bold text-zinc-900 md:text-3xl dark:text-white">
              {currentTime.seconds}
            </p>
            <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Updates every second</p>
          </div>
          <button
            onClick={() => currentCopy(String(currentTime.seconds))}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-semibold transition-all",
              currentCopied ? "text-green-500" : "text-white/80 hover:text-white",
            )}
          >
            {currentCopied ? (
              <>
                <Check className="mr-2 inline h-4 w-4" />
                Copied
              </>
            ) : (
              <>
                <Copy className="mr-2 inline h-4 w-4" />
                Copy
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Converter */}
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Input Section */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-6">
              <label className="mb-3 block text-xs font-semibold tracking-widest text-zinc-600 uppercase dark:text-zinc-400">
                Enter Timestamp or Date
              </label>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="1748937600 or 2025-06-03 or 2025-06-03T12:30:00Z"
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 font-mono text-zinc-900 placeholder-zinc-500 focus:ring-2 focus:ring-purple-500/40 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-400"
              />
              {inputValue && inputType !== "invalid" && (
                <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400">
                  ✓ Detected:{" "}
                  {inputType === "seconds"
                    ? "Unix Seconds"
                    : inputType === "milliseconds"
                      ? "Unix Milliseconds"
                      : "ISO 8601"}
                </p>
              )}
              {inputValue && inputType === "invalid" && (
                <p className="mt-2 text-xs text-red-600 dark:text-red-400">
                  ✗ Invalid timestamp format
                </p>
              )}
            </div>

            {/* Unit Toggle */}
            <div className="mb-6 flex gap-4">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  checked={unit === "seconds"}
                  onChange={() => setUnit("seconds")}
                  className="h-4 w-4"
                />
                <span className="text-sm text-zinc-900 dark:text-white">Seconds</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  checked={unit === "milliseconds"}
                  onChange={() => setUnit("milliseconds")}
                  className="h-4 w-4"
                />
                <span className="text-sm text-zinc-900 dark:text-white">Milliseconds</span>
              </label>
            </div>

            {/* Timezone Selection */}
            <div className="mb-6">
              <label className="mb-3 block text-xs font-semibold tracking-widest text-zinc-600 uppercase dark:text-zinc-400">
                Timezone
              </label>
              <select
                value={selectedTimezone}
                onChange={(e) => setSelectedTimezone(e.target.value)}
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-zinc-900 focus:ring-2 focus:ring-purple-500/40 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
              >
                {TIMEZONES.map((tz) => (
                  <option key={tz} value={tz}>
                    {tz === "UTC" ? "UTC" : `${tz} (${getTimezoneAbbr(tz)})`}
                  </option>
                ))}
              </select>
            </div>

            {/* Action Buttons */}
            <div className="mb-6 flex gap-2">
              <button
                onClick={useCurrentTime}
                className="flex-1 rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-purple-700"
              >
                <Zap className="mr-2 inline h-4 w-4" />
                Use Current Time
              </button>
              <button
                onClick={resetAll}
                className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
              >
                <RotateCw className="mr-2 inline h-4 w-4" />
                Reset
              </button>
            </div>

            {/* Quick Buttons */}
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="mb-4 flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400"
            >
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", showAdvanced && "rotate-180")}
              />
              Quick Timestamps
            </button>

            {showAdvanced && (
              <div className="mb-6 grid grid-cols-2 gap-2 md:grid-cols-3">
                {quickButtons.map((btn) => (
                  <button
                    key={btn.label}
                    onClick={btn.action}
                    className="rounded-lg bg-zinc-100 px-3 py-2 text-xs font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Date/Time Input */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <label className="mb-4 block text-xs font-semibold tracking-widest text-zinc-600 uppercase dark:text-zinc-400">
            <Calendar className="mr-2 inline h-4 w-4" />
            Human Date to Timestamp
          </label>

          <div className="space-y-3">
            <input
              type="date"
              value={dateInput}
              onChange={(e) => setDateInput(e.target.value)}
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            />

            <input
              type="time"
              step="1"
              value={timeInput}
              onChange={(e) => setTimeInput(e.target.value)}
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            />

            <button
              onClick={convertFromDateTime}
              disabled={!dateInput}
              className="w-full rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Convert
            </button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {formats && (
        <>
          {/* Format Displays */}
          <div className="mb-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-6 text-lg font-bold text-zinc-900 dark:text-white">
              Format Conversions
            </h2>

            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormatBox label="Unix Seconds" value={String(formats.unix.seconds)} />

              <FormatBox label="Unix Milliseconds" value={String(formats.unix.milliseconds)} />

              <FormatBox label="ISO 8601" value={formats.iso} />

              <FormatBox label="RFC 2822" value={formats.rfc2822} />

              <FormatBox label="UTC" value={formats.utc} />

              <FormatBox label="Locale" value={formats.locale} />
            </div>

            {/* Download Buttons */}
            <div className="flex gap-2 border-t border-zinc-200 pt-4 dark:border-zinc-800">
              <button
                onClick={() => downloadExport("json")}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
              >
                <Download className="h-4 w-4" />
                JSON
              </button>
              <button
                onClick={() => downloadExport("csv")}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
              >
                <Download className="h-4 w-4" />
                CSV
              </button>
              <button
                onClick={() => downloadExport("txt")}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
              >
                <Download className="h-4 w-4" />
                TXT
              </button>
            </div>
          </div>

          {/* Date Information */}
          {dateInfo && (
            <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Date Info */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="mb-4 font-bold text-zinc-900 dark:text-white">Date Information</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-600 dark:text-zinc-400">Full Date</span>
                    <span className="font-mono font-semibold text-zinc-900 dark:text-white">
                      {dateInfo.dayOfWeek}, {dateInfo.month}/{dateInfo.date}/{dateInfo.year}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-600 dark:text-zinc-400">Time</span>
                    <span className="font-mono font-semibold text-zinc-900 dark:text-white">
                      {String(dateInfo.hours).padStart(2, "0")}:
                      {String(dateInfo.minutes).padStart(2, "0")}:
                      {String(dateInfo.seconds).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-zinc-200 pt-2 dark:border-zinc-700">
                    <span className="text-zinc-600 dark:text-zinc-400">Week Number</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">
                      {dateInfo.weekNumber}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-600 dark:text-zinc-400">Quarter</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">
                      Q{dateInfo.quarter}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-600 dark:text-zinc-400">Day of Year</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">
                      {dateInfo.dayOfYear}
                    </span>
                  </div>
                </div>
              </div>

              {/* Flags */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="mb-4 font-bold text-zinc-900 dark:text-white">Flags</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "flex h-6 w-6 items-center justify-center rounded text-sm font-bold text-white",
                        dateInfo.isLeapYear ? "bg-emerald-600" : "bg-red-600",
                      )}
                    >
                      {dateInfo.isLeapYear ? "✓" : "✗"}
                    </span>
                    <span className="text-sm text-zinc-900 dark:text-white">
                      Leap Year: {dateInfo.isLeapYear ? "Yes" : "No"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "flex h-6 w-6 items-center justify-center rounded text-sm font-bold text-white",
                        dateInfo.isWeekend ? "bg-amber-600" : "bg-blue-600",
                      )}
                    >
                      {dateInfo.isWeekend ? "✓" : "✗"}
                    </span>
                    <span className="text-sm text-zinc-900 dark:text-white">
                      Weekend: {dateInfo.isWeekend ? "Yes" : "No"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Relative Time */}
              {relativeTime && (
                <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                  <h3 className="mb-4 font-bold text-zinc-900 dark:text-white">Relative Time</h3>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {relativeTime.text}
                  </div>
                  <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
                    Compared to current time
                  </p>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* Difference Calculator */}
      <div className="mb-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="mb-6 text-lg font-bold text-zinc-900 dark:text-white">
          Time Difference Calculator
        </h2>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Timestamp 1"
            value={timestamp1}
            onChange={(e) => setTimestamp1(e.target.value)}
            className="rounded-lg border border-zinc-300 bg-white px-4 py-2 font-mono text-zinc-900 placeholder-zinc-500 focus:ring-2 focus:ring-purple-500/40 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-400"
          />

          <input
            type="text"
            placeholder="Timestamp 2"
            value={timestamp2}
            onChange={(e) => setTimestamp2(e.target.value)}
            className="rounded-lg border border-zinc-300 bg-white px-4 py-2 font-mono text-zinc-900 placeholder-zinc-500 focus:ring-2 focus:ring-purple-500/40 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-400"
          />
        </div>

        <button
          disabled={!canCalculate}
          onClick={() => {
            const t1 = parseTimestampInput(timestamp1)!;
            const t2 = parseTimestampInput(timestamp2)!;

            const diff = calculateTimeDifference(t1, t2);

            const resultDiv = document.getElementById("diff-result");
            if (resultDiv) {
              resultDiv.innerHTML = `
                <div class="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                ${diff.text}
                </div>
                <div class="grid grid-cols-2 gap-4 text-sm">
                <div><span class="text-zinc-600 dark:text-zinc-400">Days:</span> <span class="font-semibold text-zinc-900 dark:text-white">${diff.days}</span></div>
                <div><span class="text-zinc-600 dark:text-zinc-400">Hours:</span> <span class="font-semibold text-zinc-900 dark:text-white">${diff.hours}</span></div>
                <div><span class="text-zinc-600 dark:text-zinc-400">Minutes:</span> <span class="font-semibold text-zinc-900 dark:text-white">${diff.minutes}</span></div>
                <div><span class="text-zinc-600 dark:text-zinc-400">Seconds:</span> <span class="font-semibold text-zinc-900 dark:text-white">${diff.seconds}</span></div>
                </div>
            `;
            }
          }}
          className="w-full rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-purple-700 disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:text-zinc-500 disabled:hover:bg-zinc-300 dark:disabled:bg-zinc-800 dark:disabled:hover:bg-zinc-800"
        >
          Calculate Difference
        </button>
        <div id="diff-result" className="mt-6" />
      </div>
    </div>
  );
}

// ── Helper Components ──────────────────────────────────────────────────────

function FormatBox({ label, value }: { label: string; value: string }) {
  const { copied, copy } = useCopy();
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-800/50">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">{label}</label>
        <button
          onClick={() => copy(value)}
          className="flex items-center gap-1 text-xs font-semibold text-purple-600 transition-colors hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" /> Copy
            </>
          )}
        </button>
      </div>
      <p className="font-mono text-sm break-all text-zinc-900 dark:text-zinc-100">{value}</p>
    </div>
  );
}
