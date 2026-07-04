import PackageCard from "../../components/cards/PackageCard";
import packages from "../../data/packages";

function RelatedPackages({ currentSlug }) {
  const relatedPackages = packages
    .filter((item) => item.slug !== currentSlug)
    .slice(0, 6);

  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-blue-900">
            Similar Packages
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            You may also like these amazing holiday packages.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {relatedPackages.map((item) => (

            <PackageCard
              key={item.id}
              image={item.image}
              title={item.title}
              location={item.location}
              duration={item.duration}
              hotel={item.hotel}
              meals={item.meals}
              transport={item.transport}
              rating={item.rating}
              price={item.price}
              slug={item.slug}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default RelatedPackages;