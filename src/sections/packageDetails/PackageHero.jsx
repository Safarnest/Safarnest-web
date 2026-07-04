function PackageHero({ packageData }) {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">

      <img
        src={packageData.image}
        alt={packageData.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <span className="inline-flex items-center bg-yellow-400 text-black px-5 py-2 rounded-full font-bold shadow-lg">

          ⭐ {packageData.bestseller ? "Best Seller" : "Popular Package"}

        </span>

        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-white leading-tight">

          {packageData.title}

        </h1>

        <p className="mt-6 max-w-3xl text-xl text-gray-200 leading-9">

          {packageData.shortDescription}

        </p>

        <div className="mt-12 flex flex-wrap gap-5">

          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl px-6 py-5">

            <p className="text-gray-300">
              Duration
            </p>

            <h3 className="text-2xl font-bold text-white">
              {packageData.duration}
            </h3>

          </div>

          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl px-6 py-5">

            <p className="text-gray-300">
              Starting From
            </p>

            <h3 className="text-2xl font-bold text-yellow-400">
              ₹{packageData.price.toLocaleString("en-IN")}
            </h3>

          </div>

          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl px-6 py-5">

            <p className="text-gray-300">
              Rating
            </p>

            <h3 className="text-2xl font-bold text-white">
              ⭐ {packageData.rating}
            </h3>

          </div>

          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl px-6 py-5">

            <p className="text-gray-300">
              Reviews
            </p>

            <h3 className="text-2xl font-bold text-white">
              {packageData.reviews}+
            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}

export default PackageHero;