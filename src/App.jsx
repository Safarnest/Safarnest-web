import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";
import Destinations from "./pages/Destinations";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Enquiry from "./pages/Enquiry";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsConditions from "./pages/legal/TermsConditions";
import RefundPolicy from "./pages/legal/RefundPolicy";
import CancellationPolicy from "./pages/legal/CancellationPolicy";
import Disclaimer from "./pages/legal/Disclaimer";

function App() {
  return (
    <BrowserRouter>

  <ScrollToTop />

  <Navbar />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/packages" element={<Packages />} />
    <Route path="/packages/:slug" element={<PackageDetails />} />
    <Route path="/destinations" element={<Destinations />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
    <Route path="/enquiry" element={<Enquiry />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms-conditions" element={<TermsConditions />} />
<Route path="/refund-policy" element={<RefundPolicy />} />
<Route path="/cancellation-policy" element={<CancellationPolicy />} />
<Route path="/disclaimer" element={<Disclaimer />} />
  </Routes>

  <Footer />

  <WhatsAppButton />

</BrowserRouter>
  );
}

export default App;