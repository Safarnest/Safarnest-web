import { FaTimesCircle } from "react-icons/fa";

function Exclusions() {
  const exclusions = [
    "Airfare / Train Tickets",
    "Personal Expenses",
    "Adventure Activities",
    "Travel Insurance",
    "Lunch",
    "Entry Tickets",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-blue-900 mb-10">
          Package Exclusions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {exclusions.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow"
            >
              <FaTimesCircle className="text-red-500 text-2xl" />

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

export default Exclusions;