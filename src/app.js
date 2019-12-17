import express from "express";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import writingRouter from "./routers/writingRouter";
import path from "path";
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(localsMiddleware);

app.use(routes.intro, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.writing, writingRouter);


export default app;
