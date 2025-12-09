const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

//
// CREATE A JOB
//
router.post("/create", async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.json({ message: "Job created", job });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//
// GET JOBS FOR A SPECIFIC DRIVER
//
router.get("/driver/:driverId", async (req, res) => {
  try {
    const jobs = await Job.find({ driver: req.params.driverId });

    if (!jobs.length) {
      return res.json({ message: "No jobs found for this driver", jobs: [] });
    }

    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//
// GET JOBS FOR A SPECIFIC CUSTOMER
//
router.get("/customer/:customerId", async (req, res) => {
  try {
    const jobs = await Job.find({ customer: req.params.customerId });

    if (!jobs.length) {
      return res.json({ message: "No jobs found for this customer", jobs: [] });
    }

    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//
// TRACK A SINGLE JOB BY JOB ID (FOR TRACKING PAGE)
//
router.get("/track/:jobId", async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//
// UPDATE JOB STATUS (FOR DRIVER/ADMIN)
//
router.put("/status/:jobId", async (req, res) => {
  try {
    const { status } = req.body;

    const validStatuses = [
      "pending",
      "assigned",
      "picked_up",
      "out_for_delivery",
      "delivered",
      "cancelled"
    ];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const job = await Job.findByIdAndUpdate(
      req.params.jobId,
      { status },
      { new: true }
    );

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json({ message: "Status updated", job });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//
// GET ALL JOBS (ADMIN)
//
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
