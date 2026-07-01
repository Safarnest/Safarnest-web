function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        <h1 className="text-2xl font-bold text-blue-900">
          Safarnest Holidays
        </h1>

        <ul className="flex gap-8 font-medium">
          <li>Home</li>
          <li>Packages</li>
          <li>Destinations</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;