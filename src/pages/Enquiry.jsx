import Hero from "../components/enquiry/Hero";
import EnquirySteps from "../components/enquiry/EnquirySteps";
import Benefits from "../components/enquiry/Benefits";
import EnquiryForm from "../components/enquiry/EnquiryForm";
import FAQ from "../components/enquiry/FAQ";
import CTA from "../components/enquiry/CTA";

function Enquiry() {
  return (
    <>
      <Hero />
      <EnquirySteps />
      <Benefits />
      <EnquiryForm />
      <FAQ />
      <CTA />
    </>
  );
}

export default Enquiry;