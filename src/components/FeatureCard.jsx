function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl duration-300 text-center">
      <div className="text-5xl mb-4">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;