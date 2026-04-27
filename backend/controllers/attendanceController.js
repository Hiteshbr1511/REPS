import Attendance from "../models/Attendance.js";
import Student from "../models/student.js";
import { sendNotification } from "../services/notificationService.js";

// Mark attendance
export const markAttendance = async (req, res) => {
  try {
    const { studentId, status, date } = req.body;

    const attendance = await Attendance.create({
      student: studentId,
      status,
      date
    });

    // 🔥 ABSENT DETECTION
    if (status === "absent") {
      const student = await Student.findById(studentId);

    const message = `${student.name} is absent today (${date}).`;

if (student.deviceToken) {
  await sendNotification(student.deviceToken, message);
}
    }

    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};