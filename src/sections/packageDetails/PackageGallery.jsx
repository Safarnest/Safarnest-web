import manali from "../../assets/images/manali.jpg";
import goa from "../../assets/images/goa.jpg";
import kashmir from "../../assets/images/kashmir.jpg";

function PackageGallery() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-blue-900 mb-10">
          Package Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <img
            src={manali}
            alt="Manali"
            className="rounded-3xl h-80 w-full object-cover hover:scale-105 transition duration-500 cursor-pointer"
          />

          <img
            src={goa}
            alt="Goa"
            className="rounded-3xl h-80 w-full object-cover hover:scale-105 transition duration-500 cursor-pointer"
          />

          <img
            src={kashmir}
            alt="Kashmir"
            className="rounded-3xl h-80 w-full object-cover hover:scale-105 transition duration-500 cursor-pointer"
          />

        </div>

      </div>

    </section>
  );
}

export default PackageGallery;