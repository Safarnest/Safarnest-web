function Map() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="uppercase tracking-[5px] text-blue-900 font-semibold">
            Visit Our Office
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Meet Our Travel Experts
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
            You're always welcome to visit our office. Let's discuss your
            dream holiday over a cup of coffee.
          </p>

        </div>

        <div className="overflow-hidden rounded-3xl shadow-xl border">

          <iframe
            title="Safarnest Holidays Office"
            src="https://www.google.com/maps?q=Delhi&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            className="border-0"
            allowFullScreen
          ></iframe>

        </div>

      </div>
    </section>
  );
}

export default Map;