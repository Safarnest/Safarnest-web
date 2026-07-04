function Itinerary({ packageData }) {
  return (
    <section className="py-24 bg-slate-100">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold text-blue-900">
          Day Wise Itinerary
        </h2>

        <p className="text-center text-gray-600 mt-5">
          {packageData.title} - Complete Travel Plan
        </p>

        <div className="mt-20 space-y-10">

          {packageData.itinerary.map((item) => (

            <div
              key={item.day}
              className="flex gap-8"
            >

              {/* Day Circle */}

              <div>

                <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-black">

                  {item.day}

                </div>

              </div>

              {/* Content */}

              <div className="bg-white rounded-3xl shadow-lg p-8 flex-1">

                <h3 className="text-2xl font-bold text-blue-900">

                  {item.title}

                </h3>

                <p className="mt-4 text-gray-600 leading-8">

                  {item.description}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Itinerary;