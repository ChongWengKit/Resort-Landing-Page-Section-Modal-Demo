import Image from "next/image";

interface AttractionCardProps {
    title: string;
    description: string;
    imageTitle: string;
    imageUrl: string;
    buttonText: string;
    buttonLink: string;
    variant: "left" | "right";
}
export default function AttractionCard({ title, description, imageTitle, imageUrl, buttonText, buttonLink, variant }: AttractionCardProps) {
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
                            <div className="flex flex-col items-center gap-8 justify-center relative">
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
                            <div className="flex flex-col flex-col-reverse md:flex-row gap-8 m-8">
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