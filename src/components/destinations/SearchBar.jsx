import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

function SearchBar() {
  return (
    <section className="bg-white py-12 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

            {/* Destination */}

            <div className="relative">

              <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-900" />

              <input
                type="text"
                placeholder="Search Destination..."
                className="w-full border rounded-xl pl-12 pr-4 py-4 outline-none focus:ring-2 focus:ring-blue-800"
              />

            </div>

            {/* Travel Type */}

            <select className="border rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-blue-800">

              <option>All Categories</option>

              <option>Family Tour</option>

              <option>Honeymoon</option>

              <option>Adventure</option>

              <option>Luxury</option>

              <option>Group Tour</option>

            </select>

            {/* Budget */}

            <select className="border rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-blue-800">

              <option>Budget</option>

              <option>Under ₹20,000</option>

              <option>₹20,000 - ₹50,000</option>

              <option>₹50,000 - ₹1,00,000</option>

              <option>Above ₹1,00,000</option>

            </select>

            {/* Search Button */}

            <button className="flex items-center justify-center gap-3 bg-blue-900 hover:bg-blue-800 text-white rounded-xl font-semibold transition py-4">

              <FaSearch />

              Search Destinations

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default SearchBar;