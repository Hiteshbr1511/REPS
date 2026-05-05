import dotenv from "dotenv";
dotenv.config(); // MUST be first

import express from "express";
import cors from "cors";

import connectDB from "./config/database.js";

// Import firebase AFTER dotenv
import "./config/firebase.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes (CLEAN STRUCTURE ✅)
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/students", studentRoutes); // 👈 KEEP THIS
app.use("/api/attendance", attendanceRoutes);

// DB Connection
connectDB();

// Health check
app.get("/", (req, res) => {
  res.send("ERP Backend Running 🚀");
});

// Debug log
console.log("ENV CHECK:", process.env.MONGO_URI ? "OK" : "MISSING");

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});