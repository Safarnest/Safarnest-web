import PackageCard from "../../components/PackageCard";
import packages from "../../data/Packages";

function RelatedPackages() {
  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-blue-900">
            Similar Packages
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Explore more amazing destinations curated just for you.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {packages.slice(0, 3).map((item) => (
            <PackageCard
              key={item.id}
              image={item.image}
              title={item.title}
              location={item.location}
              price={item.price}
              duration={item.duration}
              hotel={item.hotel}
              meals={item.meals}
              transport={item.transport}
              rating={item.rating}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default RelatedPackages;