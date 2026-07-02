import { useEffect } from "react";
import AOS from "aos";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Stats />
      <Testimonials />
      <Newsletter />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}

export default App;