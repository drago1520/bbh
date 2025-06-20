import TopBar from '@/components/top-bar';
import Header from '@/components/header';
import Hero from '@/app/(frontend)/(homepage)/components/hero';
import NetworkingEvents from '@/app/(frontend)/(homepage)/components/networking-events';
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
import Courses from '../about/components/courses';

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
  const faqBlockProps = homePage.blocks.find(block => block.blockType === 'faqChessMate');
  const gallery7Props = homePage.blocks.find(block => block.blockType === 'gallery7');
  const testimonials25Props = homePage.blocks.find(block => block.blockType === 'testimonial25Block');

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <UpcomingEvents className="bg-background" />
        <NetworkingEvents />
        <Statistics />
        <Courses className="bg-background" />
        <PartnersCarousel />
        <Conference isImageRight={false} />
        {testimonials25Props && <Testimonial25 {...testimonials25Props} />}
        {gallery7Props && <Gallery7 {...gallery7Props} />}
        {faqBlockProps && <FAQsThree {...faqBlockProps} />}
        <News />
      </main>
      <Footer />
    </div>
  );
}
