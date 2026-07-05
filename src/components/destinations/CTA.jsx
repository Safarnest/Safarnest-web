import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

function CTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">

      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-white rounded-[32px] shadow-2xl p-10 md:p-16 text-center">

          <span className="uppercase tracking-[5px] text-blue-900 font-semibold">
            Start Your Journey
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Ready For Your
            <br />
            Dream Vacation?
          </h2>

          <p className="mt-8 text-gray-600 max-w-3xl mx-auto leading-8 text-lg">
            Whether you're planning a honeymoon, family holiday,
            group tour or luxury vacation, our travel experts are
            ready to create the perfect itinerary for you.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

            <button className="inline-flex items-center justify-center gap-3 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold transition duration-300">

              Explore Packages

              <FaArrowRight />

            </button>

            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center justify-center gap-3 border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-4 rounded-full font-semibold transition duration-300"
            >

              <FaPhoneAlt />

              Talk To Expert

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;