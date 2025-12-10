require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// Create Express app
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/customers", require("./routes/customerRoutes"));
app.use("/api/drivers", require("./routes/driverRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));

// Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
