'use client'
import { useState } from "react";
import { GoArrowUp } from "react-icons/go";
const questions = [
    { question: "What is the check-in and check-out time?", answer: "Check-in is from 3:00 PM and check-out is by 11:00 AM.", },
    {
        question: "Can I cancel or modify my booking?", answer: "Yes, bookings can be modified or cancelled according to the booking terms.",

    },];
export default function FrequentlyAskedQuestions() {
    const [open, setOpen] = useState<boolean[]>(questions.map(() => false));

    const toggleQuestion = (index: number) => {
        setOpen((current) =>
            current.map((value, i) =>
                i === index ? !value : value
            )
        );
    };
    return (
        <div className="flex flex-col gap-8 justify-center items-center m-8">
            <h2 className="font-sans font-semibold text-center text-text text-4xl mb-4">
                FAQs
            </h2>

            <div className="flex flex-col gap-4 md:w-1/2">
                {questions.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-2"
                    >
                        <button
                            onClick={() => toggleQuestion(index)}
                            className="flex justify-between border-b-2 border-gold p-4 text-left"
                        >
                            <h3 className="text-text font-heading text-lg">
                                {item.question}
                            </h3>

                            <GoArrowUp
                                className={`text-gold text-2xl transition-transform duration-300 ${open[index] ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        <div
                            className={`grid transition-all duration-300 ${open[index]
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <div className="overflow-hidden">
                                <p className="p-4 text-text font-body text-base">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}