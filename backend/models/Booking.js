const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
    type: { type: String, enum: ["man-and-van", "storage"], required: true },

    // Man & Van fields
    pickup: String,
    dropoff: String,
    date: String,
    time: String,
    hours: Number,

    // Storage fields
    size: String,
    startDate: String,
    weeks: Number,

    notes: String,
    status: { type: String, default: "pending" },

    assignedDriver: { type: mongoose.Schema.Types.ObjectId, ref: "Driver" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
