const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    make: {
      type: String,
      required: [true, "Please add a make"],
    },
    model: {
      type: String,
      required: [true, "Please add a model"],
    },
    fuelType: {
      type: String,
      required: [true, "Please add a fuel type"],
      enum: ["Petrol", "Diesel", "Electric", "Hybrid"],
    },
    bodyType: {
      type: String,
      required: [true, "Please add a body type"],
      enum: [
        "Sedan",
        "Hatchback",
        "SUV",
        "MPV",
        "Estate",
        "Saloon",
        "Coupe",
        "Convertible",
        "Supercar",
        "Sports",
        "Luxury",
        "Pickup",
        "Van",
      ],
    },
    transmission: {
      type: String,
      required: [true, "Please add a transmission"],
      enum: ["Automatic", "Manual"],
    },
    doors: {
      type: String,
      required: [true, "Please add the number of doors"],
      enum: [2, 4, 5, 6],
    },
    seats: {
      type: String,
      required: [true, "Please add the number of seats"],
      enum: [2, 4, 5, 6, 8],
    },
    engineSize: {
      type: String,
      required: [true, "Please add the engine size"],
      enum: [1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3, 4, 5],
    },
    colour: {
      type: String,
      required: [true, "Please add a colour"],
      enum: [
        "Black",
        "White",
        "Silver",
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Purple",
        "Brown",
        "Orange",
        "Pink",
        "Grey",
        "Gold",
        "Silver",
        "Bronze",
        "Platinum",
        "Multicolour",
        "Other",
      ],
    },
    mileage: {
      type: Number,
      required: [true, "Please add the mileage"],
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
