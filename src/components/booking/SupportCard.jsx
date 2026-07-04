import {
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

function SupportCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h3 className="text-2xl font-bold text-blue-900">
        Need Help?
      </h3>

      <p className="mt-3 text-gray-600">
        Our travel experts are available 24×7 to help you plan your trip.
      </p>

      <a
        href="https://wa.me/919999999999"
        className="mt-6 flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-xl py-4 font-semibold transition"
      >
        <FaWhatsapp />
        WhatsApp Now
      </a>

      <a
        href="tel:+919999999999"
        className="mt-4 flex items-center justify-center gap-3 bg-blue-900 hover:bg-blue-800 text-white rounded-xl py-4 font-semibold transition"
      >
        <FaPhoneAlt />
        Call Now
      </a>

    </div>
  );
}

export default SupportCard;