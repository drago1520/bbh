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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        {/* Mission Statement */}
        <div className="bg-card mx-auto mb-16 max-w-3xl rounded-lg border p-8 text-center shadow-sm">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Our Mission</h2>
          <p className="text-muted-foreground text-lg">To create digital experiences that elevate brands, empower users, and inspire meaningful connections through thoughtful design and innovative technology.</p>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">Guiding Values</h2>

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
