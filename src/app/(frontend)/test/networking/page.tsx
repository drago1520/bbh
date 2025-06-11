import Header from '@/app/(frontend)/test/homepage/components/header';
import Footer from '@/app/(frontend)/test/homepage/components/footer';
import Confrences from '../about/components/confrences';
import Courses from '../about/components/courses';
import NetworkingHeader from './components/networking-header';
import PartnersMarquee from '../homepage/components/partners-new';
import Section2Paragraphs from '@/components/section';
import LatestNetworking from './components/latest-networking';
import payloadConfig from '@payload-config';
import { getPayload } from 'payload';
import { enum_events_active } from '@/payload-generated-schema';
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
        <LatestNetworking latestEvent={latestEvent} className="dark:bg-background bg-teal-500/20" />
        {/* <AboutHero /> */}
        <Section2Paragraphs className="bg-background" />
        <PartnersMarquee />
        <Courses isImageLeft={false} />
        <Confrences />
      </main>
      <Footer />
    </div>
  );
}
