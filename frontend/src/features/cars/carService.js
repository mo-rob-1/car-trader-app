import axios from "axios";

const API_URL = "/api/cars/";

// Add a car
const addCar = async (carData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, carData, config);

  return response.data;
};

// Get all cars
const getAllCars = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Get a car by id
const getUserCar = async (carId) => {
  const response = await axios.get(API_URL + carId);

  return response.data;
};

// Get user cars by user id
const getUserCars = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "/mycars/", config);

  return response.data;
};

// Update car status
const updateCar = async (carId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + carId, { status: "Sold" }, config);

  return response.data;
};

// Delete a car
const deleteCar = async (carId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + carId, config);

  return response.data;
};

const carService = {
  addCar,
  getAllCars,
  getUserCar,
  getUserCars,
  updateCar,
  deleteCar,
};

export default carService;
