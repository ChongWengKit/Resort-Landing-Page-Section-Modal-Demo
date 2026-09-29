'use client'
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
const navItems = [
    {
        label: "Rooms",
        href: "/rooms",
    },
    {
        label: "Dining",
        href: "/dining",
    },
    {
        label: "Experiences",
        href: "/experiences",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

export default function TopBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="sticky relative top-0 z-50 bg-[linear-gradient(135deg,var(--color-primary-light),#1a5f80)] border-b-2 border-gold p-4">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <div className=" flex relative justify-between gap-4 font-heading text-xl">
                        <div className="flex xl:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                            <CiMenuBurger />
                        </div>
                        <a
                            href="/"
                            className="whitespace-nowrap text-xl sm:text-2xl md:text-4xl"
                        >
                            St. Regis Langkawi
                        </a>
                    </div>
                    <div className="hidden xl:flex flex-1 justify-between mx-32 font-sans text-md">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="cursor-pointer hover:text-[var(--color-gold)]"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                    <div>
                        <a
                            href="/rooms"
                            className="bg-[var(--color-accent)] hover:bg-[var(--color-white)] hover:text-[var(--color-gold)] font-sans font-semibold px-4 py-2 md:px-8 md:py-4 cursor-pointer transition-colors duration-200"
                        >
                            Find Room
                        </a>
                    </div>
                </div>
                <div
                    className={`absolute left-0 right-0 top-full z-49 flex flex-col gap-4 font-sans text-md xl:hidden bg-primary/40 backdrop-blur-xl p-4 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`} >
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="block cursor-pointer hover:text-[var(--color-gold)] text-center mb-2"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>


        </>
    )
}
