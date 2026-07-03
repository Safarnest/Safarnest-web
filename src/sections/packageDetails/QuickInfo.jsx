import {
  FaHotel,
  FaUtensils,
  FaBus,
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function QuickInfo() {
  const info = [
    {
      icon: <FaHotel />,
      title: "Hotel",
      value: "4 Star Premium Stay",
    },
    {
      icon: <FaUtensils />,
      title: "Meals",
      value: "Breakfast & Dinner",
    },
    {
      icon: <FaBus />,
      title: "Transport",
      value: "Volvo Included",
    },
    {
      icon: <FaUsers />,
      title: "Group Size",
      value: "2 - 20 People",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Duration",
      value: "5 Nights / 6 Days",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Pickup",
      value: "Delhi",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-blue-900 mb-12">
          Quick Information
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {info.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-xl transition"
            >
              <div className="text-4xl text-blue-900 mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600">
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