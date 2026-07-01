import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import SectionTitle from "../components/SectionTitle";
import PackageCard from "../components/PackageCard";
import packages from "../data/Packages";

function Home() {
  return (
    <>
      {/* Hero Section */}

      <section className="h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white flex items-center justify-center">
        <div className="text-center max-w-4xl px-6">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Explore The World
            <br />
            With Confidence
          </h1>

          <p className="mt-8 text-xl text-gray-200">
            Luxury Tours • Honeymoon Packages • Family Holidays • Corporate
            Travel
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <Button text="Explore Packages" />

            <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
              Get Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Search Bar */}

      <SearchBar />

      {/* Popular Packages */}

      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Popular Packages"
            subtitle="Handpicked destinations for every traveler."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                image={pkg.image}
                title={pkg.title}
                location={pkg.location}
                price={pkg.price}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;