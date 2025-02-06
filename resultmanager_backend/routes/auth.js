import { Router } from 'express';
import { signUp, login } from '../controllers/auth.js';

const authRouter = new Router();

authRouter.post('/signup', signUp);
authRouter.post('/login', login);
export default authRouter;
