const express = require("express");
const router = express.Router();

const {
    registerStudent,
    loginStudent
} = require("../controllers/authController");

router.post("/login", loginStudent);

// Register Student
router.post("/register", registerStudent);

module.exports = router;