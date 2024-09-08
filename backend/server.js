import app from "./app.js";
import cloudinary from "cloudinary";
import { config } from "dotenv";

config({ path: "./config.env" });

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${Number(process.env.PORT)}`);
});
