const adminMenuRoutes = require("./routes/adminMenuRoutes");
const suggestionRoutes = require("./routes/suggestionRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const ratingRoutes = require("./routes/ratingRoutes");
const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const db = require("./config/db");
const clientPath = path.join(__dirname, "../client");

const authRoutes = require("./routes/authRoutes");
const menuRoutes = require("./routes/menuRoutes");

const app = express();


// Middleware
app.use(cors());

app.use(express.json());
app.use(express.static(clientPath));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/ratings", ratingRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/suggestions", suggestionRoutes);
app.use("/api/admin/menu", adminMenuRoutes);

// Serve client app
app.get("/", (req, res) => {
    res.sendFile(path.join(clientPath, "index.html"));
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});