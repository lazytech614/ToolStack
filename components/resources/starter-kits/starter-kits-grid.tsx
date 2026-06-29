import { StarterKit } from "@/constants/resources/starter-kits";
import StarterKitCard from "./starter-kit-card";

export default function StarterKitsGrid({ kits }: { kits: StarterKit[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {kits.map((kit) => (
        <StarterKitCard key={kit.id} kit={kit} />
      ))}
    </div>
  );
}