import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const { DB_URL } = process.env;
const { DB_PORT } = process.env;

mongoose.connect(`mongodb://${DB_URL}:${DB_PORT}/save-idiot`, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");

const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
