
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
    <section className="bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
        
        <div className="mb-7 text-center sm:mb-9 lg:mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl">
            Frequently Asked{' '}
            <span className="text-pink-600">Questions</span>
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
            Find answers to some common questions about Dev Stack.
          </p>
        </div>

        <div className="mx-auto max-w-7xl space-y-3">
          {faqList.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white"
            >
              <button
                onClick={() => handleToggle(index)}
                className="flex w-full items-center justify-between gap-3 p-4 text-left sm:gap-4 sm:p-5"
              >
                <span className="text-sm font-semibold leading-5 text-gray-800 sm:text-base sm:leading-6">
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`shrink-0 text-xs text-gray-500 transition-transform duration-300 sm:text-sm ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="border-t border-gray-100 px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
                  <p className="text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
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

