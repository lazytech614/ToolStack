import { BoilerplatesGrid } from "@/components/resources/boilerplates/boiler-plate-grid";
import { BoilerplatesFilter } from "@/components/resources/boilerplates/boiler-plates-filter";
import { boilerplates } from "@/constants/resources/boilerplates";

export default function BoilerplatesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Boilerplates</h1>
        <p className="text-muted-foreground mt-2">
          Kickstart projects with scalable boilerplate codebases
        </p>
      </div>

      <BoilerplatesFilter />
      <BoilerplatesGrid boilerplates={boilerplates} />
    </div>
  );
}