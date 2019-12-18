import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarUrl: String,
    githubId: Number
});

const model = mongoose.Model("User", UserSchema);

export default model;