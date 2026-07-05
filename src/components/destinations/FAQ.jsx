import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Can I customize my travel package?",
    answer:
      "Yes. Every package can be customized according to your budget, travel dates, hotel preference and sightseeing requirements.",
  },
  {
    question: "Are flights included in the package?",
    answer:
      "Flight inclusion depends on the selected package. You can also request flight bookings separately.",
  },
  {
    question: "Do you provide hotel and cab bookings?",
    answer:
      "Yes. Safarnest Holidays offers complete travel solutions including hotels, cabs, sightseeing and holiday packages.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We support secure online payments, bank transfer and other payment methods. More payment options will be available after launch.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes. Cancellation depends on the hotel, transport provider and package cancellation policy.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-24 bg-slate-100">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-blue-900 font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Got Questions?
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Find answers to the most commonly asked travel questions.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow border overflow-hidden"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >

                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`transition duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {openIndex === index && (

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