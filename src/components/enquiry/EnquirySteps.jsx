import {
  FaClipboardList,
  FaPhoneAlt,
  FaFileInvoice,
  FaPlaneDeparture,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaClipboardList />,
    title: "Submit Enquiry",
    description:
      "Fill out the enquiry form with your travel requirements and preferences.",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Travel Expert Connects",
    description:
      "Our travel consultant will contact you to understand your requirements in detail.",
  },
  {
    icon: <FaFileInvoice />,
    title: "Receive Best Quote",
    description:
      "Get a customized itinerary with hotels, transport and sightseeing options.",
  },
  {
    icon: <FaPlaneDeparture />,
    title: "Confirm & Travel",
    description:
      "Complete your booking securely and enjoy a hassle-free holiday.",
  },
];

function EnquirySteps() {
  return (
    <section className="py-20 md:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-blue-900 font-semibold">
            Simple Booking Process
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            How It Works
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
            Booking your holiday with Safarnest Holidays is simple, transparent
            and completely guided by our travel experts.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (

            <div
              key={index}
              className="relative bg-slate-50 rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2 text-center"
            >

              <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 text-blue-900 flex items-center justify-center text-3xl">

                {step.icon}

              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default EnquirySteps;