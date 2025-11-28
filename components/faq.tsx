"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "How do I get a Referral Code?",
    answer:
     "You receive your rewards in ETH instantly once someone you refer makes a transaction."
  },
  {
    question: "Do I get rewarded in tokens or ETH when I refer buyers? ",
    answer:
      "You receive your rewards in ETH instantly once someone you refer makes a transaction."
  },
  {
    question: "How do I get a Referral Code?",
    answer:
      "You receive your rewards in ETH instantly once someone you refer makes a transaction."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq"className="px-8 py-20 max-w-4xl mx-auto mt-20">
      <h2 className="font-neue text-5xl font-bold text-center mb-12">
        Frequently <span className="text-primary">Asked Questions</span>
      </h2>

      <div className="flex flex-col gap-6">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white/5 p-6 rounded-2xl border border-white/10 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question Row */}
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-semibold">{faq.question}</h4>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-primary" : ""
                }`}
              />
            </div>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-white/70 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
