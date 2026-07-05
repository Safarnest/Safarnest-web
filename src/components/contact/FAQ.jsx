import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "How do I book a tour package?",
    answer:
      "Simply submit an enquiry or contact our travel experts. We will guide you through the complete booking process.",
  },
  {
    question: "Can I customize my travel package?",
    answer:
      "Yes. Every package can be customized according to your budget, destination, hotel preference and travel dates.",
  },
  {
    question: "Do you provide hotel, cab and sightseeing?",
    answer:
      "Yes. We provide complete holiday packages including hotels, transfers, sightseeing and other travel services.",
  },
  {
    question: "How can I make payment?",
    answer:
      "Currently you can contact our team. Online payment gateway will be available soon.",
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer:
      "Yes. Cancellation and rescheduling are available according to the package and vendor policy.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-100">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="uppercase tracking-[5px] text-blue-900 font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Have Questions?
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Find answers to the most common questions about Safarnest Holidays.
          </p>

        </div>

        <div className="space-y-5">

          {faqData.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow border overflow-hidden"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <span className="font-semibold text-lg">
                  {item.question}
                </span>

                <FaChevronDown
                  className={`transition duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {active === index && (

                <div className="px-6 pb-6 text-gray-600 leading-8">

                  {item.answer}

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