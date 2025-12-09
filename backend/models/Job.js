const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  driver: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },

  pickupAddress: String,
  deliveryAddress: String,

  status: {
    type: String,
    enum: ["pending", "assigned", "picked_up", "out_for_delivery", "delivered"],
    default: "pending"
  },

  deliveryPhoto: String,
  deliveredAt: Date
}, { timestamps: true });

module.exports = mongoose.model("Job", jobSchema);
