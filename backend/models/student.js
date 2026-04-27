import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String,
      required: true
    },
    section: {
      type: String
    },
    parentName: {
      type: String
    },
    parentPhone: {
      type: String,
      required: true
    },
    deviceToken: {
      type: String
}
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;