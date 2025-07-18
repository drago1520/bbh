import Header, { NavProps } from '@/components/header';
import Footer from '@/components/footer';
import payloadConfig from '@payload-config';
import { getPayload } from 'payload';
import { Button } from '@/components/ui/button';
import Hero from './components/hero';
import WhoIsTheConfFor from './components/who-is-the-conf-for';
import Agenda from './components/agenda';
import LecturersGrid from './components/lecturers-grid';
import Timeline from './components/timeline-06';
import Partners from './components/logos-07/partners';
import PricingWithCountdown from './components/pricing';
import Testimonials from './components/testimonials';
import MapWithContactInfo from './components/map-with-contact-info';
import Link from 'next/link';
export const dynamic = 'force-dynamic';

export default async function Conference() {
  const config = await payloadConfig;
  const payload = await getPayload({ config: config });
  const { docs } = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'conference',
      },
    },
    limit: 1,
  });
  const { docs: marketingSections } = await payload.find({
    collection: 'marketing-sections',
    depth: 400,
  });

  // Query contacts global
  const contactsData = await payload.findGlobal({
    slug: 'contacts',
  });

  const partners2Props = marketingSections.map(section => section.Partners2?.partners2?.find(blocks => blocks.blockType === 'partners2'))?.[0];

  if (docs.length < 1) {
    console.error('No data found for the conference. Check the slug.');
    return;
  }

  const [confPage] = docs;
  const { blocks, title, heroImg, subheading, ctaText } = confPage;
  if (!heroImg) {
    console.error('Provide heroImg on conf page');
    return;
  }
  const navItems: NavProps[] = [
    {
      href: '/',
      title: 'Начало',
    },
    {
      href: '#теми',
      title: 'Теми',
    },
    {
      href: '#лектори',
      title: 'Лектори',
    },
    {
      href: '#програма',
      title: 'Програма',
    },
    {
      href: '#цени',
      title: 'Цени',
    },
    {
      href: '#локация',
      title: 'Локация',
    },
  ];
  const agendaProps = blocks.find(block => block.blockType === 'agenda');
  const lecturersProps = blocks.find(block => block.blockType === 'lecturers');
  const confTimelineProps = blocks.find(block => block.blockType === 'timeline');
  const whoIsTheConfForProps = blocks.find(block => block.blockType === 'whoIsTheConfFor');
  const pricingProps = blocks.find(block => block.blockType === 'PricingWithCountdown');
  const testimonials2Props = blocks.find(block => block.blockType === 'testimonials2');

  return (
    <div className="min-h-screen">
      <Header
        navItems={navItems}
        cta={
          <Button asChild>
            <Link href="#цени">Запиши се</Link>
          </Button>
        }
      />
      <main className="mb-16">
        <Hero heroImg={heroImg} ctaText={ctaText} subheading={subheading} title={title} />
        {agendaProps && <Agenda agendaProps={agendaProps} />}
        {lecturersProps && <LecturersGrid lecturersProps={lecturersProps} />}
        {/* Програма */}
        {confTimelineProps && <Timeline confTimelineProps={confTimelineProps} />}
        {partners2Props && <Partners partnersProps={partners2Props} />}
        {whoIsTheConfForProps && <WhoIsTheConfFor data={whoIsTheConfForProps} />}
        {pricingProps && <PricingWithCountdown pricingProps={pricingProps} />}
        {testimonials2Props && <Testimonials testimonilas2Props={testimonials2Props} />}
        <MapWithContactInfo contactsData={contactsData} />
      </main>
      <Footer />
    </div>
  );
}
