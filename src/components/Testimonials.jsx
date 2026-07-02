function Testimonials() {
  const testimonials = [
    {
      name: "Rahul & Priya",
      place: "Delhi",
      review:
        "Safarnest made our honeymoon unforgettable. Everything was perfectly managed from hotels to sightseeing.",
    },
    {
      name: "Aman Sharma",
      place: "Jaipur",
      review:
        "Amazing service and affordable pricing. I will definitely book my next trip with Safarnest.",
    },
    {
      name: "Sneha Verma",
      place: "Mumbai",
      review:
        "Excellent support throughout our Kashmir tour. Highly recommended!",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-900">
          What Our Travelers Say
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-14 text-xl">
          Real experiences from our happy customers.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >
              <div className="text-yellow-500 text-3xl mb-5">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 leading-8 italic">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-blue-900">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.place}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;