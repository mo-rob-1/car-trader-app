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
    // image: {
    //   data: Buffer,
    //   contentType: String,
    // },
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
    phoneNumber: {
      type: Number,
      required: [true, "Please add a phone number"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", carSchema);
