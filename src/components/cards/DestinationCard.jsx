function DestinationCard({
  image,
  name,
  description,
  price,
  rating,
}) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-2xl transition duration-300 hover:-translate-y-2">

      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">

        <div className="flex justify-between items-center">

          <h3 className="text-2xl font-bold">
            {name}
          </h3>

          <span className="bg-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
            ⭐ {rating}
          </span>

        </div>

        <p className="mt-4 text-gray-600 leading-7">
          {description}
        </p>

        <div className="mt-6 flex justify-between items-center">

          <div>

            <p className="text-sm text-gray-500">
              Starting From
            </p>

            <h4 className="text-2xl font-bold text-blue-900">
              {price}
            </h4>

          </div>

          <button className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-3 rounded-xl font-semibold transition">
            Explore
          </button>

        </div>

      </div>

    </div>
  );
}

export default DestinationCard;