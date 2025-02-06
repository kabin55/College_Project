import { Exam } from '../model/exam.js';
export async function getExamList(req, res) {
  const exams = await Exam.find();
  res.json(exams);
}

export async function createExam(req, res) {
  const body = req.body;
  const exam = new Exam(body);
  const createdExam = await exam.save();
  res.json(createdExam);
}
