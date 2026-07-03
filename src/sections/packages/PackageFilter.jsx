import { FaSearch, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

function PackageFilter() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <div className="grid lg:grid-cols-5 gap-6">

            {/* Destination */}
            <div>
              <label className="text-sm font-semibold text-gray-600">
                Destination
              </label>

              <div className="flex items-center border rounded-xl mt-2 px-4">

                <FaMapMarkerAlt className="text-blue-900" />

                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="w-full p-4 outline-none"
                />

              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="text-sm font-semibold text-gray-600">
                Duration
              </label>

              <select className="border rounded-xl p-4 w-full mt-2">
                <option>Select Duration</option>
                <option>2-4 Days</option>
                <option>5-7 Days</option>
                <option>7+ Days</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="text-sm font-semibold text-gray-600">
                Budget
              </label>

              <select className="border rounded-xl p-4 w-full mt-2">
                <option>Select Budget</option>
                <option>₹10k - ₹20k</option>
                <option>₹20k - ₹40k</option>
                <option>₹40k+</option>
              </select>
            </div>

            {/* Travel Date */}
            <div>
              <label className="text-sm font-semibold text-gray-600">
                Travel Date
              </label>

              <div className="flex items-center border rounded-xl mt-2 px-4">

                <FaCalendarAlt className="text-blue-900" />

                <input
                  type="date"
                  className="w-full p-4 outline-none"
                />

              </div>
            </div>

            {/* Button */}
            <div className="flex items-end">

              <button className="bg-blue-900 hover:bg-blue-800 text-white rounded-xl w-full py-4 font-semibold flex justify-center items-center gap-2 transition">

                <FaSearch />

                Search

              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default PackageFilter;