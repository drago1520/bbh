import TopBar from '@/components/top-bar';
import Header from '@/components/header';
import Hero from '@/app/(frontend)/(homepage)/components/hero';
import NetworkingEvents from '@/components/Sections/networking-events';
import Conference from '@/components/Sections/conference';
import News from '@/components/Sections/news';
import Footer from '@/components/footer';
import PartnersCarousel from '../../../components/Sections/partners-new';
import FAQsThree from '@/components/Sections/faq-left-right';
import payloadConfig from '@payload-config';
import { getPayload } from 'payload';
import Gallery7 from '@/components/Sections/gallery-7-shadcnblocks';
import { Testimonial25 } from '@/components/Sections/testimonial25';
import { UpcomingEvents } from '@/components/Sections/upcoming-event-gallery';
import Statistics from '@/components/Sections/statistics';
import Courses from '../../../components/Sections/courses';
import BusinessBreakfast from '@/components/Sections/business-breakfast';
export const dynamic = 'force-dynamic';

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
  const { docs: marketingSections } = await payload.find({
    collection: 'marketing-sections',
    depth: 400,
  });
  const partnersProps = marketingSections.map(section => section.Partners?.partners?.find(blocks => blocks.blockType === 'partners'))?.[0];
  if (docs.length < 1) throw new Error('No data found for the homepage. Check the slug.');
  const [homePage] = docs;
  const faqBlockProps = homePage.blocks.find(block => block.blockType === 'faqChessMate');
  const gallery7Props = homePage.blocks.find(block => block.blockType === 'gallery7');
  const testimonials25Props = homePage.blocks.find(block => block.blockType === 'testimonial25Block');
  const statisticsProps = homePage.blocks.find(block => block.blockType === 'statistics');

  const { docs: events } = await payload.find({
    collection: 'events',
    sort: '-date',
    where: {
      and: [
        {
          active: {
            equals: true,
          },
        },
        {
          date: {
            greater_than: new Date().toISOString(),
          },
        },
      ],
    },
  });
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        <Hero subheading={homePage.subheading} heroImg={homePage.heroImg} />
        <UpcomingEvents events={events} />
        <NetworkingEvents className="bg-muted/70" />
        {statisticsProps && <Statistics data={statisticsProps} />}
        <Courses className="bg-muted/70" />
        {testimonials25Props && <Testimonial25 data={testimonials25Props} />}
        <Conference className="bg-muted/70" isImageRight={false} />
        {partnersProps && <PartnersCarousel partners={partnersProps} />}
        <BusinessBreakfast className="bg-muted/70" />
        {gallery7Props && <Gallery7 data={gallery7Props} />}
        <News className="bg-muted/70" />
      </main>
      {faqBlockProps && <FAQsThree data={faqBlockProps} />}
      <Footer />
    </div>
  );
}
