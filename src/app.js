import express from "express";
import path from "path";
import routes from "./routes";
import globalRouter from "./globalRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));

app.use(routes.intro, globalRouter);

export default app;
