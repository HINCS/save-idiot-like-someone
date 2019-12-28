import express from "express";
import routes from "../routes";
import { intro, home } from "../controllers/introController";

const globalRouter = express.Router();

globalRouter.get(routes.intro, intro);
globalRouter.get(routes.home, home);

export default globalRouter;
