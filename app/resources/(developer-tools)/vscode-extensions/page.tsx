import VSCodeFilter from "@/components/resources/vs-code-extensions/vs-code-filter";
import { VSCodeGrid } from "@/components/resources/vs-code-extensions/vs-code-grid";
import { vscodeExtensions } from "@/constants/resources/vs-code-extensions";

export const metadata = {
  title: 'VS Code Extensions',
  description: 'Essential extensions to boost your development workflow',
};

export default function VSCodeExtensionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">VS Code Extensions</h1>
        <p className="text-muted-foreground mt-2">
          Essential extensions to boost your development workflow
        </p>
      </div>

      <VSCodeFilter />
      <VSCodeGrid extensions={vscodeExtensions} />
    </div>
  );
}