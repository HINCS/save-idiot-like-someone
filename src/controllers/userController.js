import passport from "passport";
import routes from "../routes";
import User from "../models/User";
import alert from 'alert-node';


export const intro = (req, res) => res.render("intro");
export const home = (req, res) => res.render("home");
export const login = (req, res) => res.render("login");

export const githubLogin = passport.authenticate("github");

export const githubLoginCallback = async(_, __, profile, cb) => {
    const { _json: { id, avatar_url, name, email } } = profile;
    try{
        const user = await User.findOne({ email });
        if(user){
            alert("이미 가입된 이메일입니다");
            return cb(null, user);
        }
        const newUser = await User.create({
            email,
            name,
            id: id,
            avatarUrl: avatar_url
        });
        return cb(null, newUser);
    }catch(error){
        return cb(error);
    }
}

export const postGithubLogin = (req, res) => {
    res.redirect(`/users${routes.addtionalProfile}`);
}

export const googleLogin = passport.authenticate("google", { scope: ['profile', 'email'] });

export const googleLoginCallback = async (_, __, profile, cb) => {
    const { _json: { sub, picture, name, email } } = profile;
    try{
        const user = await User.findOne({ email });
        if(user){
            alert("이미 가입된 이메일입니다");
            return cb(null, user);
        }
        const newUser = await User.create({
            email,
            name,
            id: sub,
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

export const kakaoLoginCallback = async(_, __, profile, cb) => {
    const { _json: { id, profile_image, nickname, kakao_account: { email } } } = profile;
    try{
        const user = await User.findOne({ email });
        if(user){
            alert("이미 가입된 이메일입니다");
            return cb(null, user);
        }
        const newUser = await User.create({
            email,
            nickname,
            id: id,
            avatarUrl: profile_image
        });
        return cb(null, newUser);
    }catch(error){
        return cb(error);
    }    
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

export const getAddtionalProfile = (req, res) => res.render("addtionalProfile");

export const postAddtionalProfile = async(req, res) => {
    const {
        body: {tags, description}
    } = req;
    const newUser = await User.update({
        tags,
        description
    });
    req.user.save();
    res.redirect(routes.home);
}

export const mentoringStatus = (req, res) => res.render("mentoringStatus");
export const editProfile = (req, res) => res.render("editProfile");
export const writing = (req, res) => res.render("writing");
export const upload = (req, res) => res.render("upload");
export const writingDetail = (req, res) => res.render("writingDetail");
export const editWriting = (req, res) => res.render("editWriting");
export const deleteWriting = (req, res) => res.render("deleteWriting");
