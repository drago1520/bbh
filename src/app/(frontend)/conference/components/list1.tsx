import { DynamicIcon } from 'lucide-react/dynamic';
import { ConfTimelineProps } from '@/payload-types';

// NOTE: Removed unused demo data + table imports. Component now focuses purely on provided props.

const List1 = ({ confTimelineProps }: { confTimelineProps: ConfTimelineProps }) => {
  const headingId = `conf-timeline-${confTimelineProps?.id || 'heading'}`;
  return (
    <section className="py-16" aria-labelledby={headingId}>
      <div className="container px-0">
        <header className="mb-12">
          <h3 id={headingId} className="text-h3-size text-center">
            {confTimelineProps.title}
          </h3>
        </header>
        <ol className="list-none p-0">
          {confTimelineProps.steps.map(({ title, description, id, icon }, index) => (
            <li key={id} className="flex items-start gap-6 border-b py-8" aria-posinset={index + 1} aria-setsize={confTimelineProps.steps.length}>
              {icon && (
                <span className="bg-card inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border" aria-hidden="true">
                  <DynamicIcon name={icon as any} />
                </span>
              )}
              <div className="flex flex-col gap-1 xl:flex-row xl:gap-6">
                <h4 className="leading-snug font-semibold text-nowrap">{title}</h4>
                {description && <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export { List1 };
