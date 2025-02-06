import { Result } from '../model/result.js';

export async function createResult(req, res) {
  const body = req.body;
  const result = new Result(body);
  const createdResult = await result.save();
  res.json(createdResult);
}

export async function getResults(req, res) {
  const results = await Result.find().populate(['exam', 'student', 'marks.subject']).lean();
  const resultsWithSum = results.map((result) => ({
    ...result,
    totalMarks: result.marks.reduce((sum, mark) => sum + mark.mark, 0),
  }));
  res.json(resultsWithSum);
}

// export async function getResults(req, res) {
//   const results = await Result.aggregate([
//     {
//       $addFields: {
//         totalMarks: {
//           $sum: '$marks.mark',
//         },
//       },
//     },
//     {
//       $lookup: {
//         from: 'exams',
//         localField: 'exam',
//         foreignField: '_id',
//         as: 'exam',
//       },
//     },
//     {
//       $unwind: { path: '$exam' },
//     },
//     {
//       $lookup: {
//         from: 'students',
//         localField: 'student',
//         foreignField: '_id',
//         as: 'student',
//       },
//     },
//     {
//       $unwind: { path: '$student' },
//     },
//     {
//       $unwind: { path: '$marks' },
//     },
//     {
//       $lookup: {
//         from: 'subjects',
//         localField: 'marks.subject',
//         foreignField: '_id',
//         as: 'marks.subject',
//       },
//     },
//     {
//       $unwind: { path: '$marks.subject' },
//     },
//     {
//       $group: {
//         _id: '$_id',
//         exam: { $first: '$exam' },
//         student: { $first: '$student' },
//         marks: { $push: '$marks' },
//         totalMarks: { $first: '$totalMarks' },
//       },
//     },
//   ]);

//   res.json(results);
// }
