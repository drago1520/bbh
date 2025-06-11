import TopBar from '@/app/(frontend)/test/homepage/components/top-bar';
import Header from '@/app/(frontend)/test/homepage/components/header';
import Hero from '@/app/(frontend)/test/homepage/components/hero';
import NetworkingEvents from '@/app/(frontend)/test/homepage/components/networking-events';
import Conference from '@/app/(frontend)/test/homepage/components/conference';
import News from '@/app/(frontend)/test/homepage/components/news';
import Footer from '@/app/(frontend)/test/homepage/components/footer';
import PartnersCarousel from './components/partners-new';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <NetworkingEvents />
        <PartnersCarousel />
        <Conference isImageRight={false} />
        <News />
      </main>
      <Footer />
    </div>
  );
}
