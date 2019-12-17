import express from "express";
import routes from "../routes";
import { user, editProfile, mentoringStatus } from "../controllers/introController";

const userRouter = express.Router();

userRouter.get("/", user);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.mentoringStatus, mentoringStatus);

export default userRouter;
