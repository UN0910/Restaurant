const express = require("express");
const router = express.Router();
const BookingsController = require("../controller/bookingsController");

router.route("/booking").post(BookingsController.CreateBooking);
router.route("/update-booking/:id").patch(BookingsController.UpdateBooking);
router.route("/delete-booking/:id").delete(BookingsController.DeleteBooking);
router.route("/get-booking/:id").get(BookingsController.ReadBooking);

module.exports = router;