import express from "express";
import {
  getStudents,
  createStudent,
  updateStudent
} from "../controllers/studentController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/students", authMiddleware, getStudents);
router.post("/students", authMiddleware, createStudent);
router.put("/students/:id", authMiddleware, updateStudent);
export default router;