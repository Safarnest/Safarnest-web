import LegalLayout from "../../components/legal/LegalLayout";

const sections = [
  {
    heading: "1. Refund Eligibility",
    content:
      "Refund eligibility depends on the package booked, the cancellation timing and the policies of hotels, airlines, transport providers and other travel partners.",
  },

  {
    heading: "2. Processing Time",
    content:
      "Approved refunds are generally processed within 7–14 business days. Actual credit time depends on your payment method and banking partner.",
  },

  {
    heading: "3. Non-Refundable Services",
    list: [
      "Visa Fees",
      "Travel Insurance",
      "Government Charges",
      "Processing Fees",
      "Convenience Fees (if applicable)",
    ],
  },

  {
    heading: "4. Partial Refunds",
    content:
      "If only a part of the booked services is cancelled or remains unused, only the eligible refundable amount will be processed after applicable deductions.",
  },

  {
    heading: "5. Force Majeure",
    content:
      "Refunds during extraordinary events such as natural disasters, pandemics, government restrictions or airline operational issues will be subject to the respective supplier's policy.",
  },

  {
    heading: "6. Contact",
    content:
      "For refund related assistance, please contact Safarnest Holidays through our official Contact page with your booking reference.",
  },
];

function RefundPolicy() {
  return (
    <LegalLayout
      title="Refund Policy"
      lastUpdated="July 2026"
      sections={sections}
    />
  );
}

export default RefundPolicy;