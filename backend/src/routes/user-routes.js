import { Router } from "express";
import { fetchAccounts, userSignIn, userSignUp } from "../controller.js/user-controller.js";

const userRouter = Router();

userRouter.post('/signup', userSignUp)
userRouter.get('/signin', userSignIn)
userRouter.get('/fetchAccounts', fetchAccounts)

export default userRouter;