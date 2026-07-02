function PackageCard({ image, title, location, price }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group cursor-pointer">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-3xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-3 text-gray-500 flex items-center gap-2">
          📍 {location}
        </p>

        <div className="mt-6 flex justify-between items-center">

          <div>
            <p className="text-sm text-gray-500">
              Starting From
            </p>

            <h4 className="text-3xl font-bold text-blue-900">
              ₹ {price}
            </h4>
          </div>

          <button className="bg-yellow-400 hover:bg-yellow-500 px-5 py-3 rounded-xl font-semibold transition">
            View
          </button>

        </div>

      </div>

    </div>
  );
}

export default PackageCard;