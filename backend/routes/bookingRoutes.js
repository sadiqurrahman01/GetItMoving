const express = require("express");
const router = express.Router();

const {
  createBooking,
  getMyBookings,
} = require("../controllers/bookingController");

const { protectCustomer } = require("../middleware/authMiddleware");

// Create a booking
router.post("/create", protectCustomer, createBooking);

// Get bookings of logged-in customer
router.get("/mine", protectCustomer, getMyBookings);

module.exports = router;
