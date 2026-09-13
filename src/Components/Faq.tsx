import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqList: FaqItem[] = [
    {
      question: "Where can we deploy the site?",
      answer: "You can deploy the site anywhere you like, such as Netlify, Vercel, Cloudflare Pages, or any other hosting platform."
    },
    {
      question: "Do we have to use TypeScript?",
      answer: "No. You can use either TypeScript or JavaScript. This project is built using TypeScript."
    },
    {
      question: "Can we change the title, logo, and colors?",
      answer: "Yes. You can change the project title, logo, and color scheme as long as they remain relevant to the project."
    },
    {
      question: "Where do we get the technology logos and icons?",
      answer: "You can use technology icon URLs from different sources. TechIcons is one useful source for clean technology logos."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Common <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">FAQ</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-2">
            Frequently asked questions about Dev Stack.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqList.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-2xl transition-all duration-200 hover:border-gray-300 overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-gray-900 focus:outline-none"
              >
                <span className="flex items-center gap-3 text-sm sm:text-base">
                  <span className="text-gray-500 text-xs">
                    {openIndex === index ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                  </span>
                  {faq.question}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 mt-1 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}