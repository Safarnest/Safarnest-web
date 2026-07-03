import { Link } from "react-router-dom";

function PackageCard({
  image,
  title,
  location,
  price,
  duration,
  hotel,
  meals,
  transport,
  rating,
  slug,
}) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100">

      {/* Image */}
      <div className="relative overflow-hidden">

        <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-4 py-2 rounded-full z-10 shadow">
          ⭐ Best Seller
        </span>

        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />

      </div>

      {/* Content */}
      <div className="p-6">

        {/* Rating & Duration */}
        <div className="flex justify-between items-center mb-4">

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            ⭐ {rating}
          </span>

          <span className="text-gray-500 text-sm font-medium">
            ⏳ {duration}
          </span>

        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900">
          {title}
        </h3>

        {/* Location */}
        <p className="mt-2 text-gray-500 flex items-center gap-2">
          📍 {location}
        </p>

        {/* Package Details */}
        <div className="mt-6 space-y-3 text-gray-600 text-sm">

          <div className="flex items-center gap-2">
            🏨 <span>{hotel}</span>
          </div>

          <div className="flex items-center gap-2">
            🍽️ <span>{meals}</span>
          </div>

          <div className="flex items-center gap-2">
            🚌 <span>{transport}</span>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t my-6"></div>

        {/* Price */}
        <div className="flex justify-between items-center">

          <div>

            <p className="text-sm text-gray-500">
              Starting From
            </p>

            <h4 className="text-3xl font-bold text-blue-900">
              ₹ {price}
            </h4>

            <p className="text-green-600 text-sm font-medium">
              Per Person
            </p>

          </div>

          <Link to={`/packages/${slug}`}>
  <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition duration-300">
    View Details
  </button>
</Link>

        </div>

      </div>

    </div>
  );
}

export default PackageCard;