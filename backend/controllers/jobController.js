const Job = require("../models/Job");
const User = require("../models/User");

// CREATE NEW JOB (Admin Only)
exports.createJob = async (req, res) => {
  try {
    const { customer, pickupAddress, deliveryAddress } = req.body;

    const job = await Job.create({
      customer,
      pickupAddress,
      deliveryAddress,
      status: "pending"
    });

    res.json({ message: "Job created", job });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ASSIGN DRIVER (Admin)
exports.assignDriver = async (req, res) => {
  try {
    const { jobId, driverId } = req.body;

    const job = await Job.findByIdAndUpdate(
      jobId,
      { driver: driverId, status: "assigned" },
      { new: true }
    );

    res.json({ message: "Driver assigned", job });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DRIVER UPDATES JOB STATUS
exports.updateStatus = async (req, res) => {
  try {
    const { jobId, status } = req.body;

    const allowed = [
      "picked_up",
      "out_for_delivery",
      "delivered"
    ];

    if (!allowed.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const job = await Job.findByIdAndUpdate(
      jobId,
      { status },
      { new: true }
    );

    res.json({ message: "Status updated", job });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DRIVER UPLOADS DELIVERY PHOTO
exports.markDelivered = async (req, res) => {
  try {
    const { jobId, photoUrl } = req.body;

    const job = await Job.findByIdAndUpdate(
      jobId,
      {
        status: "delivered",
        deliveryPhoto: photoUrl,
        deliveredAt: new Date()
      },
      { new: true }
    );

    res.json({ message: "Job delivered", job });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL JOBS (Admin)
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("customer driver", "name email");
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET DRIVER'S JOBS
exports.getDriverJobs = async (req, res) => {
  try {
    const driverId = req.params.driverId;

    const jobs = await Job.find({ driver: driverId })
      .populate("customer", "name email");

    res.json(jobs);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
