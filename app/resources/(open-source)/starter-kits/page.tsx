import StarterKitsFilter from "@/components/resources/starter-kits/starter-kits-filter";
import StarterKitsGrid from "@/components/resources/starter-kits/starter-kits-grid";
import { starterKits } from "@/constants/resources/starter-kits";

export default function StarterKitsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Starter Kits</h1>
        <p className="text-muted-foreground mt-2">
          Complete starter kits with authentication, database and more
        </p>
      </div>

      <StarterKitsFilter />
      <StarterKitsGrid kits={starterKits} />
    </div>
  );
}