import { CLIToolsFilter } from "@/components/resources/cli-tools/cli-tool-filter";
import { CLIToolsGrid } from "@/components/resources/cli-tools/cli-tools-grid";
import { cliTools } from "@/constants/resources/cli-tools";

export const metadata = {
  title: 'CLI Tools | Tool Stack',
  description: 'Powerful command-line utilities used by modern developers',
};

export default function CLIToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">CLI Tools</h1>
        <p className="text-muted-foreground mt-2">
          Powerful command-line utilities used by modern developers
        </p>
      </div>

      <CLIToolsFilter />
      <CLIToolsGrid tools={cliTools} />
    </div>
  );
}