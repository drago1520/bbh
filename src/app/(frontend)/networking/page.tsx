import Header from '@/components/header';
import Footer from '@/components/footer';
import NetworkingHeader from './components/networking-header';
import PartnersMarquee from '../../../components/Sections/partners-new';
import LatestNetworking from './components/latest-networking';
import payloadConfig from '@payload-config';
import { getPayload } from 'payload';
import { enum_events_active } from '@/payload-generated-schema';
import Courses from '../../../components/Sections/courses';
import Confrences from '../../../components/Sections/confrences';
import Section2Paragraphs from '@/components/Sections/section';
// import ContentWithMediaAndButtonExample from '@/components/Sections/content-with-media-and-button';

export default async function HomePage() {
  const config = await payloadConfig;
  const payload = await getPayload({ config: config });
  const { docs } = await payload.find({
    collection: 'events',
    sort: 'date',
    depth: 40,
    where: {
      active: {
        equals: enum_events_active.enumValues[1],
      },
    },
  });
  const [latestEvent] = docs;
  if (!latestEvent) console.error('Няма намерено предстоящо събитие');
  else if (new Date() > new Date(latestEvent.date)) console.error(`Старо събитие се показва с id: ${latestEvent.id}`);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <NetworkingHeader />
        <LatestNetworking event={latestEvent} />
        {/* <AboutHero /> */}
        <Section2Paragraphs className="bg-background" />
        <PartnersMarquee className="bg-muted/40" />
        <Courses isImageRight={false} />
        <Confrences />
      </main>
      <Footer />
    </div>
  );
}
