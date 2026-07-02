import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import SectionTitle from "../components/SectionTitle";
import PackageCard from "../components/PackageCard";
import FeatureCard from "../components/FeatureCard";
import DestinationCard from "../components/DestinationCard";

import packages from "../data/Packages";
import features from "../data/features";
import destinations from "../data/destinations";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        data-aos="fade-up"
        className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white pt-28 pb-36"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Explore The World
            <br />
            With Confidence
          </h1>

          <p className="mt-8 text-xl text-gray-200">
            Luxury Tours • Honeymoon Packages • Family Holidays • Corporate
            Travel
          </p>

          <div className="mt-10 flex justify-center gap-6 flex-wrap">
            <Button text="Explore Packages" />
            <Button text="Get Free Quote" secondary />
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <SearchBar />

      {/* Featured Packages */}
      <section
        id="packages"
        data-aos="fade-up"
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Featured Tour Packages"
            subtitle="Best selling holiday packages for your next adventure."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
            {packages.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <PackageCard
                  image={item.image}
                  title={item.title}
                  location={item.location}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        id="about"
        data-aos="fade-up"
        className="py-24 bg-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Why Choose Safarnest?"
            subtitle="Travel with confidence and comfort."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {features.map((item, index) => (
              <div
                key={index}
                data-aos="flip-left"
                data-aos-delay={index * 150}
              >
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section
        id="destinations"
        data-aos="fade-up"
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Popular Destinations"
            subtitle="Explore our most loved destinations."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {destinations.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <DestinationCard
                  image={item.image}
                  title={item.title}
                  tours={item.tours}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;