import DestinationCard from "../cards/DestinationCard";
import destinations from "../../data/destinations";

function InternationalDestinations() {
  const internationalDestinations = destinations.filter(
    (item) => item.category === "International"
  );

  return (
    <section className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="uppercase tracking-[5px] text-blue-900 font-semibold">
            International Destinations
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Explore The World With Safarnest
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
            Experience world-famous destinations with premium international
            holiday packages carefully curated by Safarnest Holidays.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {internationalDestinations.map((item) => (
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

export default InternationalDestinations;