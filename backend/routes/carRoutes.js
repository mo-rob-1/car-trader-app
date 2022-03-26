const express = require("express");
const router = express.Router();
const { addCar, getAllCars, getUserCars, getUserCar } = require("../controllers/carController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(protect, addCar).get(getAllCars);
// router.route("/:id").delete(deleteCar).put(updateCar);
router.route("/:id").get(protect, getUserCar);
router.route("/mycars").get(protect, getUserCar);

module.exports = router;
