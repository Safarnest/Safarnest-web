import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaSearch,
} from "react-icons/fa";

function SearchBar() {
  return (
    <div className="backdrop-blur-xl bg-white/90 rounded-3xl shadow-2xl border border-white/40 p-8">

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

        {/* Destination */}

        <div>

          <label className="text-sm font-semibold text-gray-500">
            Destination
          </label>

          <div className="mt-2 flex items-center gap-3 border rounded-xl px-4 py-4 focus-within:border-blue-700 transition">

            <FaMapMarkerAlt className="text-blue-900" />

            <input
              type="text"
              placeholder="Where do you want to go?"
              className="w-full outline-none bg-transparent"
            />

          </div>

        </div>

        {/* Date */}

        <div>

          <label className="text-sm font-semibold text-gray-500">
            Travel Date
          </label>

          <div className="mt-2 flex items-center gap-3 border rounded-xl px-4 py-4">

            <FaCalendarAlt className="text-blue-900" />

            <input
              type="date"
              className="w-full outline-none bg-transparent"
            />

          </div>

        </div>

        {/* Guests */}

        <div>

          <label className="text-sm font-semibold text-gray-500">
            Travelers
          </label>

          <div className="mt-2 flex items-center gap-3 border rounded-xl px-4 py-4">

            <FaUsers className="text-blue-900" />

            <input
              type="number"
              placeholder="Guests"
              className="w-full outline-none bg-transparent"
            />

          </div>

        </div>

        {/* Button */}

        <div className="flex items-end">

          <button className="w-full bg-blue-900 hover:bg-blue-800 text-white rounded-xl py-4 font-semibold text-lg transition duration-300 flex justify-center items-center gap-3 shadow-lg hover:shadow-xl">

            <FaSearch />

            Search Packages

          </button>

        </div>

      </div>

    </div>
  );
}

export default SearchBar;