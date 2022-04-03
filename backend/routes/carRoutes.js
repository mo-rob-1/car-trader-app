const express = require("express");
const router = express.Router();
const { addCar, getAllCars, getUserCars, getUserCar, updateCar, deleteCar } = require("../controllers/carController");
const { protect } = require("../middleware/authMiddleware");

router.route("/mycars").get(protect, getUserCars);
router.route("/").post(protect, addCar).get(getAllCars);
router.route("/:id").delete(protect, deleteCar).put(protect, updateCar).get(getUserCar);

module.exports = router;
