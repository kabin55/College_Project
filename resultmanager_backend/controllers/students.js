import { Student } from "../model/student.js";
export async function getStudentList(req, res) {
  const students = await Student.find({});
  res.json({ students, message: "Student Page" });
}

export async function createStudent(req, res) {
  const body = req.body;
  const student = new Student(body);
  const createdStudent = await student.save();
  res.json(createdStudent);
}
