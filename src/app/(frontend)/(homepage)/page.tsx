import TopBar from "@/components/top-bar";
import Header from "@/components/header";
import Hero from "@/app/(frontend)/(homepage)/components/hero";
import NetworkingEvents from "@/components/Sections/networking-events";
import Conference from "@/components/Sections/conference";
import News from "@/components/Sections/news";
import Footer from "@/components/footer";
import PartnersCarousel from "../../../components/Sections/partners-new";
import FAQsThree from "@/components/Sections/faq-left-right";
import payloadConfig from "@payload-config";
import { getPayload } from "payload";
import Gallery7 from "@/components/Sections/gallery-7-shadcnblocks";
import { Testimonial25 } from "@/components/Sections/testimonial25";
import { UpcomingEvents } from "@/components/Sections/upcoming-event-gallery";
import Statistics from "@/components/Sections/statistics";
import Courses from "../../../components/Sections/courses";
import BusinessBreakfast from "@/components/Sections/business-breakfast";
export const dynamic = "force-dynamic";

export default async function Page() {
  const config = await payloadConfig;
  const payload = await getPayload({ config: config });
  const result = (await payload.find({ collection: "HomePage" })).docs.find(
    (r) => r,
  );
  if (!result) throw new Error("Няма данни за начална страница");
  const {
    faqLeftRight,
    heroImg,
    gallery7,
    partners,
    statisticsN,
    subheading,
    testimonials25,
  } = result; //TODO: TS issue #6784; explodes on runtime
  let events = result.events?.filter((e) => typeof e !== "string");
  if (!events) {
    const result2 = await payload.find({
      collection: "events",
      sort: "-date",
      where: {
        active: {
          equals: true,
        },
        date: {
          greater_than: new Date().toISOString(),
        },
      },
    });
    const latestEvents = result2.docs.filter((e) => typeof e !== "string");
    events = latestEvents;
  }
  if (1 > events.length) console.error("Няма намерено предстоящо събитие");
  else if (events.find((e) => typeof e === "string"))
    throw new Error("Object passed from collection is string");
  else if (new Date() > new Date(events[0].date))
    console.error(`Старо събитие се показва с id: ${events[0].id}`);

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        <Hero subheading={subheading} heroImg={heroImg} />
        <UpcomingEvents events={events} />
        <NetworkingEvents className="bg-muted/70" />
        {statisticsN && typeof statisticsN !== "string" && (
          <Statistics data={statisticsN} />
        )}
        <Courses className="bg-muted/70" />
        {testimonials25 && typeof testimonials25 !== "string" && (
          <Testimonial25 data={testimonials25} />
        )}
        <Conference className="bg-muted/70" isImageRight={false} />
        {partners && typeof partners !== "string" && (
          <PartnersCarousel partners={partners} />
        )}
        <BusinessBreakfast className="bg-muted/70" />
        {gallery7 && typeof gallery7 !== "string" && (
          <Gallery7 data={gallery7} />
        )}
        <News className="bg-muted/70" />
      </main>
      {faqLeftRight && typeof faqLeftRight !== "string" && (
        <FAQsThree data={faqLeftRight} />
      )}
      <Footer />
    </div>
  );
}
