export default function Agenda() {
  const values = [
    {
      title: 'Purpose-Driven',
      description: 'We believe in creating work that serves a meaningful purpose and delivers real value.',
    },
    {
      title: 'Continuous Growth',
      description: 'We embrace learning and evolution as essential parts of our journey.',
    },
    {
      title: 'Client Partnership',
      description: 'We see our clients as partners in a shared mission, not just customers.',
    },
    {
      title: 'Creative Excellence',
      description: 'We push creative boundaries while maintaining the highest standards of quality.',
    },
    {
      title: 'Human-Centered',
      description: 'We design for people first, putting human needs at the center of everything we create.',
    },
    {
      title: 'Sustainable Innovation',
      description: "We create solutions that are not only innovative today but sustainable for tomorrow's challenges.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        {/* Values Section */}
        <div>
          <div className="mb-8">
            <h3 id="теми" className="text-h3-size text-center">
              Guiding Values
            </h3>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
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
