import Image from "next/image";

interface Offer {
    title: string;
    description: string;
    image: string;
}

interface OfferTemplate1Props {
    offers: [Offer, Offer, Offer];
}
export default function OfferTemplate1({ offers }: OfferTemplate1Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 w-full h-auto md:h-[600px] gap-4">
            <div className="relative h-[200px] md:h-auto md:col-span-8 md:row-span-6  overflow-hidden group">
                <Image
                    src={offers[0].image}
                    alt="Hero"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

                <div className="absolute left-4 bottom-1/4 ">
                    <h2 className="text-white font-heading text-2xl drop-shadow-lg ">{offers[0].title}</h2>
                    <p className="text-white font-body text-base text-sm drop-shadow-lg">{offers[0].description}</p>
                </div>
            </div>
            <div className="relative h-[200px] md:h-auto md:col-span-4 md:row-span-3 overflow-hidden group">
                <Image
                    src={offers[1].image}
                    alt="Hero"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                <div className="absolute left-4 bottom-1/4">
                    <h2 className="text-white font-heading text-2xl drop-shadow-lg">{offers[1].title}</h2>
                    <p className="text-white font-body text-base text-sm drop-shadow-lg">{offers[1].description}</p>
                </div>
            </div>
            <div className="relative h-[200px] md:h-auto md:col-span-4 md:row-span-3 overflow-hidden group">
                <Image
                    src={offers[2].image}
                    alt="Hero"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                <div className="absolute left-4 bottom-1/4">
                    <h2 className="text-white font-heading text-2xl drop-shadow-lg">{offers[2].title}</h2>
                    <p className="text-white font-body text-base text-sm drop-shadow-lg">{offers[2].description}</p>
                </div>
            </div>
        </div>
    );
}