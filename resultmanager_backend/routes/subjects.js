import { Router } from 'express';
import { getSubjectList, createSubject } from '../controllers/subjects.js';
const subjectRouter = new Router();

subjectRouter.get('/', getSubjectList);
subjectRouter.post('/', createSubject);
export default subjectRouter;
