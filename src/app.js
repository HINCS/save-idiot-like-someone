import express from "express";
import path from "path";
import localsMiddleware from "./middlewares";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import passport from "passport";
import session from "express-session";
import userRouter from "./routers/userRouter";
import writingRouter from "./routers/writingRouter";
import path from "path";
import mongoStore from "connect-mongo";
import mongoose from "mongoose";

import "./passport";

const app = express();

const CookieStore = mongoStore(session);

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: true,
        saveUninitialized: false,
        store: new CookieStore({ mongooseConnection: mongoose.connection })
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(localsMiddleware);

app.use(routes.intro, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.writing, writingRouter);

export default app;
