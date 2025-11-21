import Header from "@/components/header";
import Footer from "@/components/footer";
import NetworkingHeader from "./components/networking-header";
import PartnersMarquee from "../../../components/Sections/partners-new";
import LatestNetworking from "./components/latest-networking";
import payloadConfig from "@payload-config";
import { getPayload } from "payload";
import Courses from "../../../components/Sections/courses";
import Confrences from "../../../components/Sections/confrences";
import Section2Paragraphs from "@/components/Sections/section";
// import ContentWithMediaAndButtonExample from '@/components/Sections/content-with-media-and-button';
export const dynamic = "force-dynamic";

export default async function Page() {
  const config = await payloadConfig;
  const payload = await getPayload({ config: config });
  const result = (
    await payload.find({ collection: "NetworkingPage" })
  ).docs.find((r) => r);
  if (!result) throw new Error("Няма данни за страницата");
  // eslint-disable-next-line prefer-const
  let { event, partners } = result;
  if (!event) {
    const result2 = await payload.find({
      collection: "events",
      sort: "-date",
      depth: 40,
      where: {
        active: {
          equals: true,
        },
        date: {
          greater_than: new Date().toISOString(),
        },
      },
    });
    const latestEvent = result2.docs[0];
    event = latestEvent;
  }

  if (!event) console.error("Няма намерено предстоящо събитие");
  else if (typeof event === "string")
    throw new Error("Object passed from collection is string");
  else if (new Date() > new Date(event.date))
    console.error(`Старо събитие се показва с id: ${event.id}`);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <NetworkingHeader />
        {typeof event !== "string" && <LatestNetworking event={event} />}
        <Section2Paragraphs className="bg-muted/40" />
        {partners && typeof partners !== "string" && (
          <PartnersMarquee partners={partners} />
        )}
        <Courses isImageRight={false} />
        <Confrences />
      </main>
      <Footer />
    </div>
  );
}
