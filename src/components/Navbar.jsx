import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Safarnest Holidays"
            className="h-14 w-auto"
          />

          <div>
            <h1 className="text-2xl font-bold text-blue-900">
              Safarnest Holidays
            </h1>

            <p className="text-gray-500 text-sm">
              Explore Beyond Expectations
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-medium text-gray-700">
          <li><a href="#home" className="hover:text-blue-900">Home</a></li>
          <li><a href="#packages" className="hover:text-blue-900">Packages</a></li>
          <li><a href="#destinations" className="hover:text-blue-900">Destinations</a></li>
          <li><a href="#about" className="hover:text-blue-900">About</a></li>
          <li><a href="#contact" className="hover:text-blue-900">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-blue-900"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Home
          </a>

          <a
            href="#packages"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Packages
          </a>

          <a
            href="#destinations"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Destinations
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            About
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Contact
          </a>

        </div>
      )}
    </nav>
  );
}

export default Navbar;