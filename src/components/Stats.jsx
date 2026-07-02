function Stats() {
  const stats = [
    {
      number: "10,000+",
      title: "Happy Travelers",
    },
    {
      number: "500+",
      title: "Tour Packages",
    },
    {
      number: "100+",
      title: "Destinations",
    },
    {
      number: "24×7",
      title: "Customer Support",
    },
  ];

  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">

        {stats.map((item, index) => (
          <div key={index}>

            <h2 className="text-5xl font-bold text-yellow-400">
              {item.number}
            </h2>

            <p className="mt-4 text-xl">
              {item.title}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Stats;