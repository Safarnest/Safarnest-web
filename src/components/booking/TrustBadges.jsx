import {
  FaShieldAlt,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";

function TrustBadges() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 space-y-5">

      <div className="flex items-center gap-4">
        <FaShieldAlt className="text-2xl text-green-600" />
        <span>100% Secure Booking</span>
      </div>

      <div className="flex items-center gap-4">
        <FaCheckCircle className="text-2xl text-blue-900" />
        <span>Verified Travel Partner</span>
      </div>

      <div className="flex items-center gap-4">
        <FaHeadset className="text-2xl text-yellow-500" />
        <span>24×7 Customer Support</span>
      </div>

    </div>
  );
}

export default TrustBadges;