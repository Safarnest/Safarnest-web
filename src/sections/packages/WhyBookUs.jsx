function WhyBookUs() {
  const reasons = [
    {
      title: "Best Price Guarantee",
      description:
        "We offer the most competitive prices with no hidden charges.",
      icon: "💰",
    },
    {
      title: "Verified Hotels",
      description:
        "Stay only in carefully selected and trusted accommodations.",
      icon: "🏨",
    },
    {
      title: "24×7 Support",
      description:
        "Our travel experts are always available during your trip.",
      icon: "📞",
    },
    {
      title: "Secure Booking",
      description:
        "Fast, safe and hassle-free booking experience.",
      icon: "🛡️",
    },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-blue-900">
            Why Book With Us?
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Trusted by thousands of happy travelers across India.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition"
            >

              <div className="text-5xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyBookUs;