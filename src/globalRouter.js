import express from "express";
import routes from "./routes";
import intro from "./controllers/introController";

const globalRouter = express.Router();

globalRouter.get(routes.intro, intro);

export default globalRouter;
