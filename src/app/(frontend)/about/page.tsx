import Header from '@/components/header';
import Footer from '@/components/footer';
import AboutHero from './components/about-hero';
import WhyAreNewcontactImportant from './components/why-are-new-contacts-important';
import Courses from './components/courses';
import Confrences from './components/confrences';
import PartnersMarquee from '../(homepage)/components/partners-new';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <WhyAreNewcontactImportant />
        <PartnersMarquee />
        <Courses isImageRight={false} />
        <Confrences />
      </main>
      <Footer />
    </div>
  );
}
