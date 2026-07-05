import {
  FaShieldAlt,
  FaHeadset,
  FaHotel,
  FaMapMarkedAlt,
  FaMoneyCheckAlt,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt />,
    title: "Trusted Travel Partner",
    description:
      "Verified hotels, trusted transport partners and secure bookings for complete peace of mind.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Best Price Guarantee",
    description:
      "Affordable holiday packages with transparent pricing and no hidden charges.",
  },
  {
    icon: <FaHotel />,
    title: "Premium Hotels",
    description:
      "Comfortable stays with carefully selected hotels for every budget.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Customized Packages",
    description:
      "Personalized travel plans based on your destination, budget and preferences.",
  },
  {
    icon: <FaUsers />,
    title: "Experienced Team",
    description:
      "Professional travel experts helping you before, during and after your trip.",
  },
  {
    icon: <FaHeadset />,
    title: "24×7 Customer Support",
    description:
      "Our support team is always ready to assist you whenever you need help.",
  },
];

function WhyChoose() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-blue-900 font-semibold">
            Why Choose Safarnest Holidays
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Travel With Confidence
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
            We focus on delivering unforgettable travel experiences through
            trusted partnerships, premium services and exceptional customer
            support.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
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

export default WhyChoose;