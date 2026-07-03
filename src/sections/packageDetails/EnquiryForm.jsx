function EnquiryForm() {
  return (
    <section className="py-24 bg-blue-900 text-white">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Plan Your Trip
        </h2>

        <p className="text-center mt-4 text-gray-300">
          Fill out the form and our travel expert will contact you shortly.
        </p>

        <form className="grid md:grid-cols-2 gap-6 mt-12">

          <input
            type="text"
            placeholder="Full Name"
            className="p-4 rounded-xl text-black"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="p-4 rounded-xl text-black"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="p-4 rounded-xl text-black"
          />

          <input
            type="date"
            className="p-4 rounded-xl text-black"
          />

          <input
            type="number"
            placeholder="Number of Travelers"
            className="p-4 rounded-xl text-black md:col-span-2"
          />

          <textarea
            rows="5"
            placeholder="Tell us about your travel plan..."
            className="p-4 rounded-xl text-black md:col-span-2"
          />

          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-xl md:col-span-2 transition"
          >
            Get Free Quote
          </button>

        </form>

      </div>

    </section>
  );
}

export default EnquiryForm;