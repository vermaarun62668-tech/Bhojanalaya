const express = require("express");

const router = express.Router();

const { getTodayMenu } = require("../controllers/menuController");

router.get("/today", getTodayMenu);

module.exports = router;