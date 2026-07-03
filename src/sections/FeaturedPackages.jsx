import SectionTitle from "../components/SectionTitle";
import PackageCard from "../components/PackageCard";
import packages from "../data/Packages";

function FeaturedPackages() {
  return (
    <section id="packages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Featured Tour Packages"
          subtitle="Best selling holiday packages for your next adventure."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">

          {packages.map((item) => (
            <PackageCard
              key={item.id}
              image={item.image}
              title={item.title}
              location={item.location}
              price={item.price}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedPackages;