import Hero from "../components/contact/Hero";
import ContactCards from "../components/contact/ContactCards";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";
import FAQ from "../components/contact/FAQ";
import CTA from "../components/contact/CTA";
import FloatingWhatsapp from "../components/contact/FloatingWhatsapp";

function Contact() {
  return (
    <>
      <Hero />
      <ContactCards />
      <ContactForm />
      <Map />
      <FAQ />
      <CTA />
      <FloatingWhatsapp />
    </>
  );
}

export default Contact;