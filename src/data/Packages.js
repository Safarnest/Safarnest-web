import manali from "../assets/packages/manali.jpg";
import goa from "../assets/packages/goa.jpg";
import kashmir from "../assets/packages/kashmir.jpg";

const packages = [
  {
    id: 1,
    slug: "manali-escape",

    // Basic Information
    title: "Manali Escape",
    shortTitle: "Manali Tour",

    location: "Manali, Himachal Pradesh",
    state: "Himachal Pradesh",
    country: "India",

    category: "Domestic",

    featured: true,
    bestseller: true,

    // Pricing
    price: 12999,
    originalPrice: 15999,
    discount: 19,

    // Ratings
    rating: 4.8,
    reviews: 284,

    // Duration
    duration: "5 Nights / 6 Days",

    // Package Details
    hotel: "4 Star Premium Hotel",
    meals: "Breakfast + Dinner",
    transport: "Delhi Volvo + Local Cab",

    // Images
    image: manali,

    gallery: [
      manali,
      manali,
      manali,
      manali,
      manali,
    ],

    // Description
    shortDescription:
      "Experience snow covered mountains with premium hotels and unforgettable adventures.",

    overview:
      "Discover the breathtaking beauty of Manali with luxury accommodation, Volvo transportation, sightseeing, delicious meals and memorable Himalayan experiences. This package is specially designed for couples, families and groups.",

    highlights: [
      "Luxury Hotel Stay",
      "Daily Breakfast & Dinner",
      "Delhi - Manali Volvo",
      "Solang Valley",
      "Atal Tunnel",
      "Mall Road",
      "Hadimba Temple",
      "Bonfire Night"
    ],

    itinerary: [
      {
        day: 1,
        title: "Delhi to Manali",
        description:
          "Board overnight Volvo from Delhi."
      },
      {
        day: 2,
        title: "Arrival & Local Sightseeing",
        description:
          "Hotel check-in followed by Hadimba Temple and Mall Road."
      },
      {
        day: 3,
        title: "Solang Valley",
        description:
          "Adventure activities and sightseeing."
      },
      {
        day: 4,
        title: "Atal Tunnel",
        description:
          "Visit Atal Tunnel and Sissu Valley."
      },
      {
        day: 5,
        title: "Leisure Day",
        description:
          "Free day for shopping and cafes."
      },
      {
        day: 6,
        title: "Departure",
        description:
          "Checkout and board Volvo back to Delhi."
      }
    ],

    inclusions: [
      "4 Star Hotel",
      "Breakfast",
      "Dinner",
      "Volvo Tickets",
      "Sightseeing",
      "Hotel Taxes"
    ],

    exclusions: [
      "Lunch",
      "Adventure Activities",
      "Travel Insurance",
      "Personal Expenses"
    ],

    seatsLeft: 12,

    emiAvailable: true,

    cancellation:
      "Free cancellation up to 7 days before departure.",

    seo: {
      title:
        "Manali Escape Tour Package | Safarnest Holidays",

      description:
        "Book Manali Escape Tour Package with Safarnest Holidays.",

      keywords: [
        "Manali Tour",
        "Manali Package",
        "Himachal Tour"
      ]
    }
  },  {
    id: 2,
    slug: "goa-beach-holiday",

    // Basic Information
    title: "Goa Beach Holiday",
    shortTitle: "Goa Tour",

    location: "North Goa, Goa",
    state: "Goa",
    country: "India",

    category: "Domestic",

    featured: true,
    bestseller: false,

    // Pricing
    price: 14999,
    originalPrice: 17999,
    discount: 17,

    // Ratings
    rating: 4.7,
    reviews: 198,

    // Duration
    duration: "4 Nights / 5 Days",

    // Package Details
    hotel: "Beach Resort",
    meals: "Breakfast",
    transport: "Airport Pickup & Drop",

    // Images
    image: goa,

    gallery: [
      goa,
      goa,
      goa,
      goa,
      goa,
    ],

    shortDescription:
      "Relax at Goa's beautiful beaches with premium resorts and unforgettable nightlife.",

    overview:
      "Enjoy the perfect beach vacation with premium resort stay, airport transfers, sightseeing and exciting nightlife. Ideal for couples, families and friends.",

    highlights: [
      "Calangute Beach",
      "Baga Beach",
      "Fort Aguada",
      "Cruise Dinner",
      "Beach Resort",
      "Nightlife Experience",
      "Water Sports"
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Goa",
        description:
          "Airport pickup and hotel check-in."
      },
      {
        day: 2,
        title: "North Goa Tour",
        description:
          "Visit Calangute, Baga and Fort Aguada."
      },
      {
        day: 3,
        title: "South Goa Tour",
        description:
          "Churches, Miramar Beach and Dona Paula."
      },
      {
        day: 4,
        title: "Leisure Day",
        description:
          "Enjoy water sports or relax on the beach."
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Airport transfer."
      }
    ],

    inclusions: [
      "Beach Resort",
      "Breakfast",
      "Airport Transfer",
      "Sightseeing",
      "Hotel Taxes"
    ],

    exclusions: [
      "Lunch",
      "Dinner",
      "Water Sports",
      "Travel Insurance",
      "Personal Expenses"
    ],

    seatsLeft: 8,

    emiAvailable: true,

    cancellation:
      "Free cancellation up to 5 days before departure.",

    seo: {
      title:
        "Goa Beach Holiday | Safarnest Holidays",

      description:
        "Book Goa Beach Holiday Package with Safarnest Holidays.",

      keywords: [
        "Goa Package",
        "Goa Tour",
        "Beach Holiday"
      ]
    }
  },

  {
    id: 3,
    slug: "kashmir-paradise",

    // Basic Information
    title: "Kashmir Paradise",
    shortTitle: "Kashmir Tour",

    location: "Srinagar, Gulmarg & Pahalgam",
    state: "Jammu & Kashmir",
    country: "India",

    category: "Domestic",

    featured: true,
    bestseller: true,

    // Pricing
    price: 18999,
    originalPrice: 21999,
    discount: 14,

    // Ratings
    rating: 4.9,
    reviews: 326,

    // Duration
    duration: "6 Nights / 7 Days",

    // Package Details
    hotel: "Luxury Hotel",
    meals: "Breakfast & Dinner",
    transport: "Private Cab",

    // Images
    image: kashmir,

    gallery: [
      kashmir,
      kashmir,
      kashmir,
      kashmir,
      kashmir,
    ],

    shortDescription:
      "Experience heaven on earth with luxury hotels and breathtaking Himalayan landscapes.",

    overview:
      "Explore Srinagar, Gulmarg, Sonmarg and Pahalgam with luxury accommodation, private transportation and unforgettable sightseeing.",

    highlights: [
      "Dal Lake",
      "Houseboat",
      "Gulmarg",
      "Pahalgam",
      "Sonmarg",
      "Shikara Ride",
      "Private Cab"
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        description:
          "Airport pickup and hotel check-in."
      },
      {
        day: 2,
        title: "Dal Lake",
        description:
          "Shikara ride and Mughal Gardens."
      },
      {
        day: 3,
        title: "Gulmarg",
        description:
          "Gondola ride and sightseeing."
      },
      {
        day: 4,
        title: "Pahalgam",
        description:
          "Explore Betaab Valley and Aru Valley."
      },
      {
        day: 5,
        title: "Sonmarg",
        description:
          "Full day excursion."
      },
      {
        day: 6,
        title: "Shopping & Leisure",
        description:
          "Free day for shopping and local exploration."
      },
      {
        day: 7,
        title: "Departure",
        description:
          "Airport transfer."
      }
    ],

    inclusions: [
      "Luxury Hotel",
      "Breakfast",
      "Dinner",
      "Private Cab",
      "Sightseeing",
      "Hotel Taxes"
    ],

    exclusions: [
      "Lunch",
      "Gondola Tickets",
      "Horse Riding",
      "Travel Insurance",
      "Personal Expenses"
    ],

    seatsLeft: 15,

    emiAvailable: true,

    cancellation:
      "Free cancellation up to 7 days before departure.",

    seo: {
      title:
        "Kashmir Paradise | Safarnest Holidays",

      description:
        "Book Kashmir Paradise Package with Safarnest Holidays.",

      keywords: [
        "Kashmir Tour",
        "Srinagar Package",
        "Gulmarg Tour"
      ]
    }
  }
];

export default packages;