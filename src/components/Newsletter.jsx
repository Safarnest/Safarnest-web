function Newsletter() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold text-white">
          Ready For Your Next Adventure?
        </h2>

        <p className="text-gray-300 mt-5 text-xl">
          Subscribe now and receive exclusive holiday offers, travel tips and
          exciting deals.
        </p>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">

          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-4 rounded-xl w-full md:w-96 text-black outline-none"
          />

          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl transition">
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;