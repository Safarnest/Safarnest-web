import {
  FaFacebook,FaInstagram,FaLinkedin,FaYoutube,FaWhatsapp,
  FaMapMarkerAlt,FaPhoneAlt,FaEnvelope,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer(){
return (
<footer className="bg-slate-900 text-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10">
<div><h2 className="text-3xl font-bold text-yellow-400">Safarnest Holidays</h2><p className="mt-5 text-gray-400 leading-7">Your trusted travel partner for unforgettable holidays across India and international destinations.</p></div>
<div><h3 className="text-xl font-semibold mb-5">Quick Links</h3><ul className="space-y-3 text-gray-400">
<li><Link to="/">Home</Link></li><li><Link to="/packages">Packages</Link></li><li><Link to="/destinations">Destinations</Link></li><li><Link to="/about">About</Link></li><li><Link to="/contact">Contact</Link></li></ul></div>
<div><h3 className="text-xl font-semibold mb-5">Legal</h3><ul className="space-y-3 text-gray-400">
<li><Link to="/privacy-policy">Privacy Policy</Link></li>
<li><Link to="/terms-conditions">Terms & Conditions</Link></li>
<li><Link to="/refund-policy">Refund Policy</Link></li>
<li><Link to="/cancellation-policy">Cancellation Policy</Link></li>
<li><Link to="/disclaimer">Disclaimer</Link></li>
</ul></div>
<div><h3 className="text-xl font-semibold mb-5">Contact Us</h3>
<div className="space-y-4 text-gray-400">
<div className="flex items-center gap-3"><FaMapMarkerAlt className="text-yellow-400"/><span>Delhi, India</span></div>
<div className="flex items-center gap-3"><FaPhoneAlt className="text-yellow-400"/><span>+91 XXXXXXXXXX</span></div>
<div className="flex items-center gap-3"><FaEnvelope className="text-yellow-400"/><span>info@safarnestholidays.com</span></div>
</div></div>
<div><h3 className="text-xl font-semibold mb-5">Follow Us</h3><div className="flex gap-5 text-2xl">
<FaFacebook/><FaInstagram/><FaYoutube/><FaLinkedin/><FaWhatsapp/>
</div></div>
</div>
<hr className="border-gray-700 my-10"/>
<div className="text-center text-gray-500"><p>© 2026 <span className="text-yellow-400 font-semibold">Safarnest Holidays</span>. All Rights Reserved.</p><p className="mt-2">Crafted with ❤️ in India</p></div>
</footer>);
}
export default Footer;
