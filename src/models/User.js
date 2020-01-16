import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  id: Number,
  tags1: [String],
  tags2: [String],
  description: String,
  createOn: {
    type: Date,
    default: Date.now
  },
  writings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      refs: "Writing"
    }
  ]
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;
