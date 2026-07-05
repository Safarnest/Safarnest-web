import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

function CTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">

      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-white rounded-[32px] shadow-2xl p-10 md:p-16 text-center">

          <span className="uppercase tracking-[5px] text-blue-900 font-semibold">
            Let's Plan Together
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold text-slate-900">
            Your Dream Trip
            <br />
            Starts Here
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-3xl mx-auto">
            Share your travel requirements today and let our travel experts
            create a memorable holiday experience specially designed for you.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

            <button className="inline-flex items-center justify-center gap-3 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold transition">

              Submit Enquiry

              <FaArrowRight />

            </button>

            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center justify-center gap-3 border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-4 rounded-full font-semibold transition"
            >

              <FaPhoneAlt />

              Call Travel Expert

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;