const adminMenuRoutes = require("./routes/adminMenuRoutes");
const suggestionRoutes = require("./routes/suggestionRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const ratingRoutes = require("./routes/ratingRoutes");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const menuRoutes = require("./routes/menuRoutes");

const app = express();

// Middleware
app.use(cors({
    origin: "http://127.0.0.1:5500"
}));

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/ratings", ratingRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/suggestions", suggestionRoutes);
app.use("/api/admin/menu", adminMenuRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Welcome to Bhojanalaya API");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});