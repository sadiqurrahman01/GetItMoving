import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "driver" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Driver", driverSchema);