import { BarChart3, Briefcase, Cloud, Shield } from 'lucide-react';
import { DynamicIcon } from 'lucide-react/dynamic';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ConfTimelineProps } from '@/payload-types';

const data = [
  {
    icon: <Shield strokeWidth={2} />,
    category: 'Security',
    description: 'Enterprise security solution providing advanced threat protection and monitoring',
    year: 2024,
    offer: 'Free',
    segment: 'Business',
  },
  {
    icon: <Cloud strokeWidth={2} />,
    category: 'Technology',
    description: 'Cloud-based platform offering scalable solutions for modern businesses',
    year: 2023,
    offer: 'Professional',
    segment: 'Business',
  },
  {
    icon: <Briefcase strokeWidth={2} />,
    category: 'Services',
    description: 'Comprehensive business management suite for growing organizations',
    year: 2022,
    offer: 'Enterprise',
    segment: 'Enterprise',
  },
  {
    icon: <BarChart3 strokeWidth={2} />,
    category: 'Analytics',
    description: 'Real-time data analytics platform with customizable dashboards and reporting',
    year: 2024,
    offer: 'Professional',
    segment: 'Business',
  },
  {
    icon: <Shield strokeWidth={2} />,
    category: 'Security',
    description: 'Advanced endpoint protection system with AI-powered threat detection',
    year: 2023,
    offer: 'Professional',
    segment: 'Enterprise',
  },
  {
    icon: <Cloud strokeWidth={2} />,
    category: 'Technology',
    description: 'Serverless computing platform with automatic scaling capabilities',
    year: 2024,
    offer: 'Enterprise',
    segment: 'Business',
  },
  {
    icon: <Briefcase strokeWidth={2} />,
    category: 'Services',
    description: 'Professional consulting services for digital transformation initiatives',
    year: 2023,
    offer: 'Free',
    segment: 'Business',
  },
];

const List1 = ({ confTimelineProps }: { confTimelineProps: ConfTimelineProps }) => {
  return (
    <section className="py-16">
      <div className="container px-0">
        <Table>
          <TableBody>
            {confTimelineProps.steps.map(({ title, description, id, icon }) => (
              <TableRow key={id}>
                {icon && (
                  <TableCell className="w-0 px-4">
                    <DynamicIcon name={icon as any} />
                  </TableCell>
                )}
                <TableCell className="hidden w-0 md:table-cell">{title}</TableCell>
                <TableCell className="max-w-0 py-4 pl-0 align-top whitespace-normal md:pl-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-baseline justify-start gap-1 md:hidden">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium">{title}</span>
                        {/* <span className="text-sm text-muted-foreground">
                          - {item.segment}
                        </span> */}
                      </div>
                    </div>
                    <p className="text-muted-foreground md:text-primary text-sm">{description}</p>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export { List1 };
