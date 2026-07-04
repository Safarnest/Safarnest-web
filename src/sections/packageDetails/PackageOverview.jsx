import {
  FaMapMarkedAlt,
  FaHotel,
  FaBus,
  FaUtensils,
} from "react-icons/fa";

function PackageOverview({ packageData }) {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left */}

          <div>

            <h2 className="text-5xl font-bold text-blue-900">
              Package Overview
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-9">
              {packageData.overview}
            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">

              <div className="bg-slate-100 rounded-2xl p-6">

                <FaHotel className="text-4xl text-blue-900" />

                <h3 className="mt-4 font-bold">
                  {packageData.hotel}
                </h3>

              </div>

              <div className="bg-slate-100 rounded-2xl p-6">

                <FaBus className="text-4xl text-blue-900" />

                <h3 className="mt-4 font-bold">
                  {packageData.transport}
                </h3>

              </div>

              <div className="bg-slate-100 rounded-2xl p-6">

                <FaUtensils className="text-4xl text-blue-900" />

                <h3 className="mt-4 font-bold">
                  {packageData.meals}
                </h3>

              </div>

              <div className="bg-slate-100 rounded-2xl p-6">

                <FaMapMarkedAlt className="text-4xl text-blue-900" />

                <h3 className="mt-4 font-bold">
                  {packageData.location}
                </h3>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="bg-blue-900 rounded-3xl p-10 text-white">

            <h2 className="text-4xl font-bold">
              Tour Highlights
            </h2>

            <ul className="mt-8 space-y-5 text-lg">

              {packageData.highlights.map((item, index) => (

                <li key={index}>
                  ✔ {item}
                </li>

              ))}

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}

export default PackageOverview;