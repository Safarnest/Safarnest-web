import SectionTitle from "../../components/common/SectionTitle";
import PackageCard from "../../components/cards/PackageCard";
import packages from "../../data/Packages";

function FeaturedPackages() {
  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Featured Tour Packages"
          subtitle="Handpicked holiday experiences across India and international destinations."
        />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">

          {packages.map((item) => (

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

export default FeaturedPackages;