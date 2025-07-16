import { AgendaProps } from '@/payload-types';

export default function Agenda({ agendaProps }: { agendaProps: AgendaProps }) {
  return (
    <section className="py-16">
      <div className="container">
        {/* Values Section */}
        <div>
          <div className="mb-8">
            <h3 id="теми" className="text-h3-size text-center">
              {agendaProps.title}
            </h3>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {agendaProps.items.map((value, index) => (
              <div key={index} className="border-l-primary bg-card rounded-lg border border-l-4 p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
