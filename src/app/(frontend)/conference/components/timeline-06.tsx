import { cn } from '@/lib/utils';

const stepsDefault = [
  {
    title: 'Research',
    description: 'Gather information and analyze requirements to understand the problem and define objectives.',
  },
  {
    title: 'Planning',
    description: 'Create a roadmap, define the scope, and outline the necessary steps to achieve the goal.',
  },
  {
    title: 'Design',
    description: 'Develop wireframes, mockups, and prototypes to visualize the structure and user experience.',
  },
  {
    title: 'Development',
    description: 'Write code, integrate features, and build the core functionality of the application.',
  },
  {
    title: 'Testing',
    description: 'Perform quality assurance, fix bugs, and optimize performance before release.',
  },
  {
    title: 'Deployment',
    description: 'Launch the project in a live environment and ensure smooth deployment.',
  },
  {
    title: 'Maintenance',
    description: 'Monitor performance, update features, and provide ongoing support and improvements.',
  },
];

type ConfTimelineProps = {
  title: string;
  steps: {
    title: string;
    description: string;
  }[];
};
export default function Timeline({ confTimelineProps }: { confTimelineProps: ConfTimelineProps }) {
  const { title = 'Заглавие', steps = stepsDefault } = confTimelineProps;
  return (
    <div className="mx-auto max-w-screen-md px-6 py-12 md:py-20">
      <div className="mb-12">
        <h3 className="text-h3-size text-center">{title}</h3>
      </div>
      <div className="relative ml-6">
        {/* Timeline line */}
        <div className="absolute inset-y-0 left-0 border-l-2" />

        {steps.map(({ title, description }, index) => (
          <div key={index} className="relative pb-10 pl-10 last:pb-0">
            {/* Timeline Icon */}
            <div className={cn('border-muted-foreground bg-accent ring-background absolute left-px flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 ring-8')}>
              <span className="text-lg font-semibold">{index + 1}</span>
            </div>

            {/* Content */}
            <div className="space-y-2 pt-1">
              <h3 id="програма" className="scroll-m-40 text-xl font-semibold">
                {title}
              </h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
