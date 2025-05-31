import Header from '@/app/(frontend)/test/homepage/components/header';
import Footer from '@/app/(frontend)/test/homepage/components/footer';
import Confrences from '../about/components/confrences';
import Courses from '../about/components/courses';
import NetworkingHeader from './components/networking-header';
import PartnersMarquee from '../homepage/components/partners-new';
import Section2Paragraphs from '@/components/section';
import LatestNetworking from './components/latest-networking';

export default function HomePage() {
  return (
    <div className="min-h-screen">
    <Header />
      <main>
        <NetworkingHeader/>
        <LatestNetworking className='bg-teal-500/20' />
        {/* <AboutHero /> */}
        <Section2Paragraphs className='bg-background' />
        <PartnersMarquee />
        <Courses />
        <Confrences />
      </main>
      <Footer />
    </div>
  );
}
