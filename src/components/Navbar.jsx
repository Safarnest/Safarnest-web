import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Packages", href: "#packages" },
    { name: "Destinations", href: "#destinations" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

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
        <ul className="hidden md:flex gap-10 font-semibold">

          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="relative text-gray-700 hover:text-blue-900 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            </li>
          ))}

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

          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 hover:bg-blue-50 hover:text-blue-900 transition"
            >
              {item.name}
            </a>
          ))}

        </div>
      )}
    </nav>
  );
}

export default Navbar;