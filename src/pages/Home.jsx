import Hero from "../sections/Hero";
import SearchSection from "../sections/SearchSection";
import FeaturedPackages from "../sections/FeaturedPackages";
import WhyChooseUs from "../sections/WhyChooseUs";
import PopularDestinations from "../sections/PopularDestinations";
import StatsSection from "../sections/StatsSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import NewsletterSection from "../sections/NewsletterSection";

function Home() {
  return (
    <>
      <Hero />
      <SearchSection />
      <FeaturedPackages />
      <WhyChooseUs />
      <PopularDestinations />
      <StatsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}

export default Home;