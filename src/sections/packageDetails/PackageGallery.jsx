function PackageGallery({ packageData }) {
  return (
    <section className="py-24 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-blue-900 text-center">
          Tour Gallery
        </h2>

        <p className="mt-5 text-center text-gray-600 text-lg">
          Explore beautiful moments from {packageData.title}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {packageData.gallery.map((image, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg group"
            >

              <img
                src={image}
                alt={`${packageData.title} ${index + 1}`}
                className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default PackageGallery;