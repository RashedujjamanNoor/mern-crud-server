import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGOURL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});

app.use("/api", route);
