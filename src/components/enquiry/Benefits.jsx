import {
  FaShieldAlt,
  FaHotel,
  FaHeadset,
  FaMoneyBillWave,
  FaUserTie,
  FaRoute,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaMoneyBillWave />,
    title: "Best Price Guarantee",
    description:
      "Transparent pricing with no hidden charges and maximum value for your money.",
  },
  {
    icon: <FaHotel />,
    title: "Verified Hotels",
    description:
      "Stay only at carefully selected hotels verified by the Safarnest team.",
  },
  {
    icon: <FaUserTie />,
    title: "Dedicated Travel Expert",
    description:
      "One travel consultant will personally assist you throughout your booking journey.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe & Secure Booking",
    description:
      "Your booking details and payments are handled with complete security.",
  },
  {
    icon: <FaHeadset />,
    title: "24×7 Customer Support",
    description:
      "Our support team is available whenever you need assistance before or during your trip.",
  },
  {
    icon: <FaRoute />,
    title: "Customized Itinerary",
    description:
      "Every holiday package is personalized according to your budget and travel preferences.",
  },
];

function Benefits() {
  return (
    <section className="py-20 md:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-blue-900 font-semibold">
            Why Enquire With Safarnest
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Experience The Safarnest Difference
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-8">
            We don't just book holidays. We create memorable travel experiences
            backed by trusted partners, expert planning and exceptional customer service.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {benefits.map((item, index) => (

            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 text-3xl">

                {item.icon}

              </div>

              <h3 className="mt-6 text-2xl font-bold">

                {item.title}

              </h3>

              <p className="mt-4 text-gray-600 leading-7">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Benefits;