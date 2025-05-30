import Header from '@/app/(frontend)/test/homepage/components/header';
import Footer from '@/app/(frontend)/test/homepage/components/footer';
import ComingSoonHero from './components/coming-soon';

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ComingSoonHero/>
      </main>
      <Footer />
    </div>
  );
}
