const express = require("express");
const router = express.Router();

const {
  registerDriver,
  loginDriver,
  getDriverProfile,
} = require("../controllers/driverController");

const { protectDriver } = require("../middleware/authMiddleware");

// Public routes
router.post("/register", registerDriver);
router.post("/login", loginDriver);

// Protected route
router.get("/profile", protectDriver, getDriverProfile);

module.exports = router;
