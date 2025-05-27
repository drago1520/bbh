import TopBar from "@/app/(frontend)/test/homepage/components/top-bar"
import Header from "@/app/(frontend)/test/homepage/components/header"
import Hero from "@/app/(frontend)/test/homepage/components/hero"
import NetworkingEvents from "@/app/(frontend)/test/homepage/components/networking-events"
import Partners from "@/app/(frontend)/test/homepage/components/partners"
import Conference from "@/app/(frontend)/test/homepage/components/conference"
import News from "@/app/(frontend)/test/homepage/components/news"
import Footer from "@/app/(frontend)/test/homepage/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <NetworkingEvents />
        <Partners />
        <Conference />
        <News />
      </main>
      <Footer />
    </div>
  )
}
