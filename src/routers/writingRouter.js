import express from "express";
import routes from "../routes";
import {
  writing,
  editWriting,
  deleteWriting
} from "../controllers/userController";
import { postUpload, getUpload, writingDetail } from "../controllers/writingController";

const writingRouter = express.Router();

writingRouter.get("/", writing);

//upload
writingRouter.get(routes.upload, getUpload);
writingRouter.post(routes.upload, postUpload);

//writing Detail
writingRouter.get(routes.writingDetail(), writingDetail);

writingRouter.get(routes.editWriting, editWriting);
writingRouter.get(routes.deleteWriting, deleteWriting);

export default writingRouter;
