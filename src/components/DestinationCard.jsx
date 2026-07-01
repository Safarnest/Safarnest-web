function DestinationCard({ image, title, tours }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer">

      <img
        src={image}
        alt={title}
        className="h-96 w-full object-cover group-hover:scale-110 duration-500"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute bottom-6 left-6 text-white">

        <h3 className="text-3xl font-bold">
          {title}
        </h3>

        <p className="mt-2">
          {tours}
        </p>

      </div>

    </div>
  );
}

export default DestinationCard;