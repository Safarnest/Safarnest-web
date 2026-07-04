import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    adults: 2,
    children: 0,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsApp = () => {
    if (!formData.name || !formData.phone) {
      alert("Please enter your Name and Mobile Number.");
      return;
    }

    const text = `*New Package Enquiry*

👤 Name: ${formData.name}

📞 Mobile: ${formData.phone}

📅 Travel Date: ${formData.date || "Not Selected"}

👨 Adults: ${formData.adults}

👶 Children: ${formData.children}

📝 Message:
${formData.message || "No Message"}
`;

    window.open(
      `https://wa.me/919354556973?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Our travel expert will contact you shortly.");
  };

  return (
    <div
      id="booking"
      className="bg-white rounded-3xl shadow-xl p-6"
    >
      <h2 className="text-2xl font-bold text-blue-900">
        Book This Package
      </h2>

      <p className="text-gray-500 mt-2">
        Fill your details and get the best holiday quote.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 mt-8"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-900"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-900"
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-900"
        />

        <div className="grid grid-cols-2 gap-4">

          <div>

            <label className="block text-sm mb-2">
              Adults
            </label>

            <input
              type="number"
              name="adults"
              min="1"
              value={formData.adults}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block text-sm mb-2">
              Children
            </label>

            <input
              type="number"
              name="children"
              min="0"
              value={formData.children}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />

          </div>

        </div>

        <textarea
          rows="4"
          name="message"
          placeholder="Special Request"
          value={formData.message}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-blue-900"
        />

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 py-4 rounded-xl font-bold transition"
        >
          Get Best Quote
        </button>

        <button
          type="button"
          onClick={handleWhatsApp}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-3 transition"
        >
          <FaWhatsapp size={22} />
          Enquire on WhatsApp
        </button>

      </form>
    </div>
  );
}

export default BookingForm;