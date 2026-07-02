"use client";

import { useState, useMemo } from "react";
import { Copy, Check, RotateCw, Eye, Palette, ChevronDown } from "lucide-react";

import { ColorBlindnessType } from "@/types/dev-tools/color-converter";
import { useCopy } from "@/hooks/useCopy";
import { cn } from "@/lib/utils";
import {
  hexToRGB,
  rgbToHex,
  getColorInfo,
  getComplementary,
  getAnalogous,
  getTriadic,
  generatePalette,
  calculateContrastRatio,
  checkWCAGCompliance,
  getColorBlindnessSimulations,
} from "@/lib/dev-utils/color-converter-utils";

// ── types ──────────────────────────────────────────────────────────────────

const COLOR_BLINDNESS_LABELS: Record<ColorBlindnessType, string> = {
  normal: "Normal",
  protanopia: "Protanopia",
  deuteranopia: "Deuteranopia",
  tritanopia: "Tritanopia",
};

const EXAMPLE_COLORS = ["#9333ea", "#06b6d4", "#ec4899", "#f59e0b", "#10b981"];

// ── component ───────────────────────────────────────────────────────────────

export function ColorConverter() {
  const [color, setColor] = useState("#9333ea");
  const [opacity, setOpacity] = useState(100);
  const { copied: copiedAll, copy: copyAll } = useCopy();
  const [blindnessType, setBlindnessType] = useState<ColorBlindnessType>("normal");
  const [showPalette, setShowPalette] = useState(false);
  const [showRelatedColors, setShowRelatedColors] = useState(false);
  const [showBlindness, setShowBlindness] = useState(false);
  const [showContrast, setShowContrast] = useState(false);

  // Color info with opacity
  const colorInfo = useMemo(() => {
    const rgb = hexToRGB(color);
    if (!rgb) return null;

    const withAlpha = { ...rgb, a: opacity / 100 };
    const info = getColorInfo(color);
    if (!info) return null;

    return {
      ...info,
      opacity,
      rgbaString: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${(opacity / 100).toFixed(2)})`,
      hexAlpha: rgbToHex(withAlpha),
    };
  }, [color, opacity]);

  // Display color (with blindness simulation)
  const displayColor = useMemo(() => {
    if (blindnessType === "normal") {
      return color;
    }
    const sims = getColorBlindnessSimulations(color);
    return sims[blindnessType] || color;
  }, [color, blindnessType]);

  // Related colors
  const related = useMemo(() => {
    return {
      complementary: getComplementary(color),
      analogous: getAnalogous(color) || [],
      triadic: getTriadic(color) || [],
    };
  }, [color]);

  // Palette
  const palette = useMemo(() => {
    return generatePalette(color);
  }, [color]);

  // Contrast ratios
  const contrastRatios = useMemo(() => {
    if (!colorInfo) return null;
    const white = hexToRGB("#ffffff")!;
    const black = hexToRGB("#000000")!;
    return {
      white: calculateContrastRatio(colorInfo.rgb, white),
      black: calculateContrastRatio(colorInfo.rgb, black),
    };
  }, [colorInfo]);

  const loadExample = () => {
    const example = EXAMPLE_COLORS[Math.floor(Math.random() * EXAMPLE_COLORS.length)];
    setColor(example);
  };

  const resetAll = () => {
    setColor("#9333ea");
    setOpacity(100);
    setBlindnessType("normal");
  };

  const copyAllFormats = () => {
    if (!colorInfo) return;
    const text = `HEX: ${colorInfo.hex}\nRGB: ${colorInfo.rgbString}\nHSL: ${colorInfo.hslString}\nHSV: ${colorInfo.hsvString}`;
    copyAll(text);
  };

  if (!colorInfo) {
    return <div className="p-4 text-red-600">Invalid color</div>;
  }

  return (
    <div className="w-full">
      {/* Main Controls */}
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left: Color Picker & Input */}
        <div className="lg:col-span-1">
          <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            {/* Color Picker */}
            <div className="mb-6">
              <label className="mb-3 block text-xs font-semibold tracking-widest text-zinc-600 uppercase dark:text-zinc-400">
                Pick Color
              </label>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="h-40 w-full cursor-pointer rounded-xl border-2 border-zinc-300 transition-colors hover:border-purple-400 dark:border-zinc-700 dark:hover:border-purple-500"
              />
            </div>

            {/* Opacity Control */}
            <div className="mb-6 border-b border-zinc-200 pb-6 dark:border-zinc-800">
              <div className="mb-3 flex items-center justify-between">
                <label className="text-xs font-semibold tracking-widest text-zinc-600 uppercase dark:text-zinc-400">
                  Opacity
                </label>
                <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                  {opacity}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={opacity}
                onChange={(e) => setOpacity(parseInt(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-zinc-300 accent-purple-600 dark:bg-zinc-700"
              />
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={loadExample}
                className="w-full rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-700"
              >
                Sample
              </button>
              <button
                onClick={resetAll}
                className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
              >
                <RotateCw className="mr-2 inline h-4 w-4" />
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Center: Color Formats */}
        <div className="lg:col-span-1">
          <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-6 flex items-center justify-between">
              <label className="text-xs font-semibold tracking-widest text-zinc-600 uppercase dark:text-zinc-400">
                Format Conversion
              </label>
              <button
                onClick={copyAllFormats}
                className="rounded-lg bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 transition-colors hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-900/50"
              >
                {copiedAll ? "✓ Copied" : "Copy All"}
              </button>
            </div>

            <div className="space-y-3">
              <ColorFormatInput label="HEX" value={colorInfo.hex} />

              <ColorFormatInput label="RGB" value={colorInfo.rgbString} />

              <ColorFormatInput label="HSL" value={colorInfo.hslString} />

              <ColorFormatInput label="HSV" value={colorInfo.hsvString} />

              <ColorFormatInput label="RGBA" value={colorInfo.rgbaString} />

              <ColorFormatInput label="HEX + Alpha" value={colorInfo.hexAlpha} />
            </div>
          </div>
        </div>

        {/* Right: Color Preview */}
        <div className="lg:col-span-1">
          <div className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <label className="mb-4 text-xs font-semibold tracking-widest text-zinc-600 uppercase dark:text-zinc-400">
              Preview
            </label>

            {/* Main Preview */}
            <div
              className="mb-4 h-32 w-full rounded-xl border-2 border-zinc-200 shadow-lg transition-all dark:border-zinc-800"
              style={{
                backgroundColor: displayColor,
                opacity: opacity / 100,
              }}
            />

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <div className="rounded-lg bg-zinc-100 p-2 dark:bg-zinc-800">
                <p className="mb-1 text-zinc-600 dark:text-zinc-400">Brightness</p>
                <p className="font-bold text-zinc-900 dark:text-white">{colorInfo.brightness}%</p>
              </div>
              <div className="rounded-lg bg-zinc-100 p-2 dark:bg-zinc-800">
                <p className="mb-1 text-zinc-600 dark:text-zinc-400">Tone</p>
                <p className="font-bold text-zinc-900 dark:text-white">
                  {colorInfo.isDark ? "Dark" : "Light"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Color Palettes Section */}
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Related Colors */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <button
            onClick={() => setShowRelatedColors(!showRelatedColors)}
            className="mb-4 flex w-full items-center justify-between transition-opacity hover:opacity-75"
          >
            <h2 className="flex items-center gap-2 text-sm font-bold tracking-widest text-zinc-900 uppercase dark:text-white">
              <Palette className="h-4 w-4" />
              Related Colors
            </h2>
            <ChevronDown
              className={cn("h-4 w-4 transition-transform", showRelatedColors && "rotate-180")}
            />
          </button>

          {showRelatedColors && (
            <div className="space-y-4">
              {/* Complementary */}
              {related.complementary && (
                <div>
                  <p className="mb-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                    Complementary
                  </p>
                  <div className="flex gap-2">
                    <ColorSwatchClickable color={color} onClick={() => setColor(color)} />
                    <ColorSwatchClickable
                      color={related.complementary}
                      onClick={() => setColor(related.complementary as string)}
                    />
                  </div>
                </div>
              )}

              {/* Analogous */}
              {related.analogous.length > 0 && (
                <div>
                  <p className="mb-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                    Analogous
                  </p>
                  <div className="flex gap-2">
                    {related.analogous.map((c, i) => (
                      <ColorSwatchClickable key={i} color={c} onClick={() => setColor(c)} />
                    ))}
                  </div>
                </div>
              )}

              {/* Triadic */}
              {related.triadic.length > 0 && (
                <div>
                  <p className="mb-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                    Triadic
                  </p>
                  <div className="flex gap-2">
                    {related.triadic.map((c, i) => (
                      <ColorSwatchClickable key={i} color={c} onClick={() => setColor(c)} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Color Palette */}
        {palette && (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <button
              onClick={() => setShowPalette(!showPalette)}
              className="mb-4 flex w-full items-center justify-between transition-opacity hover:opacity-75"
            >
              <h2 className="flex items-center gap-2 text-sm font-bold tracking-widest text-zinc-900 uppercase dark:text-white">
                <Palette className="h-4 w-4" />
                Color Palette
              </h2>
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", showPalette && "rotate-180")}
              />
            </button>

            {showPalette && (
              <div className="grid grid-cols-5 gap-2">
                {Object.entries(palette).map(([level, hex]) => (
                  <div key={level} className="flex flex-col items-center gap-2">
                    <div
                      className="h-16 w-full cursor-pointer rounded-lg border-2 border-zinc-200 transition-shadow hover:shadow-lg dark:border-zinc-700"
                      style={{ backgroundColor: hex }}
                      onClick={() => setColor(hex)}
                      title={hex}
                    />
                    <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                      {level}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Color Blindness & Contrast */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Color Blindness */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <button
            onClick={() => setShowBlindness(!showBlindness)}
            className="mb-4 flex w-full items-center justify-between transition-opacity hover:opacity-75"
          >
            <h2 className="flex items-center gap-2 text-sm font-bold tracking-widest text-zinc-900 uppercase dark:text-white">
              <Eye className="h-4 w-4" />
              Accessibility
            </h2>
            <ChevronDown
              className={cn("h-4 w-4 transition-transform", showBlindness && "rotate-180")}
            />
          </button>

          {showBlindness && (
            <div className="grid grid-cols-2 gap-3">
              {(Object.keys(COLOR_BLINDNESS_LABELS) as ColorBlindnessType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setBlindnessType(type)}
                  className={cn(
                    "rounded-lg border-2 p-3 text-center transition-all",
                    blindnessType === type
                      ? "border-purple-600 bg-purple-50 dark:bg-purple-900/20"
                      : "border-zinc-200 hover:border-zinc-300 dark:border-zinc-700 dark:hover:border-zinc-600",
                  )}
                >
                  <div
                    className="mb-2 h-12 w-full rounded"
                    style={{
                      backgroundColor: getColorBlindnessSimulations(color)[type] as string,
                    }}
                  />
                  <p className="text-xs font-semibold text-zinc-900 dark:text-white">
                    {COLOR_BLINDNESS_LABELS[type]}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Contrast Checker */}
        {contrastRatios && (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <button
              onClick={() => setShowContrast(!showContrast)}
              className="mb-4 flex w-full items-center justify-between transition-opacity hover:opacity-75"
            >
              <h2 className="flex items-center gap-2 text-sm font-bold tracking-widest text-zinc-900 uppercase dark:text-white">
                <Eye className="h-4 w-4" />
                WCAG Contrast
              </h2>
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", showContrast && "rotate-180")}
              />
            </button>

            {showContrast && (
              <div className="space-y-3">
                <ContrastRow
                  label="White Text"
                  ratio={contrastRatios.white}
                  color={displayColor}
                  textColor="white"
                />
                <ContrastRow
                  label="Black Text"
                  ratio={contrastRatios.black}
                  color={displayColor}
                  textColor="black"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Helper Components ──────────────────────────────────────────────────────

function ColorFormatInput({ label, value }: { label: string; value: string }) {
  const { copied, copy } = useCopy();
  return (
    <div className="flex flex-col gap-1 rounded-lg border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-700 dark:bg-zinc-800/50">
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
      <p className="font-mono text-xs break-all text-zinc-900 dark:text-zinc-100">{value}</p>
    </div>
  );
}

interface ColorSwatchClickableProps {
  color: string;
  onClick: () => void;
}

function ColorSwatchClickable({ color, onClick }: ColorSwatchClickableProps) {
  return (
    <div
      className="h-12 flex-1 cursor-pointer rounded-lg border-2 border-zinc-200 transition-all hover:border-purple-400 hover:shadow-lg dark:border-zinc-700 dark:hover:border-purple-500"
      style={{ backgroundColor: color }}
      onClick={onClick}
      title={`Click to select: ${color}`}
    />
  );
}

interface ContrastRowProps {
  label: string;
  ratio: number;
  color: string;
  textColor: string;
}

function ContrastRow({ label, ratio, color, textColor }: ContrastRowProps) {
  const white = hexToRGB("#ffffff")!;
  const black = hexToRGB("#000000")!;
  const colorRgb = hexToRGB(color)!;

  const isWhiteText = textColor === "white";
  const compliance = checkWCAGCompliance(
    isWhiteText ? calculateContrastRatio(colorRgb, white) : calculateContrastRatio(colorRgb, black),
  );

  return (
    <div className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-700 dark:bg-zinc-800/50">
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded text-sm font-bold"
        style={{
          backgroundColor: color,
          color: textColor,
        }}
      >
        Aa
      </div>
      <div className="flex-1">
        <p className="text-xs font-semibold text-zinc-900 dark:text-white">{label}</p>
        <p className="text-xs text-zinc-600 dark:text-zinc-400">{ratio.toFixed(2)}:1</p>
      </div>
      <div className="text-right">
        {compliance.AAA && (
          <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">✓ AAA</p>
        )}
        {compliance.AA && !compliance.AAA && (
          <p className="text-xs font-bold text-amber-600 dark:text-amber-400">✓ AA</p>
        )}
        {!compliance.AA && (
          <p className="text-xs font-bold text-red-600 dark:text-red-400">✗ Fail</p>
        )}
      </div>
    </div>
  );
}
