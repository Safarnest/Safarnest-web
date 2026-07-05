import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20 md:py-28">

      <div className="max-w-5xl mx-auto px-6 text-center text-white">

        <span className="uppercase tracking-[5px] text-yellow-400 font-semibold">
          Let's Start Your Journey
        </span>

        <h2 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
          Ready To Plan
          <br />
          Your Dream Vacation?
        </h2>

        <p className="mt-8 text-blue-100 max-w-3xl mx-auto leading-8 text-lg">
          Our travel experts are available to help you choose the perfect
          destination, hotel and holiday package based on your budget and
          travel preferences.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

          <a
            href="tel:+91XXXXXXXXXX"
            className="inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-full transition duration-300"
          >
            <FaPhoneAlt />
            Call Now
          </a>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition duration-300"
          >
            <FaWhatsapp />
            WhatsApp Us
          </a>

        </div>

      </div>

    </section>
  );
}

export default CTA;