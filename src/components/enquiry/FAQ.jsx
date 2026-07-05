import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How long does it take to receive a quotation?",
    answer:
      "Our travel experts usually contact you within a few hours and share a customized quotation as soon as possible.",
  },
  {
    question: "Can I customize my holiday package?",
    answer:
      "Absolutely! Every itinerary can be customized according to your budget, hotel preference, sightseeing and travel dates.",
  },
  {
    question: "Do I have to pay immediately after submitting an enquiry?",
    answer:
      "No. Submitting an enquiry is completely free. Payment is required only after you confirm your booking.",
  },
  {
    question: "Can I choose my preferred hotel?",
    answer:
      "Yes. You can choose from available hotel options or let our experts recommend the best stay based on your budget.",
  },
  {
    question: "Will I receive booking assistance after payment?",
    answer:
      "Yes. Our team will assist you throughout your journey, from booking confirmation until your trip is completed.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-20 md:py-24 bg-slate-100">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="uppercase tracking-[5px] text-blue-900 font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Need More Information?
          </h2>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow overflow-hidden"
            >

              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >

                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`transition duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {active === index && (

                <div className="px-6 pb-6 text-gray-600 leading-8">

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

export default FAQ;