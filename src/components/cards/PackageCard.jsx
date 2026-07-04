import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStar, FaHotel } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { BsBusFrontFill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";

function PackageCard({
  image,
  title,
  location,
  hotel,
  meals,
  transport,
  rating,
  price,
  slug,
}) {
  console.log({
  title,
  slug,
});
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3">

      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={title}
          className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

        <span className="absolute top-5 left-5 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow">

          Best Seller

        </span>

        <button className="absolute top-5 right-5 bg-white/90 backdrop-blur p-3 rounded-full hover:bg-red-500 hover:text-white transition">

          <FiHeart />

        </button>

        <div className="absolute bottom-5 left-5">

          <span className="bg-green-500 text-white px-3 py-2 rounded-full flex items-center gap-2 text-sm">

            <FaStar />

            {rating}

          </span>

        </div>

      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold text-slate-900">

          {title}

        </h3>

        <div className="mt-3 flex items-center gap-2 text-gray-500">

          <FaMapMarkerAlt />

          {location}

        </div>

        <div className="mt-6 space-y-3 text-gray-600">

          <div className="flex items-center gap-3">

            <FaHotel className="text-blue-900" />

            {hotel}

          </div>

          <div className="flex items-center gap-3">

            <MdRestaurant className="text-blue-900" />

            {meals}

          </div>

          <div className="flex items-center gap-3">

            <BsBusFrontFill className="text-blue-900" />

            {transport}

          </div>

        </div>

        <div className="mt-6 flex justify-between items-center">

          <div>

            <p className="text-gray-500 text-sm">

              Starting From

            </p>

            <h2 className="text-3xl font-bold text-blue-900">

              ₹{price}

              <p className="text-xs text-gray-500 mt-1">
Per Person • Taxes Extra
</p>

            </h2>

            <p className="text-green-600 text-sm">

              Per Person

            </p>

          </div>

          <Link to={`/packages/${slug}`}>

            <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition">

              View Details

            </button>

          </Link>

        </div>

      </div>

    </div>
  );
}

export default PackageCard;