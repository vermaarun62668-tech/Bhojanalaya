const express = require("express");

const router = express.Router();

const {
    addComplaint,
    getComplaints
} = require("../controllers/complaintController");

// Student submits complaint
router.post("/", addComplaint);

// Admin views complaints
router.get("/", getComplaints);

module.exports = router;