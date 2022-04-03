const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    model: {
      type: String,
      required: [true, "Please add a model"],
    },
    imageURL: {
      type: String,
      required: [true, "Please add an image URL"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    price: {
      type: Number,
      required: [true, "Please add a price"],
    },
    location: {
      type: String,
      required: [true, "Please add a location"],
    },
    region: {
      type: String,
      required: [true, "Please select a region"],
      enum: [
        "London",
        "North West",
        "North East",
        "Yorkshire",
        "Midlands",
        "South East",
        "South West",
        "Wales",
        "Scotland",
      ],
    },
    phoneNumber: {
      type: Number,
      required: [true, "Please add a phone number"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
    },
    status: {
      type: String,
      required: [true, "Please add a status"],
      enum: ["Available", "Sold"],
      default: "Available",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", carSchema);
