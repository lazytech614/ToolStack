// Theme Color Reference for GitHub Helper

export const THEME_COLORS = {
  // Primary Backgrounds
  light: {
    bg: {
      primary: "bg-white",
      secondary: "bg-zinc-50",
      tertiary: "bg-zinc-100",
      accent: "bg-purple-50",
    },
    text: {
      primary: "text-zinc-900",
      secondary: "text-zinc-600",
      tertiary: "text-zinc-500",
    },
    border: {
      primary: "border-zinc-200",
      secondary: "border-zinc-300",
    },
  },

  dark: {
    bg: {
      primary: "bg-black",
      secondary: "bg-zinc-900",
      tertiary: "bg-zinc-950",
      accent: "bg-purple-500/10",
    },
    text: {
      primary: "text-white",
      secondary: "text-zinc-400",
      tertiary: "text-zinc-500",
    },
    border: {
      primary: "border-zinc-800",
      secondary: "border-zinc-700",
    },
  },

  // Gradient
  gradient: {
    light: "from-purple-600 via-purple-500 to-violet-600",
    dark: "from-purple-400 to-violet-600",
  },

  // Icon Colors (FeatureCard)
  icons: {
    yellow: {
      light: "bg-yellow-100 text-yellow-600",
      dark: "dark:bg-yellow-500/10 dark:text-yellow-400",
    },
    emerald: {
      light: "bg-emerald-100 text-emerald-600",
      dark: "dark:bg-emerald-500/10 dark:text-emerald-400",
    },
    cyan: {
      light: "bg-cyan-100 text-cyan-600",
      dark: "dark:bg-cyan-500/10 dark:text-cyan-400",
    },
    purple: {
      light: "bg-purple-100 text-purple-600",
      dark: "dark:bg-purple-500/10 dark:text-purple-400",
    },
  },

  // Badge Colors (ToolCard)
  badges: {
    green: {
      light: "bg-emerald-100 text-emerald-700",
      dark: "dark:bg-emerald-500/20 dark:text-emerald-400",
    },
    blue: {
      light: "bg-blue-100 text-blue-700",
      dark: "dark:bg-blue-500/20 dark:text-blue-400",
    },
    purple: {
      light: "bg-purple-100 text-purple-700",
      dark: "dark:bg-purple-500/20 dark:text-purple-400",
    },
    orange: {
      light: "bg-orange-100 text-orange-700",
      dark: "dark:bg-orange-500/20 dark:text-orange-400",
    },
  },

  // Shadows
  shadows: {
    light: "shadow-lg",
    dark: "dark:shadow-lg dark:shadow-purple-500/10",
  },

  // Hover States
  hover: {
    light: {
      text: "hover:text-zinc-900",
      border: "hover:border-purple-300",
      bg: "hover:bg-zinc-100",
    },
    dark: {
      text: "dark:hover:text-white",
      border: "dark:hover:border-purple-500/30",
      bg: "dark:hover:bg-zinc-900",
    },
  },
};

/**
 * THEME IMPLEMENTATION PATTERNS
 *
 * Pattern 1: Simple Light/Dark Split
 * className="text-zinc-900 dark:text-white"
 *
 * Pattern 2: Gradient Backgrounds
 * className="bg-gradient-to-r from-purple-600 dark:from-purple-400 to-violet-600"
 *
 * Pattern 3: Nested Light/Dark
 * className="bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800"
 *
 * Pattern 4: Hover States with Theme
 * className="hover:border-purple-300 dark:hover:border-purple-500/30"
 *
 * Pattern 5: Opacity Variations
 * className="bg-purple-500/10 dark:bg-purple-500/20"
 */

/**
 * QUICK REFERENCE: When to use each color
 *
 * Backgrounds:
 * - Primary container: bg-white dark:bg-black
 * - Secondary container: bg-zinc-50 dark:bg-zinc-900
 * - Icon backgrounds: [color]-100 dark:[color]-500/10
 *
 * Text:
 * - Headings: text-zinc-900 dark:text-white
 * - Body: text-zinc-600 dark:text-zinc-400
 * - Small text: text-zinc-500 dark:text-zinc-500
 *
 * Borders:
 * - Primary: border-zinc-200 dark:border-zinc-800
 * - Secondary: border-zinc-300 dark:border-zinc-700
 *
 * Accents:
 * - Use purple-600 (light) and purple-400 (dark) for consistency
 */
