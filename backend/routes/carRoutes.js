const express = require("express");
const router = express.Router();
const { addCar, getAllCars, getUserCars, getUserCar, updateCar, deleteCar } = require("../controllers/carController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(protect, addCar).get(getAllCars);
router.route("/:id").delete(deleteCar).put(protect, updateCar).get(protect, getUserCar);
router.route("/mycars").get(protect, getUserCars);

module.exports = router;
