function Itinerary() {
  const days = [
    {
      day: "Day 1",
      title: "Delhi to Manali",
      desc: "Overnight Volvo journey from Delhi.",
    },
    {
      day: "Day 2",
      title: "Arrival & Local Sightseeing",
      desc: "Hotel check-in and explore Mall Road & Hadimba Temple.",
    },
    {
      day: "Day 3",
      title: "Solang Valley",
      desc: "Adventure activities and snow point visit.",
    },
    {
      day: "Day 4",
      title: "Kullu & Naggar",
      desc: "River rafting, shawl factory and local attractions.",
    },
    {
      day: "Day 5",
      title: "Leisure Day",
      desc: "Shopping and free time in Manali.",
    },
    {
      day: "Day 6",
      title: "Departure",
      desc: "Check-out and return journey to Delhi.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-blue-900 mb-12">
          Day Wise Itinerary
        </h2>

        <div className="space-y-6">

          {days.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-6"
            >
              <h3 className="text-2xl font-bold text-blue-900">
                {item.day}
              </h3>

              <h4 className="mt-2 text-xl font-semibold">
                {item.title}
              </h4>

              <p className="mt-3 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Itinerary;