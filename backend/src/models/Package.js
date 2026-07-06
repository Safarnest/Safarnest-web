const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    destination: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      default: "India",
    },

    category: {
      type: String,
      enum: [
        "Family",
        "Honeymoon",
        "Adventure",
        "Group",
        "Weekend",
        "Luxury",
        "Religious",
      ],
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    discountPrice: {
      type: Number,
      default: 0,
    },

    images: [
      {
        type: String,
      },
    ],

    overview: {
      type: String,
      required: true,
    },

    highlights: [
      {
        type: String,
      },
    ],

    inclusions: [
      {
        type: String,
      },
    ],

    exclusions: [
      {
        type: String,
      },
    ],

    itinerary: [
      {
        day: String,
        title: String,
        description: String,
      },
    ],

    maxPersons: {
      type: Number,
      default: 2,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Package", packageSchema);