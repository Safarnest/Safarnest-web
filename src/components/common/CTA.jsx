function CTA() {
  return (
    <section className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Ready To Plan Your Next Vacation?
        </h2>

        <p className="mt-4 text-lg text-blue-100">
          Contact Safarnest Holidays today and let us create your perfect trip.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-xl transition">
            Get Free Quote
          </button>

          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-xl transition">
            WhatsApp Us
          </button>
        </div>

      </div>
    </section>
  );
}

export default CTA;