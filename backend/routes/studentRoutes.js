import express from "express";
import { addStudent, getStudents, saveDeviceToken } from "../controllers/studentController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Create student
router.post("/", protect, addStudent);

// Get all students
router.get("/", protect, getStudents);

// Save device token
router.put("/:id/save-token", saveDeviceToken);

export default router;