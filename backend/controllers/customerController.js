const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Customer = require("../models/Customer");

const genToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

exports.registerCustomer = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await Customer.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email already exists" });

    const hash = await bcrypt.hash(password, 10);

    const customer = await Customer.create({
      name,
      email,
      password: hash,
    });

    res.json({
      token: genToken(customer._id),
      user: {
        id: customer._id,
        name: customer.name,
        email: customer.email,
      },
    });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

exports.loginCustomer = async (req, res) => {
  try {
    const { email, password } = req.body;
    const customer = await Customer.findOne({ email });

    if (!customer) return res.status(400).json({ message: "Invalid login" });

    const match = await bcrypt.compare(password, customer.password);
    if (!match) return res.status(400).json({ message: "Incorrect password" });

    res.json({
      token: genToken(customer._id),
      user: {
        id: customer._id,
        name: customer.name,
        email: customer.email,
      },
    });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getCustomerProfile = (req, res) => {
  res.json(req.customer);
};
