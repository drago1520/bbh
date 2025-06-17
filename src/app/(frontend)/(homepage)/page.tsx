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
import Gallery7 from '@/components/Sections/gallery-7-shadcnblocks';
import { Testimonial25 } from '@/components/testimonial25';

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
        <NetworkingEvents />
        <PartnersCarousel />
        <Conference isImageRight={false} />
        {gallery7Props && <Gallery7 {...gallery7Props} />}
        {faqBlockProps && <FAQsThree {...faqBlockProps} />}
        {testimonials25Props && <Testimonial25 {...testimonials25Props} />}
        <News />
      </main>
      <Footer />
    </div>
  );
}
