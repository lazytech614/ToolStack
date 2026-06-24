interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor?: "yellow" | "emerald" | "cyan" | "purple" | "blue" | "pink";
}

const colorStyles = {
  yellow: {
    bg: "bg-yellow-100 dark:bg-yellow-500/10",
    text: "text-yellow-600 dark:text-yellow-400",
    border: "border-yellow-200 dark:border-yellow-500/20 hover:border-yellow-300 dark:hover:border-yellow-500/40",
  },
  emerald: {
    bg: "bg-emerald-100 dark:bg-emerald-500/10",
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-200 dark:border-emerald-500/20 hover:border-emerald-300 dark:hover:border-emerald-500/40",
  },
  cyan: {
    bg: "bg-cyan-100 dark:bg-cyan-500/10",
    text: "text-cyan-600 dark:text-cyan-400",
    border: "border-cyan-200 dark:border-cyan-500/20 hover:border-cyan-300 dark:hover:border-cyan-500/40",
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-500/10",
    text: "text-purple-600 dark:text-purple-400",
    border: "border-purple-200 dark:border-purple-500/20 hover:border-purple-300 dark:hover:border-purple-500/40",
  },
  blue: {
    bg: "bg-blue-100 dark:bg-blue-500/10",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-500/20 hover:border-blue-300 dark:hover:border-blue-500/40",
  },
  pink: {
    bg: "bg-pink-100 dark:bg-pink-500/10",
    text: "text-pink-600 dark:text-pink-400",
    border: "border-pink-200 dark:border-pink-500/20 hover:border-pink-300 dark:hover:border-pink-500/40",
  },
};

export function FeatureCard({
  title,
  description,
  icon,
  iconColor = "purple",
}: FeatureCardProps) {
  const styles = colorStyles[iconColor];

  console.log(styles.text)

  return (
    <div className={`rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 transition-all duration-200 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-purple-500/10 ${styles.border}`}>
      <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${styles.bg} ${styles.text}`}>
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </div>
  );
}