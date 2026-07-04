import { FaCheckCircle } from "react-icons/fa";

function Inclusions({ packageData }) {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-blue-900 text-center">
          Package Inclusions
        </h2>

        <p className="text-center text-gray-600 mt-5 text-lg">
          Everything included in your holiday package.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {packageData.inclusions.map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-5 bg-slate-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >

              <FaCheckCircle className="text-3xl text-green-600" />

              <p className="text-lg font-medium">
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Inclusions;