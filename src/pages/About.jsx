import {
  FaGlobeAsia,
  FaHandshake,
  FaHeart,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

function About() {
  return (
    <>

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-28">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="uppercase tracking-[6px] text-yellow-400 font-semibold">

            About Safarnest Holidays

          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-6 leading-tight">

            Creating Memorable Journeys Across India & Beyond

          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-blue-100 leading-8">

            Safarnest Holidays is committed to delivering premium travel
            experiences with trusted hotels, verified transport partners,
            professional planning and unforgettable holiday memories for every
            traveller.

          </p>

        </div>

      </section>

      {/* Company Story */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="text-blue-900 font-bold uppercase tracking-widest">

              Our Story

            </span>

            <h2 className="text-5xl font-bold mt-4 text-slate-900">

              More Than A Travel Company

            </h2>

            <p className="mt-8 text-gray-600 leading-9">

              Safarnest Holidays was created with a simple vision — to make
              travel easier, transparent and memorable for everyone.

            </p>

            <p className="mt-6 text-gray-600 leading-9">

              We believe every journey should be planned with care, executed
              professionally and remembered forever. Whether it's a honeymoon,
              family vacation, group tour or corporate trip, our mission is to
              provide a seamless experience from booking to return.

            </p>

            <p className="mt-6 text-gray-600 leading-9">

              Our long-term goal is to build one of India's most trusted travel
              brands through technology, customer satisfaction and quality
              service.

            </p>

          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">

  <div className="bg-blue-50 rounded-3xl p-6 md:p-8 shadow text-center min-h-[220px] flex flex-col justify-center">
    <FaMapMarkedAlt className="text-4xl md:text-5xl text-blue-900 mx-auto" />

    <h3 className="text-3xl md:text-4xl font-bold mt-5">
      500+
    </h3>

    <p className="mt-2 text-gray-600 text-sm md:text-base leading-6">
      Destinations Planned
    </p>
  </div>

  <div className="bg-yellow-50 rounded-3xl p-6 md:p-8 shadow text-center min-h-[220px] flex flex-col justify-center">
    <FaUsers className="text-4xl md:text-5xl text-yellow-500 mx-auto" />

    <h3 className="text-xl md:text-3xl font-bold mt-5 leading-tight">
      Happy <br />
      Travelers
    </h3>

    <p className="mt-2 text-gray-600 text-sm md:text-base leading-6">
      Growing Every Day
    </p>
  </div>

  <div className="bg-green-50 rounded-3xl p-6 md:p-8 shadow text-center min-h-[220px] flex flex-col justify-center">
    <FaShieldAlt className="text-4xl md:text-5xl text-green-600 mx-auto" />

    <h3 className="text-xl md:text-3xl font-bold mt-5 leading-tight">
      Trusted
    </h3>

    <p className="mt-2 text-gray-600 text-sm md:text-base leading-6">
      Verified Travel Partners
    </p>
  </div>

  <div className="bg-red-50 rounded-3xl p-6 md:p-8 shadow text-center min-h-[220px] flex flex-col justify-center">
    <FaHeart className="text-4xl md:text-5xl text-red-500 mx-auto" />

    <h3 className="text-xl md:text-3xl font-bold mt-5 leading-tight">
      Customer <br />
      First
    </h3>

    <p className="mt-2 text-gray-600 text-sm md:text-base leading-6">
      Every Journey Matters
    </p>
  </div>

</div>

        </div>

      </section>

      {/* Mission Vision */}

      <section className="py-24 bg-slate-100">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl p-10 shadow-lg">

            <h2 className="text-4xl font-bold text-blue-900">

              Our Mission

            </h2>

            <p className="mt-6 text-gray-600 leading-9">

              To deliver safe, affordable and unforgettable travel experiences
              through trusted partnerships, innovative technology and
              exceptional customer service.

            </p>

          </div>

          <div className="bg-white rounded-3xl p-10 shadow-lg">

            <h2 className="text-4xl font-bold text-blue-900">

              Our Vision

            </h2>

            <p className="mt-6 text-gray-600 leading-9">

              To become one of India's most trusted travel companies and build
              a global travel ecosystem connecting travellers, hotels,
              transport providers and destinations through technology.

            </p>

          </div>

        </div>

      </section>

      {/* Why Choose */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl text-center font-bold text-blue-900">

            Why Choose Safarnest?

          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            <div className="bg-slate-50 rounded-3xl p-10 shadow hover:shadow-xl transition">

              <FaHandshake className="text-5xl text-blue-900" />

              <h3 className="text-2xl font-bold mt-6">

                Trusted Partners

              </h3>

              <p className="mt-4 text-gray-600 leading-8">

                Carefully selected hotels, transport providers and travel
                partners.

              </p>

            </div>

            <div className="bg-slate-50 rounded-3xl p-10 shadow hover:shadow-xl transition">

              <FaGlobeAsia className="text-5xl text-blue-900" />

              <h3 className="text-2xl font-bold mt-6">

                Premium Destinations

              </h3>

              <p className="mt-4 text-gray-600 leading-8">

                Domestic and international holiday packages designed for every
                type of traveller.

              </p>

            </div>

            <div className="bg-slate-50 rounded-3xl p-10 shadow hover:shadow-xl transition">

              <FaHeart className="text-5xl text-blue-900" />

              <h3 className="text-2xl font-bold mt-6">

                Customer Satisfaction

              </h3>

              <p className="mt-4 text-gray-600 leading-8">

                We focus on building long-term relationships through quality
                service and memorable travel experiences.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-blue-900 text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">

            Your Journey Begins With Safarnest

          </h2>

          <p className="mt-8 text-lg text-blue-100 leading-8">

            Explore amazing destinations, discover unforgettable experiences
            and travel with confidence.

          </p>

          <button className="mt-10 bg-yellow-400 hover:bg-yellow-300 text-black px-10 py-4 rounded-full font-bold transition">

            Explore Packages

          </button>

        </div>

      </section>

    </>
  );
}

export default About;