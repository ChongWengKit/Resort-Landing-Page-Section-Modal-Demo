import HeroBanner from "./components/ui/HeroBanner";
import AttractionCard from "./components/ui/AttractionCard";
import OfferSection from "./components/builder/OfferSection";
import FrequentlyAskedQuestions from "./components/ui/FrequentlyAskedQuestions";
import Footer from "./components/ui/Footer";
import "../app/lib/builder";

const Attractions = [
    {
        title: "Where the Island Meets the Sea",
        description:
            "Walk along a secluded stretch of white sand, where the emerald waters of the Andaman Sea meet Langkawi's lush tropical landscape.",
        imageTitle: "Langkawi Beach",
        imageUrl: "/image/st-regis-1.webp",
        buttonText: "Explore Now",
        buttonLink: "/attractions",
        variant: "left" as const
    },
    {
        title: "Your Own Private Retreat",
        description:
            "From elegant rooms to expansive villas above the water, retreat into beautifully appointed spaces designed for comfort, privacy, and relaxation.",
        imageTitle: "Luxury Room",
        imageUrl: "/image/st-regis-2.webp",
        buttonText: "Explore Now",
        buttonLink: "/attractions",
        variant: "right" as const
    },
    {
        title: "A Ritual of Relaxation",
        description:
            "Inspired by Langkawi's natural beauty, personalised treatments and tropical botanicals create a peaceful retreat for complete relaxation.",
        imageTitle: "St. Regis Spa",
        imageUrl: "/image/st-regis-3.webp",
        buttonText: "Explore Now",
        buttonLink: "/attractions",
        variant: "left" as const
    },
    {
        title: "An Evening Worth Savouring",
        description:
            "Savour exquisite cuisine in distinctive settings, from elegant dining spaces to unforgettable meals overlooking the Andaman Sea.",
        imageTitle: "Luxury Dining",
        imageUrl: "/image/st-regis-4.webp",
        buttonText: "Explore Now",
        buttonLink: "/attractions",
        variant: "right" as const
    },
];

export default function Home() {
  return (
    <>
      <HeroBanner />
      <div className="max-w-7xl mx-auto md:p-8">
        <div className="font-sans font-semibold text-center text-text text-4xl mb-8">EXPLORE</div>
        {Attractions.map((attraction, index) => (
          <AttractionCard
            key={index}
            title={attraction.title}
            description={attraction.description}
            imageTitle={attraction.imageTitle}
            imageUrl={attraction.imageUrl}
            buttonText={attraction.buttonText}
            buttonLink={attraction.buttonLink}
            variant={attraction.variant}
          />
        ))}
        <OfferSection></OfferSection>
        <FrequentlyAskedQuestions />
      </div>
      <Footer />
    </>

  );
}
