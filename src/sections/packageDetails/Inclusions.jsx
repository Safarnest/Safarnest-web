import { FaCheckCircle } from "react-icons/fa";

function Inclusions() {
  const inclusions = [
    "Luxury Hotel Accommodation",
    "Daily Breakfast & Dinner",
    "Delhi to Manali Volvo Tickets",
    "Local Sightseeing",
    "Solang Valley Excursion",
    "All Toll Taxes & Parking",
    "Driver Allowance",
    "24×7 Customer Support",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-blue-900 mb-10">
          Package Inclusions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {inclusions.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl shadow"
            >
              <FaCheckCircle className="text-green-600 text-2xl" />

              <span className="text-lg">
                {item}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Inclusions;