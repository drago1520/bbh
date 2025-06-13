import TopBar from '@/app/(frontend)/(homepage)/components/top-bar';
import Header from '@/app/(frontend)/(homepage)/components/header';
import Hero from '@/app/(frontend)/(homepage)/components/hero';
import NetworkingEvents from '@/app/(frontend)/(homepage)/components/networking-events';
import Conference from '@/app/(frontend)/(homepage)/components/conference';
import News from '@/app/(frontend)/(homepage)/components/news';
import Footer from '@/app/(frontend)/(homepage)/components/footer';
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
