import LegalLayout from "../../components/legal/LegalLayout";

const sections = [
  {
    heading: "1. Acceptance of Terms",
    content:
      "By accessing or using the Safarnest Holidays website, you agree to be bound by these Terms & Conditions.",
  },

  {
    heading: "2. Booking Policy",
    list: [
      "All bookings are subject to availability.",
      "Prices may change before final confirmation.",
      "Booking is confirmed only after successful payment and confirmation from Safarnest Holidays.",
      "Customers must provide accurate personal information.",
    ],
  },

  {
    heading: "3. Payment Terms",
    list: [
      "Advance payment may be required.",
      "Remaining balance must be paid before departure.",
      "Failure to pay may result in automatic cancellation.",
    ],
  },

  {
    heading: "4. Customer Responsibilities",
    list: [
      "Carry valid government-issued ID.",
      "Follow hotel, airline and destination rules.",
      "Ensure passport/visa requirements are fulfilled for international travel.",
    ],
  },

  {
    heading: "5. Changes & Cancellations",
    content:
      "Changes requested after confirmation are subject to availability and may incur additional charges. Cancellation policies vary depending on the booked package and service providers.",
  },

  {
    heading: "6. Liability",
    content:
      "Safarnest Holidays is not responsible for delays, natural disasters, airline cancellations, government restrictions, strikes or events beyond our reasonable control.",
  },

  {
    heading: "7. Intellectual Property",
    content:
      "All website content, logos, graphics, text and branding are the intellectual property of Safarnest Holidays and may not be copied without written permission.",
  },

  {
    heading: "8. Governing Law",
    content:
      "These Terms & Conditions shall be governed by the applicable laws of India.",
  },
];

function TermsConditions() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      lastUpdated="July 2026"
      sections={sections}
    />
  );
}

export default TermsConditions;