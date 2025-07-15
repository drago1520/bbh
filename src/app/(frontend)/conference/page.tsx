import Header from '@/components/header';
import Footer from '@/components/footer';
import payloadConfig from '@payload-config';
import { getPayload } from 'payload';
import { Button } from '@/components/ui/button';
import Hero from './components/hero';
import WhoIsTheConfFor from './components/who-is-the-conf-for';
import Agenda from './components/agenda';
import LecturersGrid from './components/lecturers-grid';
import Timeline from './components/timeline-06';
import Logos07Page from './components/logos-07/logos-07';
import PricingWithCountdown from './components/seasonal';
import Testimonials from './components/testimonials';
export const dynamic = 'force-dynamic';

export default async function HomePage() {
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
  // if (docs.length < 1) console.error('No data found for the homepage. Check the slug.');

  return (
    <div className="min-h-screen">
      <Header cta={<Button>Вземи Билет</Button>} />
      <main>
        <Hero />
        <WhoIsTheConfFor />
        <Agenda />
        <LecturersGrid />
        <Timeline />
        <Logos07Page />
        <PricingWithCountdown />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
