import DestinationCard from "../cards/DestinationCard";

const destinations = [
  {
    name: "Kashmir",
    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800",
    price: "₹14,999",
    rating: "4.9",
    description:
      "Paradise on Earth with breathtaking valleys and mountains.",
  },
  {
    name: "Goa",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
    price: "₹9,999",
    rating: "4.8",
    description:
      "Beautiful beaches, nightlife and unforgettable holidays.",
  },
  {
    name: "Himachal Pradesh",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
    price: "₹12,999",
    rating: "4.8",
    description:
      "Snow mountains, adventure and peaceful landscapes.",
  },
  {
    name: "Kerala",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
    price: "₹15,999",
    rating: "4.9",
    description:
      "Backwaters, houseboats and lush green nature.",
  },
  {
    name: "Rajasthan",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",
    price: "₹11,999",
    rating: "4.7",
    description:
      "Royal palaces, forts and rich cultural heritage.",
  },
  {
    name: "Uttarakhand",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
    price: "₹10,999",
    rating: "4.8",
    description:
      "Spiritual destinations and Himalayan adventures.",
  },
];

function PopularDestinations() {
  return (
    <section className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="uppercase tracking-[5px] text-blue-900 font-semibold">
            Popular Destinations
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Explore Our Top Destinations
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
            Handpicked destinations loved by thousands of travellers across
            India.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {destinations.map((item, index) => (
            <DestinationCard
              key={index}
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default PopularDestinations;