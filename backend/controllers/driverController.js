const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Driver = require("../models/Driver");

const genToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

exports.registerDriver = async (req, res) => {
  try {
    const { name, email, password, vehicleType } = req.body;

    const exists = await Driver.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email already exists" });

    const hash = await bcrypt.hash(password, 10);

    const driver = await Driver.create({
      name,
      email,
      password: hash,
      vehicleType,
    });

    res.json({
      token: genToken(driver._id),
      driver: {
        id: driver._id,
        name: driver.name,
        email: driver.email,
        vehicleType: driver.vehicleType,
      },
    });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

exports.loginDriver = async (req, res) => {
  try {
    const { email, password } = req.body;

    const driver = await Driver.findOne({ email });
    if (!driver) return res.status(400).json({ message: "Invalid login" });

    const match = await bcrypt.compare(password, driver.password);
    if (!match) return res.status(400).json({ message: "Incorrect password" });

    res.json({
      token: genToken(driver._id),
      driver: {
        id: driver._id,
        name: driver.name,
        email: driver.email,
        vehicleType: driver.vehicleType,
      },
    });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getDriverProfile = (req, res) => {
  res.json(req.driver);
};
