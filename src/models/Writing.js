import mongoose from "mongoose";
import moment from "moment";
import { format } from "prettier";

const WritingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required"
  },
  content: {
      type: String,
      required: "content is required"
  },
  views: {
      type: Number,
      defalut: 0
  },
  createAt: {
    type: Date,
    default: Date.now()
  },
  tags: {
      type: [String],
      required: "tag is required"
  },
  author: {
    type: String,
    ref: "User"
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  category: {
    type: String,
    required: "type is required"
  }
});



const model = mongoose.model("Writing", WritingSchema);

export default model;
