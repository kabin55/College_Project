import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  rollNo: {
    type: Number,
    required: true,
  },
  address: String,
  semester: {
    type: String,
    enum: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'],
    required: true,
  },
});

const Student = new mongoose.model('Student', studentSchema);
export { Student };
