import mongoose from 'mongoose';

const examSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  examDate: {
    type: Date,
    required: true,
  },
});

const Exam = new mongoose.model('Exam', examSchema);
export { Exam };
