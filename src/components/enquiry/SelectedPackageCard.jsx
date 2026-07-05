import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaRupeeSign,
  FaArrowLeft,
} from "react-icons/fa";

function SelectedPackageCard({ packageData }) {
  if (!packageData) return null;

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-10">

      <div className="grid lg:grid-cols-2">

        {/* Image */}

        <img
          src={packageData.image}
          alt={packageData.title}
          className="w-full h-full min-h-[320px] object-cover"
        />

        {/* Content */}

        <div className="p-8 flex flex-col justify-between">

          <div>

            <span className="uppercase tracking-[4px] text-blue-900 font-semibold">
              Selected Package
            </span>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              {packageData.title}
            </h2>

            <div className="mt-8 space-y-5">

              <div className="flex items-center gap-3">

                <FaMapMarkerAlt className="text-blue-900" />

                <span>{packageData.location}</span>

              </div>

              <div className="flex items-center gap-3">

                <FaClock className="text-blue-900" />

                <span>{packageData.duration}</span>

              </div>

              <div className="flex items-center gap-3">

                <FaStar className="text-yellow-500" />

                <span>
                  {packageData.rating} ({packageData.reviews} Reviews)
                </span>

              </div>

              <div className="flex items-center gap-3">

                <FaRupeeSign className="text-green-600" />

                <span className="text-3xl font-bold text-green-600">
                  {packageData.price.toLocaleString()}
                </span>

              </div>

            </div>

          </div>

          <div className="mt-10">

            <Link
              to={`/packages/${packageData.slug}`}
              className="inline-flex items-center gap-3 bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              <FaArrowLeft />

              Back to Package

            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SelectedPackageCard;