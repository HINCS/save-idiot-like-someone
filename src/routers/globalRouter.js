import express from "express";
import routes from "../routes";
import { intro, home, login } from "../controllers/introController";

const globalRouter = express.Router();

globalRouter.get(routes.intro, intro);
globalRouter.get(routes.home, home);
globalRouter.get(routes.login, login);

export default globalRouter;
