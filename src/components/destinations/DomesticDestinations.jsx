import DestinationCard from "../cards/DestinationCard";
import destinations from "../../data/destinations";

function DomesticDestinations() {
  const domesticDestinations = destinations.filter(
    (item) => item.category === "Domestic"
  );

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="uppercase tracking-[5px] text-blue-900 font-semibold">
            Domestic Destinations
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Explore Incredible India
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
            Discover India's most beautiful destinations, from snow-covered
            mountains to tropical beaches and royal heritage cities.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {domesticDestinations.map((item) => (
            <DestinationCard
              key={item.id}
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.startingPrice}
              rating={item.rating}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default DomesticDestinations;