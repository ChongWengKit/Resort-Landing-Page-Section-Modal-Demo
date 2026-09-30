import HeroBanner from "./components/ui/HeroBanner";
import AttractionSection from "./components/ui/AttractionSection";
import OfferSection from "./components/builder/OfferSection";
import FrequentlyAskedQuestions from "./components/ui/FrequentlyAskedQuestions";
import Footer from "./components/ui/Footer";
import "../app/lib/builder";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <div className="max-w-7xl mx-auto md:p-8">
        <AttractionSection />
        <OfferSection></OfferSection>
        <FrequentlyAskedQuestions />
      </div>
    </>

  );
}
