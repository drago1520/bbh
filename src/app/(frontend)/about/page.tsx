import Header from '@/components/header';
import Footer from '@/components/footer';
import AboutHero from './components/about-hero';
import WhyAreNewcontactImportant from '../../../components/Sections/why-are-new-contacts-important';
import Courses from '../../../components/Sections/courses';
import Confrences from '../../../components/Sections/confrences';
import PartnersMarquee from '../../../components/Sections/partners-new';
import Statistics from '@/components/Sections/statistics';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero className="pb-8" />
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
