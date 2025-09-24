const express = require("express");
const Lead = require("../models/Lead");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, status } = req.body;
    const lead = new Lead({ name, email, status });
    await lead.save();
    res.status(201).json(lead);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
