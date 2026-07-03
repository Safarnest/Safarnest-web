import manali from "../assets/images/manali.jpg";
import goa from "../assets/images/goa.jpg";
import kashmir from "../assets/images/kashmir.jpg";

const packages = [
  {
    id: 1,
    slug: "manali-escape",
    title: "Manali Escape",
    location: "Himachal Pradesh",
    price: "12,999",
    image: manali,
    duration: "5N / 6D",
    hotel: "4 Star Hotel",
    meals: "Breakfast & Dinner",
    transport: "Volvo Included",
    rating: "4.8",
  },

  {
    id: 2,
    slug: "goa-beach-holiday",
    title: "Goa Beach Holiday",
    location: "Goa",
    price: "14,999",
    image: goa,
    duration: "4N / 5D",
    hotel: "Beach Resort",
    meals: "Breakfast Included",
    transport: "Airport Pickup",
    rating: "4.7",
  },

  {
    id: 3,
    slug: "kashmir-paradise",
    title: "Kashmir Paradise",
    location: "Jammu & Kashmir",
    price: "18,999",
    image: kashmir,
    duration: "6N / 7D",
    hotel: "Luxury Stay",
    meals: "MAP Plan",
    transport: "Private Cab",
    rating: "4.9",
  },
];

export default packages;