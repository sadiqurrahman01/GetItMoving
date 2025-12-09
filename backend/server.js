require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");

const app = express();

// ---------------------------
// Middleware
// ---------------------------
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

// ---------------------------
// Connect to MongoDB
// ---------------------------
connectDB();

// ---------------------------
// ROUTES
// ---------------------------
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/jobs", require("./routes/jobRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/drivers", require("./routes/driverRoutes")); // << NEW DRIVER ROUTES

// ---------------------------
// Start Server
// ---------------------------
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
