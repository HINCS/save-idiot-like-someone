import express from "express";
import routes from "./routes";
import globalRouter from "./globalRouter";

var app = express()

app.set("view engine", "pug");
app.use("/static", express.static("static"));

app.use(routes.home, globalRouter);

export default app;