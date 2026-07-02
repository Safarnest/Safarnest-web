function DestinationCard({ image, title, tours }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer">

      <img
        src={image}
        alt={title}
        className="h-96 w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      <div className="absolute bottom-8 left-6 text-white">

        <h3 className="text-3xl font-bold">
          {title}
        </h3>

        <p className="mt-2 text-lg text-gray-200">
          {tours}
        </p>

      </div>

    </div>
  );
}

export default DestinationCard;