import LegalLayout from "../../components/legal/LegalLayout";

const sections = [
  {
    heading: "1. Cancellation Request",
    content:
      "All cancellation requests must be submitted through our official communication channels. Cancellation is considered valid only after written confirmation from Safarnest Holidays.",
  },

  {
    heading: "2. Cancellation Charges",
    list: [
      "Charges depend on the destination, package and supplier policies.",
      "Hotels, airlines and transport providers may apply their own cancellation charges.",
      "Service charges may also be deducted where applicable.",
    ],
  },

  {
    heading: "3. No Show Policy",
    content:
      "If a traveler does not report at the scheduled departure time without prior notice, it will be treated as a 'No Show' and refunds, if any, will depend on the supplier's policy.",
  },

  {
    heading: "4. Package Modifications",
    content:
      "Requests to modify travel dates, destinations or other package details are subject to availability and may incur additional charges.",
  },

  {
    heading: "5. Cancellation by Safarnest Holidays",
    content:
      "In rare situations where a package must be cancelled by Safarnest Holidays due to operational or unavoidable reasons, customers will be offered suitable alternatives or an eligible refund.",
  },

  {
    heading: "6. Contact Us",
    content:
      "For cancellation assistance, please contact our support team through the official Contact page.",
  },
];

function CancellationPolicy() {
  return (
    <LegalLayout
      title="Cancellation Policy"
      lastUpdated="July 2026"
      sections={sections}
    />
  );
}

export default CancellationPolicy;