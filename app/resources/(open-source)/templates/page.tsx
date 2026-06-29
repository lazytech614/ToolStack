import { TemplatesFilter } from "@/components/resources/templates/templates-filter";
import { TemplatesGrid } from "@/components/resources/templates/templates-grid";
import { RESOURCES_TEMPLATES } from "@/constants/resources/templates";

export default function TemplatesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Templates</h1>
        <p className="text-muted-foreground mt-2">
          Production-ready project templates for popular frameworks
        </p>
      </div>

      <TemplatesFilter />
      <TemplatesGrid templates={RESOURCES_TEMPLATES} />
    </div>
  );
}