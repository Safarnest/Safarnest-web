import LegalLayout from "../../components/legal/LegalLayout";

const sections = [
  {
    heading: "1. General Information",
    content:
      "The information available on the Safarnest Holidays website is provided for general informational purposes only. While we strive to keep all information accurate and up to date, we make no guarantees regarding its completeness, reliability or accuracy.",
  },

  {
    heading: "2. Travel Information",
    content:
      "Travel schedules, hotel availability, package prices, sightseeing plans and transportation details may change due to operational requirements, weather conditions, government regulations or decisions made by third-party service providers.",
  },

  {
    heading: "3. Third-Party Services",
    content:
      "Safarnest Holidays works with hotels, airlines, transport operators, activity providers and other travel partners. We are not responsible for delays, cancellations, service quality or operational decisions made independently by these third parties.",
  },

  {
    heading: "4. Website Accuracy",
    content:
      "We continuously update our website; however, typographical errors, pricing errors or outdated information may occasionally occur. Safarnest Holidays reserves the right to correct such errors without prior notice.",
  },

  {
    heading: "5. Limitation of Liability",
    content:
      "Safarnest Holidays shall not be liable for any indirect, incidental or consequential losses arising from the use of our website or travel services, except where required by applicable law.",
  },

  {
    heading: "6. Contact",
    content:
      "If you have any questions regarding this Disclaimer, please contact Safarnest Holidays through our official Contact page.",
  },
];

function Disclaimer() {
  return (
    <LegalLayout
      title="Disclaimer"
      lastUpdated="July 2026"
      sections={sections}
    />
  );
}

export default Disclaimer;