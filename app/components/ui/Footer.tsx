export default function Footer() {
    return (
        <>
            <div className="bg-primary border-b-2 border-gold">
                <div className="flex flex-col gap-4 max-w-7xl mx-auto p-8 md:py-16 md:px-32 md:flex-row justify-between items-center">
                    <div className="flex flex-col gap-4 items-center">
                        <span className="font-heading text-lg">St. Regis Langkawi</span>
                        <span className="font-sans text-sm">Langkawi, Malaysia</span>
                    </div>
                    <div className="h-px md:h-16 w-32 md:w-px bg-gold" />
                    <div className="flex flex-col gap-4 items-center">
                        <span className="font-heading text-lg">Contact</span>
                        <span className="font-sans text-sm">+60 4-960 8888</span>
                    </div>
                    <div className="h-px md:h-16 w-32 md:w-px bg-gold" />
                    <div className="flex flex-col gap-4 items-center">
                        <span className="font-heading text-lg">Social</span>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/StRegisLangkawi" target="_blank" rel="noopener noreferrer">
                                <span className="font-sans text-sm hover:text-gold">Facebook</span>
                            </a>
                            <a href="https://www.instagram.com/thestregislangkawi/" target="_blank" rel="noopener noreferrer">
                                <span className="font-sans text-sm hover:text-gold">Instagram</span>
                            </a>
                        </div>


                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center py-4 bg-primary-dark">
                <span>© 2026 St. Regis Langkawi</span>
            </div>
        </>
    )

}