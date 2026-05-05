import { useEffect, useState } from "react";
import API from "../api/api";

export default function Students() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await API.get("/students");
    setStudents(res.data);
  };
 // ✅ Step 5 — Add Student
  const addStudent = async () => {
    await API.post("/students", {
      name: "New Student",
      className: "10th",
      parentPhone: "9999999999"
    });

    fetchStudents();
  };

  // ✅ Step 6 — Update Student
  const updateStudent = async (id) => {
    await API.put(`/students/${id}`, {
      name: "Updated Name",
      className: "11th",
      parentPhone: "8888888888"
    });

    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
<div>
    <h2>Students</h2>

    <button onClick={addStudent}>Add Student</button>

    {students.map((s) => (
      <div key={s._id}>
        {s.name} - {s.className}

        <button onClick={() => updateStudent(s._id)}>
          Update
        </button>
      </div>
    ))}
  </div>
);
}