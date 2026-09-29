import Image from "next/image";
import image from "../../../public/image/st.-regis-langkawi-10th-yr-6.jpg";
export default function HeroBanner() {

    return (
        <div className="relative h-[200px] md:h-[400px] w-full overflow-hidden mb-8">
            <Image
                src={image}
                alt="Hero"
                fill
                className="object-cover z-0 object-center brightness-60"
            />
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center gap-4">
                <span className="font-heading text-2xl md:text-4xl lg:text-8xl text-semibold mb-2 text-center shadow-text">Luxury by the Sea</span>
                <span className="font-sans text-sm lg:text-lg text-center">
                    Experience unparalleled elegance in Langkawi's most prestigious destination
                </span>
            </div>
        </div>
    )
}
