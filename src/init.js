import * as dotenv from "dotenv";
import app from "./app";
import "./db";

import "./models/User";

dotenv.config();

const URL = process.env.PRODUCTION ? process.env.URL : "localhost";
const PORT = process.env.PRODUCTION ? process.env.PORT : 4000;

const handleListening = () => {
  console.log(`✅ Listening on: http://${URL}:${PORT}`);
};

app.listen(PORT, handleListening);
