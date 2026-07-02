import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-slate-900 text-white pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-400">
            Safarnest Holidays
          </h2>

          <p className="mt-5 text-gray-400 leading-7">
            Your trusted travel partner for unforgettable holidays across
            India and international destinations. We create memorable travel
            experiences with comfort, trust, and exceptional service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>
              <a
                href="#home"
                className="hover:text-yellow-400 transition duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#packages"
                className="hover:text-yellow-400 transition duration-300"
              >
                Packages
              </a>
            </li>

            <li>
              <a
                href="#destinations"
                className="hover:text-yellow-400 transition duration-300"
              >
                Destinations
              </a>
            </li>

            <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
              About
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-yellow-400 transition duration-300"
              >
                Contact
              </a>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Contact Us
          </h3>

          <div className="space-y-4 text-gray-400">

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>Delhi, India</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+91 XXXXXXXXXX</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" />
              <span>info@safarnestholidays.com</span>
            </div>

          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Follow Us
          </h3>

          <p className="text-gray-400 mb-5">
            Stay connected with us for the latest travel deals and updates.
          </p>

          <div className="flex gap-5 text-2xl">

            <FaFacebook className="cursor-pointer hover:text-blue-500 hover:scale-110 transition duration-300" />

            <FaInstagram className="cursor-pointer hover:text-pink-500 hover:scale-110 transition duration-300" />

            <FaYoutube className="cursor-pointer hover:text-red-500 hover:scale-110 transition duration-300" />

            <FaLinkedin className="cursor-pointer hover:text-blue-400 hover:scale-110 transition duration-300" />

            <FaWhatsapp className="cursor-pointer hover:text-green-500 hover:scale-110 transition duration-300" />

          </div>

        </div>

      </div>

      <hr className="border-gray-700 my-10" />

      <div className="text-center text-gray-500 space-y-2">

        <p>
          © 2026{" "}
          <span className="text-yellow-400 font-semibold">
            Safarnest Holidays
          </span>
          . All Rights Reserved.
        </p>

        <p>Crafted with ❤️ in India</p>

      </div>
    </footer>
  );
}

export default Footer;