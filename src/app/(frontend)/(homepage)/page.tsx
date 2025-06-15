import TopBar from '@/components/top-bar';
import Header from '@/components/header';
import Hero from '@/app/(frontend)/(homepage)/components/hero';
import NetworkingEvents from '@/app/(frontend)/(homepage)/components/networking-events';
import Conference from '@/app/(frontend)/(homepage)/components/conference';
import News from '@/app/(frontend)/(homepage)/components/news';
import Footer from '@/components/footer';
import PartnersCarousel from './components/partners-new';
import FAQsThree from '@/components/faq-left-right';
import payloadConfig from '@payload-config';
import { getPayload } from 'payload';

export default async function HomePage() {
  const config = await payloadConfig;
  const payload = await getPayload({ config: config });
  const { docs } = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: '',
      },
    },
    limit: 1,
  });
  const [homePage] = docs;

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <NetworkingEvents />
        <PartnersCarousel />
        <Conference isImageRight={false} />
        <FAQsThree homepageBlocks={homePage.blocks} />
        <News />
      </main>
      <Footer />
    </div>
  );
}
