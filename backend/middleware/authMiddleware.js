const jwt = require("jsonwebtoken");
const Customer = require("../models/Customer");
const Driver = require("../models/Driver");

exports.protectCustomer = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.customer = await Customer.findById(decoded.id).select("-password");

    if (!req.customer) return res.status(404).json({ message: "Customer not found" });

    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

exports.protectDriver = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.driver = await Driver.findById(decoded.id).select("-password");

    if (!req.driver) return res.status(404).json({ message: "Driver not found" });

    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
