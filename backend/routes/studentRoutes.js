import express from "express";
import { addStudent, getStudents, saveDeviceToken } from "../controllers/studentController.js";
import protect from "../middleware/authMiddleware.js";
import { getStudents, createStudent, updateStudent } from "../controllers/studentController.js";

const router = express.Router();

// Create student
router.post("/", protect, addStudent);

// Get all students
router.get("/", protect, getStudents);
router.post("/students", createStudent);

// Save device token
router.put("/69f48260b636e80bb5a40f5b/save-token", saveDeviceToken);

export default router;