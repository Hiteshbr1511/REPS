import express from "express";
import {
  getStudents,
  createStudent,
  updateStudent
} from "../controllers/studentController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ DO NOT add /students here again

router.get("/", authMiddleware, getStudents);
router.post("/", authMiddleware, createStudent);
router.put("/:id", authMiddleware, updateStudent);

export default router;