import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Call Us",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    value: "info@safarnestholidays.com",
    href: "mailto:info@safarnestholidays.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Office Address",
    value: "Delhi, India",
    href: "https://maps.google.com/?q=Delhi",
  },
  {
    icon: <FaClock />,
    title: "Working Hours",
    value: "Mon - Sat • 9:00 AM - 7:00 PM",
  },
];

function ContactCards() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="uppercase tracking-[5px] text-blue-900 font-semibold">
            Get In Touch
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            We'd Love To Hear From You
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 leading-8">
            Reach out to our travel experts for bookings, customized packages,
            group tours or any travel assistance.
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {contactInfo.map((item, index) => (

            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center text-3xl group-hover:bg-blue-900 group-hover:text-white transition mx-auto">

                {item.icon}

              </div>

              <h3 className="mt-6 text-2xl font-bold text-center">

                {item.title}

              </h3>

              {item.href ? (

                <a
                  href={item.href}
                  target={
                    item.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel="noreferrer"
                  className="block mt-4 text-center text-gray-600 hover:text-blue-900 transition break-words"
                >

                  {item.value}

                </a>

              ) : (

                <p className="mt-4 text-center text-gray-600 leading-7">

                  {item.value}

                </p>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default ContactCards;