import SectionTitle from "../components/SectionTitle";
import DestinationCard from "../components/DestinationCard";
import destinations from "../data/destinations";

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
              image={item.image}
              title={item.title}
              tours={item.tours}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default PopularDestinations;