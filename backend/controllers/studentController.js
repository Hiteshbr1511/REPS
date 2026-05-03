import Student from "../models/student.js";

// Add student
export const addStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all students
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Save device token
export const saveDeviceToken = async (req, res) => {
  try {
    const { deviceToken } = req.body;

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { deviceToken },
      { new: true }
    );

    res.json({
      message: "Device token saved",
      student
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// UPDATE STUDENT
export const updateStudent = async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};