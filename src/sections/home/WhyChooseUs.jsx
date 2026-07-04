import SectionTitle from "../../components/common/SectionTitle";
import FeatureCard from "../../components/cards/FeatureCard";
import features from "../../data/features";

function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Why Choose Safarnest?"
          subtitle="Travel with confidence and comfort."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {features.map((item, index) => (
            <FeatureCard
              key={index}
              {...item}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;