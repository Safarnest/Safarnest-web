import Hero from "../components/destinations/Hero";
import SearchBar from "../components/destinations/SearchBar";
import PopularDestinations from "../components/destinations/PopularDestinations";
import DomesticDestinations from "../components/destinations/DomesticDestinations";
import InternationalDestinations from "../components/destinations/InternationalDestinations";
import WhyChoose from "../components/destinations/WhyChoose";
import FAQ from "../components/destinations/FAQ";
import CTA from "../components/destinations/CTA";

function Destinations() {
  return (
    <>
      <Hero />
      <SearchBar />
      <PopularDestinations />
      <DomesticDestinations />
      <InternationalDestinations />
      <WhyChoose />
      <FAQ />
      <CTA />
    </>
  );
}

export default Destinations;