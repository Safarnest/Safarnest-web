import PackageHero from "../sections/packageDetails/PackageHero";
import PackageGallery from "../sections/packageDetails/PackageGallery";
import PackageOverview from "../sections/packageDetails/PackageOverview";
import QuickInfo from "../sections/packageDetails/QuickInfo";
import Itinerary from "../sections/packageDetails/Itinerary";
import Inclusions from "../sections/packageDetails/Inclusions";
import Exclusions from "../sections/packageDetails/Exclusions";
import EnquiryForm from "../sections/packageDetails/EnquiryForm";
import RelatedPackages from "../sections/packageDetails/RelatedPackages";

function PackageDetails() {
  return (
    <>
      <PackageHero />
      <PackageGallery />
      <PackageOverview />
      <QuickInfo />
      <Itinerary />
      <Inclusions />
      <Exclusions />
      <EnquiryForm />
      <RelatedPackages />
    </>
  );
}

export default PackageDetails;