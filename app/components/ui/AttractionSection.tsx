import Image from "next/image";

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

interface AttractionCardProps {
    title: string;
    description: string;
    imageTitle: string;
    imageUrl: string;
    buttonText: string;
    buttonLink: string;
    variant: "left" | "right";
}

function AttractionCard({ title, description, imageTitle, imageUrl, buttonText, buttonLink, variant }: AttractionCardProps) {
    return (
        <>
                {variant === "left" && (
                    <div>
                        <div className="relative pb-2 md:m-8">
                            <h2 className="font-sans text-text text-bold text-2xl text-center md:text-left">{imageTitle}</h2>
                            <div className="absolute bottom-0 left-1/2 md:left-0 h-[2px] w-1/8 bg-gold" />

                        </div>
                        <div className="flex flex-col md:flex-row gap-8 m-8">


                            <div className="relative shrink-0 w-[300px] h-[200px] lg:w-[500px] lg:h-[320px] overflow-hidden mx-auto">

                                <Image
                                    src={imageUrl}
                                    alt={imageTitle}
                                    fill
                                    sizes="(min-width: 1024px) 500px, 300px"
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col flex-1 items-center gap-8 justify-center relative">
                                <div className="absolute top-0 right-0 w-[12.5%] h-[12.5%] border-t border-r border-gold" />
                                <div className="block md:hidden absolute bottom-0 left-0 w-[12.5%] h-[12.5%] border-b border-l border-gold" />
                                <div className="w-3/5 border-t text-center md:text-right">
                                    <h2 className="text-text font-heading text-2xl mb-4">
                                        {title}
                                    </h2>

                                    <p className="text-text font-sans mb-4">
                                        {description}
                                    </p>

                                    <a
                                        href={buttonLink}
                                        className="text-gold font-bold"
                                    >
                                        {buttonText}
                                    </a>
                                </div>
                            </div>
                        </div >
                    </div>
                )
                }
                {
                    variant === "right" && (
                        <div>
                            <div className="relative pb-2 md:m-8">
                                <h2 className="font-sans text-text text-bold text-2xl text-center md:text-right">{imageTitle}</h2>
                                <div className="absolute bottom-0 left-1/2 md:right-0 md:left-auto h-[2px] w-1/8 bg-gold" />

                            </div>
                            <div className="flex flex-col flex-1 flex-col-reverse md:flex-row gap-8 m-8">
                                <div className="flex flex-col items-center gap-8 justify-center relative">
                                    <div className="absolute top-0 left-0 w-[12.5%] h-[12.5%] border-t border-l border-gold" />
                                    <div className="block md:hidden absolute bottom-0 right-0 w-[12.5%] h-[12.5%] border-b border-r border-gold" />
                                    <div className="w-3/5 text-center md:text-left">
                                        <h2 className="text-text font-heading text-2xl mb-4">{title}</h2>
                                        <p className="text-text font-sans mb-4">{description}</p>
                                        <a
                                            href={buttonLink}
                                            className="text-gold font-bold"
                                        >
                                            {buttonText}
                                        </a>
                                    </div>
                                </div>
                                <div className="relative shrink-0 w-[300px] h-[200px] lg:w-[500px] lg:h-[320px] overflow-hidden mx-auto">

                                    <Image
                                        src={imageUrl}
                                        alt={imageTitle}
                                        fill
                                        sizes="(min-width: 1024px) 500px, 300px"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    )
                }
        </>
    )
}

export default function AttractionSection() {
    return (
        <>
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
        </>
    );
}