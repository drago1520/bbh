import Header from '@/components/header';
import Footer from '@/components/footer';
import AboutHero from './components/about-hero';
import WhyAreNewcontactImportant from './components/why-are-new-contacts-important';
import Courses from './components/courses';
import Confrences from './components/confrences';
import PartnersMarquee from '../(homepage)/components/partners-new';
import Statistics from '@/components/statistics';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <Statistics withTitle={false} className="pt-0" />
        <WhyAreNewcontactImportant />
        <PartnersMarquee />
        <Courses isImageRight={false} />
        <Confrences />
      </main>
      <Footer />
    </div>
  );
}
