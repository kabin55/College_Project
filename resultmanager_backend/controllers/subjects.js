import { Subject } from '../model/subject.js';
export async function getSubjectList(req, res) {
  const subjects = await Subject.find({});
  res.json(subjects);
}

export async function createSubject(req, res) {
  const body = req.body;
  const subject = new Subject(body);
  const createdSubject = await subject.save();
  res.json(createdSubject);
}
