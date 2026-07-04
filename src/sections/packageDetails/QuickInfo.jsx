import {
  FaHotel,
  FaUtensils,
  FaBus,
  FaClock,
} from "react-icons/fa";

function QuickInfo({ packageData }) {
  const info = [
    {
      icon: <FaHotel />,
      title: "Hotel",
      value: packageData.hotel,
    },
    {
      icon: <FaUtensils />,
      title: "Meals",
      value: packageData.meals,
    },
    {
      icon: <FaBus />,
      title: "Transport",
      value: packageData.transport,
    },
    {
      icon: <FaClock />,
      title: "Duration",
      value: packageData.duration,
    },
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {info.map((item, index) => (

            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-8 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >

              <div className="text-4xl text-blue-900">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {item.value}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default QuickInfo;