import Hero from "../sections/home/Hero";
import SearchSection from "../sections/home/SearchSection";
import PopularDestinations from "../sections/home/PopularDestinations";
import FeaturedPackages from "../sections/home/FeaturedPackages";
import WhyChooseUs from "../sections/home/WhyChooseUs";
import StatsSection from "../sections/home/StatsSection";
import TestimonialsSection from "../sections/home/TestimonialsSection";
import CTASection from "../sections/home/CTASection";

function Home() {
  return (
    <>
      <Hero />
      <SearchSection />
      <PopularDestinations />
      <FeaturedPackages />
      <WhyChooseUs />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

export default Home;