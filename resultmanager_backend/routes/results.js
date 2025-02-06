import { Router } from 'express';
import { createResult, getResults } from '../controllers/results.js';

const resultRouter = new Router();

resultRouter.get('/', getResults);
resultRouter.post('/', createResult);

export default resultRouter;
