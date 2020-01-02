import passport from "passport";
import routes from "../routes";
import User from "../models/User";


export const intro = (req, res) => res.render("intro");
export const home = (req, res) => res.render("home");
export const login = (req, res) => res.render("login");

export const githubLogin = passport.authenticate("github");

export const githubLoginCallback = async(_, __, profile, cb) => {
    const { _json: { id, avatar_url, name, email } } = profile;
    try{
        const user = await User.findOne({ email });
        if(user){
            user.githubId = id;
            user.save();
            return cb(null, user);
        }
        const newUser = await User.create({
            email,
            name,
            githubId: id,
            avatarUrl: avatar_url
        });
        return cb(null, newUser);
    }catch(error){
        return cb(error);
    }
}

export const postGithubLogin = (req, res) => {
    res.redirect(routes.home);
}

export const googleLogin = passport.authenticate("google", { scope: ['profile', 'email'] });

export const googleLoginCallback = async (_, __, profile, cb) => {
    const { _json: { sub, picture, name, email } } = profile;
    try{
        const user = await User.findOne({ email });
        if(user){
            user.googleId = sub;
            user.save();
            return cb(null, user);
        }
        const newUser = await User.create({
            email,
            name,
            googleId: sub,
            avatarUrl: picture
        });
        return cb(null, newUser);
    }catch(error){
        return cb(error);
    }
}

export const postGoogleLogin = (req, res) => {
    res.redirect(routes.home);
}

export const kakaoLogin = passport.authenticate("kakao");

export const kakaoLoginCallback = (_, __, profile, cb) => {
    console.log(accesstoken, refreshtoken, profile, cb);    
}

export const postKakaoLogin = (req, res) => {
    res.redirect(routes.home);
}

export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.intro);
};

export const search = (req, res) => res.render("search");
export const user = (req, res) => res.render("user");
export const mentoringStatus = (req, res) => res.render("mentoringStatus");
export const editProfile = (req, res) => res.render("editProfile");
export const writing = (req, res) => res.render("writing");
export const upload = (req, res) => res.render("upload");
export const writingDetail = (req, res) => res.render("writingDetail");
export const editWriting = (req, res) => res.render("editWriting");
export const deleteWriting = (req, res) => res.render("deleteWriting");
