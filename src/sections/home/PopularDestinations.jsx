import SectionTitle from "../../components/common/SectionTitle";
import DestinationCard from "../../components/cards/DestinationCard";
import destinations from "../../data/destinations";

function PopularDestinations() {
  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Popular Destinations"
          subtitle="Explore our most loved destinations."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {destinations.map((item) => (
            <DestinationCard
              key={item.id}
              {...item}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default PopularDestinations;