const express = require("express");

const router = express.Router();

const {
    addRating,
    getRatings
} = require("../controllers/ratingController");

// Student submits rating
router.post("/", addRating);

// Admin views all ratings
router.get("/", getRatings);

module.exports = router;