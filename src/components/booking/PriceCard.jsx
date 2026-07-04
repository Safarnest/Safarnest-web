import {
  FaStar,
  FaBolt,
  FaUsers,
  FaCreditCard,
} from "react-icons/fa";

function PriceCard({ packageData }) {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-3xl p-8 shadow-2xl">

      {/* Badge */}

      <div className="flex justify-between items-center">

        <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">

          {packageData.bestseller ? "⭐ Best Seller" : "Popular"}

        </span>

        <span className="text-sm text-gray-300">

          {packageData.category}

        </span>

      </div>

      {/* Price */}

      <div className="mt-8">

        <p className="text-gray-300">
          Starting From
        </p>

        <div className="flex items-end gap-3 mt-2">

          <h2 className="text-5xl font-extrabold text-yellow-400">

            ₹{packageData.price.toLocaleString("en-IN")}

          </h2>

          <span className="line-through text-gray-400">

            ₹{packageData.originalPrice.toLocaleString("en-IN")}

          </span>

        </div>

        <p className="text-green-400 mt-2 font-semibold">

          Save {packageData.discount}%

        </p>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 gap-4 mt-8">

        <div className="bg-white/10 rounded-2xl p-4">

          <FaStar className="text-yellow-400 mb-2" />

          <h3 className="font-bold">

            {packageData.rating}

          </h3>

          <p className="text-sm text-gray-300">

            Rating

          </p>

        </div>

        <div className="bg-white/10 rounded-2xl p-4">

          <FaUsers className="text-green-400 mb-2" />

          <h3 className="font-bold">

            {packageData.reviews}+

          </h3>

          <p className="text-sm text-gray-300">

            Reviews

          </p>

        </div>

      </div>

      {/* Offers */}

      <div className="mt-8 space-y-4">

        <div className="flex items-center gap-3">

          <FaBolt className="text-yellow-400" />

          <span>

            Only {packageData.seatsLeft} Seats Left

          </span>

        </div>

        {packageData.emiAvailable && (

          <div className="flex items-center gap-3">

            <FaCreditCard className="text-green-400" />

            <span>

              EMI Available

            </span>

          </div>

        )}

      </div>

    </div>
  );
}

export default PriceCard;