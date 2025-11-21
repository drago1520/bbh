import Header from "@/components/header";
import Footer from "@/components/footer";
import AboutHero from "./components/about-hero";
import WhyAreNewcontactImportant from "../../../components/Sections/why-are-new-contacts-important";
import Courses from "../../../components/Sections/courses";
import Confrences from "../../../components/Sections/confrences";
import PartnersMarquee from "../../../components/Sections/partners-new";
import Statistics from "@/components/Sections/statistics";
import payloadConfig from "@payload-config";
import { getPayload } from "payload";

export const dynamic = "force-dynamic";
export default async function Page() {
  const config = await payloadConfig;
  const payload = await getPayload({ config: config });
  const result = (await payload.find({ collection: "AboutPage" })).docs.find(
    (r) => r,
  );
  if (!result) throw new Error("Няма данни за about page");
  const { statisticsN, partners } = result;
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero className="pb-8" />
        {statisticsN && typeof statisticsN !== "string" && (
          <Statistics data={statisticsN} withTitle={false} className="pt-0" />
        )}
        <WhyAreNewcontactImportant />
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
