import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

interface FaqItem {
  question: string;
  answer: string;
}

const PlayFetch = async (): Promise<FaqItem[]> => {
  const res = await fetch('/faq.json');

  if (!res.ok) {
    throw new Error('Failed to load FAQ data');
  }

  const data = await res.json();

  return data;
};

export default function Faq() {
  const [faqList, setFaqList] = useState<FaqItem[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    PlayFetch()
      .then((data) => {
        setFaqList(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Frequently Asked <span className="text-pink-600">Questions</span>
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Find answers to some common questions about Dev Stack.
          </p>
        </div>

        <div className="space-y-3">
          {faqList.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white"
            >
              <button
                onClick={() => handleToggle(index)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-sm font-semibold text-gray-800">
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`shrink-0 text-sm text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="border-t border-gray-100 px-5 pb-5 pt-4">
                  <p className="text-sm leading-relaxed text-gray-500">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}