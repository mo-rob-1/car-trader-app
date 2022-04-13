const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Car = require("../models/carModel");

// @desc  Get user car
// @route GET /api/cars
// @access Private
const getUserCar = asyncHandler(async (req, res) => {
  const userCar = await Car.findById(req.params.id);
  res.status(200).json(userCar);
});

// @desc  Get all cars from every users
// @route GET /api/cars
// @access Private
const getAllCars = asyncHandler(async (req, res) => {
  const cars = await Car.find();
  res.status(200).json(cars);
});

// @desc Add a car
// @route POST /api/cars
// @access Private
const addCar = asyncHandler(async (req, res) => {
  const {
    model,
    description,
    price,
    location,
    phoneNumber,
    email,
    imageURL,
    region,
    make,
    fuelType,
    bodyType,
    transmission,
    doors,
    seats,
    mileage,
    colour,
    engineSize,
  } = req.body;
  if (
    !model ||
    !description ||
    !price ||
    !location ||
    !phoneNumber ||
    !email ||
    !imageURL ||
    !region ||
    !make ||
    !fuelType ||
    !bodyType ||
    !transmission ||
    !doors ||
    !seats ||
    !mileage ||
    !colour ||
    !engineSize
  ) {
    res.status(400);
    throw new Error("Please enter all fields");
  }
  // Get user using the ID in the JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(400);
    throw new Error("User does not exist");
  }
  const car = await Car.create({
    model,
    description,
    price,
    location,
    phoneNumber,
    imageURL,
    fuelType,
    bodyType,
    email,
    make,
    region,
    doors,
    seats,
    transmission,
    mileage,
    colour,
    engineSize,
    status: "Available",
    user: req.user.id,
  });
  res.status(201).json(car);
});

// @desc Get user cars
// @route GET /api/cars/:id
// @access Private
const getUserCars = asyncHandler(async (req, res) => {
  // Get user using the ID in the JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  const userCars = await Car.find({
    user: req.user.id,
  });
  res.status(200).json(userCars);
});

// @desc Update a car
// @route PUT /api/cars/:id
// @access Private
const updateCar = asyncHandler(async (req, res) => {
  // Get user using the ID in the JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  const car = await Car.findById(req.params.id);
  if (!car) {
    res.status(404);
    throw new Error("Car not found");
  }
  if (car.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized");
  }
  const updateCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateCar);
});

// @desc Delete a car
// @route DELETE /api/cars/:id
// @access Private
const deleteCar = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.id);

  if (!car) {
    res.status(400);
    throw new Error("Todo not found");
  }

  // Check if user is owner of todo
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Ensure user do not update other users todo
  if (car.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await car.remove();

  res.status(200).json({
    id: req.params.id,
  });
});

module.exports = { addCar, getAllCars, getUserCars, getUserCar, updateCar, deleteCar };
