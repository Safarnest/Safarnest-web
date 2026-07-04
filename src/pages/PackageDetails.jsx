import { useParams } from "react-router-dom";

import packages from "../data/packages";

import PackageHero from "../sections/packageDetails/PackageHero";
import QuickInfo from "../sections/packageDetails/QuickInfo";
import PackageGallery from "../sections/packageDetails/PackageGallery";
import PackageOverview from "../sections/packageDetails/PackageOverview";
import Itinerary from "../sections/packageDetails/Itinerary";
import Inclusions from "../sections/packageDetails/Inclusions";
import Exclusions from "../sections/packageDetails/Exclusions";
import EnquiryForm from "../sections/packageDetails/EnquiryForm";
import RelatedPackages from "../sections/packageDetails/RelatedPackages";

import BookingCard from "../components/booking/BookingCard";

function PackageDetails() {
  const { slug } = useParams();

  const packageData = packages.find(
    (item) => item.slug === slug
  );

  if (!packageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold text-red-600">
          Package Not Found
        </h1>
      </div>
    );
  }

  return (
    <>
      <PackageHero packageData={packageData} />

      <QuickInfo packageData={packageData} />

      {/* Main Layout */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-10">

            {/* LEFT */}

            <div className="lg:col-span-2 space-y-20">

              <PackageOverview packageData={packageData} />

              <PackageGallery packageData={packageData} />

              <Itinerary packageData={packageData} />

              <Inclusions packageData={packageData} />

              <Exclusions packageData={packageData} />

              <EnquiryForm packageData={packageData} />

            </div>

            {/* RIGHT */}

            <div className="lg:sticky lg:top-28 self-start">

              <BookingCard packageData={packageData} />

            </div>

          </div>

        </div>

      </section>

      <RelatedPackages
        currentSlug={packageData.slug}
      />
    </>
  );
}

export default PackageDetails;