import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="Safarnest Holidays"
            className="h-20 w-auto"
          />

          <div>
            <h1 className="text-2xl font-bold text-blue-900">
              Safarnest Holidays
            </h1>

            <p className="text-xs tracking-wider text-gray-500">
              Explore Beyond Expectations
            </p>
          </div>

        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-blue-900 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#packages"
              className="hover:text-blue-900 transition duration-300"
            >
              Packages
            </a>
          </li>

          <li>
            <a
              href="#destinations"
              className="hover:text-blue-900 transition duration-300"
            >
              Destinations
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-blue-900 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-blue-900 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;