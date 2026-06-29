import { Boilerplate } from '@/constants/resources/boilerplates';
import { BoilerplateCard } from './boiler-plate-card';

export function BoilerplatesGrid({
  boilerplates,
}: {
  boilerplates: Boilerplate[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {boilerplates.map((boilerplate) => (
        <BoilerplateCard key={boilerplate.id} boilerplate={boilerplate} />
      ))}
    </div>
  );
}