const express = require("express");

const router = express.Router();

const {
    addSuggestion,
    getSuggestions
} = require("../controllers/suggestionController");

// Student submits suggestion
router.post("/", addSuggestion);

// Admin views suggestions
router.get("/", getSuggestions);

module.exports = router;