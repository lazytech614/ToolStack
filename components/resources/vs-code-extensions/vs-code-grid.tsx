import { VSCodeExtension } from "@/constants/resources/vs-code-extensions";
import VSCodeCard from "./vs-code-card";

export function VSCodeGrid({
  extensions,
}: {
  extensions: VSCodeExtension[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {extensions.map((ext) => (
        <VSCodeCard key={ext.id} extension={ext} />
      ))}
    </div>
  );
}