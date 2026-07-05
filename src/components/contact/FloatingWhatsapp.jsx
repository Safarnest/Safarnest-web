import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX?text=Hello%20Safarnest%20Team"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">

        {/* Ping Animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40"></span>

        {/* Button */}
        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl transition-all duration-300 hover:scale-110">

          <FaWhatsapp className="text-4xl" />

        </div>

      </div>
    </a>
  );
}

export default FloatingWhatsapp;