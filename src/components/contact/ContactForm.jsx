import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    destination: "",
    travelDate: "",
    travellers: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Enquiry Submitted Successfully");
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="uppercase tracking-[5px] text-blue-900 font-semibold">
            Send Enquiry
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Tell Us About Your Trip
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
            Fill out the enquiry form below and our travel experts will
            contact you with the best package for your journey.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="border rounded-xl px-5 py-4 outline-none focus:border-blue-900"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              className="border rounded-xl px-5 py-4 outline-none focus:border-blue-900"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-xl px-5 py-4 outline-none focus:border-blue-900"
            />

            <input
              type="text"
              name="destination"
              placeholder="Preferred Destination"
              value={formData.destination}
              onChange={handleChange}
              className="border rounded-xl px-5 py-4 outline-none focus:border-blue-900"
            />

            <input
              type="date"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
              className="border rounded-xl px-5 py-4 outline-none focus:border-blue-900"
            />

            <input
              type="number"
              name="travellers"
              placeholder="Number of Travellers"
              value={formData.travellers}
              onChange={handleChange}
              className="border rounded-xl px-5 py-4 outline-none focus:border-blue-900"
            />

            <input
              type="text"
              name="budget"
              placeholder="Estimated Budget"
              value={formData.budget}
              onChange={handleChange}
              className="border rounded-xl px-5 py-4 outline-none focus:border-blue-900 md:col-span-2"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Tell us about your trip requirements..."
              value={formData.message}
              onChange={handleChange}
              className="border rounded-xl px-5 py-4 outline-none focus:border-blue-900 md:col-span-2 resize-none"
            ></textarea>

          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-blue-900 hover:bg-blue-800 text-white py-4 rounded-xl text-lg font-semibold transition duration-300"
          >
            Submit Enquiry
          </button>

        </form>

      </div>
    </section>
  );
}

export default ContactForm;