const express = require("express");
const router = express.Router();

const {
  registerCustomer,
  loginCustomer,
  getCustomerProfile,
} = require("../controllers/customerController");

const { protectCustomer } = require("../middleware/authMiddleware");

// Public routes
router.post("/register", registerCustomer);
router.post("/login", loginCustomer);

// Protected route
router.get("/profile", protectCustomer, getCustomerProfile);

module.exports = router;
