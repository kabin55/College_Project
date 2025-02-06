import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const resultSchema = mongoose.Schema({
  exam: {
    type: Schema.Types.ObjectId,
    ref: 'Exam',
    required: true,
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  marks: [
    {
      subject: {
        type: Schema.Types.ObjectId,
        ref: 'Subject',
        required: true,
      },
      mark: {
        type: Number,
        required: true,
        default: 0,
      },
    },
  ],
});

const Result = new mongoose.model('Result', resultSchema);

export { Result };
