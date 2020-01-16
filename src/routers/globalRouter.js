import express from "express";
import passport from "passport";
import routes from "../routes";
import { intro, login, githubLogin, postGithubLogin, googleLogin, postGoogleLogin, kakaoLogin, postKakaoLogin } from "../controllers/userController";
import { home } from "../controllers/writingController";

const globalRouter = express.Router();

globalRouter.get(routes.intro, intro);
globalRouter.get(routes.home, home);
globalRouter.get(routes.login, login);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(
    routes.githubCallback, 
    passport.authenticate("github", {failureRedirect: "/login"}),
    postGithubLogin
)
globalRouter.get(routes.google, googleLogin);
globalRouter.get(
    routes.googleCallback,
    passport.authenticate("google", {failureRedirect: "/login"}),
    postGoogleLogin
)
globalRouter.get(routes.kakao, kakaoLogin);
globalRouter.get(
    routes.kakaoCallback,
    passport.authenticate("kakao", {failureRedirect: "/login"}),
    postKakaoLogin
)



export default globalRouter;
