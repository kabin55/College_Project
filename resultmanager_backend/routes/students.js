import { Router } from 'express';
import { getStudentList, createStudent } from '../controllers/students.js';
const studentRouter = new Router();

studentRouter.get('/', getStudentList);
studentRouter.post('/', createStudent);
export default studentRouter;
