const express = require("express");

const router = express.Router();

const {
    updateMenu
} = require("../controllers/adminMenuController");

router.put("/", updateMenu);

module.exports = router;