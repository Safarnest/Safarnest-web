import PackageCard from "../../components/PackageCard";
import packages from "../../data/Packages";

function PackageGrid() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {packages.map((item) => (
            <PackageCard
            slug={item.slug}
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

export default PackageGrid;