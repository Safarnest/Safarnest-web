import LegalLayout from "../../components/legal/LegalLayout";

const sections = [
  {
    heading: "1. Introduction",
    content:
      "Safarnest Holidays respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store and protect your information when you use our website or travel services.",
  },

  {
    heading: "2. Information We Collect",
    list: [
      "Full Name",
      "Mobile Number",
      "Email Address",
      "Travel Preferences",
      "Booking Information",
      "Payment Information",
      "Device Information",
      "IP Address",
    ],
  },

  {
    heading: "3. How We Use Your Information",
    list: [
      "Process your bookings",
      "Provide customer support",
      "Send booking confirmations",
      "Improve our services",
      "Comply with legal obligations",
      "Respond to enquiries",
    ],
  },

  {
    heading: "4. Data Protection",
    content:
      "We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure or destruction.",
  },

  {
    heading: "5. Third Party Services",
    content:
      "We may share necessary information with trusted partners such as hotels, transport providers, payment gateways and other travel service providers only to complete your booking.",
  },

  {
    heading: "6. Cookies",
    content:
      "Our website may use cookies to improve user experience, analyze traffic and enhance website performance.",
  },

  {
    heading: "7. Your Rights",
    list: [
      "Access your personal data",
      "Request correction",
      "Request deletion where applicable",
      "Withdraw consent where legally permitted",
    ],
  },

  {
    heading: "8. Contact Us",
    content:
      "For any privacy related questions, please contact Safarnest Holidays through our official Contact page.",
  },
];

function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="July 2026"
      sections={sections}
    />
  );
}

export default PrivacyPolicy;