import passport from "passport";
import dotenv from "dotenv";
import GithubStrategy from "passport-github";
import GoogleStrategy from "passport-google-oauth20";
import KakaoStrategy from "passport-kakao";
import User from "./models/User";
import { githubLoginCallback, googleLoginCallback, kakaoLoginCallback } from "./controllers/introController";
import routes from "./routes";

dotenv.config();

passport.use(User.createStrategy());

passport.use(
    new GithubStrategy(
        {
            clientID: process.env.Github_ID,
            clientSecret: process.env.Github_SECRET,
            callbackURL: `http://localhost:4000${routes.githubCallback}`
        },
        githubLoginCallback
    )
);

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.Google_ID,
            clientSecret: process.env.Google_SECRET,
            callbackURL: `http://localhost:4000${routes.googleCallback}`
        },
        googleLoginCallback
    )
);

passport.use(
    new KakaoStrategy(
        {
            clientID : process.env.Kakao_ID,
            clientSecret: process.env.Kakao_SECRET, // clientSecret을 사용하지 않는다면 넘기지 말거나 빈 스트링을 넘길 것
            callbackURL : `http://localhost:4000${routes.kakaoCallback}`
        },
        kakaoLoginCallback
    )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
