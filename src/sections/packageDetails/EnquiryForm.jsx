function EnquiryForm() {

  return (

    <section className="py-24 bg-blue-900">

      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-white rounded-3xl p-10 shadow-2xl">

          <h2 className="text-5xl font-bold text-blue-900 text-center">

            Request A Free Quote

          </h2>

          <p className="text-center text-gray-600 mt-5">

            Fill the form and our travel expert will contact you shortly.

          </p>

          <form className="mt-12 grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-600 md:col-span-2"
            />

            <input
              type="date"
              className="border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="number"
              placeholder="Number of Travellers"
              className="border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-600"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-600 md:col-span-2"
            />

            <button
              className="bg-yellow-400 hover:bg-yellow-500 rounded-xl py-4 font-bold text-lg md:col-span-2 transition"
            >

              Get Free Quote

            </button>

          </form>

        </div>

      </div>

    </section>

  );
}

export default EnquiryForm;