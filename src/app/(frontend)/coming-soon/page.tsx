import Header from "@/components/header";
import Footer from "@/components/footer";
import ComingSoonHero from "./components/coming-soon";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ComingSoonHero />
      </main>
      <Footer />
    </div>
  );
}
