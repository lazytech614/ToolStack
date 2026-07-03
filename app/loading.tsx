import Link from "next/link";
import { DiCodeigniter } from "react-icons/di";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 dark:bg-black">
      <div className="flex w-full max-w-sm flex-col items-center">
        <Link href="/" className="flex items-center">
          <DiCodeigniter className="h-5 w-5" />
          <h1 className="text-2xl font-extrabold text-zinc-900 dark:text-white">
            Tool
            <span className="bg-linear-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-violet-500">
              Stack
            </span>
          </h1>
        </Link>

        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Just a moment…</p>

        <div className="mt-8 h-1.5 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-900">
          <div className="h-full w-1/3 animate-[loading_1.2s_ease-in-out_infinite] rounded-full bg-linear-to-r from-purple-600 to-violet-600 dark:from-purple-400 dark:to-violet-600" />
        </div>
      </div>
    </main>
  );
}
