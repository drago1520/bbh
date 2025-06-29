import Header from '@/components/header';
import Footer from '@/components/footer';
import AboutHero from './components/about-hero';
import WhyAreNewcontactImportant from '../../../components/Sections/why-are-new-contacts-important';
import Courses from '../../../components/Sections/courses';
import Confrences from '../../../components/Sections/confrences';
import PartnersMarquee from '../../../components/Sections/partners-new';
import Statistics from '@/components/Sections/statistics';
import payloadConfig from '@payload-config';
import { getPayload } from 'payload';

export const dynamic = 'force-dynamic';
export default async function HomePage() {
  const config = await payloadConfig;
  const payload = await getPayload({ config: config });
  const { docs } = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'about',
      },
    },
    limit: 1,
  });
  if (docs.length < 1) {
    console.error('No data for /about. Check if exists or the slug.');
    return;
  }
  const [aboutPage] = docs;
  const statisticsProps = aboutPage.blocks.find(block => block.blockType === 'statistics');

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero className="pb-8" />
        {statisticsProps && <Statistics data={statisticsProps} withTitle={false} className="pt-0" />}
        <WhyAreNewcontactImportant />
        <PartnersMarquee />
        <Courses isImageRight={false} />
        <Confrences />
      </main>
      <Footer />
    </div>
  );
}
