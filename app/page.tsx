import DiffInput from "@/components/diff-input";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            Git Commit Generator
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Generate clean and meaningful Git commit
            messages from your diff instantly.
          </p>
        </div>

        <DiffInput />
      </div>
    </main>
  );
}