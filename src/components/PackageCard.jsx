function PackageCard({ image, title, location, price }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">

      <img
        src={image}
        alt={title}
        className="h-60 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="text-gray-500 mt-2">
          📍 {location}
        </p>

        <div className="mt-5 flex justify-between items-center">

          <span className="text-blue-900 text-xl font-bold">
            ₹ {price}
          </span>

          <button className="bg-blue-900 text-white px-5 py-2 rounded-xl">
            View
          </button>

        </div>

      </div>

    </div>
  );
}

export default PackageCard;