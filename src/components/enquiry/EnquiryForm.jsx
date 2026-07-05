import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import packages from "../../data/packages";
import SelectedPackageCard from "./SelectedPackageCard";

function EnquiryForm() {
  const [searchParams] = useSearchParams();

  const packageId = Number(searchParams.get("packageId"));

  const selectedPackage = packages.find(
    (item) => item.id === packageId
  );

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    departureCity: "",
    travelDate: "",
    adults: "",
    children: "",
    rooms: "",
    budget: "",
    hotelCategory: "",
    transport: "",
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

  const enquiryId = `ENQ${Date.now()}`;

  const enquiry = {
    enquiryId,

    packageId: selectedPackage?.id || null,
    packageName: selectedPackage?.title || "",
    destination: selectedPackage?.location || "",
    duration: selectedPackage?.duration || "",
    price: selectedPackage?.price || "",

    customer: {
      ...formData,
    },

    status: "New",

    createdAt: new Date().toISOString(),
  };

  console.log(enquiry);

  alert(
    `Enquiry Submitted Successfully!\n\nYour Enquiry ID: ${enquiryId}`
  );
};

  return (
    <section className="py-16 md:py-24 bg-slate-50">

      <div className="max-w-6xl mx-auto px-6">

        {selectedPackage && (
          <SelectedPackageCard packageData={selectedPackage} />
        )}

        <div className="text-center mb-14">

          <span className="uppercase tracking-[5px] text-blue-900 font-semibold">
            Holiday Enquiry Form
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Tell Us About Your Trip
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
            Complete the form below and our travel experts will prepare the
            best itinerary based on your preferences.
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
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              className="border rounded-xl px-5 py-4 outline-none focus:border-blue-900"
              required
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
              name="departureCity"
              placeholder="Departure City"
              value={formData.departureCity}
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
              name="adults"
              placeholder="Adults"
              value={formData.adults}
              onChange={handleChange}
              className="border rounded-xl px-5 py-4 outline-none focus:border-blue-900"
            />

            <input
              type="number"
              name="children"
              placeholder="Children"
              value={formData.children}
              onChange={handleChange}
              className="border rounded-xl px-5 py-4 outline-none focus:border-blue-900"
            />

            <input
              type="number"
              name="rooms"
              placeholder="Rooms Required"
              value={formData.rooms}
              onChange={handleChange}
              className="border rounded-xl px-5 py-4 outline-none focus:border-blue-900"
            />

            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="border rounded-xl px-5 py-4 outline-none focus:border-blue-900"
            >
              <option value="">Select Budget</option>
              <option>Under ₹20,000</option>
              <option>₹20,000 - ₹50,000</option>
              <option>₹50,000 - ₹1,00,000</option>
              <option>Above ₹1,00,000</option>
            </select>

            <select
              name="hotelCategory"
              value={formData.hotelCategory}
              onChange={handleChange}
              className="border rounded-xl px-5 py-4 outline-none focus:border-blue-900"
            >
              <option value="">Hotel Category</option>
              <option>3 Star</option>
              <option>4 Star</option>
              <option>5 Star</option>
              <option>Luxury</option>
            </select>

            <select
              name="transport"
              value={formData.transport}
              onChange={handleChange}
              className="border rounded-xl px-5 py-4 outline-none focus:border-blue-900"
            >
              <option value="">Transport Preference</option>
              <option>Flight</option>
              <option>Train</option>
              <option>Bus</option>
              <option>Own Vehicle</option>
            </select>

            <textarea
              rows="6"
              name="message"
              placeholder="Special Requirements..."
              value={formData.message}
              onChange={handleChange}
              className="border rounded-xl px-5 py-4 md:col-span-2 resize-none outline-none focus:border-blue-900"
            />

          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-blue-900 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold text-lg transition"
          >
            Submit Enquiry
          </button>

        </form>

      </div>

    </section>
  );
}

export default EnquiryForm;