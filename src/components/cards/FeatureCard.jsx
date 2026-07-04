function FeatureCard({ icon, title, description }) {
  return (
    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 text-center cursor-pointer border border-transparent hover:border-blue-100">

      <div className="text-6xl mb-6 transition-transform duration-500 group-hover:scale-125">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-8">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;