import PriceCard from "./PriceCard";
import BookingForm from "./BookingForm";
import TrustBadges from "./TrustBadges";
import SupportCard from "./SupportCard";

function BookingCard({ packageData }) {
  return (
    <div className="sticky top-28 space-y-6">

      <PriceCard packageData={packageData} />

      <BookingForm />

      <TrustBadges />

      <SupportCard />

    </div>
  );
}

export default BookingCard;