import express from "express";
import routes from "../routes";
import {
  user,
  editProfile,
  mentoringStatus,
  getAddtionalProfile,
  postAddtionalProfile
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", user);

userRouter.get(routes.addtionalProfile, getAddtionalProfile);
userRouter.post(routes.addtionalProfile, postAddtionalProfile);

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.mentoringStatus, mentoringStatus);

export default userRouter;
