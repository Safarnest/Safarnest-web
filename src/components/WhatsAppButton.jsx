import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phoneNumber = "919876543210"; // Apna WhatsApp number baad me yahan dalna

  const message =
    "Hello Safarnest Holidays! I would like to know more about your travel packages.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl text-3xl z-50 transition duration-300 hover:scale-110"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;