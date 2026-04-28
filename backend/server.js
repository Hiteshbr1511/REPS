import dotenv from "dotenv";
dotenv.config(); // 🔥 MUST be first

import express from "express";
import cors from "cors";

import connectDB from "./config/database.js";

// 🔥 Import firebase AFTER dotenv
import "./config/firebase.js";

import authRoutes from "./routes/authRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/attendance", attendanceRoutes);

// DB Connection
connectDB();

// Debug (you can remove later)
console.log("ENV CHECK:", process.env.FIREBASE_SERVICE_ACCOUNT ? "LOADED ✅" : "MISSING ❌");

// Test route
app.get("/", (req, res) => {
  res.send("ERP Backend Running 🚀");
});

// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});