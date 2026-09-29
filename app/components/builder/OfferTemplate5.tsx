import Image from "next/image";

interface Offer {
    title: string;
    description: string;
    image: string;
}

interface OfferTemplate5Props {
    offers: [Offer];
}

export default function OfferTemplate5({ offers }: OfferTemplate5Props) {
    return (
        <div className="grid grid-cols-12 grid-rows-6 w-full h-[200px] md:h-[600px] gap-4">
            <div className="relative col-span-12 row-span-6 2overflow-hidden">
                <Image
                    src={offers[0].image}
                    alt="Hero"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                <div className="absolute left-4 bottom-1/4">
                    <h2 className="text-white font-heading text-2xl">
                        {offers[0].title}
                    </h2>
                    <p className="text-white text-sm font-body text-base">
                        {offers[0].description}
                    </p>
                </div>
            </div>
        </div>
    );
}