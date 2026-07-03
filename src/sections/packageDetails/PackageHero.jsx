function PackageHero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <img
        src="/src/assets/images/manali.jpg"
        alt="Manali Package"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">

        <span className="bg-yellow-400 text-black px-5 py-2 rounded-full font-bold">
          ⭐ Best Seller
        </span>

        <h1 className="mt-8 text-5xl md:text-7xl font-bold">
          Manali Escape
        </h1>

        <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
          Experience the breathtaking beauty of Himachal Pradesh with premium
          hotels, Volvo travel, sightseeing and unforgettable adventures.
        </p>

        <div className="mt-10 flex justify-center gap-8 flex-wrap">

          <div>
            <p className="text-gray-300">Duration</p>
            <h3 className="text-2xl font-bold">5N / 6D</h3>
          </div>

          <div>
            <p className="text-gray-300">Starting From</p>
            <h3 className="text-2xl font-bold text-yellow-400">
              ₹12,999
            </h3>
          </div>

          <div>
            <p className="text-gray-300">Rating</p>
            <h3 className="text-2xl font-bold">
              ⭐ 4.8
            </h3>
          </div>

        </div>

      </div>

    </section>
  );
}

export default PackageHero;