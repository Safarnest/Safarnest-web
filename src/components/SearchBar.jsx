function SearchBar() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl p-6">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

            <input
              type="text"
              placeholder="Destination"
              className="border border-gray-300 rounded-xl p-4 outline-none focus:border-blue-900"
            />

            <input
              type="date"
              className="border border-gray-300 rounded-xl p-4 outline-none focus:border-blue-900"
            />

            <input
              type="number"
              placeholder="Guests"
              className="border border-gray-300 rounded-xl p-4 outline-none focus:border-blue-900"
            />

            <button className="bg-blue-900 text-white rounded-xl font-semibold hover:bg-blue-800 transition">
              Search
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default SearchBar;