import { FaTimesCircle } from "react-icons/fa";

function Exclusions({ packageData }) {
  return (
    <section className="py-24 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-blue-900 text-center">
          Package Exclusions
        </h2>

        <p className="text-center text-gray-600 mt-5 text-lg">
          The following services are not included.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {packageData.exclusions.map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-5 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >

              <FaTimesCircle className="text-3xl text-red-500" />

              <p className="text-lg">
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Exclusions;