import { Template } from '@/constants/resources/templates';
import { TemplateCard } from './template-card';

export function TemplatesGrid({ templates }: { templates: Template[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template) => (
        <TemplateCard key={template.id} template={template} />
      ))}
    </div>
  );
}