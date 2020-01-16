import routes from "../routes"
import Writing from "../models/Writing"
import alert from "alert-node";
import moment from "moment";

export const home = async(req, res) => {
    try{
        const writings = await Writing.find({ "category": "mentoringOffer" });
        const mentorWritings = await Writing.find({ "category": "mentor" });
        const menteeWritings = await Writing.find({ "category": "mentee" });
        res.render("home", { pageTitle: "Home", writings, mentorWritings, menteeWritings });
    }catch(error){
        console.log(error);
        res.render("home", { pageTitle: "Home", writings: [] });
    }
}

export const getUpload = (req, res) => 
    res.render("upload",  { pageTitle: "Upload" });

export const postUpload = async(req, res) => {
    const { 
        body: {category, tags, title, content}
    } = req;
    const newWriting = await Writing.create({
        category,
        tags,
        title,
        content,
        author: req.user.name,
        creator: req.user._id
    });
    console.log(newWriting);
    console.log(newWriting.tags);
    if(newWriting.tags.length == 0){
        alert("check tags!");
        res.redirect(`/writings${routes.upload}`)
    }else{
        req.user.writings.push(newWriting.id);
        req.user.save();
        res.redirect(routes.home);
    }
};

export const writingDetail = (req, res) => {
    console.log(req.params);
    res.render("writingDetail", { pageTitle: "writingDetail" });
}
