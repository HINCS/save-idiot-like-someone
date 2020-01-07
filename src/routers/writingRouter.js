import express from "express";
import routes from "../routes";
import {
  writing,
  upload,
  editWriting,
  deleteWriting
} from "../controllers/userController";

const writingRouter = express.Router();

writingRouter.get("/", writing);
writingRouter.get(routes.upload, upload);
writingRouter.get(routes.editWriting, editWriting);
writingRouter.get(routes.deleteWriting, deleteWriting);

export default writingRouter;
