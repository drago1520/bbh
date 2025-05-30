import Header from '@/app/(frontend)/test/homepage/components/header';
import Partners from '@/app/(frontend)/test/homepage/components/partners';
import Footer from '@/app/(frontend)/test/homepage/components/footer';
import AboutHero from '../about/components/about-hero';
import Confrences from '../about/components/confrences';
import Courses from '../about/components/courses';
import WhyAreNewcontactImportant from '../about/components/why-are-new-contacts-important';
import NetworkingHeader from './components/networking-header';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <NetworkingHeader/>
        {/* <AboutHero /> */}
        <WhyAreNewcontactImportant className='bg-background' />
        <Partners />
        <Courses />
        <Confrences />
      </main>
      <Footer />
    </div>
  );
}
