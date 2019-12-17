import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const DB_URL = process.env.PRODUCTION
  ? process.env.DB_URL
  : "mongodb://localhost:27017/save-idiot";

mongoose.connect(`${DB_URL}`, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");

const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
